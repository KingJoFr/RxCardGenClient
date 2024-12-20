import  { useState, useEffect } from 'react';
import drugs from './drugs.ts';
import  IncButton  from './IncButton';
import ShowButton from './ShowButton'
/*after choices made for front and back
  you have to create the deck.  to create the deck you have
  to go through the general deck and select the 
  properties and put them in a new object then push
  that object to an array to iterate through with the front 
  visible and the back with style visibility: hidden then 
  style visibility: visible with a button
  
  order of operations
  useEffect runs when card changes. which changes when the back is chosen or forward or back button pressed
  which changes the position variable.
  
  const card = deck[position][choice2];
  choice 2 is the back
  deck is imported
  
  once the choices are made we have to figure out how to render what we get
  it may be a string, array, or object.  
  So the idea is that useeffect runs when user makes the choices.
  in useeffect we check with if statements the type

  in the return we check if card has a value
  which it doesn't have until choice 1 and 2 are made
  then if it does showBack() runs if it doesn't which it doesn't at the beginning
  then it says empty deck
  */

  
const limit = drugs.length;
const Flashcards = ({choice, choice2, deck}) =>{
    

    const [position, setPosition] = useState(0); //position in the deck
    const [isArray, setIsArray] = useState(false); //check if array to list out each thing
    const [listArr, setListArr] = useState("empty arr");//contains the actual array turned into a list
    const [isType, setIsType] = useState("no type");// check if choice is string or array or object
    const card = deck[position][choice2]; 
    //const [card, setCard] = useState(deck[position][choice2]);
    const [visible, setVisible] = useState(false);  //sets the visiblity of back
    
    let cardKeys = [];
    let cardValues = [];
    const [display, setDisplay] = useState(['display'])
    const [rlimit, setRLimit] = useState(0);
    function changePosition(value){
        setPosition(value);
    }

    


    function flistArr(){ //takes an array and creates a list. react prints it as all one string
    
        try{
        if(isArray){
            
            return(
                <ul>
                    {card.map((item,index)=>(
                    <li key={index}>
                        {item}
                
                    </li>
                    ))}
                </ul>
            
            )
        
        
        }else{
        
            return(<p>empty</p>)
        };
        }catch(e){
            console.log("error",e)
        }
    }

    function checkType(){

        
        try{
         switch(typeof card){
            case "object": if(Array.isArray(card)){
                            setIsType("array");
                           }else{
                            setIsType('object')
                
                           };
            break;
            default: setIsType("string");
         }
        }catch(e){
            console.log("error",e)
        }
    }

   

    function showbtn(value){
        try{
        if(visible ){
            setVisible(value)

        }else{
            setVisible(value)
        }
        }catch(e){
            console.log("error",e)
        }
    }
    
    function showBack(){
        
        
        try{
        if(isType ==="string"){
            console.log("type is string")
            return(<p>{card}</p>)
        }else if(Array.isArray(card)){
        
            
            return(<div>{flistArr()}</div>)
        }else{//type is object
        
            cardKeys = Object.keys(card);
            cardValues = Object.values(card);
        
            
            /*const count = rlimit;
            setRLimit(1)
             This code causes an infinite loop*/
            
            
        
            
            return(
                <ul>
                    {cardKeys.map((item,index)=>(
                    <li key={index}>
                        {item}: {cardValues[index]}
                
                    </li>
                    ))}
                </ul>
           
            )
                
        }
    }catch(e){
        console.log("error",e)
        }
    }

    /**useEffect run when card changes */

    useEffect(()=> {
        console.log("useEffect running")
        try{
        
    
        
        if(card){
            
            if(typeof card == "string"){
                
                setIsArray(false);
                //checkType();
                setIsType('string')
                //flistArr();

            }
            else if(Array.isArray(card)){
                
                setIsArray(true)
                setIsType("array"); 
                //flistArr();
                
            }else{
                
                setIsArray(false);
                setIsType('object')
                //setCardKeys(Object.keys(card));
                //setCardValues(Object.values(card))
        
                //flistArr();
                

            }
        }
    }catch(e){console.log("error",e)}}
    , [choice,choice2])
    

    
    
   

    return(
        <div>
            
            <p>front: {(deck[position][choice])? deck[position][choice]: "empty deck"}</p>
            <div className={`${visible ? "cardVisible": "cardHidden" }`}>back: { card? showBack() : "empty deck"}</div>
            <IncButton limit ={limit} setVis={showbtn} position={position} setPosition={changePosition} purpose="forward" incDec={1}/>
            <IncButton limit ={limit} setVis={showbtn} position={position} setPosition={changePosition} purpose="back" incDec={-1}/>
            <ShowButton setVisible={showbtn} visible={visible} />
        </div>
    )
}

export default Flashcards;