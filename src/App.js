import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router basename= {process.env.PUBLIC_URL} >
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App