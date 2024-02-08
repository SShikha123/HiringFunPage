import "./App.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
// import { RoutingPage } from "./RoutingPage";

import YesPage from "./YesPage";
import HomePage from "./HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yespage" element={<YesPage />} />
      </Routes>
    </div>
  );
}

export default App;
