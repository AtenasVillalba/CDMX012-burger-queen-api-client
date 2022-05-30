import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Menu from "./components/Menu";
import {
  auth,
  onAuthStateChanged,
  db,
  getFirestore,
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
  onSnapshot,
} from "./lib/firebase-config";
import { useEffect, useState } from "react";
import { EmailAuthCredential, getAuth } from "firebase/auth";
import { async } from "@firebase/util";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(null);

  const getRol = async () => {
    const q = query(
      collection(db, "profile"),
      where("email", "==", auth.currentUser.email)
    );
    const querySnapshot = await getDocs(q);
    const role = querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const role = doc.data().rol;
    });
    return role;
  };

  useEffect(() => {
    getRol();
  }, [isLogedIn]);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userRol = getRol();
      console.log(userRol);
      const userData = {
        displayName: user.displayName,
        uid: user.uid,
        email: user.email,
        rol: userRol,
      };
      console.log(userData);
      setIsLogedIn(userDa);
    } else {
      console.log(user);
      setIsLogedIn(null);
    }
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogedIn ? <Navigate to="/menu" /> : <Login replace />}
        />
        <Route
          path="/signUp"
          element={isLogedIn ? <Navigate to="/menu" /> : <SignUp replace />}
        />
        <Route
          path="/menu"
          element={isLogedIn ? <Menu /> : <Navigate to="/" replace />}
        />
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
