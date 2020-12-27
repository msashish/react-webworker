## Setup
    npx create-react-app react-webworker

## Summary of Code

    1) Web-worker at public/fib-worker.js

    2) Using State as
        {
        num: 10,
        entries: [
            {},
            {},
            .....
        ] //  id, num, time, fibValue, calculating, error
       }

    3) Reducers for state at src/reducer.js
        One reducer for setting num
        One reducer for entering a position into entries dictionary
        One reducer to update fibValue of already entered number in state

    4) Actions
        After entering a number when Calculate button is clicked,
               we dispatch reducer for entering a position into entries dictionary
               we then dispatch reducer to update fibValue of already entered number in state

    5) Showing Results ar src/Results.js
        Since every state change will re-render DOM, we will see below:
            calculating message
            then computed value message