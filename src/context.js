import React, {useState} from "react"
const {Provider, Consumer} = React.createContext()

const randomColor = require('randomcolor')


/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

function ThemeContextProvider (props) {

const[theme, setTheme] = useState('#39bf85')
const[store, setStore] = useState([])
const[list, setList] = useState(['', '', '', '', ''])
const[message, setMessage] = useState('                   ')

const[counter, setCounter] = useState(0)
const[prevColor, setPrevColor] = useState(0)
const[fbuttonDisabled, setFButtonDisabled] = useState(false)
const[bbuttonDisabled, setBButtonDisabled] = useState(false)
const[sbuttonDisabled, setSButtonDisabled] = useState(false)

    const changeColor = () => {

        setBButtonDisabled(false)

               
        let newList = store

         if(theme === store[0] && theme !== '#39bf85'){
            
           setTheme(randomColor())

            newList.unshift(theme)

        }
       
        else if (store.includes(theme)){
            setTheme(store[store.indexOf(theme) - 1])
        }   

        else if(store[1] === store[0]  && store.length !== 0){

            console.log('repeat')
            
            newList.shift(store[0])

            setStore(newList)
            setTheme(randomColor())
            newList.unshift(theme)
  
        }

                
        else{
                    
            setTheme(randomColor())
            newList.unshift(theme)
            setStore(newList)

            
        }

        console.log(store)
        console.log(store.indexOf(theme) - 1)

        removeWarning()
        endSelection()
        setPrevColor(0);
        
    }

    const previousColor = () => {
        
       if(store.length === 0){
            
            stateWarning2()


        }


       else if (prevColor === 0){

            let newList = [...store]
        newList.unshift(theme)
                   
           setStore(newList)
           setPrevColor(prevColor + 1);

        }
               
                 
       
        
          
        
        else if(store.includes(theme) && theme === '#39bf85'){
            
            stateWarning2()
   
         }
        
         else if (store.includes(theme)){
           
            setTheme(store[store.indexOf(theme) + 1])

        }   

                
        else{
            setTheme(store[0]) 
        }

        // if (this.state.store[this.state.tally] !== '#39bf85')
        // {
            
            console.log(store)
            console.log(store.indexOf(theme) + 1)

        //}
    }

    const stateWarning = () => {
        setMessage('Colour is already saved to favourites.')
        
    }

    const stateWarning2 = () => {
        setMessage('This is the first colour in the list.')
        setBButtonDisabled(true)
        
    }

    const stateWarning1 = () => {
        setMessage('Reset. You have selected your five favourites.')
        
    }

    /*  
    1. Limit list to 5
    2. Show colour on selection
    */

    const removeWarning = () => {
        setMessage('')
        
    }

    const saveColor = () => {
        let newList = list

        if (newList.includes(theme))
       {

        stateWarning()

       } 
        

        else{
            newList.unshift(theme)
            setCounter(counter + 1)
            
            }
        
        setList(
           newList
        )
        console.log(list)
        
    }

        const endSelection = () =>{
            if(counter > 4)
            {

                stateWarning1()
                setFButtonDisabled(true)
                setBButtonDisabled(true)
                setSButtonDisabled(true)

            }
        }

       const reset = () => {
            setList(['', '', '', '', ''])
            
            setCounter(0)
            removeWarning()
                     
            setFButtonDisabled(false)
            setBButtonDisabled(false)
            setSButtonDisabled(false)
           
        }
    
   
        return (
            <Provider 
            value={{
                theme: theme, 
                store: store,
                changeColor: changeColor, 
                saveColor: saveColor,
                message: message, 
                counter: counter,
                fbuttonDisabled: fbuttonDisabled,
                bbuttonDisabled: bbuttonDisabled,
                sbuttonDisabled: sbuttonDisabled,
                reset: reset, 
                list: list, 
                previousColor: previousColor
            }}
                >

                {props.children}

            </Provider>
        )
    


}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
