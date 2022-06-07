import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Home = () => {

  return (
    <div className="text-white">
      {/* Inyeccion del NavBar.jsx */}
      <NavBar />
      <div className="font-bold 2xl:text-3xl sm:text-2xl items-center text-center w-full mx-auto overflow-hidden pt-36  pb-10 ">
        <h1 className="">Datos de los parametros recibidos</h1>
          <p className=" 2xl:pb-10 sm:pb-5">Visualización de estadísticas</p>
          <hr />
          <br />
          <section className=" flex flex-col items-center pb-5">
          <iframe width="50%" height="450"  src="https://industrial.ubidots.com/app/dashboards/public/widget/jcwwM437Wm6aUA5IBDQa7IcWjHDfzwAsyglXx3ZE6vA?embed=true"></iframe>
          </section>
          <section className="flex flex-col items-center">
            {/* BMP */}
            <iframe 
              width="90%" 
              height="500" 
              src="https://industrial.ubidots.com/app/dashboards/public/widget/Fo-FRKbItBlZrhjeb3TGFeL7H-ySkZh5EG7K8IQtq7M?embed=true"></iframe>
          </section>

          <section className="p-20 grid grid-cols-2 gap-10 justify-center">

              <h2>Frecuencia cardiaca:
              {/* BPM */}
              <iframe 
                className=""
                width="100%" 
                height="300"
                src="https://industrial.ubidots.com/app/dashboards/public/widget/70Lp0g0z8zGTM3K8Kywg4xRq5Wwcpw4CfybMn-AtTvM?embed=true" 
              />
              </h2>

              <h2>Nivel de oxigeno en la sangre:
                {/* SP02 */}
              <iframe 
                width="100%" 
                height="300" 
                src="https://industrial.ubidots.com/app/dashboards/public/widget/RJI5AWezSbIbOo__jqSUBRMTGCAB2NYnTgGXpqnGKow?embed=true" 
              />
              </h2>
          </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;