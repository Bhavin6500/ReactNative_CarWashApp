
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuEfkNyzirCqL8exM7xFTazR4fKRKVl2c",
  authDomain: "carwashapp-d4af3.firebaseapp.com",
  projectId: "carwashapp-d4af3",
  storageBucket: "carwashapp-d4af3.appspot.com",
  messagingSenderId: "792401262461",
  appId: "1:792401262461:web:fcc0b5d973ed1ec33e3e14"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};