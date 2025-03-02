// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import StudentItem from './components/StudentItem'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import DataTable from './components/DataTable'
import ButtonStyle from './components/ButtonStyle'

function App() {
  
  return (
    <div className="App">

      <NavBar />

      <h1>HOME PAGE</h1>


      <ButtonStyle 
      TextBtn={"OK"} 
      backgroundColor={"Green"}
      width={"200px"}
      />
      <ButtonStyle 
      TextBtn={"Cancel"} 
      backgroundColor={"red"}
      width={"200px"}
      />

      <Greeting name="Ukrit" />

      <StudentItem/>

      <DataTable />



    </div>
  )
}

export default App


 // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>