import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../Config/firebase.config";

export const AuthContext = createContext(null); // AuthContext is just a name, can use UserContext or any other name too ...doesnt matter

// auth imported from firebase
const auth = getAuth(app);

const AuthProver = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    createUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProver;
