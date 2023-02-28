import React from "react"
import { GlobalStyle } from './globalStyles'
import { Register } from './components/Register'
import { Home } from "./components/pages/Home"

export const App = () => {

  return (
    <>
      <GlobalStyle />
      <Home/>
    </>
  )
}


