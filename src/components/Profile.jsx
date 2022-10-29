import React from 'react';
import profile from '../Assets/profile (2).JPG';

const Profile = () => {
  return (
  <div className='profile'>
    <img src= { profile } alt="" id='profile__img' />
    <h2 id='twitter'>Die_Feuhrer</h2>
   {/*  <h2 id='slack'>Winchestre</h2> */}
  </div>
  )
}

export default Profile