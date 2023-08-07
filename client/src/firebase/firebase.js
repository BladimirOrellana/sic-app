import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import key from "./firebasekey";

const firebaseConfig = {
  apiKey: key.appKey,
  authDomain: key.authDomain,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId,
  appId: key.appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
