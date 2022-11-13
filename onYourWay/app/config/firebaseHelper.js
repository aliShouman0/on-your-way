import {
  getDatabase,
  get,
  ref,
  onValue,
  push,
  update,
  set,
} from "firebase/database";
import { auth, database } from "./firebase";
import { off } from "firebase/database";

const findUser = async (phone) => {
  const database = getDatabase();
  const mySnapshot = await get(ref(database, `users/${phone}`));
  return mySnapshot.val();
};

const chatLogin = async (phone, setMyData, setUsers, setIsLoading) => {
  const user = await findUser(phone);
  const database = getDatabase();
  //create a new user if not registered
  if (user) {
    setMyData(user);
    // set friends list change listener
    const myUserRef = ref(database, `users/${phone}`);
    onValue(myUserRef, (snapshot) => {
      const data = snapshot.val();
      setUsers(data.friends);
      setMyData((prevData) => ({
        ...prevData,
        friends: data.friends,
      }));
    });
  }
  setIsLoading(false);
};

const onAddFriend = async (phone, myData, setIsLoading) => {
  setIsLoading(true);
  try {
    //find user and add it to my friends and also add me to his friends
    const database = getDatabase();
    const user = await findUser(phone);
    if (user) {
      if (user.phone === myData.phone) {
        // don't let user add himself
        setIsLoading(false);
        return;
      }
      if (
        myData.friends &&
        myData.friends.findIndex((f) => f.phone === user.phone) >= 0
      ) {
        // don't let user add a user twice
        setIsLoading(false);
        return;
      }
      // create a chatroom and store the chatroom id
      const newChatroomRef = push(ref(database, "chatrooms"), {
        firstUser: myData.phone,
        secondUser: user.phone,
        messages: [],
      });
      const newChatroomId = newChatroomRef.key;
      const userFriends = user.friends || [];
      //join myself to this user friend list
      update(ref(database, `users/${user.phone}`), {
        friends: [
          ...userFriends,
          {
            phone: myData.phone,
            name: myData.name,
            date: new Date().toLocaleDateString(),
            // avatar: myData.avatar,
            chatroomId: newChatroomId,
          },
        ],
      });
      const myFriends = myData.friends || [];
      //add this user to my friend list
      update(ref(database, `users/${myData.phone}`), {
        friends: [
          ...myFriends,
          {
            phone: user.phone,
            name: user.name,
            date: new Date().toLocaleDateString(),
            chatroomId: newChatroomId,
          },
        ],
      });
    }
  } catch (error) {
    console.error(error);
  }
  setIsLoading(false);
};

const onSend = async (msg, OldSelectedUser, myData, setMessages, setMyMessage) => { 

  //as first time chatting will not have the user in friends list  so we get an updated data from firebase  
  const selectedUser = await findUser(OldSelectedUser.phone); 
  const friends = selectedUser["friends"]; 
  const currentFriends = friends.findIndex((f) => f.phone === myData.phone); 
  const chatroomId = friends[currentFriends]["chatroomId"]; 
  const database = getDatabase();
  //fetch fresh messages from server
  const currentChatroom = await fetchMessages(chatroomId);
  const lastMessages = (currentChatroom && currentChatroom.messages) || [];
  update(ref(database, `chatrooms/${chatroomId}`), {
    messages: [
      ...lastMessages,
      {
        text: msg,
        sender: myData.phone,
        createdAt: new Date(),
      },
    ],
  });

  setMessages((prevMessages) => [
    ...prevMessages,
    {
      text: msg,
      sender: myData.phone,
      createdAt: new Date(),
    },
  ]);
  setMyMessage("");
};

const fetchMessages = async (chatroomId) => {
  const database = getDatabase();
  const snapshot = await get(
    ref(database, `chatrooms/${chatroomId}`)
  );
  return snapshot.val();
};

const loadMessages = (chatroomId, setMessages) => {
  const myChatroom = fetchMessages(chatroomId);
  setMessages(myChatroom.messages);
  // set chatroom change listener
  const database = getDatabase();
  const chatroomRef = ref(database, `chatrooms/${chatroomId}`);
  onValue(chatroomRef, (snapshot) => {
    const data = snapshot.val();
    setMessages(data ? data.messages : "");
  });
  return () => {
    //remove chatroom listener
    off(chatroomRef);
  };
};

const onSignup = async (phone, email, name, setError) => {
  try {
    const database = getDatabase();
    //first check if the user registered before
    const user = await findUser(phone);
    //create a new user if not registered
    if (!user) {
      const newUserObj = {
        email: email,
        name,
        phone,
      };
      set(ref(database, `users/${phone}`), newUserObj);
    } else {
      setError("Phone Number Already Exist");
      return;
    }
  } catch (error) {
    console.error(error);
    setError("Phone Number Already Exist");
  }
};

export default {
  onAddFriend,
  findUser,
  chatLogin,
  onSend,
  fetchMessages,
  loadMessages,
  onSignup,
};
