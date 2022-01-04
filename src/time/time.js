import React, {useState, useEffect} from 'react';

function Time(){
    const [dt, setDt] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval( () => {
            setDt(new Date().toLocaleString())
        },1000)

        return () => clearInterval(secTimer)
    }, [])

    
}
export default Time