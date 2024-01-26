import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Assignment from "./pages/Assignment";
import Homework from "./pages/Homework";
import PayFee from "./pages/PayFee";

function App() {
  return(
    <>
      {/* <h1>Jai Shree Ram</h1> */}
      {/* <Main/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/assignment" element={<Assignment/>}></Route>
          <Route path="/homework" element={<Homework/>}></Route>
          <Route path="/payfee" element={<PayFee/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
