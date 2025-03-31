import React, { FC, useEffect, useState } from 'react'
import { IUser } from '../types/List'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useGetUserByIdQuery } from '../store/api';



const UserItemPage: FC = () => {

const { id } = useParams<{ id: string }>();
const navigate = useNavigate()

const { data: user, error, isLoading } = useGetUserByIdQuery(id ?? '', {
    skip: !id, 
  });

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