import './App.css'
import {
  Routes,
  Route,
  NavLink
} from 'react-router-dom'

import ListaProductos from './components/ListaProductos'
import Formulario from './components/Formulario'
import Autenticacion from './components/Autenticacion'
import Almacenamiento from './components/Almacenamiento'

function App() {
  return (
    <>
      <header className="bg-dark text-white">
        <div className="container py-4">
          <h1 className="mb-1">Examen Final</h1>
          <p className="mb-3 text-light">
            Programación de Componentes
          </p>

          <nav className="nav nav-pills gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'text-white'}`
              }
            >
              Productos
            </NavLink>

            <NavLink
              to="/registro"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'text-white'}`
              }
            >
              Registro de clientes
            </NavLink>

            <NavLink
              to="/acceso"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'text-white'}`
              }
            >
              Acceso
            </NavLink>

            <NavLink
              to="/archivos"
              className={({ isActive }) =>
                `nav-link ${isActive ? 'active' : 'text-white'}`
              }
            >
              Archivos
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<ListaProductos />} />
          <Route path="/registro" element={<Formulario />} />
          <Route path="/acceso" element={<Autenticacion />} />
          <Route
            path="/archivos"
            element={<Almacenamiento />}
          />
        </Routes>
      </main>

      <footer className="bg-light border-top py-3 mt-5">
        <div className="container text-center text-secondary">
          Aplicación desarrollada con React, Bootstrap y Firebase
        </div>
      </footer>
    </>
  )
}

export default App