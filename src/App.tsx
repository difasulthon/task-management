import Cards from "./components/Cards/Cards";

import "./App.css";

function App() {
  return (
    <div className="flex p-8">
      <Cards
        style={{
          flexDirection: "column",
        }}
      >
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
        <br />
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
        <h1>This is a Card component</h1>
      </Cards>
    </div>
  );
}

export default App;
