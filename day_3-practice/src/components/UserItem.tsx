import React, { FC } from 'react'
import { IUser } from '../types/List'


interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
  return (
    <div
    onClick={() => onClick(user)}
     style={{borderBottom: '2px solid yellowgreen', marginTop: '15px', fontSize: '17px'}}>
        <div>{user.id}. {user.name}</div>
        <div style={{marginTop: '5px'}}>username:{user.username}</div>
        <div style={{marginTop: '5px'}}>city: {user.address.city} street: {user.address.street}</div>
        <div style={{marginTop: '5px'}}>{user.email}</div>
        <div style={{marginTop: '5px'}}>{user.phone}</div>
    </div>
  )
}

export default UserItem