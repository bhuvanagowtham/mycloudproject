import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import UserList from "./components/AllUsers";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
