import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDZnxqeR3SX4uRg17UQglLxBjB91dvtPT0",
  authDomain: "task-management-app-63bda.firebaseapp.com",
  databaseURL: "https://task-management-app-63bda-default-rtdb.firebaseio.com",
  projectId: "task-management-app-63bda",
  storageBucket: "task-management-app-63bda.appspot.com",
  messagingSenderId: "166531520900",
  appId: "1:166531520900:web:4b65cf008d9a46f3e0e5d1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);