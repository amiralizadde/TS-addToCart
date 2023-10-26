import React ,{ useState } from 'react'
import Header from './components/header/Header'

import './App.css'

import { routes } from './routes'
import { useRoutes } from 'react-router-dom'

function App() {

  const route = useRoutes(routes)

  return (
    <>
     <Header />
     {route}
    </>
  )
}

export default App
