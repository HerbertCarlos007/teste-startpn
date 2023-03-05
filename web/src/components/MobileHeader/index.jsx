import React from "react";
import * as C from './styles'
import logo from '../../assets/logo.png'
import perfil from '../../assets/perfil.png'
import { BiMenuAltLeft } from 'react-icons/bi';

export const MobileHeader = ({setIsVisible}) => {
    return (
        <C.Container>
            <C.Content>
                <C.IconMenu>
                    <BiMenuAltLeft size={30} color='#476EE6' onClick={() =>setIsVisible(true)}/>
                </C.IconMenu>
                <C.ImageLogo src={logo} onClick={() =>setIsVisible(true)}/>
                <C.ImagePerfil src={perfil}/>
            </C.Content>
        </C.Container>
    )
}