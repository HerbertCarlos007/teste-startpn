import React, {useState} from "react";
import * as C from './styles'
import logo from '../../assets/logo.png'
import perfil from '../../assets/perfil.png'
import { BiMenuAltLeft } from 'react-icons/bi';

export const MobileHeader = ({isVisible,setIsVisible}) => {

    return (
        <C.Container>
            <C.Content>
                <C.IconMenu>
                    <BiMenuAltLeft size={30} color='#476EE6' onClick={() =>setIsVisible(true)}/>
                </C.IconMenu>
                <C.ImageLogo src={logo} />
                <C.ImagePerfil src={perfil}/>
            </C.Content>
        </C.Container>
    )
}