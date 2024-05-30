import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      {/* Barra de navegacion principal de la pagina */}

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* logo general de la pagina */}
          <Link to="/" className="nav-link">
            <img src="/img/logo/logo.png" alt="logo-general" width={150} />
          </Link>
          {/* logo general de la pagina */}

          {/* boton desplegable al achicar la pagina */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* boton desplegable al achicar la pagina */}

          <div className="collapse navbar-collapse" id="navbarNav">
            {/* botonera principal del navbar */}

            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/category/empresa" className="nav-link hre">
                  Nosotros
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/category/servicios" className="nav-link">
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Disabled
                </a>
              </li>
            </ul>

            {/* botonera principal del navbar */}

            {/* boton de presupuesto del navbar */}
            <button className="btn btn-primary">Presupuesto</button>
            {/* boton de presupuesto del navbar */}
          </div>
        </div>
      </nav>

      {/* Barra de navegacion principal de la pagina */}
    </div>
  );
};

export default Navbar;
