import React from 'react';
import './User.css';
import {Spinner } from 'react-bootstrap'


const User = ({user ,loading}) => {
    return (
        <div>

        {loading ? <Spinner animation="border"/> : (

            <div className="UserCard">
            <div className="outer1">
            <div className="content animated fadeInLeft">
               
                <h2> {user.name}  <br/> {user.username} </h2>
                <p> ADDRESS : {user.address.city} ,{user.address.street} ,{user.address.zipcode}</p>
                <p> PHONE : {user.phone}</p>
                <p> COMPANY :{user.company.name} , {user.company.bs}</p>
                
                <a href="#">{user.email}</a>
                <a className="cart-btn" href="#"><i className="cart-icon ion-bag" />{user.website}</a>
                
            </div>
            <img src="https://www.ecoledujournalisme.com/wp-content/uploads/2019/10/avatar-femme.jpg" width="250px" className="animated fadeInRight image" />
            </div>
            </div>

        )}
            
        </div>
    )
}

export default User;
