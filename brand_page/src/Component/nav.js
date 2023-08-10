import React from 'react'

function Nav(){
    return(
        <React.Fragment>
            <div className="logo">
                <img src="/Images/brand_logo.png" alt=""/>
      
            </div>
            <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </React.Fragment>
    );

}

export default Nav;