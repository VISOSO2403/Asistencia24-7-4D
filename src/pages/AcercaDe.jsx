import Problema from '../img/problema.jpg'

const AcercaDe = () => {
  return (
    < > 
      <div className=' text-slate-400 text-justify p-5 text-lg'>

        <h1 className=' font-serif text-7xl text-slate-200'>Acerca de</h1><br/><br/>

        <div className=" flex flex-row">
          
          <div className=" basis-1/2">

            <h2 className=' font-serif text-4xl text-slate-200'>Problema</h2><br/>  
            <p>
              <img src={Problema} className=" rounded-3xl float-right h-50 w-80 p-2" /> 
              A medida que se va produciendo el inevitable cambio evolutivo en la vida de las personas, 
              y se pasa del estado adulto a la tercera edad, comienza a producirse un deterioro más lento 
              o rápido en la calidad de vida, dependiendo de aspectos como la genética, tipo de vida anterior, 
              circunstancias puntuales, y otras muchas variables, que cuando menos generan una serie de 
              reconocidos problemas de las personas mayores.<br />
            </p><br />
            
          </div>

          <div className=' basis-1/2 pl-5'>
            <h2 className=' font-serif text-4xl text-slate-200'>Justificación</h2><br/>
            
            <p>
              Somos un grupo de estudiantes de la Universidad de Colima de la Facultad de Ingeniería 
              Electromécanica que a partir de un proyecto orientado a IoT creamos una andadera 
              inteligente, con la finalidad de aplicar conceptos sobre IoT asi como 
              algunos conocimientos de electronica.
              <br /> <br /> 
            </p>

          </div>
        </div>

      </div>

    </>
  )
}

export default AcercaDe