import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <form>
            <div className="form-group">
                <label>Workout type:</label>
                <input
                    type="text"
                    className="form-control"
                    id="type"
                    aria-describedby="typeHelp"
                    placeholder="Enter type"
                />
            </div>
        </form>
      </header>
    </div>
  )
}

export default App
