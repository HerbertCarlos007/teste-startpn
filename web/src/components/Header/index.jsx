import React from "react";
import * as C from './styles'
import perfilImage from '../../assets/perfil.png'

import Dropdown from 'react-bootstrap/Dropdown';

export const Header = ({ title}) => {
    return (
        <C.TopContainer>
            <C.TextOutsider>{title}</C.TextOutsider>
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
    )
}