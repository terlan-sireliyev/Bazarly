import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Publish from "./pages/Publish/Publish";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/publish" element={<Publish />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
 
}

export default App;
