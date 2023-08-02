import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  toggleCheckbox,
  deleteAllDone,
} from "./store/customerReducer";
import Form from "./components/Form";
import List from "./components/List";
import "./css-styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.customer.todos);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") return;
    const todo = { text: value, id: Date.now(), isDone: false };
    dispatch(addTodo(todo));
    setValue("");
  };

  return (
    <>
      <div className="container">
        <h1>REDUX TODO</h1>
        <Form
          value={value}
          setNewValue={setValue}
          onSubmit={handleSubmit}
          onClick={handleSubmit}
          doneAll={() => dispatch(deleteAllDone())}
        />
        <List
          removeTodo={(id) => dispatch(removeTodo(id))}
          items={todos}
          done={(id) => dispatch(toggleCheckbox(id))}
        />
      </div>
    </>
  );
}

export default App;
