import { setAuthUserAction } from "../../actions/authUserActions";
import userApi from "./../../../api/user";
import { auth } from "./../../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const requestSignUpUserFirebase = async (data) => {
  const firebaseData = await createUserWithEmailAndPassword(
    auth,
    data.data.email,
    data.data.password
  )
    .then((User) => {
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

export const requestGetAllUsers = async () => {
  return await userApi
    .getAll()
    .then((User) => User)
    .catch((error) => error);
};
export const requestRegisterUserWithEmail = async (data) => {
  console.log("create user ", data);
  return await userApi
    .create(data)
    .then((User) => User)
    .catch((error) => error);
};
export const requestLoginUserWithEmailAndPassword = async (data) => {
  return await userApi
    .findByUid(data)
    .then((User) => {
      console.log("login user call request success ", User);
      return User;
    })
    .catch((error) => {
      console.log("login user call request error ", error);
      return error;
    });
};

export const requestLoginUser = async (data) => {
  console.log("data from request ", data);

  const firebaseData = await signInWithEmailAndPassword(
    auth,
    data.email,
    data.password
  )
    .then((User) => {
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
        case "auth/user-not-found":
          return {
            message: "Email Not Found, Please Double Check",
          };
        case "auth/wrong-password":
          return {
            message: "Your Password Is Wrong",
          };
        case "auth/network-request-failed":
          return {
            message: "Please Check Your Internet Connection",
          };
        default:
          return error;
      }
    });
  return firebaseData;
};
