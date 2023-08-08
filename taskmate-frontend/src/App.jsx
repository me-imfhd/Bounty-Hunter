import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./routes/LandingPage";
import Appbar from "./components/Appbar";
import Bounty from "./routes/Bounty/Bounty";
import Login from "./routes/Authentication/Login";
import Signup from "./routes/Authentication/Signup";
import { BASE_URL } from "./config";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import { useEffect } from "react";

function App() {
  const setUser = useSetRecoilState(userState)
  async function init(){
    try{
      const res = await axios.get(`${BASE_URL}/auth/me`,{
        headers:{
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      })
      if(res.data.username){
        setUser({
          isLoading:false,
          name: res.data.username
        });
      }
      else{
        setUser({
        isLoading:false,
        name: null
      })
      }
    }catch(err){
      console.error(err);
      setUser({
        isLoading:false,
        name: null
      })
    }
  }
  useEffect(() => {
    init();
  }, [])
  return (
    <>
      <Router>
        <Appbar></Appbar>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/bounty" element={<Bounty/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
