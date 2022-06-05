import Footer from "../components/Footer";
import Problema from "../img/problema.jpg";
import Equipo from "../img/equipo.jpg";

const AcercaDe = () => {
  return (
    <>
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div className="absolute top-0 w-full h-full bg-center bg-cover bg-[url('/src/img/ill_header.png')]"></div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl"></h1>
                <p className="mt-4 text-lg text-gray-200"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-white pb-20 -mt-24">
        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Problema
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
              A medida que se va produciendo el inevitable cambio evolutivo en
              la vida de las personas, y se pasa del estado adulto a la tercera
              edad, comienza a producirse un deterioro más lento o rápido en la
              calidad de vida
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4 ">
              Dependiendo de aspectos como la genética, tipo de vida anterior,
              circunstancias puntuales, y otras muchas variables, que cuando
              menos generan una serie de reconocidos problemas de las personas
              mayores.
            </p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-500">
              <img
                alt="..."
                src={Problema}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                {/* <h4 className="text-xl font-bold text-white">
                  Top Notch Services
                </h4>
                <p className="text-md font-light mt-2 text-white">
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens.
                </p> */}
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className=" text-white relative">
        <div className="flex flex-wrap items-center mt-2">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Justificacion
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
              La manera en la cual se puede solucionar es en la implementación
              de una API que pueda alertar los problemas que se comentaron
              anteriormente, una forma sería generar un sonido mediante un
              sensor que en cuanto se aproxime un objeto este mismo emite un
              ruido de alerta para que tenga precaución. Es posible hacer
              modificaciones dependiendo la petición o recomendación del usuario
              ya sea si necesita enviar una notificación o mandarlo al sistema
              de Google Assistant para hacer un comunicado.
            </p>
            <p className="text-lg font-light leading-relaxed mt-0 mb-4"></p>
          </div>

          <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-500">
              <img
                alt="..."
                src={Equipo}
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-white">Quienes somos</h4>
                <p className="text-md font-light mt-2 text-white">
                  Somos un grupo de estudiantes de la Universidad de Colima de
                  la Facultad de Ingeniería Electromécanica que a partir de un
                  proyecto orientado a IoT creamos una andadera inteligente, con
                  la finalidad de aplicar conceptos sobre IoT asi como algunos
                  conocimientos de electronica.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AcercaDe;
