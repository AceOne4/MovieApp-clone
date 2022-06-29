import { useContext, useState, useEffect } from "react";
import { firebaseCtx } from "../context/firebase";

//this hook to check if the user is login or out
const useAuthListenner = function () {
  //we will store teh user login or out in local storage so we start with check if there any at local storage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { firebase } = useContext(firebaseCtx);

  //to run it immediatly in first time
  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });
    //cleaner Funcation
    return () => listener();
  }, [firebase]);
  return { user };
};

export default useAuthListenner;
