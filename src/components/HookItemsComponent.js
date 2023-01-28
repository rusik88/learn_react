import {useEffect, useState} from "react";

function HookItemsComponent({itemsFunc}) {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(itemsFunc())
        console.log('Render Items component');
    }, [itemsFunc])

    return (
        <>
            {items.map(i => <h1 key={i}>{i}</h1>)}
        </>
    )
}

export default HookItemsComponent