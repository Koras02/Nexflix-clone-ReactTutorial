import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// database 설정
const config = {
  apiKey: "AIzaSyDOrEPJQQ3oHXrPCH9GV6rxlQfuj1-z6dQ",
  authDomain: "netflix-clone---hard.firebaseapp.com",
  projectId: "netflix-clone---hard",
  storageBucket: "netflix-clone---hard.appspot.com",
  messagingSenderId: "58162662086",
  appId: "1:58162662086:web:1e706518acc516ff38e5c7",
  measurementId: "G-CEV3M5T8DH",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
