import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Form, FormGroup, Label, Input }
from 'reactstrap';
import './Login.css';
import { Redirect } from 'react-router-dom'



export default class Login extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    
onChange(e){
    this.setState({
       [e.target.name]: e.target.value
    })
}
submitForm(e){
    e.preventDefault()
    const { username, password } = this.state
//login
    if(username === "A@123" && password ==="B"){
        localStorage.setItem("token","fgfghfytfygcgvchg")
        this.setState({
            loggedIn: true
        })
    }
}
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin"/>
        }
        return (
            <div>
                  <div id="style">
                 <center> <h1 className="font-weight-bold"> Vendor Management </h1></center>
                   <Form className="login-form" onSubmit= {this.submitForm}>
                   <h2 className="text-center">Login</h2>
                   <FormGroup>
                   <Label>Email</Label>
                    <Input type="email" placeholder="Email" name="username" value={this.state.username} onChange={this.onChange} />
                    </FormGroup>
                     <FormGroup>
                     <Label>Password</Label>
                    <Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                    </FormGroup>
                    <Button className="btn-lg-btn-dark btn-block" type="submit">Login</Button>
                    </Form>  
                  </div>
                   <div className="text-center">
                       <a href="#">Sign Up</a>
                       <span className="p-2">|</span>
                       <a href="#">Forgot Password</a>
                   </div>
             </div>
          
        )
    }
}
