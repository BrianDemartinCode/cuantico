import "./Puntaje.css";

const Puntaje = () => {
  return (
    <div>
      <div className="container-puntaje">
        <div className="puntaje">
          <img src="/img/puntaje/250.png" width={100} />
          <h4>Clientes</h4>
        </div>

        <div className="puntaje">
          <img src="/img/puntaje/5000.png" width={100} />
          <h4>Usuarios</h4>
        </div>

        <div className="puntaje">
          <img src="/img/puntaje/25.png" width={100} />
          <h4>Rubros</h4>
        </div>

        <div className="puntaje">
          <img src="/img/puntaje/3.png" width={100} />
          <h4>Versiones</h4>
        </div>

        <div className="puntaje">
          <img src="/img/puntaje/150.png" width={100} />
          <h4>Funcionalidades</h4>
        </div>
      </div>
    </div>
  );
};

export default Puntaje;
