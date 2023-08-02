import React from "react";
import styles from '../modules/List.module.css'
function List({ removeTodo, items, done }) {

  return (
    <div>
      <div className={styles.todo__list}>
        {items.map((todo) => (
          <div className={styles.todoshka} key={todo.id}>
            <input type="checkbox" onChange={() => done(todo.id)} />
            {todo.text} <button onClick={() => removeTodo(todo.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
