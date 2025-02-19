import { app } from "@/atoms/kuepa";
import { useEffect, useState, FormEvent } from "react";

import { Register } from "@/services/register";
import Swal from "sweetalert2";
export interface LeadsProps {}

export default function register(props?: LeadsProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firtName, setFirtName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    app.set({
      ...(app.get() || {}),
      app: "kuepa",
      module: "register",
      window: "crm",
      back: null,
      accent: "purple",
      breadcrumb: [
        {
          title: "register",
          url: "/register",
        },
      ],
    });
  }, []);
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    const users = {
      username: username,
      password: password,
      number: number,
      profile: {
        first_name: firtName,
        last_name: lastName,
      },
      homes: [
        {
          app: "kuepa",
          roles: [],
          current: true,
        },
      ],
    };

    const register = new Register("/auth");

    const response = await register.register(users);
    if (response.code == 200) {
      Swal.fire({
        title: "REGISTRO GUARDADO CON EXITO",
        text: "Felicitaciones ahora puedes seleccionar nuestros programas academicos",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      setUsername("");
      setPassword("");
      setFirtName("");
      setLastName("");
      setNumber("");
    } else {
      {
        Swal.fire({
          title: "ERROR EN EL REGISTRO",
          text: "Comunicate con nuestro prestador de servicios",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Registrate en
          </h2>
          <h2 className="text-3xl font-semibold text-red-700 text-center mb-6">
            KUEPA EDUTECH
          </h2>
          <form className="space-y-5" onSubmit={handleRegister}>
            <div>
              <label className="block text-gray-700 font-medium">
                First Name
              </label>
              <input
                type="text"
                value={firtName}
                onChange={(e) => setFirtName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-red-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-red-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-red-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-red-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none hover:border-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition-all"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
