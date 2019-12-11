import React from 'react'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'

const style={
    padding: '0px',
    margin: '0px'
}

class LoginForm extends React.Component{
    state={
        email:"",
        password:""
    }
    
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <div className="login-form">
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <h2>Sign In or Sign Up</h2>
                    </div>
                    <Form.Group style={style} className="form-group-email" controlId="formBasicEmail">
                        <Form.Control className="login-text-input" type="email" placeholder="Enter email" id="email" onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group style={style} className="form-group-password" controlId="formBasicPassword">
                        <Form.Control className="login-text-input" type="password" placeholder="Password" id="password" onChange={this.handleChange}/>
                    </Form.Group>
                    <div className="login-btn-div">
                        <button className="login-btn glow-on-hover-btn" type="submit">
                            Login
                        </button>
                        <Link to="/Register">
                            <button className="register-btn glow-on-hover-btn">
                                Register
                            </button>
                        </Link>
                    </div> 
                </Form>
            </div>
        )
    }
}

export default LoginForm