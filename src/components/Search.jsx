import React, { useContext } from "react";
import { AppContext } from "../Store";
import Input from "./Input";

const Search = () => {
  const { search, setSearch } = useContext(AppContext);
  return <Input value={search} fn={setSearch} placeholder="Buscar por" />;
};

export default Search;
