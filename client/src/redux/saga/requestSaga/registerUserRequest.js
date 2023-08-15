import userApi from "./../../../api/user";
import { auth } from "./../../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const registerUserFirebaseRequest = async (payload) => {
  console.log("payload request full ", payload);
  const firebaseData = await createUserWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )
    .then((User) => {
      console.log("user firebase request ", User);
      const data = {
        email: payload.email,
        uid: User.user.uid,
        username: payload.username,
      };
      userApi
        .create(data)
        .then((user) => {
          console.log("mongo user ", user);
          localStorage.setItem("user", JSON.stringify(user.data));
        })
        .catch((errorLocal) => {
          console.log("mongo user ", errorLocal);
          localStorage.removeItem("user");
        });
      return User;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/email-already-in-use":
          return { message: `Email address  already in use.` };

        case "auth/invalid-email":
          return { message: `Email address  is invalid.` };

        case "auth/operation-not-allowed":
          return { message: `Error during sign up.` };

        case "auth/weak-password":
          return {
            message:
              "Password is not strong enough. Add additional characters including special characters and numbers.",
          };

        default:
          return error.message;
      }
    });
  return firebaseData;
};
