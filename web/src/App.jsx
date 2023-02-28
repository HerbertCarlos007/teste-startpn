import React from "react"
import { GlobalStyle } from './globalStyles'
import { Register } from './components/Register'
import { Home } from "./components/pages/Home"
import { Outsiders } from "./components/pages/Outsiders";

import { ProSidebarProvider } from 'react-pro-sidebar';


export const App = () => {

  return (
    <>
      <GlobalStyle />
      <ProSidebarProvider>
        <Home />
        {/* <Outsiders /> */}
      </ProSidebarProvider>
    </>
  )
}


