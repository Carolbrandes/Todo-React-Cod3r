import { useContext } from "react";
import Store from "./Store";
import styled from "styled-components";
import Title from "./components/Title";
import Search from "./components/Search";
import FilterByStatus from "./components/FilterByStatus";
import Todos from "./components/Todos";
import AddNewTodo from "./components/AddNewTodo";
import ButtonAddTodo from "./components/ButtonAddTodo";

const App = () => {
  const App = styled.div`
    width: 95%;
    margin: 0 auto;
    padding-top: 1rem;
    font-family: "Nunito", sans-serif;
  `;

  const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .w-60 {
      width: 60%;
    }
  `;

  return (
    <Store>
      <App>
        <Row>
          <Title text="TodoApp" />

          <Row className="w-60">
            <Search placeholder="Buscar por" />
            <FilterByStatus label="Filtro por Status" id="status" />
            <ButtonAddTodo />
          </Row>
        </Row>

        <AddNewTodo />

        <Todos />
      </App>
    </Store>
  );
};

export default App;
