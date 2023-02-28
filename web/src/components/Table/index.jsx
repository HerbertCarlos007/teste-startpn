import React from "react";
import * as C from './styles'

import { CgMenu } from 'react-icons/cg'

export const Table = () => {
    return (
        <C.Container>
            <C.HeaderTable>
                <C.ContentHeaderTable>
                    <C.Checkbox type='checkbox' />
                    <C.TextName>Nome</C.TextName>
                    <C.TextEmail>E-mail</C.TextEmail>
                    <C.TextNumber>Telefone</C.TextNumber>
                    <C.TextAdress>Endereço</C.TextAdress>
                </C.ContentHeaderTable>
            </C.HeaderTable>

            <C.ContainerTable>
                <C.ContentTable>
                    <C.Checkbox type='checkbox' />
                    <C.TextInformationsOutsider>Mateus Santos</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>mateus@startpn.com</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>11 97796-5692</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>Av. Brg. Faria Lima, 2355 - São Paulo <br /> - SP, 01452-922</C.TextInformationsOutsider>
                    <C.IconMenu><CgMenu/></C.IconMenu>
                </C.ContentTable>
            </C.ContainerTable>
        </C.Container>
    )
}