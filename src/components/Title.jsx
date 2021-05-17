import styled from "styled-components";

const Title = ({ text }) => {
  const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #191970;
    text-transform: uppercase;
  `;
  return <Title>{text}</Title>;
};

export default Title;
