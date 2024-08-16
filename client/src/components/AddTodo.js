import React, { useState } from 'react';
import '../styles/AddTodo.scss'

export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItem] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItem({
      title: '',
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new Todo"
        value={todoItem.title}
        onChange={(e) => setTodoItem({ title: e.target.value })}
        onKeyPress={handleKeyUp} // onKeyPress 대신 onKeyDown 사용
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
