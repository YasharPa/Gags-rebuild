import Navbar from "./components/Navbar";
import GagList from "./components/GagList";
import { useFetchGagsQuery } from "./store";
import { useState, useEffect } from "react";
import Skeleton from "./components/Skeleton";
function App() {
  const { data, isLoading, error } = useFetchGagsQuery();
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
  let gagsContant;
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
      <footer id="about"> </footer>
    </div>
  );
}

export default App;
