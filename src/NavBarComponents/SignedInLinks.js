import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../Store/Actions/authActions'

class SignedOutLinks extends React.Component{

    render(){

        return(
            <nav className="navbar">
                <div className="row">
                    
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
                        {}
                        <NavLink to={'SignIn'} className={'nav-tab'}>
                            <div className={'nav-item'}>
                                Sign Out
                            </div>
                        </NavLink>
                    </div>
                </div>   
            </nav>
        )
    }
}

export default SignedOutLinks