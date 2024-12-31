interface Props{
    setVisible: (param: boolean) => void,
    visible: boolean,
}

const ShowButton = ({setVisible, visible}: Props) =>{
   

    function changeVis(){
        if(visible){
            setVisible(false);
        }else{
            setVisible(true)
        }
        
    }
    return(<button onClick={()=>changeVis()}>
        show
    </button>)
}

export default ShowButton;