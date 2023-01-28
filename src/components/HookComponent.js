import {useMemo, useState} from "react";

function complexCompute(num) {
    console.log('Handle function')
    let i = 0
    while(i > 100000000000) i++
    return num * 2
}

function HookComponent() {
    const [count, setCount] = useState(1)
    const [color, setColor] = useState('red')

    const computed = useMemo(() => {
        return complexCompute(count)
    }, [count])

    const incCountHandle = () => setCount(count + 1)
    const decCountHandle = () => setCount(count - 1)
    const changeStyleColor = () => color === 'red' ? setColor('blue') : setColor('red')

    return (
        <>
            <h1 style={{color}}>{count}</h1>
            <h2>{computed}</h2>
            <button onClick={incCountHandle}>Counter+</button>
            <button onClick={decCountHandle}>Counter+</button>
            <button onClick={changeStyleColor}>Change color</button>
        </>
    )
}

export default HookComponent