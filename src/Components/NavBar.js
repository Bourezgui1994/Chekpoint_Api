import React from 'react'
import {Navbar,Nav,Container,Form,FormControl,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const linkStyle ={
        color:'black',
        textDecoration:'none',
        fontSize: '20px',
    }
    return (
        <div>
        <Navbar bg="warning" variant="light" className="py-4 px-5">
            <Container>
                <Navbar.Brand href="#home" > USER </Navbar.Brand>
                <Nav className=" navLink">
                <Link to="/" style={linkStyle} > HOME</Link>
                <Link to="/about" style={linkStyle} > ABOUT</Link>
                </Nav>
            </Container>

            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>

      </Navbar>
        </div>
    )
}

export default NavBar
