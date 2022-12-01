import { useEffect, useState } from "react";
import Credits from "./components/Credits";
import Puzzle from "./components/Puzzle";
import { updateURLParameter } from "./logic";

function App() {
  const [imgUrl, setImgUrl] = useState("");

  const handleImageChange = (e: any) => {
    setImgUrl(e.target.value);
    window.history.replaceState(
      "",
      "",
      updateURLParameter(window.location.href, "img,", e.target.value)
    );
  };
  useEffect(() => {
    const urlParams: any = new URLSearchParams(window.location.search);
    if (urlParams.has("img")) {
      setImgUrl(urlParams.get("img"));
    }
  }, []);
  return (
    <div className="bg-gray-800 flex flex-col justify-between h-screen">
      <div className="flex flex-col items-center justify-center ">
        <Puzzle imgUrl={imgUrl}></Puzzle>
        <div className="sm:min-w-320 ">
          <input
            className="w-full text-white bg-gray-900 font-mono  border-2 rounded-xl px-2 py-1 "
            type="text"
            value={imgUrl}
            onChange={handleImageChange}
            placeholder="Enter Image Link here !!"
          />
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default App;
