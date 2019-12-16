import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signIn} from '../Store/Actions/authActions'
import Form from 'react-bootstrap/Form'
import TextField from '@material-ui/core/TextField'
import {withStyles} from '@material-ui/core/styles'

const style={
    padding: '0px',
    margin: '0px'
}

const styles = theme => ({
    textField: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',            
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        color:'white'
    },
    input: {color: 'white'},
    errorInput:{color: 'red'},
    underline: {
        borderBottom: '1px solid white',
        '&:after': {borderBottom: '2px solid white'},
        '&:hover':{borderBottom: '2px solid white'},
        '&:before':{borderBottom: '2px solid white'}
    },
    errorUnderline:{
        borderBottom: '1px solid red',
        '&:after': {borderBottom: '2px solid red'},
        '&:hover':{borderBottom: '2px solid red'},
        '&:before':{borderBottom: '2px solid red'}
    },
});

class SignedInLinks extends React.Component{

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
        this.props.signIn(this.state)
    }

    render(){

        const {authError} = this.props
        const {classes} = this.props

        return(         
            <div className="nav nav-pills col">
                <NavLink to={'Games'} className={'nav-tab'}>
                    <div className={'nav-item'}>
                        Games
                    </div>
                </NavLink>
                <NavLink to={'Register'} className={'nav-tab'}>
                    <div className={'nav-item'}>
                        Register
                    </div>
                </NavLink>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Log In
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Form.Group style={style} className="form-group-email" controlId="formBasicEmail">
                                <div>
                                    <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                        id="email" label="Email" onChange={this.handleChange}/>
                                </div>
                            </Form.Group>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Form.Group style={style} className="form-group-password" controlId="formBasicPassword">
                                <div>
                                    <TextField InputLabelProps={{className: classes.input}} InputProps={{className: classes.input}} inputProps={{className: classes.underline}} 
                                        id="password" label="Password" onChange={this.handleChange}/>
                                </div>
                            </Form.Group>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <div className="red-text center">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <button className="login-btn glow-on-hover-btn" type="submit">
                                Log In
                            </button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                <NavLink to={'SignIn'} className={'nav-tab'}>
                    <div className={'nav-item'}>
                        Sign In
                    </div>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SignedInLinks))