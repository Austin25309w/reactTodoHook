import {React, useState} from 'react'


export default function useStateComponent() {
    const [show, setChecked] = useState(true);
    const visibility = show ? 'visible' : 'hidden';
    const [count, setCount] = useState(0); 

    function increment(){
        setCount(prevCount => prevCount +1);
    }

    function decrement(){
        setCount(prevCount => prevCount -1);
    }

    return (
        <div>
            <h1>useState</h1>
            {/* hide and show */}
            <h1 style={{visibility}}>useState is awesome</h1>
            <button onClick={() => {setChecked(!show)}}>{`${show?'Hide':'show'}` }the Header!</button>
            {/* counter */}
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
