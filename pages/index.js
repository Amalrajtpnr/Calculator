import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

// const operations = ["+", "-", "/", "x","+/-"];
// const odd=(x)=>{x % 2 ===1}

export default function Home() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [answer, setAnswer] = useState([]);
  const [display, setDisplay] = useState([]);
  const [operators, setOperators] = useState("");
  const [initialSum, setInitialSum] = useState(0);

  function addOperator(y) {
    if (number1 !== "" && number2 == "") {
      setOperators(y);
    } else if (number1 !== "" && number2 !== "") {
      const result = mathematicalOperations();
      setAnswer([...answer, `${result}`]);
      setOperators(y);
      setNumber2("");
    }
  }

  // function mathematicalOperations() {
  //   for (var i = 0; i < display.length; i++) {
  //     if (i % 2 === 1 && display[i] == "+") {
  //       setInitialSum(parseFloat(display[i - 1]) + parseFloat(display[i + 1]));
  //     } else if (i % 2 === 1 && display[i] == "x") {
  //       setInitialSum(initialSum * parseFloat(display[i + 1]));
  //     } else if (i % 2 === 1 && display[i] == "/") {
  //      setInitialSum(initialSum / parseFloat(display[i + 1])) ;
  //     } else {
  //      setInitialSum(initialSum - parseFloat(display[i + 1]));
  //     }
  //   }
  //   return initialSum;
  // }

  // useEffect(() => {
  //   console.log(mathematicalOperations(display.length));
  // }, [mathematicalOperations()]);

  function initial(z, length) {
    if (length) {
      length % 2 === 1 ? setDisplay([...display, z]) : null;
    } else {
      setDisplay([...display, z]);
    }
  }

  // function mathematicalOperations() {
  //   if (operators === "+") {
  //     return parseFloat(number1) + parseFloat(number2);
  //   } else if (operators === "-") {
  //     return parseFloat(number1) - parseFloat(number2);
  //   } else if (operators === "/") {
  //     return parseFloat(number1) / parseFloat(number2);
  //   } else if (operators === "x") {
  //     return parseFloat(number1) * parseFloat(number2);
  //   } else if (operators === "%") {
  //     return parseFloat(number1) % parseFloat(number2);
  //   }
  // }

  // function numberInput(x) {
  //   if (operators === "") {
  //     number1((prev) => prev + x);
  //   } else if (number1 !== "" && operators !== "") {
  //     number1((prev) => prev + x);
  //   }
  // }

  // function addToArray(X) {
  //   if (operations.includes(X)) {
  //     console.log("this is AN OPERATION");
  //   } else {

  //   }
  // }

  return (
    <div className={styles.main}>
      <div className={styles.calculator}>
        <div className={styles.display}>
          <div className={styles.viewers}>
            {display.map((string, i) => {
              return (
                <h1 key={i} className={styles.string}>
                  {string}
                </h1>
              );
            })}
          </div>
        </div>
        <div className={styles.numbers}>
          <button 
            onClick={() => {
              {
                setOperators("");
                setNumber1("");
                setNumber2("");
                setDisplay([]);
              }
            }}
            className={styles.grey}
          >
            AC
          </button>
          <button
            onClick={() => {
              addOperator("+/-");
              initial("+/-", display.length);
            }}
            className={styles.grey}
          >
            +/-
          </button>
          <button
            onClick={() => {
              addOperator("%");
              initial("%", display.length);
            }}
            className={styles.grey}
          >
            %
          </button>
          <button
            onClick={() => {
              addOperator("/");
              initial("/", display.length);
            }}
            className={styles.yellow}
          >
            /
          </button>
          <button
            onClick={() => {
              // numberInput("7");
              initial("7");
            }}
            className={styles.button}
          >
            7
          </button>
          <button
            onClick={() => {
              // numberInput("8");
              initial("8");
            }}
            className={styles.button}
          >
            8
          </button>
          <button
            onClick={() => {
              // numberInput("9");
              initial("9");
            }}
            className={styles.button}
          >
            9
          </button>
          <button
            onClick={() => {
              addOperator("x");
              initial("x", display.length);
            }}
            className={styles.yellow}
          >
            X
          </button>
          <button
            onClick={() => {
              // numberInput("4");
              initial("4");
            }}
            className={styles.button}
          >
            4
          </button>
          <button
            onClick={() => {
              // numberInput("5");
              initial("5");
            }}
            className={styles.button}
          >
            5
          </button>
          <button
            onClick={() => {
              // numberInput("6");
              initial("6");
            }}
            className={styles.button}
          >
            6
          </button>
          <button
            onClick={() => {
              addOperator("-");
              initial("-", display.length);
            }}
            className={styles.yellow}
          >
            -
          </button>
          <button
            onClick={() => {
              // numberInput("3");
              initial("3");
            }}
            className={styles.button}
          >
            3
          </button>
          <button
            onClick={() => {
              // numberInput("2");
              initial("2");
            }}
            className={styles.button}
          >
            2
          </button>
          <button
            onClick={() => {
              // numberInput("1");
              initial("1");
            }}
            className={styles.button}
          >
            1
          </button>
          <button
            onClick={() => {
              addOperator("+");
              initial("+", display.length);
            }}
            className={styles.yellow}
          >
            +
          </button>
        </div>
        <div className={styles.submission}>
          <button
            onClick={() => {
              // numberInput("0");
              initial("0");
            }}
            className={styles.zero}
          >
            0
          </button>
          <button
            onClick={() => {
              addNumber(",");
              initial(",");
            }}
            className={styles.digit}
          >
            ,
          </button>
          <button
            onClick={() => {
              setNumber1("=");
              submit();
            }}
            className={styles.digit1}
          >
            =
          </button>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
