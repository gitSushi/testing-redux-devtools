import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>yes I can count to {counter}</p>
      <button onClick={() => dispatch(increment(5))}>add 5</button>
      <button onClick={() => dispatch(decrement())}>subtract 1</button>
      <div>
        <button onClick={() => dispatch(signIn())}>
          {!isLogged ? `Sign In` : `Sign Out`}
        </button>
        {isLogged && <p>Valuable Infos</p>}
      </div>
    </div>
  );
}

export default App;
