import React, { useState, useEffect } from "react";
import * as C from './styles'
import perfilImage from '../../assets/perfil.png'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import api from '../../services/api'
import imagePerfil from '../../assets/group.png'

export const Header = ({ title }) => {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

    const navigateToAccount = () => {
        navigate('/account')
    }

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const id = localStorage.getItem('id')
        const response = await api.get(`/users/${id}`)
        setUser(response.data.user)
    }

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
                        <C.ImagePerfil src={imagePerfil} />
                        <C.TextName>{user.name}</C.TextName>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={navigateToAccount}>Perfil</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </C.DropDown>
        </C.TopContainer>
    )
}