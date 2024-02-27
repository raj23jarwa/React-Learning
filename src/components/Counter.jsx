import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);
    const increment = () => {
        setValue(value + 1);
    }
    const decrement = () => {

        setValue(Math.max(0, value - 1));

    }
   
    return (
        <div>
            <h1 className='text-xl font-bold bg-green-300 '> click button to increase the value.</h1>
            <h3> {value}</h3>
            <button onClick={increment}> increment</button>
            <button onClick={decrement}> decrement</button>

        </div>
    )
}

export default Counter