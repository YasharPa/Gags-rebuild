import { useState } from "react";
import GagListItem from "./components/GagListItem";
function App() {
  const [gags, setGags] = useState([]);

  return <GagListItem />;
}

export default App;
