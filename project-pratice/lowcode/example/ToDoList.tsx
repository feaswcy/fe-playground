import React, { useEffect, useState } from 'react';
import Style from './index.module.less';

export default () => {
  const [todoItems, setTodoItems] = useState(['吃饭', '睡觉', '写代码', '打游戏']);

  const handleClick = (todoItem, index) => {
    alert(`${todoItem}已完成`);
    const newList = todoItems.splice(index);
    setTodoItems(newList);
  };

  useEffect(() => {
    fetch('xxx')
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 0) {
          setTodoItems(data.list);
        }
      });
  }, []);

  return (
    <ul className={Style.list}>
      {todoItems.map((item, index) => (
        <li
          onClick={() => {
            handleClick(item, index);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};
