import "./App.css";
import Form from "./components/Form";
import Greet from "./components/Greet";
import List from "./components/List";

function App() {
  const greet = (name) => `Hello, ${name}!`;

  return (
    <>
      <main>
        <div>
          <Greet greet={greet}/>
        </div>
        <div>
          <Form/>
        </div>
        <div>
          <List greet={greet} />
        </div>
      </main>
    </>
  );
}

export default App;
