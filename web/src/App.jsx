import React from "react"
import { GlobalStyle } from './globalStyles'
import { Home } from "./components/pages/Home"
import { Outsiders } from "./components/pages/Outsiders";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Account } from './components/pages/Account'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App = () => {

  return (
    <>
      <Router>
        <GlobalStyle />
        <ProSidebarProvider>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/outsiders" element={<Outsiders />}></Route>
            <Route exact path="/account" element={<Account />}></Route>
          </Routes>
        </ProSidebarProvider>
      </Router>
    </>
  )
}


