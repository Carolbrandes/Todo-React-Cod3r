import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Store";
import { getTodos } from "../services";

const Todos = () => {
  const TodosWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 3rem 0;

    .backlog {
      background-color: #90ee90;
    }

    .andamento {
      background-color: #d8bfd8;
    }

    .feito {
      background-color: #ff6347;
    }
  `;

  const Todo = styled.div`
    width: 25%;
    border-radius: 10px;
    margin-bottom: 1rem;
    padding: 1rem 1.5rem;
    color: #191970;

    h4 {
      margin: 0 0 0.2rem 0;
      text-transform: uppercase;
    }

    p {
      margin: 0;
    }
  `;

  const { todos, setTodos, search, filterByStatus } = useContext(AppContext);
  const handleTodos = async () => {
    const responseTodos = await getTodos();

    if (search) {
      console.log("tem busca");
      setTodos(
        responseTodos.data.filter(
          (t) => t.title.includes(search) || t.ps.includes(search)
        )
      );
    }
    if (filterByStatus !== "todos") {
      console.log("filtro por status");
      setTodos(responseTodos.data.filter((t) => t.status === filterByStatus));
    }
    if (!search && filterByStatus === "todos") {
      console.log("nao tem busca e nao tem filtro");
      setTodos(responseTodos.data);
    }
  };

  useEffect(() => {
    handleTodos();
  }, [filterByStatus, search]);

  return (
    <TodosWrapper>
      {todos &&
        todos.map(({ id, title, ps, status }) => (
          <Todo key={id} className={status}>
            <h4>{title}</h4>
            {ps && <p>OBS: {ps}</p>}
            <p>Status: {status}</p>
          </Todo>
        ))}
    </TodosWrapper>
  );
};

export default Todos;
