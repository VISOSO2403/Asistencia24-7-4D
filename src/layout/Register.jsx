import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Google from "../img/google.svg";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate('/Login');
    } catch (error) {
      // console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo invalido");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener más de 6 caracteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Correo duplicado");
      }
    }
  };

  const handleChecbox = (e) => {
    e.preventDefault
  } 

  return (
    <>
      <div className="h-screen fondo-login flex flex-nowrap bg-[url('./img/register&login.png')] bg-no-repeat">
        <div className="text-black w-full max-w-xs m-auto py-32 ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-gray-400 text-center mb-3 font-bold">
                <small>Ingresa tus credenciales</small>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="tucorreo@company.com"
                    className="border-0 px-3 py-3 placeholder-gray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleChange}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={handleChange}
                  />
                </div>
                <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-gray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-600">
                        Acepto los {" "}
                        <a
                          href='/Terminos'
                          className="text-blue-500"
                          onClick={handleChecbox}
                        >
                          Terminos y condiciones
                        </a>
                      </span>
                    </label>
                  </div>
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="text-white my-4 text-sm flex justify-between px-3 ">
            ¿Ya tienes una cuenta?
            <Link to="/Login" className="text-white hover:text-blue-900">
              Inicia sesion
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register