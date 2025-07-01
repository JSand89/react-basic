export default function Testimonials() {
  return (
    <section id="testimonios" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Opiniones de usuarios</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">“Una experiencia muy sencilla y práctica. Ideal para proyectos pequeños.”</p>
                <h6 className="card-subtitle text-muted text-end">– Laura G.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">“Muy útil para aprender a usar Bootstrap con React.”</p>
                <h6 className="card-subtitle text-muted text-end">– Andrés P.</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <p className="card-text">“Me encantó la estructura modular, todo muy claro.”</p>
                <h6 className="card-subtitle text-muted text-end">– Camila R.</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}