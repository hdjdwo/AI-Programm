import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import UserList from './components/UserList'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'

export const App = () => {
  
  const [users, setUsers] = useState<IUser[]>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect( () => {
    fetchUsers()
    fetchTodos()
  }, [])

 async function fetchUsers() {
  try {
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
  } catch(e) {
    alert(e)
  }
}

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch(e) {
      alert(e)
    }

  }

  return (
    <div>
      <Card onClick={(num: number) => console.log('qq', num)} variant={CardVariant.primary} width='300px' height='300px'>
        <button>Knock</button>
        <div>asdasd</div>
        </Card>
        <List item = {users} 
        renderItem={(user: IUser) => <UserItem user={user} key={user.id}/>}
        />
        <List item = {todos} 
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
      </div>
  )

}