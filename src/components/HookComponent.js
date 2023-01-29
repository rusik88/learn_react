import {useState} from "react";

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const clearInput = () => {
        setValue('')
    }

    return {
        bind: {
            value: value,
            onChange: (event) => {
                setValue(event.target.value)
            }
        },
        clearInput
    }
}


function HookComponent() {
    const inputName = useInput('')
    const inputEmail = useInput('')


    return (
        <>
            <input type="text" name="name" {...inputName.bind} />
            <h1>{inputName.bind.value}</h1>
            <button onClick={inputName.clearInput}>Clear input</button>
            <hr />
            <input type="text" name="email" {...inputEmail.bind} />
            <h1>{inputEmail.bind.value}</h1>
            <button onClick={inputEmail.clearInput}>Clear input</button>
        </>
    )
}

export default HookComponent