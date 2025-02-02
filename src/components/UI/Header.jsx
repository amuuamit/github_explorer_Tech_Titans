import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';


const Header = () => {
const [show , setShow] = useState(false);
const handleButtonToggle = () => {
    return setShow(!show)
}

  return (
    <header>
        <div className='container'>

            <div className='grid navbar-grid'>
                <div className='logo'>

                    <NavLink to="/">
                    <img src="../images/image.png" alt="Git logo" width="40px" />
                        
                    </NavLink>
                </div>

                <h1 className='heading'> Git-Hub Repo Explorer </h1>

                <div className='ham-menu'>
                    <button onClick={handleButtonToggle}><GiHamburgerMenu/></button>
                </div>
            </div>
        </div>
        
    </header>
  );
}

export default Header;