import Footer from '../components/Footer'
import Problema from '../img/problema.jpg'

const AcercaDe = () => {
  return (
    < > 
      <div className=' text-slate-400 text-justify p-5'>
        <h1 className=' font-serif text-7xl text-slate-200'>Acerca de</h1><br/><br/>
    
        <h2 className=' font-serif text-4xl text-slate-200'>Problema</h2><br/>

        <div class="flex flex-row">
          <div class="basis-1/4">
            <p>
              A medida que se va produciendo el inevitable cambio evolutivo en la vida de las personas, 
              y se pasa del estado adulto a la tercera edad, comienza a producirse un deterioro más lento 
              o rápido en la calidad de vida, dependiendo de aspectos como la genética, tipo de vida anterior, 
              circunstancias puntuales, y otras muchas variables, que cuando menos generan una serie de 
              reconocidos problemas de las personas mayores.<br />
              <img src={Problema} className="" /><br /> 
            </p>
          </div>
          <div className=' basis-1/4 pl-5'>
            <p>
              Dado que se trata de un tema que todos debemos conocer y entender, para empatizar y ayudar 
              en la medida de lo posible tanto en el cuidado de ancianos de nuestro entorno familiar o más 
              próximo, para dar un trato más correcto al interactuar con personas de la tercera edad en 
              cualquier otra situación. <br /> <br /> 
            </p>
            <p>
              Dado que se trata de un tema que todos debemos conocer y entender, para empatizar y ayudar 
              en la medida de lo posible tanto en el cuidado de ancianos de nuestro entorno familiar o más 
              próximo, para dar un trato más correcto al interactuar con personas de la tercera edad en 
              cualquier otra situación.
              <br /> 
            </p>
          </div>
          <div className='basis-1/2 pl-5'>
            <p>
              Los adultos mayores son de mucha importancia en la sociedad ya que son los que crean una cultura 
              en la sociedad, forman las costumbres y valores de las familias, son las personas encargadas 
              de mantener a las familias unidas transmitiendo su experiencia y sabiduría dando consejos y 
              apoyo emocional, pero con el paso del tiempo van teniendo alteraciones en su salud, por lo 
              que es fundamental cuidar de la salud de ellos, así como ellos cuidaron de sus hijos e inclusive
              nietos. 
              <br /> <br /> 
            </p>
            <p>
              Como sabemos las personas mayores necesitan de mucho cariño, cuidados y atenciones, ya sea que 
              tengan dificultad para ver, caminar e incluso algunas personas pueden olvidar cosas. 
              Es muy importante estar al pendiente de los adultos mayores, puesto que no siempre podemos 
              estar junto a ellos, sin embargo, nunca están del todo solos.
              <br /> <br /> 
            </p>
            <p>
              La pérdida de visión se puede producir en cualquier momento de la vida, pero es un hecho 
              indiscutible que, a mayor edad, el sentido de la vista se reduce como consecuencia del desgaste
              natural, apareciendo enfermedades como mácula, tensión ocular, y cataratas. A la pérdida de 
              visión se añade la pérdida auditiva, que impide escuchar correctamente, malinterpretando 
              información, o anulando en mucho caso la percepción de mensajes, y obligando a hablar más 
              alto al no poder regular la intensidad sin referencia. Por eso es fácil que se produzcan 
              situaciones en las que los mensajes no llegan al anciano, y se deben repetir varias veces. 
              También es frecuente que los ancianos, utilizan un elevado volumen para escuchar la radio y 
              la televisión. Por eso es muy importante tratar de paliar estos problemas de las personas 
              mayores acudiendo a las consultas médicas, y utilizando audífonos.
              <br /> <br /> 
            </p>
          </div>
        </div>
        
        
        
        
        
        <p>
          Por muy bueno que sea el estado de salud de las personas mayores, en general se producen 
          alteraciones de tensión arterial que obligan a regular con el uso de pastillas, también 
          son muy frecuentes los problemas cardiovasculares, que obligan a llevar medicación y 
          acudir a consultas regularmente, además de otro tipo de alteraciones del organismo o 
          patologías particulares. Las personas mayores en general suelen tener pautadas una serie 
          de pastillas y cuidados que les obligan a visitar al médico con bastante frecuencia, sin 
          descartar problemas mayores que requieren el ingreso hospitalario.
          <br /> <br /> 
        </p>



        <h2 className=' font-serif text-4xl text-slate-200'>Justificación</h2><br/>

        <div class="flex flex-row">
          <div class="basis-1/2">
            <p>
              La razón por la cual desarrollamos este proyecto es la inquietud de las personas al cuidar 
              a los adultos mayores, ya que quieren brindar una mejor seguridad al estar los cuidando. 
              Es muy importante ofrecer apoyo puesto que los adultos mayores pueden sufrir daños por algún 
              accidente o suceso en cualquier momento, y es indispensable estar al tanto de ellos en 
              cualquier instante. La mayoría de las personas tienen o conocen a un adulto mayor que necesita 
              algún material de apoyo para sus actividades diarias, muchos problemas que suceden a los 
              adultos mayores es la pérdida de la visión y fuerza, esto es alarmante ya que necesitan un 
              constante apoyo para cualquier tipo de situación o actividad quiera realizar. 
              <br /> <br /> 
            </p>
          </div>
          <div className='basis-1/2 pl-5'>
            <p>
              La manera en la cual se puede solucionar es en la implementación de una API que pueda alertar 
              los problemas que se comentaron anteriormente, una forma sería generar un sonido mediante un 
              sensor que en cuanto se aproxime un objeto este mismo emite un ruido de alerta para que tenga 
              precaución. Es posible hacer modificaciones dependiendo la petición o recomendación del usuario 
              ya sea si necesita enviar una notificación o mandarlo al sistema de Google Assistant para hacer 
              un comunicado.
              <br /> <br /> 
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default AcercaDe