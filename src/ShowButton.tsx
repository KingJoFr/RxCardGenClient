const ShowButton = ({setVisible, visible}) =>{
   

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