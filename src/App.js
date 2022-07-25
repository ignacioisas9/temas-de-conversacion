import { useState } from "react";
import Select from "./Selection";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [question, setQuestion] = useState("")

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    setQuestion(Select())
    return question;
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* <div className="relative m-0 h-screen w-screen flex justify-center items-center">
        <div className="relative w-3/4 h-2/3 transition transform bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-500 rounded-2xl border-4 border-pink-300">
          <button className="absolute w-full h-full" onClick={Select}></button>
          <div className=""></div>
        </div>
      </div> */}
      <button onClick={handleClick}>
        <div className="relative w-60 h-96 transition transform bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-500 rounded-2xl border-4 border-pink-300">
        </div>
      </button>
      <button onClick={handleClick}>
        <div className="relative w-60 h-96 rounded-2xl border-4 border-pink-300">
          <div className="absolute px-10 py-36">{question}</div>
        </div>
      </button>
    </ReactCardFlip>
  );
};

export default CardFlip;
