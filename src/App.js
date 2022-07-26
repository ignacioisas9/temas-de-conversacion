import { useState } from "react";
import Select from "./Selection";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [question, setQuestion] = useState("")

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (!isFlipped) {
      setQuestion(Select())
    }
    return question;
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <button onClick={handleClick}>
        <div className="font-serif text-white flex items-center justify-center w-60 h-96 px-10 text-2xl transition transform bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-500 rounded-2xl border-4 border-pink-300">
        TEMAS DE CONVERSACIÓN</div>
      </button>
      <button onClick={handleClick}>
        <div className="flex items-center justify-center w-60 h-96 rounded-2xl border-4 border-pink-300">
          <div className="font-serif text-xl px-2 text-black">{question}</div>
        </div>
      </button>
    </ReactCardFlip>
  );
};

export default CardFlip;
