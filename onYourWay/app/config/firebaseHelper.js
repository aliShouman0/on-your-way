import {
  getDatabase,
  get,
  ref,
  onValue,
  push,
  update,
} from "firebase/database";


const findUser = async (phone) => {
  const database = getDatabase();
  const mySnapshot = await get(ref(database, `users/${phone}`));
  return mySnapshot.val();
};


const chatLogin = async (phone,setMyData, setUsers,setIsLoading) => {
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

