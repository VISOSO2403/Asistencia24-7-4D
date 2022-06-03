import React from 'react'
import  { Link } from 'react-router-dom'
import Logo from '../img/logo-liso.png'

const Footer = () => {
  return (
  <div className=' text-white'>
    <hr />
    <div class="grid grid-cols-2 gap-2 p-5 justify-center text-center ">
      <div className=''>
        <img
            src={Logo} 
            alt="Logo" 
            className=" w-20 rounded-full mx-auto" 
          />
        <span className='font-bold text-2xl '>
          Asistencia 24/7
        </span>
        <p>
          <small>
            ©2022-2025
          </small>
        </p>
        <p className='text-center'>
          <small>
            Este sitio podrá ser citado mientras no sea con fines de lucro, únicamente colocando su respectiva fuente y dirección electrónica. De otra manera, se solicitará presentar un permiso previamente escrito de la respectiva institución.
          </small>
        </p>
      </div>

      <div className=' grid grid-cols-3 items-center'>
        <Link to='/AcercaDe' className='text-gray-400 hover:text-gray-300 duration-500 md:ml-8 text-xl md:my-0 my-7' >Acerca de...</Link>

        <Link to='/Contacto' className='text-gray-400 hover:text-gray-300 duration-500 md:ml-8 text-xl md:my-0 my-7'>Contacto  </Link>

        <Link to='/Terminos' className='text-gray-400 hover:text-gray-300 duration-500 md:ml-8 text-xl md:my-0 my-7'>Terminos y condiciones</Link>
      </div>
    </div>
    <div>
      
    </div>
  </div>
  )
}

export default Footer