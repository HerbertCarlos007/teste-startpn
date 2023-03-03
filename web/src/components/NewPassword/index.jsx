import React from "react";
import * as C from './styles'
import backgroundImage from '../../assets/background.png'
import steveJobsImage from '../../assets/stevejobs.png'

import logo from '../../assets/logo.png'

export const NewPassword = () => {
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
                            <C.Input placeholder="Insira a nova senha" />
                        </C.ContainerInput>

                        <C.ContainerInput>
                            <C.LabelForm>Nova senha</C.LabelForm>
                            <C.Input placeholder="Insira a nova senha" />
                        </C.ContainerInput>
                    </C.ContainerForm>

                    <C.ContainerButtons>
                        <C.ButtonCreatePassword>Criar senha</C.ButtonCreatePassword>
                        <C.TextRememberPassword>Lembrou da senha?</C.TextRememberPassword>
                    </C.ContainerButtons>
                </C.RightSection>
            </C.Content>
        </C.Container>
    )
}