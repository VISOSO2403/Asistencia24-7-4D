import { useState } from "react"
import { useAuth } from "../context/authContext";
import Logo from '../img/logo-liso.png'

const NavBar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false)
  const Links = [
    {name: "INICIO", link:"/"},
    {name: "ACERCA DE", link:"/AcercaDe"}
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error)
    }
  };

  const handleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className=' shadow-md w-full fixed top-0 left-0'>
      <div className="cointainer mx-auto ">
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                        text-gray-800 transition transform 2xl:hover:scale-125 ">
            <span>
              <img 
                src={Logo} 
                alt="Logo" 
                className="bg-left-top w-20 ml-5 rounded-full" 
              />
            </span>
            Asistencia 24-7
          </div>
          <div 
            onClick={handleMenu}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
                          bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                            transition-all duration-500 ease-in 
                            ${open ? "top-20 opacity-100":"top-[-490px] md:opacity-100 opacity-0"} `}>
              {
                Links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                    <a href={link.link} className="text-gray-800 hover:text-gray-400  
                                                    transition block transform 2xl:hover:scale-125 duration-500">{link.name}</a>
                  </li>
                ))
              }
              <button onClick={handleLogout} className="bg-indigo-600 text-white font-bold py-2 
                                                          px-6 rounded md:ml-8 hover:bg-indigo-400 
                                                          transition block transform 2xl:hover:scale-125 duration-500">
                CERRAR SESIÓN
              </button>
            </ul>
            
          </div>
        </div>          
    </div>
  )
}

export default NavBar