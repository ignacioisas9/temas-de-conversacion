import { createContext, useState } from "react";
import Select from "./Selection";
import ReactCardFlip from "react-card-flip";
import image from './assets/conversaciones.png'
import ReactSwitch from 'react-switch'

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
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div id={theme} className="flex items-center justify-center min-h-screen min-w-[100vh]">
        <div className="absolute top-2 right-2">
          <label className="align-top text-lg"> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
        </div>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <button onClick={handleClick}>
            <div className="font-serif text-white flex items-center justify-center w-60 h-96 px-10 text-2xl transition transform bg-gradient-to-br from-yellow-300 via-purple-500 to-blue-500 rounded-2xl border-4 border-pink-300">
              <img alt="img" src={image}></img>
            </div>
          </button>
          <button onClick={handleClick}>
            <div className="flex items-center justify-center w-60 h-96 rounded-2xl border-4 border-pink-300 bg-gradient-to-br from-pink-300 via-pink-200 to-pink-300">
              <div className="font-serif text-3xl px-2 text-white">{question}</div>
            </div>
          </button>
        </ReactCardFlip>
      </div>
    </ThemeContext.Provider>
  );
};

export default CardFlip;
