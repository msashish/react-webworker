import React from "react";
import ListResult from "./ListResult";
import {reducer} from "./reducer";
import './App.css';

function App() {

  const [stateData, dispatch] = React.useReducer(reducer,
      {
          num: "",
          entries: [],
      }
      );

  const startNewWorker = (id, num) => {
    const worker = new window.Worker('./fib-worker.js');
    worker.postMessage({num});
    worker.onmessage = (e) => {
      const { fibValue, time_taken } = e.data;
      dispatch({
            type: "UPDATE_FIB",
            id,
            time_taken,
            fibValue,
          }
      );
      worker.terminate();
    };
  };

  return (
    <div className="App">
      <div className="heading-container">
        <h1>Lets compute nth Fibonacci number</h1>
      </div>

      <div className="body-container">
          <div className="input-div">
            <input
                type="number"
                value={stateData.num}
                className="number-input"
                placeholder="Enter a position number"
                onChange={(e) =>
                    dispatch({
                        type: "SET_NUMBER",
                        num: window.Number(e.target.value),
                    })
                }
            />

        <button
            onClick={() => {
              const id = stateData.entries.length;
              dispatch({
                type: "ENTER_NUMBER",
                id,
                num: stateData.num,
                calculating: true,
              });
              startNewWorker(id, stateData.num);
            }}
        >
          Calculate
        </button>
          </div>
        <ListResult results={stateData.entries}/>
      </div>

    </div>
  );
}

export default App;
