import { createContext, useCallback, useState } from "react";
import axios from "axios";

const GagsContext = createContext();

function Provider({ children }) {
  const [gags, setGags] = useState([]);

  const fetchGags = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/gags");
    setGags(response.data);
  }, []);

  const createGag = async (contant, url) => {
    const response = await axios.post("http://localhost:3001/gags", {
      contant,
      url,
      likes: 0,
    });
    if (contant !== "" || url !== "") {
      const updatedGags = [...gags, response.data];
      setGags(updatedGags);
    }
  };
  const addLikeToGagById = async (lastGag, updatedLikes) => {
    const response = await axios.put(
      `http://localhost:3001/gags/${lastGag.id}`,
      {
        ...lastGag,
        likes: updatedLikes + 1,
      }
    );
    const updateGags = gags.map((gag) => {
      if (gag.id === lastGag.id) {
        return { ...gag, likes: response.data.likes };
      }
      return gag;
    });

    setGags(updateGags);
  };

  const editGagById = async (lastGag, newContant) => {
    const response = await axios.put(
      `http://localhost:3001/gags/${lastGag.id}`,
      { ...lastGag, contant: newContant }
    );

    const updatedGags = gags.map((gag) => {
      if (gag.id === lastGag.id) {
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
  const CreateComment = async (lastGag, newCommnet) => {
    const response = await axios.put(
      `http://localhost:3001/gags/${lastGag.id}`,
      {
        ...lastGag,
        commnets: [...lastGag.commnets, newCommnet],
      }
    );
    const updateGags = gags.map((gag) => {
      if (gag.id === lastGag.id) {
        return { ...gag, commnets: response.data.commnets };
      }
      return gag;
    });

    setGags(updateGags);
  };

  const valuesToShare = {
    gags,
    fetchGags,
    deleteGagById,
    createGag,
    editGagById,
    addLikeToGagById,
    CreateComment,
  };

  return (
    <GagsContext.Provider value={valuesToShare}>
      {children}
    </GagsContext.Provider>
  );
}

export { Provider };
export default GagsContext;
