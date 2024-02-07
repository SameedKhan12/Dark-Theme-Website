import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About.jsx";
import Career from "./Components/Career/Career.jsx";
import Security from "./Components/Security/Security.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
import Opening from "./OpennigAnimation/Opening.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
        <Route path="/security" element={<Security />} />
        <Route path="/open" element={<Opening />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
