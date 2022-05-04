import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const hello = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        Bonjour !
        </div>

        <div className="bio">
        Bienvenue sur cette première application react pour interagir avec un contrat intelligent.
        </div>

        <button className="helloButton" onClick={hello}>
          Saluer
        </button>
      </div>
    </div>
  );
}
