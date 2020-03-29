import React from 'react'

import {ThemeContextConsumer} from './context'

function Warning (props){
    
    return (
      
        <div>
            <ThemeContextConsumer>
              {context => (
                 
                  <h1 
                  
                 /* style={{color:`${context.message}`}} */
  
                  /*className={`${context.theme}`}*/
                  
                  >
            
           App Messages: {context.message}
               
              </h1>

                
              )}
          </ThemeContextConsumer>
          
    
         
               
        </div>
       


      );

}

export default Warning