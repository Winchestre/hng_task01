import React from 'react';
import link__img from '../Assets/Icon (1).svg';
import icon2 from '../Assets/Icon2.svg';


const NavBar = () => {
  return (
    <>
        <div className="share__link">
            <a href='#'><img src={ icon2 } className='nav__icons' alt='slack' title='share link'/></a>
        </div>
        <div className="nav__link__mobile">
        <a href='#'><img src={ link__img } className='nav__icons' alt='github' title='share link' /></a>
        </div>
       
    </>
  )
}

export default NavBar