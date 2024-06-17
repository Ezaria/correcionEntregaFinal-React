
import { Link } from 'react-router-dom'

function Error404() {
    return(
    <section className="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">

                <h2 className="d-flex justify-content-center align-items-center gap-2 mb-4 display-1 fw-bold">
                  404
                </h2>

                <h3 className="h2 mb-2">Oops! Te perdiste</h3>

                <p className="mb-5">La pagina que estas buscando no existe</p>
                <Link to={"/"}className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" href="#!" role="button">Back to Home</Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Error404;