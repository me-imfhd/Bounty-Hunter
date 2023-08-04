import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import Appbar from "./components/Appbar";
import Bounty from "./routes/Bounty";
import Login from "./routes/Authentication/Login";
import Signup from "./routes/Authentication/Signup";

function App() {
  return (
    <>
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/bounty" element={<Bounty />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
