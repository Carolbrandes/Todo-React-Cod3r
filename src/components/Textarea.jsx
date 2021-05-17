import styled from "styled-components";

const Textarea = ({ placeholder }) => {
  const TextArea = styled.textarea`
    border: 1px solid #191970;
    outline: none;
    height: 150px;
    resize: none;
    color: #191970;
    font-size: 1rem;
    display: block;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
  `;

  return <TextArea placeholder={placeholder}></TextArea>;
};

export default Textarea;
