import { signOut } from "firebase/auth";
export const requestLogoutUser = async (data) => {
  return await signOut(data)
    .then((result) => {
      localStorage.removeItem("user");
      return result;
    })
    .catch((err) => err);
};
