import React, {useState, useEffect} from 'react';

function Count(props) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${count} times`
    })
return <div>
    <p>You clicked {count} times </p>
    <button onClick ={() => setCount(count +1) }>Click me</button>
    <h1>{count}</h1>
</div>
}

export default Count;