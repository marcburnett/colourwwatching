import React from 'react';



import './App.css';
import {ThemeContextConsumer} from './context'

function Header (props) {
    return (
      <div className="App">
          <ThemeContextConsumer>
            {context => (
                <header 
                
                style={{backgroundColor:`${context.theme}`}}

                /*className={`${context.theme}`}*/
                
                >
          
         {context.theme}
         
             
            </header>
            )}
        </ThemeContextConsumer>
        
  
       
             
      </div>
    );
  }
  
  export default Header;