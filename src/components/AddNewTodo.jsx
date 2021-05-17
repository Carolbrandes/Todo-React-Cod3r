import { AppContext } from "../Store";
import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import FilterByStatus from "./FilterByStatus";
import Input from "./Input";
import Textarea from "./Textarea";

const AddNewTodo = () => {
  const Background = styled.div`
    background-color: rgba(105, 105, 105, 0.5);
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const AddNewTodo = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 2rem;
    position: fixed;
    z-index: 3;
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;

    .close-button {
      position: absolute;
      top: 5px;
      right: 15px;
    }

    .button-wrapper {
      margin: 1.5rem auto;
    }
  `;

  const { modal, setModal } = useContext(AppContext);
  const [titulo, setTitulo] = useState("teste");
  const [obs, setObs] = useState("obs teste");

  const closeModal = () => setModal(false);

  return modal ? (
    <Background>
      <AddNewTodo>
        <div className="close-button">
          <Button fn={closeModal} label="X" />
        </div>
        <Input value={titulo} fn={setTitulo} id="tarefa" label="Tarefa" />
        <Textarea value={obs} fn={setObs} id="obs" label="Observação" />
        <FilterByStatus label="Status" id="statusTodo" />

        <div className="button-wrapper">
          <Button label="Adicionar" />
        </div>
      </AddNewTodo>
    </Background>
  ) : (
    false
  );
};

export default AddNewTodo;
