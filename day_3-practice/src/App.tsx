import React, { use, useEffect, useState } from 'react';
import List, { IUser } from './types/List';
import axios from 'axios';
import UserItem from './components/UserItem';

function App() {
  const [users, setUsers] = useState<IUser[]>([])

 useEffect(() => {
  fetchUsers()
 }, [])

 async function fetchUsers() {
  try {
    const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(responce.data)
  } catch(e) {
    alert(e)
  }
 }

  return (
    <div className="App">
     <List item={users}
      renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}/>
    </div>
  );
}

export default App;
