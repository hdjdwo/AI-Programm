import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/List'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


interface userIteamPageProps {
    id: string;
    [key: string]: string | undefined;
}

const UserItemPage: FC = () => {

const [user, setUser] = useState<IUser | null>(null)
const params = useParams<userIteamPageProps>()
const navigate = useNavigate()

useEffect(() => {
fetchUser()
}, [])

async function fetchUser() {
    try {
        const responce = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
        setUser(responce.data)
    } catch(e) {
        alert(e)
    }
}

  return (
    <div>
        <button onClick={() => navigate(-1)}>Назад</button>
        <h1>страница пользователя {user?.name}</h1>
        <div style={{marginTop: '5px'}}>username:{user?.username}</div>
        <div style={{marginTop: '5px'}}>city: {user?.address.city} street: {user?.address.street}</div>
        <div style={{marginTop: '5px'}}>{user?.email}</div>
        <div style={{marginTop: '5px'}}>{user?.phone}</div>
    </div>
  )
}

export default UserItemPage