import { BrowserRouter, Routes, Route } from "react-router-dom";

//? imports Header
//!Navbar
import Navbar from './components/Header/NavBar/Navbar'
//!Navbar
//? imports Header

//? imports main
//! Componente Inicio
import Nosotros from './components/Main/ComponentsNosotros/Nosotros'
//! Componente Inicio

//! Componente Nosotros (info de la empresa)
import Empresa from "./components/Main/ComponentsEmpresa/Empresa";
//! Componente Nosotros (info de la empresa)

//! Componente Servicios
import Servicios from "./components/Main/ComponentsServicios/Servicios";
//! Componente Servicios
//? imports main

//? imports footer
//!componente footer
import Footer from "./components/Footer/Footer";
//!componente footer
//? imports footer
import './App.css'

function App() {

  return (

    //! PAGINA PRINCIPAL, ACA VAN A IR TODOS LOS COMPONENTES DE LA PAGINA EN GENERAL

    <BrowserRouter>

      <Navbar/>

      <Routes>
        
        <Route path="/" element={<Nosotros />}/> {/* este se inicia la iniciar por primera vez la pagina */}
        <Route path="/category/empresa" element={<Empresa />}/>
        <Route path="/category/servicios" element={<Servicios />}/>

      </Routes>

      <Footer/>

    </BrowserRouter>

    //! PAGINA PRINCIPAL, ACA VAN A IR TODOS LOS COMPONENTES DE LA PAGINA EN GENERAL

  )
}

export default App
