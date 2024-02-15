
import "./styles/main.scss";
import Nav from "./comps/Nav/Nav";
import Home from "./scenes/Home"
import Entry from "./scenes/Entry";
import Chat from "./scenes/Chat";
import BG from "./comps/background/BG";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/ChatAppUi/" element={<Home />} />
            <Route path="/ChatAppUi/entry" element={<Entry />} />
            <Route path="/ChatAppUi/chat" element={<Chat />} />
          </Routes>
          <BG />
        </BrowserRouter>
    </div>
  );
}

export default App;
