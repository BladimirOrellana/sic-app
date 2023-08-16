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
      const Data = userApi
        .create(data)
        .then((user) => {
          console.log("mongo user ", user);
          localStorage.setItem("user", JSON.stringify(user.data));
          return user.data;
        })
        .catch((errorLocal) => {
          console.log("mongo user ", errorLocal);
          localStorage.removeItem("user");
        });
      return Data;
    })
    .catch((error) => {
      console.log("errror from firebase sign up ", error);

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
        case "auth/network-request-failed":
          return {
            message: "Check your internet connection",
          };

        default:
          return error.message;
      }
    });
  return firebaseData;
};

export const loginUserFirebaseRequest = async (payload) => {
  console.log("payload request full ", payload);
  const firebaseData = await signInWithEmailAndPassword(
    auth,
    payload.email,
    payload.password
  )
    .then((User) => {
      console.log("user firebase request ", User);

      const data = userApi
        .findByUid({ uid: User.user.uid })
        .then((user) => {
          console.log("mongo user loged in", user);
          localStorage.setItem("user", JSON.stringify(user.data));
          return user.data;
        })
        .catch((errorLocal) => {
          console.log("mongo user ", errorLocal);
          localStorage.removeItem("user");
        });
      return data;
    })
    .catch((error) => {
      console.log(
        "errror from firebase login  auth/wrong-password",
        error.code
      );
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
        case "auth/wrong-password":
          return {
            message: "Wrong Password",
          };

        case "auth/user-not-found":
          return {
            message: "Email does not exist",
          };
        case "auth/network-request-failed":
          return {
            message: "Check your internet connection",
          };

        default:
          return error.message;
      }
    });
  return firebaseData;
};

export const requestLogoutUser = async (data) => {
  return await signOut(data)
    .then((result) => {
      localStorage.removeItem("user", null);
      return result;
    })
    .catch((err) => err);
};
export const requestSetUser = async () => {
  const user = localStorage.getItem("user");
  return user;
};
