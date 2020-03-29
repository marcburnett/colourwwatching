import React from 'react';

import './App.css';

import {ThemeContextConsumer} from "./context"

function Card(props) {


    

    return (
        <ThemeContextConsumer>
            {context => (
                <div className = 'testimonial'>
                   
                    <section 
                    
                    style={{borderColor:`${context.theme}`, color:`${context.theme}`}}
                    
                    >
                        I have used React Hooks, useState and useContext
                    </section>
                
                    <section 
                    
                    style={{borderColor:`${context.theme}`, color:`${context.theme}`}}
                    
                    >
                        Colour watching is the new bird watching
                    </section>
                    <section 
                    
                    style={{borderColor:`${context.theme}`, color:`${context.theme}`}}
                    
                    >
                        I get to save up to five favourite colours too
                    </section>
                </div>
            )}
        </ThemeContextConsumer>
                
                

    )    
}

export default Card