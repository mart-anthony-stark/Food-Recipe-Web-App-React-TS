import { lazy, Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
const Home = lazy(() => import("./views/home/Home"));

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />

        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <Suspense fallback={<>...</>}>
                  <Home />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
