import { useState } from "react";
import styles from "./Counter.module.css";

function Counter(){

    const [num, setNum] = useState(0);

    function inc(){
        setNum(num+1);
    }

    function dec(){
        setNum(num-1);
    }

    function reset(){
        setNum(0)
    }

    return(
        <>
            <h2>Simple Counter</h2>
            <h3>{num}</h3>
            <div>
                <button onClick={dec} >Decrement</button>
                <button onClick={reset}>Reset</button>
                <button onClick={inc} >Increment</button>
            </div>
        </>
    );
}

export default Counter;