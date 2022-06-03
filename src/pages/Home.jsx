import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div>
      {/* Inyeccion del NavBar.jsx */}
      <NavBar />
      <div className="font-bold 2xl:text-3xl sm:text-2xl items-center text-center w-full mx-auto overflow-hidden pt-36  pb-10 ">
        <h1 className="">Datos de los parametros recibidos</h1>
          <p className=" 2xl:pb-10 sm:pb-5">Visualización de estadísticas</p>
          <hr />
          <br />
          <section className="flex flex-col items-center">
            {/* BMP */}
            <iframe 
              width="90%" 
              height="500" 
              src="https://stem.ubidots.com/app/dashboards/public/widget/hXTEgLzRARSel0n1r3gVAx-gFqXbJQ-xMVI-JHBhE28?embed=true"></iframe>
          </section>

          <section className="p-20 grid grid-cols-2 gap-10 justify-center">

              <h2>Frecuencia cardiaca:
              {/* BPM */}
              <iframe 
                className=""
                width="100%" 
                height="300"
                src="https://stem.ubidots.com/app/dashboards/public/widget/3e7HA4vuQBMRX4fxj23AvKNfxHmGhWNAOEDPG4e_ZaI?embed=true" 
              />
              </h2>

              <h2>Nivel de oxigeno en la sangre:
                {/* SP02 */}
              <iframe 
                width="100%" 
                height="300" 
                src="https://stem.ubidots.com/app/dashboards/public/widget/9vdfFDqpc5-Csa9U8JDkn-VGQ-6Mqd5p1OdEENyOzHQ?embed=true" 
              />
              </h2>
          </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;