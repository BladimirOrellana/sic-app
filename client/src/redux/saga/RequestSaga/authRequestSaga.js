import { signOut } from "firebase/auth";
export const requestLogoutUser = async (data) => {
  console.log("log out user request ", data);
  return await signOut(data)
    .then((result) => {
      console.log("log out success", data);
      localStorage.removeItem("user");
      return result;
    })
    .catch((err) => err);
};
