<<<<<<< HEAD
import React from 'react';
import { useState } from "react";
=======

import React, { useState } from "react";
>>>>>>> 6ae6fefd02b8773f6b83b70b1de82258d19729fa
import { getAuth, onAuthStateChanged } from "./lib/firebase-config";
import GlobalRouter from "./routers/GlobalRouters";


function App() {
  const [isAuth, setIsAuth] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user);
    } else {
      setIsAuth(null);
    }
  });
  return (
    
    <section>
      <GlobalRouter isAuth={isAuth} />
    </section>

  );
}
export default App;
