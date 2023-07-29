import { useContext, useEffect } from "react";
import GagsContext from "./context/gags";
import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";

function App() {
  const { fetchGags } = useContext(GagsContext);
  useEffect(() => {
    fetchGags();
  }, [fetchGags]);

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
