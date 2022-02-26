import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Home from './views/home/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
