import { useContext, useState, useEffect } from "react";
import { firebaseCtx } from "../context/firebase";

//this coustom hook to fitch data from teh firebase
//we pass target argument to be able to know which type the user want (films or siries)
const useContent = function (target) {
  const [content, setcontent] = useState([]);
  const { firebase } = useContext(firebaseCtx);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contetObj) => ({
          ...contetObj.data(),
          docId: contetObj.id,
        }));
        setcontent(allContent);
      })
      .catch((err) => console.log(err.message));
  }, [firebase, target]);

  return { [target]: content };
};

export default useContent;
