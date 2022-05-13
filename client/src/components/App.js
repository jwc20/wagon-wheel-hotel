import NavBar from "./NavBar";
import Router from "./Router";
import Auth from "./Auth";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
