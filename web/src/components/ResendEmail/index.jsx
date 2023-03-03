import React from "react";
import { useNavigate } from "react-router-dom"
import logo from '../../assets/logo.png'
import mail from '../../assets/mail.png'
import * as C from './styles'

export const ResendEmail = ({ setFormState }) => {
    
    const navigate = useNavigate()

    return (
        <C.Container>
            <C.Logo src={logo} />

            <C.ContainerResendEmail>
                <C.TextSentEmail>E-mail enviado!</C.TextSentEmail>
                <C.TextInstructions>
                    Um link de recuperação de senha foi enviado para <br /></C.TextInstructions>
                <C.TextIndent>o e-mail mateus@startpn.com</C.TextIndent>

                <C.ContainerLetter>
                    <C.ImageLetter src={mail} />
                </C.ContainerLetter>

                <C.ContainerActions>
                    <C.ButtonUnderstand onClick={() => setFormState('login')}>Entendi</C.ButtonUnderstand>
                    <C.ButtonResendEmail onClick={() => setFormState('forgotPassword')}>Reenviar e-mail</C.ButtonResendEmail>
                </C.ContainerActions>
            </C.ContainerResendEmail>
        </C.Container>
    )
}