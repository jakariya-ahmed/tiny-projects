import React, { useContext, useState, createContext, useReducer } from "react";
import { UsersContext } from "../context/UsersContext";
import { initialState, reducer } from "../reducer/usersReducer";

// 1. Create the context


// 2. Custom hook to consume context
// export const useUsers = useContext(UsersContext);

// 3. Provider component
const UsersProvider = ({ children }) => {
  // Users from reducer
  const[state, dispatch] = useReducer(reducer, initialState)

  //Users for context api without reducer
  // const [users, setUsers] = useState([
  //       { id: 384848, name: "Jakariya Aman", desi: "Frontend Developer", desc: "Lorem ipsum dolor sit amet." },
  //       { id: 384849, name: "John Doe", desi: "Backend Developer", desc: "Lorem ipsum dolor sit amet." },
  //       { id: 384850, name: "Jane Smith", desi: "Fullstack Developer", desc: "Lorem ipsum dolor sit amet." }
  //     ]);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

