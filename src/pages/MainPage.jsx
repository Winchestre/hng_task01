import React from 'react';
import Profile from '../components/Profile';
import Links from '../components/Links';
import Footer from '../constants/Footer';
import NavBar from '../constants/NavBar';

const MainPage = () => {
  return (
  <div>
    <NavBar />
    <Profile />
    <Links /> 
    <Footer />
  </div>
  )
}

export default MainPage