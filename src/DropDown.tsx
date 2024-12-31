import {useState, ChangeEventHandler} from "react";
//import {DrugSchema} from "./drugs.ts"
//import {DrugSchemaKeyType} from "./App.tsx"
/*to do how to create an array of options 
 from the keys of drugschema object. possible take the keys from the first object in the array
 
 well now that I know that I can do something: keyof DrugSchema I think I can use that here*/
//type Options 

type Props = {
  list: string[],
  chooseFunct:(param: string) => void,
  //onSelect: (value: string) => void;
};



const Dropdown = ({ list, chooseFunct }:Props) => {
  
  
  //console.log("whichChoice", whichChoice)
  const [choice, setChoice] = useState("choice");

  const makeChoice: ChangeEventHandler<HTMLSelectElement> = (event) => {
    
    setChoice(event.target.value);
    chooseFunct(event.target.value); // pass the choice to the parent
  }

  //const arr = Object.values(list);
  

 
  
  return (
    <div>
      {/*<select value={selectedValue} onChange={handleChange}>
       /* <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedValue && <p>Selected: {selectedValue}</p>}*/}
      <select value={choice} onChange={makeChoice}>
        <option> select something</option>
        {list.map((item, index) =>(
            <option key={index} value={item}>
                
                {item}
            </option>

        ))};
      </select>
      <p>your choice is {choice}</p>
    
      
      
    </div>
  );
};


export default Dropdown;
