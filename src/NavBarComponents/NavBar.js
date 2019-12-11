import React from 'react';
import navBarData from "./navBarData";
import NavBarElement from "./NavBarElement";
import {Link} from 'react-router-dom'

function NavBar() {

    const navButtons = navBarData.map(item=> <NavBarElement key = {item.id} item ={item}/>)

    return (
        <nav className="navbar">
            <div className="row">
                <div className='col guild-name'>
                    <Link to="/Home">
                        <h1>UpStream</h1>
                    </Link>
                </div>
                <div className="nav nav-pills col">
                    {navButtons}
                </div>
            </div>   
        </nav>
    );
}

export default NavBar;