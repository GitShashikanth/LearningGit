import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1>React Form</h1>
      <form className="form">
        <div>
          <label>Name:</label>
          <input type="text" name="username" />
        </div>

        <div>
          <label>Age:</label>
          <input type="email" name="email" />
        </div>
      </form>
    </>
  );
}

export default App;
