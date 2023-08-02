import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "./components/Form";
import List from "./components/List";
import "./css-styles/App.css";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const addTodo = () => {
    if (value.trim() === "") {
      return;
    }
    const todo = {
      text: value,
      id: Date.now(),
      isDone: false,
    };
    dispatch({ type: "ADD_TODO", payload: todo });
    setValue("");
  };
  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  const removeAll = () => {
    dispatch({ type: "DELETE_ALL", payload: todos.isDone });
  };
  const checkbox = (id) => {
    dispatch({ type: "CHECKBOX", payload: id });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  return (
    <>
      <div className="container">
        <h1>REDUX TODO</h1>
        <Form
          value={value}
          setNewValue={setValue}
          onSubmit={handleSubmit}
          onClick={addTodo}
          doneAll={removeAll}
        />
        <List removeTodo={removeTodo} items={todos} done={checkbox} />
      </div>
    </>
  );
}

export default App;
