import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiKey from './config.js'
import Search from "./components/Search.jsx";
import PhotoList from "./components/PhotoList.jsx";

function App() {
  const [count, setCount] = useState(0)
  // console.log(apiKey);

  return (
    <>
      <Search />
      <PhotoList />
    </>
  )
}

export default App
