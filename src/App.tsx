import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { Pages } from "./Page";

function App() {
  const [page, setPage] = useState<Pages>(Pages.PLANETS);

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === Pages.PLANETS ? <Planets /> : <People />}
        </div>
      </div>
    </>
  );
}

export default App;
