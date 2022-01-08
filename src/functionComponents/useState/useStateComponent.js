import {React, useState} from 'react'


export default function useStateComponent() {
    const [show, setChecked] = useState(true);
    const visibility = show ? 'visible' : 'hidden';
    return (
        <div>
            <h1>useState</h1>
            <h1 style={{visibility}}>useState is awesome</h1>
            <button onClick={() => {setChecked(!show)}}>{`${show?'Hide':'show'}` }the Header!</button>
        </div>
    )
}
