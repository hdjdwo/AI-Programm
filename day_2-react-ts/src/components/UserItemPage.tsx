import axios from 'axios'
import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/types'
import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


interface UserItemPageParams {
    id: string;
    [key: string]: string | undefined
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const history = useNavigate()

    useEffect( () => {
      fetchUser()
    }, [])
  
   async function fetchUser() {
    try {
      const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
      setUser(response.data)
    } catch(e) {
      alert(e)
    }
  }
  return (
    <div>
        <button onClick={() => history(-1)}>Back</button>
        <h1>Страница пользователя {user?.name}</h1>
        <div>
            {user?.email}
        </div>
        <div>
            {user?.address.street}
        </div>
    </div>
  )
}

export default UserItemPage