import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiBco from "./utils/configuration"
function App() {


  interface Producto {
    idProducto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    fechaCreacion: string;
    estado: boolean;
  }


    const [listProductos, setListProductos] = useState<Array<Producto>>([])

  const api = async () => {
    try {
  
      const response = await apiBco.get('/Productos/productosList')
      const data = response.data
      setListProductos(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log('API URL:', import.meta.env.VITE_API_URL); // Debería mostrar la URL de la API


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button
      onClick={api}
      >
        Consultar Api
      </button>
      <br>
      </br>
      Respuesta de la Api
      <ul>
        {listProductos.map((item: Producto) => {
          
          return (
            <li key={item.idProducto}>
              {item.nombre} - {item.descripcion} - {item.precio} - {item.cantidad} - {item.fechaCreacion} - {item.estado}
            </li>
            
          )

        })}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
