import React, {useState} from "react";
import * as C from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'

export const ForgotPassword = ({ setFormState }) => {

    const [email, setEmail] = useState('')

    const handleSendEmail = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post('/forgot-password', {
                email
            })
            setFormState('resendEmail')
        } catch (error) {
            
        }
    }

    return (
        <C.Container>
            <C.Logo src={logo} />
            <C.TextForgotPassword>Esqueceu a senha ?</C.TextForgotPassword>
            <C.TextInstruction>
                Não se preocupe! Digite seu e-mail para receber <br /> instruções de
                recuperação de senha
            </C.TextInstruction>

            <C.ContainerForm>
                <C.FormInput>
                    <C.LabelForm>E-mail</C.LabelForm>
                    <C.Input placeholder="Insira seu e-mail" onChange={((e) => setEmail(e.target.value))}/>
                </C.FormInput>
            </C.ContainerForm>

            <C.ContainerActions>
                <C.ButtonRecoverPassword onClick={handleSendEmail}>Recuperar senha</C.ButtonRecoverPassword>
                <C.TextRememberPassword onClick={() => setFormState('login')}>Lembrou da senha?</C.TextRememberPassword>
            </C.ContainerActions>
        </C.Container>
    )
}