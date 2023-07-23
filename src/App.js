import { useContext, useEffect } from "react";
import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";
import GagsContext from "./context/gags";

function App() {
  const { fetchGags } = useContext(GagsContext);

  useEffect(() => {
    fetchGags();
  }, [fetchGags]);

  return (
    <div className="app">
      {console.log(fetchGags)}
      <h1>Gags List</h1>
      <GagList />
      <GagItemCreate />
    </div>
  );
}

export default App;
