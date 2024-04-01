import { useState } from 'react'
import './App.css'
import dravenData from './assets/champion/Draven.json';

function App() {
  const spells = dravenData.data.Draven.spells;
  const spinningAxe = spells.find(spell => spell.name === "Spinning Axe");
 
  // Loop through "spells" field, get description, cooldownBurn, costBurn info. 
  return (
    <>
      <h1>ChampionCodex :3</h1>
      <div>
            <h2>{spinningAxe?.name} Information</h2>
            <p><strong>Description:</strong> {spinningAxe?.description}</p>
            <p><strong>Cooldown:</strong> {spinningAxe?.cooldownBurn}</p>
            <p><strong>Cost:</strong> {spinningAxe?.costBurn}</p>
        </div>
    </>
  )
}

export default App
