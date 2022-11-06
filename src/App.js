import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter basename='/'>
      <Routes >
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<MainPage />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App