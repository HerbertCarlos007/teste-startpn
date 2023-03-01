import React from "react";
import * as C from './styles'
import { Header } from '../../Header'
import { SideBar } from "../../Sidebar";
import { UploadPhoto } from "../../UploadPhoto";

export const Account = () => {
    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.AllContainer>
                <Header title='Minha conta' />
                <C.Content>
                    <UploadPhoto/>
                </C.Content>
            </C.AllContainer>
        </C.Container>
    )
}