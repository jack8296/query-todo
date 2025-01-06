import Home from "./pages/Home";
import { Routes, Route } from "react-router";
import Singletodo from "./pages/Singletodo";
function App() {
  console.log("I am router page");
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo/:id" element={<Singletodo/>}/>
    </Routes>
  );
}

export default App;
