import './index.css'
import Home from './Component/Home'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Restaurant from './Component/Restaurant';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/restaurants' element={<Restaurant/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
