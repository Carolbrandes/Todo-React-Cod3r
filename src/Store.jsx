import React, { useState } from "react";

export const AppContext = React.createContext();

const Store = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState([]);
  const [search, setSearch] = useState("");
  const [filterByStatus, setFilterByStatus] = useState("todos");

  return (
    <AppContext.Provider
      value={{
        todos,
        setTodos,
        status,
        setStatus,
        search,
        setSearch,
        filterByStatus,
        setFilterByStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
