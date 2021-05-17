import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Store";

const Search = ({ placeholder }) => {
  const InputWrapper = styled.div`
    input {
      width: 300px;
      height: 45px;
      border: 1px solid #191970;
      border-radius: 10px;
      padding-left: 1rem;
      color: #191970;
      font-size: 1rem;
      outiline: none;

      &:focus {
        border: 1px solid #D2691E0 !important;
        color: #d2691e !importan;
      }

      &::placeholder {
        color: #191970;
      }
    }
  `;
  const { search, setSearch } = useContext(AppContext);
  return (
    <InputWrapper>
      <input
        value={search}
        onInput={({ target }) => setSearch(target.value)}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Search;
