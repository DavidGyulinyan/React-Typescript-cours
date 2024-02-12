import { useState } from "react"


import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title={"This is a title"} />
      <Section title={"Section's Title"}>
        This is Section
      </Section>
      <Counter setCount={setCount}>
        Count is {count}
      </Counter>
      <List items={['Cofee', 'Tacos', 'Code']}
        render={(item: string) => <span className="bold"> {item} </span>}
      />
    </>
  )
}

export default App
