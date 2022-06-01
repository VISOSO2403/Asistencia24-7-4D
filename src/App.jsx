import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Home from "./pages/Home"
import AcercaDe from "./pages/AcercaDe"
import Contacto from "./pages/Contacto"
import Terminos from "./pages/Terminos"
import Login from './layout/Login'
import Register from './layout/Register'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/authContext'

function App() {

  return (
    <div  className="bg-slate-800">
      <BrowserRouter>
        <AuthProvider>
          <Routes>

            <Route>
              <Route
                path='/Home' 
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path='/' element={<Inicio />} />
            </Route>

            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/AcercaDe' element={<AcercaDe />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Terminos' element={<Terminos />} />
            
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
