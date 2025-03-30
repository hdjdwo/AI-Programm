import React, { FC, useState } from 'react'
import { IUser } from '../types/List'


interface IntupProps {
    changeHadler: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

const MyInput: FC<IntupProps> = ({changeHadler, value}) => {
    
    const clickHandler = () => {
        console.log(value)
    }

   
  return (
    <div>
        <input
         style={{fontSize: "17px", border: '2px solid black'}} 
         type="text" 
         onChange={changeHadler}
         placeholder='Название города'/>
    </div>
  )
}

export default MyInput