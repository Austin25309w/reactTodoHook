import React, {useState, useEffect} from 'react'

export default function Resizewindow() {
    const[windowWidth, setwindowWidth] = useState(window.innerWidth)
    const[windowHeight, setwindowHeight] = useState(window.innerHeight)
 
    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }
    const handleHeight = () => {
        setwindowHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    },[])

    useEffect(() => {
        window.addEventListener('resize', handleHeight)
    })

    return (
        <div>
            <p>{windowWidth} X {windowHeight}  </p> 
            
        </div>
    )
}
