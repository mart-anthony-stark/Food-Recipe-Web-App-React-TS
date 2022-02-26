import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Home from './views/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
