import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import HelpPage from './Components/HelpPage'
import CardsPage from './Components/CardsPage'
import PageFooter from './Components/PageFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavBar />
       <HelpPage />
       <CardsPage />
       <PageFooter />
    </>
  )
}
export default App
