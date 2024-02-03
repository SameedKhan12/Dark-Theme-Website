import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About/About.jsx";
import Career from "./Components/Career/Career.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/career" element={<Career />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
