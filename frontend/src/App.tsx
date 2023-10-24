import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Note from "./pages/Note";
import Header from "./components/Header";
import "./globalStyle.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:noteId" element={<Note />} />
      </Routes>
    </Router>
  );
}

export default App;
