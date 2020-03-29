import React from 'react'

import {ThemeContextConsumer} from './context'

function Warning1 (props){
    
    return (
        <div>
            <ThemeContextConsumer>
              {context => (
                  
                <h1 
                  
                  style={{color:`${context.warning1}`}}
  
                  /*className={`${context.theme}`}*/
                  
                  >
            
           This was the first colour shown
               
              </h1>

            

              )}
          </ThemeContextConsumer>
          
    
         
               
        </div>
      );

}

export default Warning1