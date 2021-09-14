import useToggle from "./useToggle";

export default function ToggleComponent(){
    const [value, toggleValue] = useToggle(false)

    return(
        <div>
            {/* modal or checkbox */}
            <h2>useToggle</h2>
            <div>{value.toString()}</div>
            <button onClick={toggleValue} >Toggle</button>
            <button onClick={()=> toggleValue(true)}>Make True</button>
            <button onClick={()=> toggleValue(false)}>Make False</button>
        </div>
    )
}