import React from 'react'
import{ Container,Nav,Form, Navbar  } from "react-bootstrap"
function Navbarr() {
  return (
    <div>
         <Navbar  bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img width="100px" height="50px" src="https://www.clipartmax.com/png/middle/294-2941508_youtube-icon-youtube-logo-png.png"></img>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr