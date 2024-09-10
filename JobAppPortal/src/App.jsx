import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import JobCard from './components/JobCard'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-full w-full border-red-300 border-x-4' >
      <Navbar/>
      <Header/>
      <SearchBar/>
      <JobCard/>
    </div>
    </>
  )
}

export default App
