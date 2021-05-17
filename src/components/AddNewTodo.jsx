import styled from "styled-components";
import Button from "./Button";
import FilterByStatus from "./FilterByStatus";
import Input from "./Input";
import Textarea from "./Textarea";

const AddNewTodo = () => {
  const AddNewTodo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
  `;

  return (
    <AddNewTodo>
      <Input placeholder="Tarefa" />
      <Textarea placeholder="Observação" />
      <FilterByStatus label="Status" id="statusTodo" />
      <Button label="Adicionar" />
    </AddNewTodo>
  );
};

export default AddNewTodo;
