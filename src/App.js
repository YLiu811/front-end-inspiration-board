import "./App.css";
import CardList from "./components/CardList";
import NewCardForm from "./components/NewCardForm";

const CARD_LIST = [
  {
    card_id: 1,
    message: "I love you",
    owner: "Megan",
  },
  {
    card_id: 2,
    message: "I love you",
    owner: "Megan",
  },
];

function App() {
  console.log("App component is rendering");

  
  }

  return (
    <div>
      <header></header>
      <main>
        <h1>Inspiration Board</h1>
        <CardList cards={CARD_LIST} />
        <NewCardForm message="testing" />
      </main>
    </div>
  );
}

export default App;
