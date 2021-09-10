import React, { useState, useEffect} from 'react';


function Example() {
    const [count, setCount] = useState(0);
    const LOCAL_STORAGE_KEY = 'todoApp.count'

    useEffect(() =>{
        const storedCounts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storedCounts) setCount(storedCounts)
    },[])


    useEffect(() => {
      document.title = `You clicked ${count} times`;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(count))
    }, [count]);



    return (
      <div>
        <p>You clicked { count === false ? 0 : count } times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <button onClick={() => setCount(count === 2)}>Reset</button>
      </div>
    );
  }

  export default Example;