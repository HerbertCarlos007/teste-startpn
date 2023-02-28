import React from "react";
import * as C from './styles'

import logo from '../../assets/logo.png'

export const NewPassword = ({ setFormState }) => {
    return (
        <C.Container>
            <C.Logo src={logo} />

            <C.ContainerNewPassword>
                <C.TextNewPassword>Crie uma nova senha</C.TextNewPassword>
                <C.TextInstructions>Preencha os campos abaixo com a nova senha que <br /> deseja cadastrar</C.TextInstructions>

                <C.ContainerForm>
                    <C.FormInput>
                        <C.LabelForm>Nova senha</C.LabelForm>
                        <C.Input placeholder="Insira a nova senha" />
                    </C.FormInput>

                    <C.FormInput>
                        <C.LabelForm>Confirmação de nova senha</C.LabelForm>
                        <C.Input placeholder="Insira a confirmação da sua senha" />
                    </C.FormInput>
                </C.ContainerForm>

                <C.ContainerActions>
                    <C.ButtonCreatePassword onClick={(() => setFormState('login'))}>Criar senha</C.ButtonCreatePassword>
                    <C.TextRemeberPassword onClick={(() => setFormState('login'))}>Lembrou da senha?</C.TextRemeberPassword>
                </C.ContainerActions>
            </C.ContainerNewPassword>
        </C.Container>
    )
}