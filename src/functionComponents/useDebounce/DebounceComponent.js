import { useState } from 'react'
import useDebounce from './useDebounce'


export default function DebounceComponent(){
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])

    return(
        <div>
            <h4>debounce component</h4>
            <div>{count}</div>
            <button onClick={()=> setCount(c => c+1)}>Increment</button>
        </div>
    )
}