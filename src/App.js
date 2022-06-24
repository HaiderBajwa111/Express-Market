import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import Header from "./Layout/Header";
import { Row, Container, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
