import { useState } from "react"


import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
    <Heading title={"This is a fuckin title"}/>
    <Section title={"Section's Title"}>
      This is Section
    </Section>
    <Counter setCount={setCount}>
      Count is {count}
    </Counter>
    </>
  )
}

export default App
