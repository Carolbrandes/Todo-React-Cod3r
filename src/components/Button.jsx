import styled from "styled-components";

const Button = ({ label, fn }) => {
  const Button = styled.button`
    width: fit-content;
    height: 50px;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    background-color: #191970;
    border-radius: 10px;
    margin: 1rem 0;
    cursor: pointer;
  `;

  return <Button onClick={() => fn()}>{label}</Button>;
};

export default Button;
