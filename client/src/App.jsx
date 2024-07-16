import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Components/Users";
import CreateUsers from "./Components/CreateUsers";
import UpdateUsers from "./Components/UpdateUsers";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUsers />} />
          <Route path="/update" element={<UpdateUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
