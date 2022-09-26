import {collection, getDocs} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db} from "./firebase.js";
import {auth} from "./firebase.js";



const querySnapshot = await getDocs(collection(db, "cases"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
