import { createContext, useCallback, useState } from "react";
import axios from "axios";

const GagsContext = createContext();

function Provider({ children }) {
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
    const response = await axios.put(`http://localhost:3001/gags/${id}`, {
      contant: newContant,
    });

    const updatedGags = gags.map((gag) => {
      if (gag.id === id) {
        return { ...gag, ...response.data };
      }
      return gag;
    });
    setGags(updatedGags);
  };

  const deleteGagById = async (id) => {
    await axios.delete(`http://localhost:3001/gags/${id}`);
    const updatedGags = gags.filter((gag) => gag.id !== id);
    setGags(updatedGags);
  };

  const valuesToShare = {
    gags,
    fetchGags,
    deleteGagById,
    createGag,
    editGagById,
  };

  return (
    <GagsContext.Provider value={valuesToShare}>
      {children}
    </GagsContext.Provider>
  );
}

export { Provider };
export default GagsContext;
