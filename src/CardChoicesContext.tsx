import React, {createContext, useState} from 'react';


const MyContext = createContext();
const MyProvider = ({children}) =>{
    const [choices, setChoices] = useState({"choiceFront": "nothing","choiceBack":"nothing"});
    console.log("choices in MyContext", choices)
    return (
        <MyContext.Provider value={{choices, setChoices}}>
            {children}
        </MyContext.Provider>
    );
};

export {MyContext, MyProvider};