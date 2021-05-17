import styled from "styled-components";

const Label = ({ label, id }) => {
  const Label = styled.label`
    color: #191970;
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  `;

  return <Label htmlFor={id}>{label}</Label>;
};

export default Label;
