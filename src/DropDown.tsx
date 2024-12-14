import {useState, useContext} from 'react';
import {MyContext} from "./CardChoicesContext";

/*to do how to create an array of options 
 from the keys of drugschema object. possible take the keys from the first object in the array*/
type Options = {
  value: string;
};

/*type DropdownProps = {
  sels: Option[];
  //onSelect: (value: string) => void;
};
*/


const Dropdown = ({ list, chooseFunct }) => {
  
  
  //console.log("whichChoice", whichChoice)
  const [choice, setChoice] = useState("choice");

  const makeChoice = (event) => {
    console.log("event", event);
    console.log("event.target", event.target)
    console.log("event.target.value", event.target.value);
    setChoice(event.target.value);
    chooseFunct(event.target.value); // pass the choice to the parent
  }

  const arr = Object.values(list);
  

 
  
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
