import React from 'react'
import '../Styles/nav.css'


                    
                 
const hamburgerClick=()=>{
    const hamburger=document.querySelector(".hamburger");
    hamburger.classList.toggle("active");
    const navmenu=document.querySelector("#nav-menu");
    navmenu.classList.toggle("active");
}

const handleScroll=()=>{
    const navmenu=document.querySelector("#nav-menu");
    navmenu.style.left="-100px";
}
function Nav(){
    return(
        <nav onScroll={handleScroll}>
            
            <div className="logo">
                <img src="/Images/brand_logo.png" alt="Not Found"/>
            </div>
            <ul id="nav-menu">
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>

            <div class="hamburger" onClick={hamburgerClick}>
                <span class="bar"></span>
                
                <span class="bar"></span>
                
                <span class="bar"></span>
            </div>
            
        </nav>
    );

}

export default Nav;