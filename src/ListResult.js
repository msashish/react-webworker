import React from "react";

const ListResult = (props) => {
    const {results} = props;
    return (
        <div id="results-container" className="results-container">
            {results.map((result) => {
                const {id, num, calculating, time_taken, fibValue} = result;
                return (
                    <div key={id} className="result-div">
                        {
                            calculating ?
                                (
                                    <p>
                                        Calculating Fibonacci number at position {num} ...
                                    </p>
                                )
                                :
                                (
                                    <>
                                        <p id="timer">
                                            Time: <span className="bold">{time_taken} ms</span>
                                        </p>
                                        <p>
                                            Fibonnaci number at position {" "}
                                            <span className="bold" id="num">{num} </span>
                                            is: {" "}
                                            <span className="bold" id="sum">{fibValue}</span>
                                        </p>
                                    </>
                                )
                        }
                    </div>

                )

                }

            )}

        </div>
    );

};

export default ListResult;
