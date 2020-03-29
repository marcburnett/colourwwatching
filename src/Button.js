import React from 'react';

import './App.css';

import {ThemeContextConsumer} from "./context"

function Button(props) {

    
    

    return (
       
        <ThemeContextConsumer>
           
            {context => (
              <>
                <button 
                onClick = {context.changeColor}
                style={{backgroundColor:`${context.theme}`}}
                
               /* className={`${context.theme}`}*/
               
                
                disabled = {context.fbuttonDisabled}
                >Next Colour</button> 

                <button 
                onClick = {context.previousColor}
                style={{backgroundColor:`${context.theme}`}}
                
               /* className={`${context.theme}`}*/
               
                
                disabled = {context.bbuttonDisabled}
                >Previous Colour</button> 
                </>
              
            )}

        </ThemeContextConsumer>
               
    )    
}

export default Button