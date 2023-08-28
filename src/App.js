import Navbar from "./components/Navbar";
import GagList from "./components/GagList";
import { useFetchGagsQuery } from "./store";
import { useState, useEffect } from "react";
import Skeleton from "./components/Skeleton";
import About from "./components/About";

function App() {
  const { data, isLoading } = useFetchGagsQuery();
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
        {isLoading ? (
          <Skeleton className="active-skeleton" times={50} />
        ) : (
          <GagList data={filteredData} />
        )}
      </div>
      <About id="about"> </About>
    </div>
  );
}

export default App;
