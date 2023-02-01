import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, setValue] = useState("");
  const [pre, setPre] = useState("");
  const [op, setOp] = useState("");

  const checkData = () => {
    if (pre === "") return data;
    if (op === "+") {
      return parseInt(pre) + parseInt(data);
    } else if (op === "-") {
      return parseInt(pre) - parseInt(data);
    } else if (op === "x") {
      return parseInt(pre) * parseInt(data);
    } else if (op === "/") {
      return parseInt(pre) / parseInt(data);
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case "ac":
        setValue("");
        setOp("");
        setPre("");
        break;

      case "/":
      case "x":
      case "+":
      case "-":
        if (data !== "") {
          setPre(checkData());
          setOp(value);
          setValue("");
        } else if (pre !== "") {
          setOp(value);
        }
        break;

      case "=":
        if (data !== "") {
          setPre(pre + " " + op + " " + data);
          if (op === "+") {
            setValue(parseInt(pre) + parseInt(data));
          } else if (op === "-") {
            setValue(parseInt(pre) - parseInt(data));
          } else if (op === "x") {
            setValue(parseInt(pre) * parseInt(data));
          } else if (op === "/") {
            setValue(parseInt(pre) / parseInt(data));
          }
          setOp("=");
        }
        break;

      default:
        if (op === "=") {
          setPre("");
          setOp("");
          setValue(value);
        } else setValue((pre) => pre + value);
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <div className="border">
          <div className="output">
            <div className="pre">
              {pre} {op}
            </div>
            <div className="typeing">{data}</div>
          </div>
          <div className="buttons">
            <button onClick={() => handleClick("ac")} className="btn btn1">
              AC
            </button>
            <button onClick={() => handleClick("/")} className="btn btn1">
              /
            </button>
            <button onClick={() => handleClick("x")} className="btn btn1">
              x
            </button>
            <button onClick={() => handleClick("-")} className="btn btn2">
              -
            </button>
            <button onClick={() => handleClick("7")} className="btn">
              7
            </button>
            <button onClick={() => handleClick("8")} className="btn">
              8
            </button>
            <button onClick={() => handleClick("9")} className="btn">
              9
            </button>

            <button onClick={() => handleClick("+")} className="btn btn2">
              +
            </button>
            <button onClick={() => handleClick("4")} className="btn">
              4
            </button>
            <button onClick={() => handleClick("5")} className="btn">
              5
            </button>
            <button onClick={() => handleClick("6")} className="btn">
              6
            </button>
            <button onClick={() => handleClick("=")} className="btn btn2">
              =
            </button>
            <button
              onClick={() => handleClick("1")}
              id="bottom-left"
              className="btn"
            >
              1
            </button>
            <button onClick={() => handleClick("2")} className="btn">
              2
            </button>
            <button onClick={() => handleClick("3")} className="btn">
              3
            </button>
            <button
              onClick={() => handleClick("0")}
              className="btn"
              id="bottom-right"
            >
              0
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
