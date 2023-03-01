import React from "react";
import {useNavigate} from 'react-router-dom'
import * as C from './styles'

import logo from '../../assets/logo.png'

export const Login = ({ setFormState }) => {

    const navigate = useNavigate()

    const navigateToOutsiders = () => {
        navigate('/outsiders')
    }

    return (
        <C.Container>
            <C.Logo src={logo} />

            <C.TextAccessData>Dados de acesso</C.TextAccessData>
            <C.ContainerFormLogin>
                <C.ContainerInputs>
                    <C.FormInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input placeholder="Insira seu nome" />
                    </C.FormInputs>

                    <C.FormInputs>
                        <C.LabelForm>Senha</C.LabelForm>
                        <C.Input placeholder="Insira sua senha" />
                    </C.FormInputs>
                </C.ContainerInputs>
            </C.ContainerFormLogin>
            <C.ContainerButtonAndForgotPassword>
                <C.ButtonLogin onClick={navigateToOutsiders}>Entrar</C.ButtonLogin>
                <C.TextForgotPassword onClick={() => setFormState('forgotPassword')}>Esqueceu a senha?</C.TextForgotPassword>
            </C.ContainerButtonAndForgotPassword>
        </C.Container>
    )
}