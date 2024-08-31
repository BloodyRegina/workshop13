import './App.css'
import './index.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Details from './pages/Details'


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Details/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact/:name' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
