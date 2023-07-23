import { useState } from "react";
import GagItemCreate from "./components/GagItemCreate";
import GagList from "./components/GagList";

function App() {
  const [gags, setGags] = useState([]);

  const createGag = (contant) => {
    const randomId = Math.floor(Math.random() * 1000);
    const updatedGags = [...gags, { id: randomId, contant }];
    if (contant !== "") setGags(updatedGags);
  };

  const editGagById = (id, newContant) => {
    const updatedGag = gags.map((gag) => {
      if (gag.id === id) {
        return { ...gag, contant: newContant };
      }
      return gag;
    });
    setGags(updatedGag);
  };

  const deleteGagById = (id) => {
    const updatedGags = gags.filter((gag) => gag.id !== id);
    setGags(updatedGags);
  };

  return (
    <div>
      <h1>Nav Bar</h1>
      <GagList onEdit={editGagById} onDelete={deleteGagById} gags={gags} />
      <GagItemCreate onCreate={createGag} />
    </div>
  );
}

export default App;
