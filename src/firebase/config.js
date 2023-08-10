import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyJPKp65Z6Nhq5NEUson9Hqmlje1NvTIY",
  authDomain: "miniblog-7d698.firebaseapp.com",
  projectId: "miniblog-7d698",
  storageBucket: "miniblog-7d698.appspot.com",
  messagingSenderId: "871214704135",
  appId: "1:871214704135:web:cd2a4ca30387842eabaca2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
