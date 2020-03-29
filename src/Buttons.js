import React from 'react';

import './App.css';

import {ThemeContextConsumer} from "./context"

function Buttons (props) {

    
    

    return (
       
        <ThemeContextConsumer>
           
            {context => (
                  <>
                  <button 
                  style={{backgroundColor:'whitesmoke', color:`${context.theme}`}}
                  
                 /* className={`${context.theme}`}*/
                 
                  onClick = {context.saveColor}
                  disabled = {context.sbuttonDisabled}
                  >Save Favorite Colour</button> 
  
                <button 
                  style={{backgroundColor:'whitesmoke', color:`${context.theme}`}}
                  
                 /* className={`${context.theme}`}*/
                 
                  onClick = {context.reset}
                  
                  >Reset Favourites</button> 

               </>
            )}

        </ThemeContextConsumer>
               
    )    
}

export default Buttons