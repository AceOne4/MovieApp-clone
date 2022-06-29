import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
//import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyDEuoXkoc4CNLaV4TQpEWDucjZJ7V5VYxY",
  authDomain: "netflix-aa4ca.firebaseapp.com",
  projectId: "netflix-aa4ca",
  storageBucket: "netflix-aa4ca.appspot.com",
  messagingSenderId: "207261700513",
  appId: "1:207261700513:web:844c330493b3847e84bbe0",
};
const firebase = Firebase.initializeApp(config);

//seedDatabase(firebase);

export { firebase };
