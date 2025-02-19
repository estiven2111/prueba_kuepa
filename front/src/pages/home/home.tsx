import { app } from "@/atoms/kuepa"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export interface HomeProps {
}

export default function Home (props?: HomeProps) {

   const location = useNavigate();


  useEffect(() => {
    app.set({
      ...(app.get() || {}),
      app: 'kuepa',
      module: 'home',
      window: 'crm',
      back: null,
      accent: 'slate',
      breadcrumb:[
        {
          title: 'Home',
          url: '/home'
        }
      ]
    })
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
     location(`/register`)
  }



  return (
    <>
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-orange-600 m-5">BIENVENIDO A </h1>
        <h1 className="text-4xl font-bold text-red-700">KUEPA EDUTECH</h1>
        <h2 className="text-2xl text-gray-700 mt-2">Innovate Technologies, Smarter Education</h2>
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all"onClick={(e)=>{handleLogin(e)}}>
          Ir a registro
        </button>
      </div>
    </>
  )
}