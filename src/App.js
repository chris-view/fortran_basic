import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio'
import Contacts from './components/Contacts'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline/>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/resume" component={Resume}/>
      <Route exact path ="/projects" component={Portfolio}/>
      <Route exact path ="/contacts" component={Contacts}/>
      ths

      
    </>
  );
}

export default App;
