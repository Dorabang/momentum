import React, { useState } from "react";
import {
  List,
  TodoForm,
  TodoInput,
  SubmitBtn,
  ListObj,
  Btn,
} from "style/style";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [...currentArray, todo]);
    setTodo("");
  };
  const deleteBtn = (index) => {
    setTodos((curTodos) =>
      curTodos.filter((_, todoIndex) => index !== todoIndex)
    );
  };

  return (
    <>
      <TodoForm onSubmit={onSubmit}>
        <TodoInput
          onChange={onChange}
          value={todo}
          type="text"
          placeholder="Write your to do..."
        ></TodoInput>
        <SubmitBtn>Add</SubmitBtn>
      </TodoForm>
      <List>
        {todos.map((item, index) => (
          <ListObj key={index}>
            <Btn onClick={() => deleteBtn(index)}>✖</Btn>
            {item}
          </ListObj>
        ))}
      </List>
    </>
  );
};

export default TodoList;
