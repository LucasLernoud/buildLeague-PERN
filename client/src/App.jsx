import { Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Login } from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Homepage />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}

export default App
