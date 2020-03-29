import React from 'react'

import {ThemeContextConsumer} from './context'

function Warning2 (props){
    
    return (
        <div>
            <ThemeContextConsumer>
              {context => (
                  
                <h1 
                  
                  style={{color:`${context.warning1}`}}
  
                  /*className={`${context.theme}`}*/
                  
                  >
            
           You have selected your five favourites
               
              </h1>

            

              )}
          </ThemeContextConsumer>
          
    
         
               
        </div>
      );

}

export default Warning2