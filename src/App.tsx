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

        <Suspense fallback={<></>}>
          <Router>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </Router>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
