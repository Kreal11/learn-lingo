import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Teachers from "./pages/teachers/Teachers";
import "./styles/App.css";
import NotFound from "./pages/notFound/NotFound";
import Layout from "./layout/Layout";
import Favorites from "./pages/favorites/Favorites";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [authUser, setAuthUser] = useState(auth.currentUser);
  console.log(authUser);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout authUser={authUser} />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers authUser={authUser} />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
