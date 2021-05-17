import styled from "styled-components";
import Label from "./Label";

const Input = ({ placeholder, label, id }) => {
  const Input = styled.input`
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
  `;
  return (
    <div>
      <Label id={id} label={label} />
      <Input id={id} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
