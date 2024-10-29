import { useState } from "react"

function StateComp() {
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h1>{count}</h1>
            {/* <button onClick={() => setCount(count - 1)}>-</button> */}
            <button onClick={decrement}>-</button>
            <input type="text" onChange={(e) => setName(e.target.value)}></input>
            <h1>{name}</h1>
        </div>
    )
}
export default StateComp