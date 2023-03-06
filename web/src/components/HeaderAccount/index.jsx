import React, { useState, useEffect } from "react";
import * as C from './styles'
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

export const HeaderAccount = () => {

    const navigate = useNavigate()

    return (
        <C.Container>
            <C.Content>
                <C.IconMenu onClick={() => navigate('/outsiders')}>
                    <AiOutlineLeft color="#476EE6"/>
                </C.IconMenu>
                <C.Text>Minha conta</C.Text>
            </C.Content>
        </C.Container>
    )
}