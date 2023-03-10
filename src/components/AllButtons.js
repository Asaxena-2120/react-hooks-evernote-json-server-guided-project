import react,{useEffect, useState} from "react";
/* A counter that starts at zero, it will automatically start incrementing by 1.
Will have an increase button that will make it automatically increment (based on an interval)
WIll have a decrease button that will make it decrease (based on an interval)
Will have a pause button that will pause the counter (clears out interval)
 */
function AllButtons(){
    const [count, setCount]=useState(0)
    const [isPaused,setisPaused]=useState(false)
    const [increment,setincrement]=useState(1)

    useEffect(()=>{
        
            const intervalID= setInterval(()=>{
              
                console.log("isPaused inside setinterval",isPaused)
                    setCount(count=>count+increment)
                },1000)
            
        
       

       if (isPaused){
            console.log("isPaused inside isPaused",isPaused)
            return clearInterval(intervalID)
            setincrement(0)
        }  
        //
        /* else{
            return (intervalID)
        } */
          //   clearInterval(intervalID)
          
        
    },[isPaused,increment])
    function handlePause(){
        console.log("Pause click",isPaused)
        setisPaused(isPaused=>true)
        setincrement(0)
        console.log("Pause click ends",isPaused)
    }

    return (
        <>
        <p>{count}</p>
        <button>
            Play
        </button>
        <button  onClick={handlePause}>
            Pause
        </button>
       
        </>
    )
}
export default AllButtons