import Footer from "../components/Footer";
import Joss from "../img/joss.jpeg";
import Oliver from "../img/oliver.jpeg"
import Francisco from "../img/francisco.jpeg"

const Contacto = () => {
  return (
    <div>
      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24 border-4">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-2x1 font-semibold text-white">CEO de la empresa</h2>
              <p className="text-2x1 font-semibold text-white">
              “El único día fácil fue ayer.”
              </p>
            </div>
          </div>
        </div>

        <div>
          {/* Aqui inicia el recuadro del perfil */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="nosotros"
                  src={Oliver}
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                ></img>
              </div>
              <div className="pt-6 text-center">
                <h5 className="text-x1 font-bold text-white">Oliver Visoso</h5>
                <p className="mt-1 text-sm uppercase font-semibold text-white">
                  rol que desempeña
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="nosotros"
                  src={Joss}
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                ></img>
              </div>
              <div className="pt-6 text-center">
                <h5 className="text-x1 font-bold text-white">Josselin</h5>
                <p className="mt-1 text-sm text-white uppercase font-semibold">
                  rol que desempeña
                </p>
              </div>
            </div>
            {/* Aqui termina recuadro del perfil */}
            <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="nosotros"
                  src=""
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                ></img>
              </div>
              <div className="pt-6 text-center">
                <h5 className="text-x1 font-bold text-white">Ivanna Torres</h5>
                <p className="mt-1 text-sm text-white uppercase font-semibold">
                  rol que desempeña
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="nosotros"
                  src=""
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                ></img>
              </div>
              <div className="pt-6 text-center">
                <h5 className="text-x1 font-bold text-white">Ernesto Jimenez</h5>
                <p className="mt-1 text-sm text-white uppercase font-semibold">
                  rol que desempeña
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="nosotros"
                  src={Francisco}
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                ></img>
              </div>
              <div className="pt-6 text-center">
                <h5 className="text-x1 font-bold text-white">Alejandro Escobar</h5>
                <p className="mt-1 text-sm text-white uppercase font-semibold">
                  rol que desempeña
                </p>
              </div>
            </div>
          </div>
          {/* Aqui termina recuadro del perfil */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacto;
