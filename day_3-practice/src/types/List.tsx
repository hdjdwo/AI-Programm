import React from 'react'

interface userAddress {
    street: string;
    city: string
}


export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: userAddress;
    phone: string;
}


interface ListProps<T> {
    item: T[];
    renderItem: (item: T) => React.ReactNode;
}

export default  function List<T> (props: ListProps<T>)  {
  return (
    <div>
        {props.item.map(props.renderItem)}
    </div>
  )
}
