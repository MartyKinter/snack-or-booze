import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import SiteRoutes from "./SiteRoutes";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
        <SiteRoutes/>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
