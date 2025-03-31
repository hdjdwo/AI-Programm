import axios from 'axios'
import React, { useEffect, useState } from 'react'
import List, { IUser } from '../types/List'
import MyInput from './MyInput'
import UserItem from './UserItem'
import { useNavigate } from 'react-router-dom'
import { useGetUsersQuery } from '../store/api'

const UsersPage = () => {
    const [value, setValue] = useState<string>('')
    const navigate = useNavigate()

    const {data: users = []  ,error, isLoading} = useGetUsersQuery();
  
  
  
  const filterUsers = users.filter(user =>
    user.address.city.toLowerCase().includes(value.toLowerCase())
  )

   const changeHadler = (e: React.ChangeEvent<HTMLInputElement>) => {
   const newValue = e.target.value;
   setValue(newValue)
  }
  
  
    return (
      <div className="App">
        <div>
        </div>
        <MyInput changeHadler = {changeHadler} value = {value}/>
       <List item={filterUsers}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} 
        onClick={() => navigate(`/users/${user.id}`)}/>}/>
      </div>
    );
  }

export default UsersPage