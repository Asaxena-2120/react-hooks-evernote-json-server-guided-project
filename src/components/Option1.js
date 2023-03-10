import React, { useState } from "react"
/* Add a controlled form that includes:
A text input
A button with the text of “Click Me!”
A paragraph that has a counter that starts at 0
When they input text in the text field and submit it, the text input should reset. 
At the same time the counter should increment based on the word length.
The counter will continue to increment based on word length and will never reset back to zero. 
So for example: if the student typed in hi and submitted 3 times, the counter would be at 6.
 */
function Option1(){
    
    const [count,setCount]=useState(0)
    const [formData,setFormData]=useState({
        name:""
    })
   
    function handleChange(e){
        const name=e.target.name
        let value=e.target.value
        setFormData({
            ...formData,
            [name]:value
        })
        
    }
    function handleSubmit(e){
        e.preventDefault()
        setCount(count=>count+(formData.name).length)
        setFormData({name:""})
       
        
    }
    return (
        <>
        <form id="my-form" onSubmit={handleSubmit}>
        <input type='text' id='name' name='name' value={formData.name} onChange={handleChange}/>
        <button type="submit" >Click Me!</button>
        <p>{count}</p>
        </form>
        
        </>
    )
        
}
export default Option1