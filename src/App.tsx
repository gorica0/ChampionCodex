import { useState } from 'react'
import './App.css'
import ChampionSpellInfo from './components/spellDetails';

function App() {

  return (
    <>
      <h1>ChampionCodex :3</h1>
      <div className="App">
        <header className="App-header">
        {}
        <ChampionSpellInfo championName="Draven" spellIndex={0} /> {}
        </header>
    </div>
    </>
  )
}

export default App
