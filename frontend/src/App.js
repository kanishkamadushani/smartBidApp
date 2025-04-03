import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import ItemDetail from "./components/ItemDetail";

import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  //user
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/item/:id" element={user ? <ItemDetail /> : <Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
