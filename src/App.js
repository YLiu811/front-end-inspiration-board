import "./App.css";
import Card from "./components/Card.js";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <h1>Inspiration Board</h1>
        <Card message={"hello!"} />
      </body>
    </div>
  );
}

export default App;
