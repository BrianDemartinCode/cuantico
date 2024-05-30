import "./QueHacemos.css";

const QueHacemos = () => {
  return (
    <div>
      <div className="container-hacemos">

        <div className="box-hacemos">

          <h2 className="title-hacemos">¿Que hacemos?</h2>

          <p className="parrafo-hacemos">
            Nuestra prioridad es la satisfacción de nuestros clientes y la
            atención permanente, construyendo así relaciones a largo plazo,
            donde la proactividad y responsabilidad para brindar soluciones
            estables y perdurables son nuestros objetivos más importantes.
          </p>
          <br />
          <p className="parrafo-hacemos">
            Brindamos consultoría y asesoramiento en diversas áreas tecnológicas
            y procesos administrativos y contables. Aportamos a su organización
            un alto grado de inteligencia comercial, capacidad operativa y
            optimización de procesos.
          </p>
          <br />
          <p className="parrafo-hacemos">
            Nuestro conocimiento y experiencia, tanto en tecnología como en
            procesos comerciales, nos permiten una perspectiva sistémica de toda
            la organización, logrando así optimizar procesos y circuitos
            administrativos integrando herramientas tecnológicas para evitar
            reprocesos, perdidas de tiempo y errores humanos.
          </p>

        </div>

        <div className="box-img">

          <img className="img-hacemos" src="/img/media/servicio-al-cliente.png" alt="cliente"/>

        </div>

      </div>
    </div>
  );
};

export default QueHacemos;
