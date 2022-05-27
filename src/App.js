import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/Menu";
import { auth, onAuthStateChanged } from "./lib/firebase-config";
import {useState} from "react"
import { logDOM } from "@testing-library/react";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      setIsLogedIn(user);
    } else {
      console.log(user);
      setIsLogedIn(null);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogedIn ? <Navigate to="/menu"/> : <Login replace />} />
        <Route path="/signUp" element={ isLogedIn ? <Navigate to="/menu" />: <SignUp replace/> } />
        <Route path="/menu" element={ isLogedIn ? <Menu />:<Navigate to="/" replace/> } />
        {/* <Route path="/menu/order" element={<Order />} />
      <Route path="/kitchen/order/:id" element={<Kitchen />} />
      <Route path="/kitchen/order/List" element={<OrderList />} />
      <Route path="/personal" element={<Personal />} />
      <Route path="/products" element={<Products />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
