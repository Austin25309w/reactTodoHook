import React, { useState } from 'react';

const Count = () => {
    const [ count, setcount ] = useState(0);
    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick = {() => setcount(count +2 )}> Click me</button>
        </div>
    );
};

export default Count;