import axios from 'axios'
import React, { useEffect, useState } from 'react'
import List, { IUser } from '../types/List'
import MyInput from './MyInput'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'

const UsersPage = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [value, setValue] = useState<string>('')
    const [search, setSearch] = useState<IUser[]>([])
    const navigate = useNavigate()
  
   useEffect(() => {
    fetchUsers()
   }, [])
  
   async function fetchUsers() {
    try {
      const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setSearch(responce.data)
      setUsers(responce.data)
    } catch(e) {
      alert(e)
    }
   }
  
   const changeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
   const newValue = e.target.value;
   console.log(search)
   setValue(newValue)
   const searchArr = users.filter(user => 
    user.address.city.toLowerCase().includes(newValue.toLowerCase())
  );
    setSearch(searchArr)
  }
  
  
    return (
      <div className="App">
        <MyInput changeHadler = {changeHadler} value = {value}/>
       <List item={search}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} 
        onClick={() => navigate(`/users/${user.id}`)}/>}/>
      </div>
    );
  }

export default UsersPage