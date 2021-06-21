import React from 'react'
import { Link } from 'react-router-dom';
import './UserCard.css';


const UserCard = ({user}) => {
    return (
       
        <div className="wrapper">
            <div className="outer">
                <div className="content animated fadeInLeft">
                    <h6> {user.name}</h6>
                    <p className="cardText">{user.email}</p>
                    <div className="button">
                          <Link to={`/users/ ${user.id}`}> USER DETAILS </Link> 
                    </div>
                </div>
                <img src="https://www.ecoledujournalisme.com/wp-content/uploads/2019/10/avatar-femme.jpg" width="150px" className="animated fadeInRight" />
            </div>
        </div>
        
    )
}

export default UserCard






