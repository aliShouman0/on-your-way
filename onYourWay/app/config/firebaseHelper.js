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



