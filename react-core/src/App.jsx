import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/core/Users';
import CreateUser from './components/core/CreateUser';


function App() {

  const [users, setUsers] = useState([
    {id: 1, name: 'Jakariya Aman', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
    {id: 2, name: 'Jakariya ahmed', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'},
    {id: 3, name: 'Rumon Ahmed', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
  ]);

  // Remove user 
  const deleteUser = (id) => {
    const filteredUsers = users.filter(user => user.id !== id);
    setUsers(filteredUsers); 
  }

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  }

  return (
    <div>
      <CreateUser addUser={addUser} />
      <Users users={users} deleteUser={deleteUser} />
    </div>


  )
}

export default App
