import React from 'react'
import {Form }from "react-bootstrap"
function Formulaire() {
  return (
    <div style={{width:"50%", marginTop:"20px", margin:"0 auto"}}>  <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form> </div>
  )
}
export default Formulaire