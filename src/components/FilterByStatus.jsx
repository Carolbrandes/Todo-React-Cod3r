import React, { useContext, useEffect } from "react";
import { AppContext } from "../Store";
import styled from "styled-components";
import { getAllStatus } from "../services";

const FilterByStatus = ({ label, id }) => {
  const Label = styled.label`
    color: #191970;
    font-size: 1.2rem;
  `;
  const Select = styled.select`
    width: 200px;
    height: 45px;
    border: 1px solid #191970;
    border-radius: 10px;
    padding-left: 1rem;
    color: #191970;
    font-size: 1rem;
    outiline: none;
    margin-left: 0.5rem;
  `;

  const { status, setStatus, setFilterByStatus, filterByStatus } =
    useContext(AppContext);

  async function handleStatus() {
    const responseStatus = await getAllStatus();
    setStatus(responseStatus.data);
  }

  useEffect(() => {
    handleStatus();
  }, []);

  return (
    <div>
      <Label id={id}>{label}</Label>
      <Select
        id={id}
        onChange={({ target }) => setFilterByStatus(target.value)}
        value={filterByStatus}
      >
        {status &&
          status.map(({ id, name }) => (
            <option key={id} value={name}>
              {name}
            </option>
          ))}
      </Select>
    </div>
  );
};

export default FilterByStatus;
