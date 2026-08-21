import type { FC } from "react";
import Greeting from './Greeting'

const App: FC = () => {
  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <Greeting name="iThome 鐵人賽" />
    </div>
  )
}

export default App
