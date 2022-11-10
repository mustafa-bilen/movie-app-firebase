import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
