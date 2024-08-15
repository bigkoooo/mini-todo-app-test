import React, { useState } from 'react';

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

  const handleKeyDown = (e) => {
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
        onKeyDown={handleKeyDown} // onKeyPress 대신 onKeyDown 사용
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
