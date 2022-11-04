import React from 'react';
import Profile from '../components/Profile';
import Links from '../components/Links';
import Footer from '../constants/Footer';
import NavBar from '../constants/NavBar';
/* import Contact from './Contact'; */

const MainPage = () => {
  return (
  <div>
    <NavBar />
    <Profile />
    <Links /> 
  {/*   <Contact /> */}
    <Footer />
  </div>
  )
}

export default MainPage