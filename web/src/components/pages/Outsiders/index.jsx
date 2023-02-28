import React from "react"
import * as C from './styles'
import { Table } from '../../Table'
import { SideBar } from '../../Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'
import perfilImage from '../../../assets/perfil.png'

import Dropdown from 'react-bootstrap/Dropdown';



export const Outsiders = () => {
    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.ContainerAllContent>
            <C.TopContainer>
                <C.TextOutsider>Terceiros</C.TextOutsider>
                <C.DropDown>
                    <Dropdown >
                        <Dropdown.Toggle style=
                            {{
                                backgroundColor: "#FFFFFF",
                                border: '1px solid #D8D8D8',
                                borderRadius: '60px',
                                color: 'black'
                            }}
                            id="dropdown-basic"
                        >
                            <C.ImagePerfil src={perfilImage} />
                            <C.TextName>Mateus Barbosa</C.TextName>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Perfil</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </C.DropDown>
            </C.TopContainer>
            <C.ContainerOptions>
                <C.LeftSection>
                    <C.ContainerCustomersAndSuppliers>
                        <C.TextCostumers>Clientes</C.TextCostumers>
                        <C.TextSuppliers>Fornecedores</C.TextSuppliers>
                    </C.ContainerCustomersAndSuppliers>
                    <C.IconSearch><AiOutlineSearch /></C.IconSearch>
                    <C.Input placeholder="Pesquisar" />

                    <C.ContainerGear>
                        <RxGear />
                    </C.ContainerGear>
                </C.LeftSection>

                <C.RightSection>
                    <C.ButtonNewOutsider>Novo terceiro</C.ButtonNewOutsider>
                </C.RightSection>
            </C.ContainerOptions>

            
            <C.ContentContainer>
                <Table/>
            </C.ContentContainer>
            </C.ContainerAllContent>
        </C.Container>
    )
}