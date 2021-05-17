import styled from "styled-components";
import Label from "./Label";

const Textarea = ({ placeholder, label, id }) => {
  const TextAreaWrapper = styled.div`
    margin: 1rem 0;
  `;
  const TextArea = styled.textarea`
    border: 1px solid #191970;
    border-radius: 10px;
    outline: none;
    width: 290px;
    height: 100px;
    resize: none;
    color: #191970;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    font-family: "Nunito", sans-serif;

    &::placeholder {
      color: #191970;
    }
  `;

  return (
    <TextAreaWrapper>
      <Label id={id} label={label} />
      <TextArea id={id} placeholder={placeholder}></TextArea>
    </TextAreaWrapper>
  );
};

export default Textarea;
