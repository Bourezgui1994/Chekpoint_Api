import React from 'react'
import UserCard from './UserCard/UserCard'
import {Spinner } from 'react-bootstrap'

const UserList = ({users,load}) => {
    return (
        <div className="cardUser">
         {load ? <Spinner animation="border"/> : 
          (users.map((el,Key) => <UserCard  key={el.id} user={el}/>))}
          
        </div>
    )
}

export default UserList
