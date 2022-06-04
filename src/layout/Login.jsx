import { useState } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Google from "../img/google.svg";
import Footer from "../components/Footer";
import { Alert } from "../components/Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/Home");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/user-not-found") {
        setError("Usuario o contraseña incorrecto");
      } else if (error.code === "auth/invalid-email") {
        setError("Correo invalido");
      } else if (error.code === "auth/wrong-password") {
        setError("Correo o contraseña incorrecto");
      }
      setError(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/Home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="bg-[url('./img/register&login.png')] "> 
        <div className="text-white w-full max-w-xs m-auto py-11">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
          {error && <Alert message={error} />}
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className=" text-gray-500 text-sm font-bold">
                  Inicia sesion con
                </h6>
              </div>
              <div className="text-center">
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="bg-white active:bg-slate-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                >
                  <img alt="Google" className="w-5 mr-1" src={Google} />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-400 text-center mb-3 font-bold">
                <small>O ingresa tus datos</small>
              </div>
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
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-gray-800 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  >
                    Iniciar sesion
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className="text-white my-4 text-sm flex justify-between px-3 ">
            ¿No tienes una cuenta?
            <Link to="/Register" className="text-white hover:text-blue-900">
              Registrate
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
