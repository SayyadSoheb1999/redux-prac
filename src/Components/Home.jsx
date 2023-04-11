import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Todolist } from "./Todolist/Todolist";
import { Addtodo } from "./Todolist/Addtodo";
import "./Todolist/Todo.css";
import { useAuth } from "../context/ContextHolder";

export const Home = () => {
  const authData = useAuth();
  const [todoitem, setTodoitem] = useState([]);
  const handleAdd = (newTodo) => {
    setTodoitem([...todoitem, newTodo]);
  };
  const handleDelete = (curritem) => {
    const filtered = todoitem.filter((item) => item !== curritem);
    setTodoitem([...filtered]);
  };
  return (
    <div>
      <Row>
        <Col>
          <Addtodo handleAdd={handleAdd} />
        </Col>
        <Col>
          <snap>{authData?.state.count || "non"}</snap>
          <button
            onClick={() => {
              // authData?.dispatch({ type: "INCREMENT" });
              authData?.IncBy10Funtion(20);
            }}
          >
            Increment
          </button>
          <button onClick={() => authData?.dispatch({ type: "decrement" })}>
            Decrement
          </button>
          <button
            onClick={() =>
              authData?.dispatch({ type: "set-user", payload: "soheb" })
            }
          >
            set user
          </button>
          {todoitem.length > 0 ? (
            <Todolist todoitem={todoitem} handleDelete={handleDelete} />
          ) : (
            <span> its empty here</span>
          )}
        </Col>
      </Row>
    </div>
  );
};
