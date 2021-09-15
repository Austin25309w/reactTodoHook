// only run it when anything changes, don't want to run it on first render

import { useState } from "react"
import useUpdateEffect from './useUpdateEffect'

export default function UpdateEffectComponent(){
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return(
        <div>
            <div>{count}</div>
            <button onClick={ () => setCount(c => c + 1 )}>Increment</button>
        </div>
    )
}