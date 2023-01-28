import {useState, useCallback} from "react";
import ItemsComponent from "./HookItemsComponent";


function HookComponent() {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('red')

    const generateArr = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Counter ${i}`)
    }, [count])

    const incCountHandle = () => setCount(count + 1)
    const decCountHandle = () => setCount(count - 1)
    const changeStyleColor = () => color === 'red' ? setColor('blue') : setColor('red')

    return (
        <>
            <h1 style={{color}}>{count}</h1>
            <button onClick={incCountHandle}>Counter+</button>
            <button onClick={decCountHandle}>Counter+</button>

            <button onClick={changeStyleColor}>Change color</button>

            <ItemsComponent itemsFunc={generateArr} />
        </>
    )
}

export default HookComponent