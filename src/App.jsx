import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./Data/data.json"
import FormWithoutYup from './Components/FormWithoutYup'
import FormWithYup from './Components/FormWithYup'
function App() {
console.log("data==>", data)
  return (
    <>
    {/* <FormWithoutYup /> */}
    <FormWithYup />
    </>
  )
}

export default App
