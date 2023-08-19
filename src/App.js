import Navbar from "./components/Navbar";
import GagList from "./components/GagList";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="gag-list">
        <GagList />
      </div>
      <div id="contact">hey you reached the footer</div>
    </div>
  );
}

export default App;
