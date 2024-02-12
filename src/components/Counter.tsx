import { ReactNode } from "react"

type CounterProps = {
    children: ReactNode,
    setCount: React.Dispatch<React.SetStateAction<number>>
}


const Counter = ({ setCount, children }: CounterProps) => {
    return (
        <h1>
            <h1>{children}</h1>
            <button onClick={() => setCount(e => e + 1)}>increment</button>
            <button onClick={() => setCount(e => e - 1)}>decriment</button>
            <button onClick={() => setCount(0)}>Reset count</button>
        </h1>
    )
}

export default Counter
