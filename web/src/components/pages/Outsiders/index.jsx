import React from "react"
import * as C from './styles'
import { SideBar } from '../../Sidebar'

export const Outsiders = () => {
    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.ContentContainer>
                aaaa
            </C.ContentContainer>
        </C.Container>
    )
}