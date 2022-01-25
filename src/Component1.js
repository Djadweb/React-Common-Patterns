import { React } from 'react';
import HOC from './HOC';

const Component1 = ({ data }) => {
    const getUsers = data.map((user) => {
        return <li key={user.id}>{user.name}</li>
    })    
  return (
      <div className='Component1'>
          <ul>
            {getUsers}
          </ul>          
      </div>
  );
}

const Users = HOC(Component1, "users");

export default Users;
