import React, { FC, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client';

const EventsExemple: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // console.log('Drag')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
        console.log('DRAG')
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

  return (
    <div>
        <input
         value={value}
         onChange={changeHandler}
          type="text" placeholder='Управляемый'/>
          <input
          ref={inputRef}
          type="text" placeholder='Неуправляемый'/>
        <button onClick={clickHandler}>asdasd</button>
        <div
         onDrag={dragHandler} 
         draggable style={{height: '300px', width: '300px', background: 'red'}}></div>
        <div
         onDrop={dropHandler} 
         onDragLeave={leaveHandler}
         onDragOver={dragWithPreventHandler}
         style={{height: '300px', width: '300px', background: isDrag ? 'green' : 'red', marginTop: '15px'}}></div>
    </div>
  )
}

export default EventsExemple