import React from 'react';

const Todo = props => {
  return (
    <li>
      {/* <p>{props.text}</p> */}
      <p>{props.todo.text}</p>
      {/* <button onClick={()=> props.delete(props.text)}>DELETE</button> */}
      <button onClick={()=>props.delete(props.todo.text)}>DELETE</button>
    </li>
  );
};

export default Todo;