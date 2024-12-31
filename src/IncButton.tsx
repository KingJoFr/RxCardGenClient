

/* the increment button should take the limit and
   and return or rather modify the position variable
   the limit comes from the length of the deck array*/
interface Props{
    limit: number,
    position: number,
    setPosition:(param: number) => void,
    purpose: string,
    incDec: number,
    setVis: (param: boolean) => void

}   
const IncButton = ({limit, position, setPosition, purpose, incDec, setVis }:Props)=>{
    
    function makeChange(){
        setVis(false)
        if(position < limit-1){
        setPosition(position + incDec);
        }else{
        setPosition(0);
        }
    }
    return(
        <button onClick={makeChange}> {purpose}</button>
    );

}

export default IncButton;