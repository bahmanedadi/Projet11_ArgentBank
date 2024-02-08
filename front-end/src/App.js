import * as React from "react";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Login from "./pages/Login/Login.js";
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import User from "./pages/User/User.js";
import Error from "./pages/Error/Error.js";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<User />} />
      <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
