import React, { useRef, useState } from "react";

const UseRef = () =>{

    const element = useRef("")
    console.log(element)       // UseRef generates the current key. It is used to manipulate the DOM means updating or change the DOM.

    const[state, setState] = useState("Rohit")

    const changeInput =(e) =>{
        setState(e.target.value)
    }

    const resetButton =() =>{
        setState("")
        element.current.focus()
    }

    const change =() =>{
        element.current.style.color = "blue"     // change color
        element.current.value = "sahib"         // change name
    }


    return(
        <div>
            <input ref={element} type="text" value={state} onChange={changeInput} placeholder="name"/>
            <button onClick={resetButton}>Reset</button>
            <button onClick={change}>changeColor</button>
        </div>
    )
}
export default UseRef;