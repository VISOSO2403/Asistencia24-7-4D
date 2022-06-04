import { Link } from "react-router-dom"

const Bienvenida = () => {
  return (
    <section className="bg-[url('/src/img/inicio.png')] w-screen bg-cover bg-no-repeat 
    text-white relative items-center flex h-screen">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 ">
            <div className="pt-32 sm:pt-0 "> 
              <h2 className="font-semibold text-4xl text-blueGray-600 ">
                ¡Bienvenido a asistencia 24/7!
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500 text-justify">
                La aplicación que te ayudará a estar pendiente de tus seres queridos 
                y monitorear su salud.
              </p>
              <div className="mt-12">
                <Link
                  to="/Login"
                  className="get-started text-white font-bold px-6 py-4 hover:bg-white hover:text-slate-800  rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Iniciar sesión
                </Link>
                <Link
                  to="/Register"
                  className="github-star ml-1 text-white font-bold px-6 py-4 hover:bg-white hover:text-slate-800 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
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