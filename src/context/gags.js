import { createContext, useCallback, useState } from "react";
import axios from "axios";

const GagsContext = createContext();

function Provider() {
  const [gags, setGags] = useState([]);

  const fetchGags = useCallback(async () => {
    const response = await axios.get("https://api.imgflip.com/get_memes");
    setGags(response.data);
  }, []);

  const valuesToShare = {
    gags,
  };

  return <GagsContext.Provider></GagsContext.Provider>;
}

export { Provider };
export default GagsContext;
