import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Bienvenida from './layout/Bienvenida'
import Login from './layout/Login'
import Register from './layout/Register'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/authContext'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route 
            path='/'
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route path='/Bienvenida' element={<Bienvenida />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
          
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
