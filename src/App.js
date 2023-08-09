import { useEffect } from "react";
import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";
import { useFetchGagsQuery } from "./store";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h1>Gag List</h1>
        {/* <GagItemCreate /> */}
      </div>
      <GagList />
    </div>
  );
}

export default App;
