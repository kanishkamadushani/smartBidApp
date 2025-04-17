import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import ItemDetail from "./components/ItemDetail";

import { useAuthContext } from "./hooks/useAuthContext";
import CreateItem from "./components/CreateItem";
import MyItems from "./pages/MyItems";
import MyBids from "./pages/MyBids";
import Notifications from "./pages/Notifications";
import AboutUs from "./pages/AboutUs";

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
          <Route path="/my_items" element={user ? <MyItems /> : <Login />} />
          <Route path="/my_bids" element={user ? <MyBids /> : <Login />} />
          <Route
            path="/notifications"
            element={user ? <Notifications /> : <Login />}
          />
          <Route path="/about_us" element={user ? <AboutUs /> : <Login />} />
          <Route
            path="/create_item"
            element={user ? <CreateItem /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
