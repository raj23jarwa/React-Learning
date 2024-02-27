import { useState } from 'react'
import './App.css'
// import Backgroundd from './components/Backgroundd'
import Password from './components/Password'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Backgroundd/> */}
    <Password/>

    </>
  )
}

export default App
