import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section about">
            <img src="/img/logo/logo.png" alt="logo" width={150} />
            <p>
              Somos especialistas en entender las necesidades de tu empresa y
              llevarlas a soluciones reales con diseños perdurables y
              tecnologías de vanguardia.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Enlaces</h3>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Acerca de</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contacto</h3>
            <p>
              <strong>Teléfono:</strong> +54 9 3434 06-7373
            </p>
            <p>
              <strong>Email:</strong> info@cuantico.com.ar
            </p>
            <p>
              <strong>Dirección:</strong> Calle Falsa 123, Ciudad, País
            </p>

            <hr />

            <p>
              <strong>Socios de:</strong> <a href="https://polotecparana.com.ar/">Polo tecnologico del Paraná</a>, <a href="https://cessi.org.ar/">CESSI</a>
            </p>

          </div>
          <div className="footer-section social">
            <h3>Síguenos</h3>
            <a href="#">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2021 Cuantico | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
