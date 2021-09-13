import React from 'react';

export default function useToggle(defaultValue){
    const [value, setValue] = React.useState(defaultValue)

    function toggleValue(value){
        setValue(currentValue => 
           typeof value === 'boolean' ? value : !currentValue 
            )
    }
    return [value, toggleValue]
}