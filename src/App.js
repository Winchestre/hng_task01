import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes >
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </HashRouter>
   
  )
}

export default App