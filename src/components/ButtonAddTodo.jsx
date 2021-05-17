import { useContext } from "react";
import { AppContext } from "../Store";
import Button from "./Button";

const ButtonAddTodo = () => {
  const { setModal } = useContext(AppContext);
  const handleModal = () => setModal(true);
  return <Button fn={handleModal} label="Nova tarefa" />;
};

export default ButtonAddTodo;
