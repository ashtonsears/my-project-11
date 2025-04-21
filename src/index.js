import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import SleepTracker from "./pages/SleepTracker";
import Disorders from "./pages/Disorders";
import Statistics from "./pages/Statistics";
import AboutUs from "./pages/AboutUs";
import NoPage from "./pages/NoPage";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sleeptracker" element={<SleepTracker />} />
          <Route path="disorders" element={<Disorders />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);