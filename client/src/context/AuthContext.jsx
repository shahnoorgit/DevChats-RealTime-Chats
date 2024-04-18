import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
const authUser = storedUser ? JSON.parse(storedUser) : null;
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(authUser);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
