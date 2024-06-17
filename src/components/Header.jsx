import Carousel from '../components/Carousel.jsx';

function Header({ name }) {
  return (
    <>
      {name ? (
        <div className="hero-content pb-3 mt-5">
          <h1>{name === "women" ? "Productos Mujer 🚴🏼‍♀️" : "Productos Hombre 🚴🏻"}</h1>
          <div className="row">
            <div className="col-xl-8">
              <p className="lead text-muted">
              The latest designs and the newest developments in technological innovation are presented in our new arrivals for {name === "women" ? "Productos Mujer" : "Productos Hombre"} cycling apparel and casual wear. We are continuously releasing new and updated collections to give you the best competitive edge for the upcoming season while pushing the limits of design and aesthetics to redefine the context of modern cycling.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <Carousel />
      )}
    </>
  );
}

export default Header;