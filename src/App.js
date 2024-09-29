import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import HW1MainPage from "./pages/hw1/HW1MainPage";
import HW2MainPage from "./pages/hw2/HW2MainPage";
import HW3MainPage from "./pages/hw3/HW3MainPage";
import HW4MainPage from "./pages/hw4/HW4MainPage";
import HW5MainPage from "./pages/hw5/HW5MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hw1" element={<HW1MainPage />} />
        <Route path="/hw2" element={<HW2MainPage />} />
        <Route path="/hw3" element={<HW3MainPage />} />
        <Route path="/hw4" element={<HW4MainPage />} />
        <Route path="/hw5" element={<HW5MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
