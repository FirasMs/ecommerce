import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/" element={<Navbar />}></Route>
            <Route exact path="/Contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
