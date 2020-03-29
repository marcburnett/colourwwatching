import React from 'react'

import {ThemeContextConsumer} from './context'

function List (props){
    
return (

    <ThemeContextConsumer>
    {context => (
        <>
        <h1 >My five favourite colours are:</h1>
        
        <h1 class='white' style={{color:`${context.list[0]}`, display:'inline', border: `solid ${context.list[0]} 2px`, margin: '0 3px' }}>       
        
        {`${context.list[0]}`}
     
    </h1>

    <h1 class='white' style={{color:`${context.list[1]}`, display:'inline' , border: `solid ${context.list[1]} 2px`, margin: '0 3px'}}>       
        
        {`${context.list[1]}`}
     
    </h1>

    <h1 class='white' style={{color:`${context.list[2]}`, display:'inline' , border: `solid ${context.list[2]} 2px`, margin: '0 3px'}}>       
        
        {`${context.list[2]}`}
     
    </h1>

    <h1 class='white' style={{color:`${context.list[3]}`, display:'inline' , border: `solid ${context.list[3]} 2px`, margin: '0 3px'}}>       
        
        {`${context.list[3]}`}
     
    </h1>

    <h1 class='white' style={{color:`${context.list[4]}`, display:'inline' , border: `solid ${context.list[4]} 2px`, margin: '0 3px'}}>       
        
        {`${context.list[4]}`}
     
    </h1>
        </>
    )}
</ThemeContextConsumer>
)

}

export default List