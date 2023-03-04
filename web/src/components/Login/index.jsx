import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import * as C from './styles'
import api from "../../services/api";

import logo from '../../assets/logo.png'

export const Login = ({ setFormState }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleClickLogin = async () => {
        const response = await api.post('/auth', {
            email, password
        })
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.user.id)
            navigate('/outsiders')
        }
    }

    return (
        <C.Container>
            <C.Logo src={logo} />

            <C.TextAccessData>Dados de acesso</C.TextAccessData>
            <C.ContainerFormLogin>
                <C.ContainerInputs>
                    <C.FormInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input placeholder="Insira seu nome" onChange={(e) => setEmail(e.target.value)} />
                    </C.FormInputs>
                    <C.FormInputs>
                        <C.LabelForm>Senha</C.LabelForm>
                        <C.Input placeholder="Insira sua senha" type='password' onChange={(e) => setPassword(e.target.value)} />
                    </C.FormInputs>
                </C.ContainerInputs>
            </C.ContainerFormLogin>
            <C.ContainerButtonAndForgotPassword>
                <C.ButtonLogin onClick={handleClickLogin}>Entrar</C.ButtonLogin>
                <C.TextForgotPassword onClick={() => setFormState('forgotPassword')}>Esqueceu a senha?</C.TextForgotPassword>
            </C.ContainerButtonAndForgotPassword>
        </C.Container>
    )
}