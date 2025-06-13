import { useState } from "react";
import TopBar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <TopBar />
      <SideBar />
    </div>
  );
}

export default App;
