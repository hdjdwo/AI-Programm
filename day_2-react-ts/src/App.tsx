import React, { useEffect, useState } from 'react'
import Card, { CardVariant } from './components/Card'
import { ITodo, IUser } from './types/types'
import axios from 'axios'
import List from './components/List'
import UserItem from './components/UserItem'
import TodoItem from './components/TodoItem'
// import EventsExemple from './components/EventsExemple'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserPage from './components/UserPage'
import TodosPage from './components/TodosPage'
import { NavLink } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'
import TodoItemPage from './components/TodoItemPage'

export const App = () => {
  
  return (
  
        <BrowserRouter>
        <div>
          <div>
            <NavLink to='/users'>Пользователи</NavLink>
            <NavLink to='/todos'>Список дел</NavLink>
          </div>
          <Routes>
            <Route path='/users' element={<UserPage/>} />
            <Route path='/todos' element={<TodosPage/>}/>
            <Route path='/users/:id' element={<UserItemPage/>}/>
            <Route path='/todos/:id' element={<TodoItemPage/>}/>
          </Routes>
        </div>
        </BrowserRouter>
     
  )

}