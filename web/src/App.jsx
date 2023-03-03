import React from "react"
import { GlobalStyle } from './globalStyles'
import { Home } from "./components/pages/Home"
import {NewPassword} from './components/NewPassword'
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
            <Route  path="/outsiders" element={<Outsiders />}></Route>
            <Route  path="/account" element={<Account />}></Route>
            <Route  path="/newPassword/:id" element={<NewPassword/>}></Route>
          </Routes>
        </ProSidebarProvider>
      </Router>
    </>
  )
}


