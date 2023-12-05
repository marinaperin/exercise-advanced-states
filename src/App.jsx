import "./App.css";
import Form from "./components/Form";
import Greet from "./components/Greet";
import List from "./components/List";

function App() {
  const greet = (name) => `Hello, ${name}!`;
  const exercises = ["exercise 1", "exercise 2", "exercise 3"];

  return (
    <>
      <main>
        <div>
          <Greet greet={greet} id="ex1" />
        </div>
        <div>
          <Form id="ex2" />
        </div>
        <div>
          <List id="ex3" greet={greet} />
        </div>
      </main>
    </>
  );
}

export default App;
