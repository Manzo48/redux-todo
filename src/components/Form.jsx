import React, { useState } from 'react';
import style from "../modules/Form.module.css"
function Form({ value, setNewValue, onSubmit, onClick, doneAll}) {
  const handleChange = (e) => {
    setNewValue(e.target.value);
  };

  return (
    <div>
      <form action="" className="form" onSubmit={onSubmit}>
        <div className="input">
        <input
          className={style.input}
          type="text"
          placeholder='type...'
          value={value}
          onChange={handleChange}
        />
        <button onClick={doneAll}>Completed</button>
        </div>

        <div className="buttons">
          <button onClick={(event) => onClick(event, value)}>ADD</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
