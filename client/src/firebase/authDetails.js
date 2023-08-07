// import React, { useEffect, useState } from "react";
// import { auth } from "./../firebase/firebase";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { Button } from "@mui/material";
// import { logOUTUserAction } from "../redux/actions/authUserActions";
// export default function AuthDetails() {
//   const dispatch = useDispatch();
//   const [authUser, setAuthUser] = useState(null);
//   useEffect(() => {
//     const listen = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setAuthUser(user);
//       } else {
//         console.log("Your out");
//         setAuthUser(null);
//       }
//       return listen();
//     });
//   }, []);
//   return (
//     <div>
//       <h1>Auth details</h1>
//       <p>{authUser ? <p>Your in</p> : <p>Your out</p>}</p>
//       {authUser ? (
//         <Button onClick={() => dispatch(logOUTUserAction(auth))}>
//           sign out
//         </Button>
//       ) : (
//         <Link to={"/sign-up"}>Create Account</Link>
//       )}
//     </div>
//   );
// }
