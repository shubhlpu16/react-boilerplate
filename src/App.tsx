import { Route, Routes } from 'react-router-dom'
import Home from '@/routes/home'

function App() {
  return (
    <Routes>
      <Route path="/a" element={<Home />} />
    </Routes>
  )
}

export default App
