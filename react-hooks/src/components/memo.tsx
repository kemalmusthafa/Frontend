import { useMemo, useState } from "react";

export default function ComponentUseMemo() {
    const [number, setNumber] = useState<number>(0)
    const [count, setCount] = useState<number>(0)

    const incrementNumber = () => setNumber((number)=> number + 1)
    const incrementCount = () => setCount((count)=> count + 1)

    const isNumberEven = useMemo(()=> {
        let i = 0
        while (i < 200) {
            i++
        }
        return number % 2  === 0
    }, [number])

    return (
        <div>
            <button onClick={incrementNumber}>number: {number}
            </button>
            <div><h1>{isNumberEven ? "even": "odd"}</h1></div>
            <button onClick={incrementCount}>count: {count}</button>
        </div>
    )
}
