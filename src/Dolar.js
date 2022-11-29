import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Dolar = (id) => {
  const [dolarBlue, setDolarBlue] = useState([0 , 0]) // [compra, venta]
  const API = 'https://www.dolarsi.com/api/api.php?type=valoresprincipales'

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get(API)
        setDolarBlue([response.data[1].casa.compra, response.data[1].casa.venta])
      } catch (error) {
        setDolarBlue()
      }
    })();
  }, []);

  return (
    <div>
      <div id={id} className="fixed bottom-0 left-0 w-screen justify-center text-center font-serif text-xl">
        <div className={`m-3  px-2 ${id === "light" ? "text-black" : "text-white"}`}>Valor del dolar blue</div>
        <span className={`m-3 px-2 ${id === "light" ? "text-black" : "text-white"}`}>Compra</span>
        <span className={`m-3 px-2 ${id === "light" ? "text-black" : "text-white"}`}>Venta</span>
        <div>
          <span className={`m-3 px-2 ${id === "light" ? "text-black" : "text-white"}`}>{dolarBlue[0]}</span>
          <span className={`m-3 px-2 ${id === "light" ? "text-black" : "text-white"}`}>{dolarBlue[1]}</span>
        </div>
      </div>
      <div className="fixed justify-center right-0 top-60">
        <iframe
          title='dolarhoy'
          className="w-60 h-60 rounded-xl shadow flex justify-center border-2"
          src="https://dolarhoy.com/i/cotizaciones/dolar-blue"
          frameborder="0">
        </iframe>
      </div>
    </div>
  )
}

export default Dolar
