import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router basename='/hng_task01'>
      <Switch>
        <Route path='/' element={<MainPage />} />
        <Route path='/contact' element={<Contact />} />
      </Switch>
    </Router>
  )
}

export default App