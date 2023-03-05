import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import * as C from './styles'
import backgroundImage from '../../assets/background.png'
import steveJobsImage from '../../assets/stevejobs.png'
import logo from '../../assets/logo.png'
import api from '../../services/api'

export const NewPassword = () => {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { id } = useParams()
    
    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/')
    }

    const handleNewPassword = async () => {
        try {
            const response = await api.put(`/recover-password/${id}`, {
               password, confirmPassword
            })
        } catch (error) {
            
        }
    }

    return (
        <C.Container>
            <C.Content>
                <C.LeftSection>
                    <C.ImageBackground src={backgroundImage} />
                    <C.Image src={steveJobsImage} />
                </C.LeftSection>

                <C.RightSection>
                    <C.ContainerInformation >
                        <C.ImageLogo src={logo} />
                        <C.TextNewPassword>Crie uma nova senha</C.TextNewPassword>
                        <C.TextInstructions>Preencha os campos abaixo com a nova senha que <br /> deseja cadastrar</C.TextInstructions>
                    </C.ContainerInformation >

                    <C.ContainerForm>
                        <C.ContainerInput>
                            <C.LabelForm>Nova senha</C.LabelForm>
                            <C.Input
                                placeholder="Insira a nova senha"
                                onChange={(e) => setPassword(e.target.value)}
                                type='password'
                            />
                        </C.ContainerInput>

                        <C.ContainerInput>
                            <C.LabelForm>Confirmação de nova senha</C.LabelForm>
                            <C.Input
                                placeholder="Insira a confirmação da sua senha"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type='password'
                            />
                        </C.ContainerInput>
                    </C.ContainerForm>

                    <C.ContainerButtons>
                        <C.ButtonCreatePassword onClick={handleNewPassword}>Criar senha</C.ButtonCreatePassword>
                        <C.TextRememberPassword onClick={navigateToLogin}>Lembrou da senha?</C.TextRememberPassword>
                    </C.ContainerButtons>
                </C.RightSection>
            </C.Content>
        </C.Container>
    )
}