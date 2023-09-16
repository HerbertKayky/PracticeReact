import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0VX3PhA1jNL6BAAOTvKzyhUXmuGg2zRE",
  authDomain: "miniblog-30031.firebaseapp.com",
  projectId: "miniblog-30031",
  storageBucket: "miniblog-30031.appspot.com",
  messagingSenderId: "440713738805",
  appId: "1:440713738805:web:5c25ca7795cfa93b394f7c",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
