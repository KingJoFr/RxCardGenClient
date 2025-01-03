import  { useState, useEffect } from 'react';
import { drugs, DrugSchema } from './drugs2.ts';

import  IncButton  from './IncButton';
import ShowButton from './ShowButton'
/*
https://stackoverflow.com/questions/62438346/how-to-dynamically-access-object-property-in-typescript
after choices made for front and back
  you have to create the deck.  to create the deck you have
  to go through the general deck and select the 
  properties and put them in a new object then push
  that object to an array to iterate through with the front 
  visible and the back with style visibility: hidden then 
  style visibility: visible with a button
  //actually I discovered that it's not necessary to create a whole new object
  
  order of operations
  1choice 1 and 2 are made
  2useEffect runs when card changes which sets the back to hidden.
  3when show is pressed className of back div is changed to make it visible
  4forward and back buttons can be pressed to iterate through the deck
  
  const card = deck[position][choice2];
  choice 2 is the back
  deck is imported
  
  once the choices are made we have to figure out how to render what we get
  it may be a string, array, or object, or nothing at the start  
  So the idea is that useeffect runs when user makes the choices.
  in useeffect we check with if statements the type
  //actually ended up creating a function createCardBack() that checks all that in the div for back of card

  in the return we check if card has a value
  which it doesn't have until choice 1 and 2 are made
  then if it does createCardBack() runs, if it doesn't which it doesn't at the beginning
  then it says "empty deck"
  
  in createCardBack if it's a string then just return card
  if array then maps it and returns an unordered list of each item
  if object then arrays are made of keys and values then those
  are rendered as an unordered list
  

  */
  //const DrugSchemaKeyObj = drugs[0]; // create instance of object to create keys for type 
  type DrugSchemaKeyType = keyof DrugSchema;

  
const limit: number = drugs.length;
interface Props{
    choice: DrugSchemaKeyType,
    choice2: DrugSchemaKeyType,
    deck: DrugSchema[]
}
const Flashcards = ({choice, choice2, deck}: Props) =>{
    

    const [visible, setVisible] = useState<boolean>(false);  //sets the visiblity of back
    const [position, setPosition] = useState<number>(0); //position in the deck
    const backCard: string | string[] | object | undefined = deck[position][choice2]; 
    const frontCard: string | string[] | object | undefined = deck[position][choice]
    let cardKeys: string[] = [];
    let cardValues: string[] = [];
    //const [display, setDisplay] = useState<string[]>(['display'])
    //const [rlimit, setRLimit] = useState(0);


    function changePosition(value: number){
        if(value<0){
            value = 0;
            setPosition(value);
        }else{
            setPosition(value);
        }
    }

    function showbtn(value:boolean){
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
    
    function createCardBack(card: string|string[]|object){
        
        const cardValuesTemp: string |string[]|object = Object.values(card)[0];
        console.log("top of createCardBack cardkeystemp is ", cardValuesTemp)
        
        
        try{
        if(typeof cardValuesTemp == "string"){ /* was if(isType == "string") but noticed was not running useffect going from strings to object*/
            console.log("1 typeof card is string")
            return(<p>{cardValuesTemp}</p>)
        }else if(Array.isArray(cardValuesTemp)){
        
            console.log("2 type of card is array");
            return(<div>
                <ul>
                    {cardValuesTemp.map((item,index)=>(
                    <li key={index}>
                        {item}
                
                    </li>
                    ))}
                </ul>
            </div>
            )
        }else if(typeof card == "object"){
            console.log("3 type of card is object")
            cardKeys = Object.keys(cardValuesTemp);
            cardValues = Object.values(cardValuesTemp);
        
            
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
                
        }else{
            console.log("4 final else type ", typeof card)
            return("empty deck")
        }
    }catch(e){
        console.log("error",e)
        }
    }

    /**useEffect run when card changes */

    useEffect(()=> {
        console.log("useEffect running")
        setVisible(false);
        
    
        
       }
    , [choice,choice2])
    /*I realized I don't even need this.  Actually I found a use for useEffect
    I noticed that when changing the choice for back if its visible it stays visible */

    
    
   
    //main return 
    return(
        <div>
            
            <div>front: { frontCard ? createCardBack({frontCard}): "empty deck"}</div>{/*deck[position][choice]*/}
            <div className={`${visible ? "cardVisible": "cardHidden" }`}>{/*whether visible or hidden depends on showbutton*/}
                back: { backCard? createCardBack({backCard}) : "empty deck"}{/*if card is something then run createCardBack otherwise write "empty deck" */}
                </div>
            <IncButton limit ={limit} setVis={showbtn} position={position} setPosition={changePosition} purpose="forward" incDec={1}/>
            <IncButton limit ={limit} setVis={showbtn} position={position} setPosition={changePosition} purpose="back" incDec={-1}/>
            <ShowButton setVisible={showbtn} visible={visible} />
        </div>
    )
}

export default Flashcards;