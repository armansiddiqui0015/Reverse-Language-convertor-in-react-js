import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { TbSquareRoundedArrowRightFilled } from "react-icons/tb";

import "./App.css";
import { useRef, useState} from "react";

function App() {

  const [chang,setChange] = useState()

  const scanLanguage = useRef();

  const ClickToChangLanguage = () => {
    let convertor = scanLanguage.current.value
      .split(" ")
      .map((word) => {
        let wordCovertor = word.split("").reverse().join("");
        return wordCovertor;
      })
      .join(" ");
      setChange(convertor)
  };

  return (
    <>
      <div>
        <h1>English <TbSquareRoundedArrowRightFilled /> Reverse English</h1>
        <div>
          <input
            ref={scanLanguage}
            style={{
              height: "20px",
              width: "250px",
              padding: "10px",
              fontSize: '20px'
            }}
            name=""
            id=""
          ></input>
        </div>
        <div
          style={{
            fontSize: "40px",
            marginTop: "20px",
          }}
        >
          <TbSquareRoundedArrowDownFilled />
        </div>
        <div>
          <p
            style={{
              height: "20px",
              width: "250px",
              padding: "10px",
              fontSize: '20px'
            }}
          >
            {chang}
          </p>
        </div>
        <div>
          <button onClick={ClickToChangLanguage}>Change</button>
        </div>
      </div>
    </>
  );
}

export default App;
