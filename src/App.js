import React from 'react';

import './App.css';
import {ThemeContextProvider} from './context'

import Header from './Header'
import Button from './Button'
import Buttons from './Buttons'
import Card from './Card'
import List from './List'
import Warning from './Warning'


function App(props) {
  return (
    <div className="App">
      
  <ThemeContextProvider>
    <Header />
    <Warning />
    <Button />
    <Card />
    <Buttons />
    <List />
    
   
    
  </ThemeContextProvider>,
    
 
      
    </div>
  );
}

export default App;
