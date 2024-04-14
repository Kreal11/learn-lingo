import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Teachers from "./pages/teachers/Teachers";
import "./styles/App.css";
import NotFound from "./pages/notFound/NotFound";
import Layout from "./layout/Layout";
import Favorites from "./pages/favorites/Favorites";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers />} />
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
