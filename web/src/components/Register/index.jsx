import React, { useState } from "react";
import * as C from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'
import { GrHide } from 'react-icons/gr'
import Swal from "sweetalert2";


export const Register = ({ setFormState }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirPassoword, setConfirmPassword] = useState('')
    const [typeInputPassword, setTypeInputPassword] = useState('password')
    const [typeInputConfirmPassword, setTypeInputConfirmPassword] = useState('password')


    const handleClickRegister = async () => {
        const response = await api.post('/register', {
            name, email, password, confirPassoword
        })
        if (response.status === 200) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Usuário cadastrado com sucesso`,
                showConfirmButton: false,
                timer: 1500
            })
        }
        setFormState('login')
    }

    const toggleTypeInputPassword = () => {
        setTypeInputPassword(typeInputPassword === 'password' ? 'text' : 'password')
    }

    const toggleTypeInputConfirmPassword = () => {
        setTypeInputConfirmPassword(typeInputConfirmPassword === 'password' ? 'text' : 'password')
    }

    return (
        <C.Container>
            <C.ContainerForm>
                <C.Logo src={logo} />
                <br />
                <br />
                <br />
                <C.TextRegister>Cadastro</C.TextRegister>

                <C.UpFormInputs>
                    <C.FormInputs>
                        <C.LabelForm>Nome</C.LabelForm>
                        <C.Input placeholder="Insira seu nome" onChange={(e) => setName(e.target.value)} />
                    </C.FormInputs>

                    <C.FormInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input placeholder="Insira seu e-mail" onChange={(e) => setEmail(e.target.value)} type='email' />
                    </C.FormInputs>
                </C.UpFormInputs>

                <C.DownFormInputs>
                    <C.FormInputs>
                        <C.LabelForm>Senha</C.LabelForm>
                        <C.Input
                            placeholder="Insira sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                            type={typeInputPassword}
                        />
                        <C.IconHidePassword onClick={toggleTypeInputPassword}>
                            <GrHide size={24} color='black' />
                        </C.IconHidePassword>
                    </C.FormInputs>

                    <C.FormInputs>
                        <C.LabelForm>Confirme sua senha</C.LabelForm>
                        <C.Input
                            placeholder="Confirme senha"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            type={typeInputConfirmPassword} />
                        <C.IconHidePassword onClick={toggleTypeInputConfirmPassword}>
                            <GrHide size={24} color='black' />
                        </C.IconHidePassword>
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

                <C.ButtonRegister onClick={handleClickRegister} >Cadastrar</C.ButtonRegister>

                <C.ContainerHaveAccount>
                    <C.TextHaveAccount>Já tem conta? </C.TextHaveAccount>
                    <C.TextLogin onClick={() => setFormState('login')}>Login</C.TextLogin>
                </C.ContainerHaveAccount>
            </C.ContainerForm>

        </C.Container>
    )
}