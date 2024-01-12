import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Componets/Home";
import Login from "./Componets/Login";
import Register from "./Componets/Register";
import { useEffect, useState, createContext } from "react";
// import { checkUser } from "../../../controller/userController";
import axios from "./axiosConfig";
import Landing from "./Componets/Landing";
import AskQuestion from "./Componets/AskQuestion";
import SharedLayuot from "./SharedLayuot";
import Answer from "./Componets/Answer";

// export let appcontext = createContext();
export let AppState = createContext();
function App() {
  let [user, setuser] = useState({});
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  async function checkUser() {
    try {
      let { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setuser(data);
    } catch (error) {
      console.log(error.response);
      navigate("/");
    }
  }
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setuser }}>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route path="/" element={<Landing />} />
          <Route path="/questions" element={<Home />} />
          <Route path="questions/ask" element={<AskQuestion />} />
          <Route path="/questions/:questionid" element={<Answer />} />

          <Route path="/" element={<Login />} />
          <Route path="/" element={<Register />} />
        </Route>
      </Routes>
    </AppState.Provider>
  );
}

export default App;
