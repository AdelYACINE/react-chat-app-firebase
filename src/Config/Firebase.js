import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRrMj_H8Ex9_G8lUTYcfdkgxsS2emJzaA",
  authDomain: "chat-app-25c6a.firebaseapp.com",
  projectId: "chat-app-25c6a",
  storageBucket: "chat-app-25c6a.appspot.com",
  messagingSenderId: "113293466615",
  appId: "1:113293466615:web:89eaffd24cb657b9336cf2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
