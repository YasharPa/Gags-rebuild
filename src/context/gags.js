import { createContext, useCallback, useState } from "react";
import axios from "axios";

const GagsContext = createContext();

function Provider({ Children }) {
  const [gags, setGags] = useState([]);

  const fetchGags = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/gags");
    setGags(response.data);
  }, []);

  const createGag = async (contant) => {
    const response = await axios.post("http://localhost:3001/gags", {
      contant,
    });
    if (contant !== "") {
      const updatedGags = [...gags, response.data];
      setGags(updatedGags);
    }
  };

  const editGagById = async (id, newContant) => {
    const response = await axios.put(`http://localhost:3001/gags/${id}`);
    const updatedGag = gags.map((gag) => {
      if (gag.id === id) {
        return [...gag, response.data];
      }
      return gag;
    });
    setGags(updatedGag);
  };

  const deleteGagById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/gags/${id}`);
    setGags(response.data);
  };

  const valuesToShare = {
    gags,
    fetchGags,
    createGag,
    editGagById,
    deleteGagById,
  };

  return (
    <GagsContext.Provider value={valuesToShare}>
      {Children}
    </GagsContext.Provider>
  );
}

export { Provider };
export default GagsContext;
