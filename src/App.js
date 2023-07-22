import { useState } from "react";
import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";

function App() {
  const [gags, setGags] = useState([]);

  const createGag = (contant) => {
    const randomId = Math.floor(Math.random() * 1000);
    const updatedGags = [...gags, { id: randomId, contant }];
    setGags(updatedGags);
  };

  return (
    <div>
      <GagList gags={gags} />
      <GagItemCreate onCreate={createGag} />
    </div>
  );
}

export default App;
