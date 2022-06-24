import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Row, Container, Col } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default App;
