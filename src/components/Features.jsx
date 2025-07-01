export default function Features() {
  return (
    <section id="features" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-4">Características principales</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Fácil de usar</h5>
                <p className="card-text">Una interfaz simple y amigable que te permite comenzar rápidamente.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Diseño responsivo</h5>
                <p className="card-text">Adaptado a cualquier dispositivo, desde móviles hasta pantallas grandes.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Tecnología moderna</h5>
                <p className="card-text">Desarrollado con React y Bootstrap para rendimiento y estilo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
