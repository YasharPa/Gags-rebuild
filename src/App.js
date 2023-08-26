import Navbar from "./components/Navbar";
import GagList from "./components/GagList";
import { useFetchGagsQuery } from "./store";
import { useState, useEffect } from "react";

function App() {
  const { data } = useFetchGagsQuery();
  const [filteredData, setUpdatedData] = useState(data);

  useEffect(() => {
    setUpdatedData(data);
  }, [data]);

  const handleSerchGagSubmit = (term) => {
    const filteredData = data.filter((gag) => {
      return gag.content.toLowerCase().includes(term.toLowerCase());
    });
    setUpdatedData(filteredData);
  };

  return (
    <div className="app">
      <Navbar onSubmit={handleSerchGagSubmit} />
      <div className="gag-list">
        <GagList data={filteredData} />
      </div>
      <footer id="about"> </footer>
    </div>
  );
}

export default App;
