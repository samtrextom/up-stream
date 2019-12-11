import React from 'react'
import {Link} from 'react-router-dom'

class UserNavBarElement extends React.Component{

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
                <Link to={this.props.item.linkUrl} className={'nav-tab'}>
                    <div className={'nav-item user-nav-item'}>
                        {this.props.item.navButtonName}
                    </div>
                </Link>
            )
        }
    }

    render(){
            return(
                this.isADropDown()
            )
    }
}

export default UserNavBarElement