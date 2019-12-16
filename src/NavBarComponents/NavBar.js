import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut, signIn} from '../Store/Actions/authActions'
import SignedInLinks from './SignedOutLinks'
import SignedOutLinks from './SignedInLinks'

class NavBar extends React.Component {
    render(){

        const inOut = this.props.state.firebase.auth.uid ? <SignedInLinks></SignedInLinks> : <SignedOutLinks></SignedOutLinks>

        return (
            <nav className="navbar">
                <div className="row">
                    <div className='col guild-name'>
                        <Link to="/Home">
                            <h1>UpStream</h1>
                        </Link>
                    </div>
                    {inOut}
                </div>
            </nav>
        );
    }
    
}

const mapStateToProps=(state)=>{
    return{
        state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signIn:(creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)