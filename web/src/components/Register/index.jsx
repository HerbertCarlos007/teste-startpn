import React from "react";
import * as C from './styles'

import steveJobsImage from '../../assets/stevejobs.png'
import backgroundImage from '../../assets/background.png'
import logo from '../../assets/logo.png'

import { Login } from '../Login'

export const Register = () => {
    return (
        <C.Container>
            <C.ContainerRegister>
                <C.LeftSideContainer>
                    <C.ImageBackground src={backgroundImage} />
                    <C.Image src={steveJobsImage} />
                </C.LeftSideContainer>

                <C.RightSideContainer>

                    {/* <C.Logo src={logo} />

                    <C.ContainerForm>
                        <C.TextRegister>Cadastro</C.TextRegister>

                        <C.UpFormInputs>
                            <C.FormInputs>
                                <C.LabelForm>Nome</C.LabelForm>
                                <C.Input placeholder="Insira seu nome" />
                            </C.FormInputs>

                            <C.FormInputs>
                                <C.LabelForm>E-mail</C.LabelForm>
                                <C.Input placeholder="Insira seu e-mail" />
                            </C.FormInputs>
                        </C.UpFormInputs>

                        <C.DownFormInputs>
                            <C.FormInputs>
                                <C.LabelForm>Senha</C.LabelForm>
                                <C.Input placeholder="Insira sua senha" />
                            </C.FormInputs>

                            <C.FormInputs>
                                <C.LabelForm>Confirme sua senha</C.LabelForm>
                                <C.Input placeholder="Confirme senha" />
                            </C.FormInputs>
                        </C.DownFormInputs>

                        <C.ContainerTerms>
                            <C.TextTerms>Termos de uso e privacidade</C.TextTerms>
                            <br />
                            <C.Checkbox type='checkbox' />
                            <C.TextTermsOfConsent>
                                Ao clicar neste botão, eu concordo com os  termos de uso e privacidade da nossa empresa.
                            </C.TextTermsOfConsent>
                            <br />
                            <C.TermsOfUseAndPrivacy>Termos de uso e Privacidade</C.TermsOfUseAndPrivacy>
                        </C.ContainerTerms>

                        <C.ButtonRegister>Cadastrar</C.ButtonRegister>

                        <C.ContainerHaveAccount>
                            <C.TextHaveAccount>Já tem conta? </C.TextHaveAccount>
                            <C.TextLogin>Login</C.TextLogin>
                        </C.ContainerHaveAccount>
                    </C.ContainerForm> */}
                    <Login/>
                </C.RightSideContainer>
            </C.ContainerRegister>
        </C.Container>
    )
}