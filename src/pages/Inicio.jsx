import { Link } from "react-router-dom"

const Bienvenida = () => {
  return (
    <section className=" text-white relative items-center flex h-screen max-h-860-pX
                        top-0 b-auto right-0 pt-16 mt-48 sm:mt-0 max-w-screen-2xl max-h-860px 
                        bg-[url('/src/img/inicio.png')] ">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-32 sm:pt-0 ">
              <h2 className="font-semibold text-4xl text-blueGray-600 ">
                ¡Bienvenido a asistencia 24/7!
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Notus React is Free and Open Source. It does not change any of
                the CSS from. It features multiple HTML elements and it comes with dynamic
                components for ReactJS, Vue and Angular.
              </p>
              <div className="mt-12">
                <Link
                  to="/Login"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/Register"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Bienvenida