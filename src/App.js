import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h1>Gag List</h1>
        <GagItemCreate />
      </div>
      <GagList />
    </div>
  );
}

export default App;
