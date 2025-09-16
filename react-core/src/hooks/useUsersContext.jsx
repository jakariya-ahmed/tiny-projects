import React, { useContext, useState, createContext } from "react";
import { UsersContext } from "../context/UsersContext";

// 1. Create the context


// 2. Custom hook to consume context
// export const useUsers = useContext(UsersContext);

// 3. Provider component
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 384848, name: "Jakariya Aman", desi: "Frontend Developer", desc: "Lorem ipsum dolor sit amet." },
    { id: 384849, name: "John Doe", desi: "Backend Developer", desc: "Lorem ipsum dolor sit amet." },
    { id: 384850, name: "Jane Smith", desi: "Fullstack Developer", desc: "Lorem ipsum dolor sit amet." }
  ]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

