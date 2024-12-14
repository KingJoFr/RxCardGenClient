import  { useState } from 'react';
import drugs from './drugs.ts';
import  { useContext } from 'react';
import { MyContext } from './CardChoicesContext';

/*after choices made for front and back
  you have to create the deck.  to create the deck you have
  to go through the general deck and select the 
  properties and put them in a new object then push
  that object to an array to iterate through with the front 
  visible and the back with style visibility: hidden then 
  style visibility: visible with a button*/

const Flashcards = ({choice, deck}) =>{
    console.log("deck",deck[0][choice])
    
    
    return(
        <div>
            <p>Choices: {choice}</p>
            <p>deck: {(deck[0][choice])? deck[0][choice]: "empty deck"}</p>
            

        </div>
    )
}

export default Flashcards;