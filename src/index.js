import react from "react"
import reactDom from "react-dom"
import "./styles.css"

const App = () => {

  return (
    <div className="App">
      Hello World!
    </div>
  )
}

const rootElement = document.createElementById("root")
ReactDOM.render(<App />, rootElement)