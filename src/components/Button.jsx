import styled from "styled-components";

const Button = ({ label }) => {
  const Button = styled.button`
    width: 200px;
    height: 50px;
    outline: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    background-color: #191970;
    border-radius: 10px;
    margin-left: 1rem;
  `;

  return <Button>{label}</Button>;
};

export default Button;
