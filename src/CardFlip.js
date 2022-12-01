import { createContext, useState } from "react"
import Select from "./Selection"
import ReactCardFlip from "react-card-flip"
import image from './assets/conversaciones.png'
import ReactSwitch from 'react-switch'
import sun from './assets/sun.png'
import moon from './assets/moon.png'

export const ThemeContext = createContext(null)

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [question, setQuestion] = useState("")
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setQuestion(Select())
    }
    return question;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="flex flex-col items-center justify-center min-h-screen w-screen">
        {/* Toggle */}
        <div className="absolute top-2 right-2">
          <div className="flex flex-row"> {theme === "light" ? <img src={sun} alt="" className="w-8 mr-2" /> : <img src={moon} alt="" className="w-8 mr-2" />}
            <ReactSwitch onChange={toggleTheme} checked={theme === "light"} className="" />
          </div>
        </div>
        {/* Card */}
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className="font-serif text-white flex items-center justify-center w-60 h-96 px-10 text-2xl transition transform bg-gradient-to-br from-yellow-300 via-purple-500 to-indigo-500 rounded-2xl border-4 border-pink-300">
              <img alt="img" src={image}></img>
            </div>
          </button>
          <button onClick={handleClick}>
            <div className={`flex items-center justify-center w-60 h-96 rounded-2xl border-4 bg-gradient-to-br ${theme === "light" ? "from-amber-200 via-amber-100 to-amber-200 border-amber-400" : "from-indigo-600 via-indigo-500 to-indigo-600 border-indigo-400"}`}>
              <div className={`font-serif text-3xl px-2 ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>{question}</div>
            </div>
          </button>
        </ReactCardFlip>
        <p className={`fixed bottom-0 font-serif text-xl ${theme === "light" ? "text-gray-700" : "text-gray-200"}`}>Powered by Ignacio Isas &#9884;</p>
      </div>
    </ThemeContext.Provider>

  );
};

export default CardFlip;
