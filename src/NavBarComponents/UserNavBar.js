import React from 'react';
import userNavBarData from "./userNavBarData";
import UserNavBarElement from "./UserNavBarElement";

function UserNavBar() {

    const navButtons = userNavBarData.map(item=> <UserNavBarElement key = {item.id} item ={item}/>)

    return (
        <nav className="user-navbar">
            <div className="row">
                <div className='col guild-name'>
                    <h5>User Name Here</h5>
                </div>
                <div className="nav nav-pills col">
                    {navButtons}
                </div>
            </div>   
        </nav>
    );
}

export default UserNavBar;