import React from "react";
import * as C from './styles'

import logo from '../../assets/logo.png'

export const ForgotPassword = ({ setFormState }) => {
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
                    <C.Input placeholder="Insira seu e-mail" />
                </C.FormInput>
            </C.ContainerForm>

            <C.ContainerActions>
                <C.ButtonRecoverPassword onClick={() => setFormState('resendEmail')}>Recuperar senha</C.ButtonRecoverPassword>
                <C.TextRememberPassword onClick={() => setFormState('login')}>Lembrou da senha?</C.TextRememberPassword>
            </C.ContainerActions>
        </C.Container>
    )
}