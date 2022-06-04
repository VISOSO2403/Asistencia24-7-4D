import React from 'react'

const Bienvenida = () => {
  return (
    <section className="header relative items-center flex h-screen max-h-860-px bg-slate-500
                        top-0 b-auto right-0 pt-16 mt-48 sm:mt-0 max-w-screen-2xl max-h-860px 
                        bg-[url('/src/img/pattern_react.png')]">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4 bg-white ">
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
                <a
                  href="/Login.jsx"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Iniciar sesión
                </a>
                <a
                  href="#"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  target="_blank"
                >
                  Registrarse
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
  )
}

export default Bienvenida