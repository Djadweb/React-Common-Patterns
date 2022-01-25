import { React } from 'react';
import HOC from './HOC';

const Component2 = ({ data }) => {
    const getTodos = data.map((todo) => {
        return (
            <li key={todo.id}>{todo.title}</li>
        )
    })    
  return (
      <div className='Component2'>
          <ul>
            {getTodos}
          </ul>          
      </div>
  );
}

const Todos = HOC(Component2, "todos");

export default Todos;
