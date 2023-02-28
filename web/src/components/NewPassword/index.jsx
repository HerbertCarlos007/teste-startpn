import React from "react";
import * as C from './styles'

import logo from '../../assets/logo.png'

export const NewPassword = () => {
    return(
        <C.Container>
            <C.Logo src={logo}/>

            <C.ContainerNewPassword>
                <C.TextNewPassword>Crie uma nova senha</C.TextNewPassword>
                <C.TextInstructions>Preencha os campos abaixo com a nova senha que <br/> deseja cadastrar</C.TextInstructions>

                <C.ContainerForm>
                    <C.FormInput>
                        <C.LabelForm>Nova senha</C.LabelForm>
                        <C.Input placeholder="Insira a nova senha"/>
                    </C.FormInput>

                    <C.FormInput>
                        <C.LabelForm>Confirmação de nova senha</C.LabelForm>
                        <C.Input placeholder="Insira a confirmação da sua senha"/>
                    </C.FormInput>
                </C.ContainerForm>

                <C.ContainerActions>
                    <C.ButtonCreatePassword>Criar senha</C.ButtonCreatePassword>
                    <C.TextRemeberPassword>Lembrou da senha?</C.TextRemeberPassword>
                </C.ContainerActions>
            </C.ContainerNewPassword>
        </C.Container>
    )
}