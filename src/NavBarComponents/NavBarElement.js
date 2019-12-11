import React from 'react'
import {NavLink} from 'react-router-dom'

class NavBarElement extends React.Component{

    constructor (props) {
        super(props);

        this.state = {

        };

    }

    isADropDown = () =>{
        if(this.props.item.dropDown)
        {
            return (
                <div className = "nav-item dropdown" >

                </div>
            )
        }
        else
        {
            return (
                <NavLink to={this.props.item.linkUrl} className={'nav-tab'}>
                    <div className={'nav-item'}>
                        {this.props.item.navButtonName}
                    </div>
                </NavLink>
            )
        }
    }

    render(){
            return(
                this.isADropDown()
            )
    }
}

export default NavBarElement