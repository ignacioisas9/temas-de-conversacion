import { useState } from "react";
import Select from "./Selection";

function App() {
  const [state, setState] = useState(false) //true: card-face, false:card-back
  return (
    <div className="relative m-0 h-screen w-screen flex justify-center items-center">
      <div className="relative w-3/4 h-2/3 transition transform bg-gradient-to-r from-yellow-300 via-purple-500 to-blue-500 rounded-2xl border-4 border-pink-300">
        <button className="absolute w-full h-full" onClick={Select}>
        </button>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
