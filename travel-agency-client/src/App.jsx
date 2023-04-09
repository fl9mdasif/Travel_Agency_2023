import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home/Home'
import Navbar from './Components/Shared/Navbar';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  )
}
export default App;