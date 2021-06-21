import React from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'


const Footer = () => {
    return (
        <div className=' row footer'>
           <div className="col-md-4">   
            <h5> Welcome To A List User </h5></div>
            <div className="col-md-4"> 
            <a href="#"> Home</a>
            <a href="#"> About</a></div>
            <div className="col-md-4"> 
            <Form className="d-flex form">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="warning">Search</Button>
            </Form> </div>
        </div>
    )
}

export default Footer
