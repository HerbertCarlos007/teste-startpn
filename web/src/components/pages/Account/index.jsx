import React from "react";
import * as C from './styles'
import { Header } from '../../Header'
import { SideBar } from "../../Sidebar";
import { UploadPhoto } from "../../UploadPhoto";

export const Account = () => {
    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.AllContainer>
                <Header title='Minha conta' />
                <C.Content>
                    <UploadPhoto />

                    <C.ContainerForm>
                        <C.ContainerInputs>
                            <C.UpFormInputs>
                                <C.FormInputs>
                                    <C.LabelForm>Nome do Terceiro</C.LabelForm>
                                    <C.InputNewOutsider />
                                </C.FormInputs>

                                <C.FormInputs>
                                    <C.LabelForm>E-mail</C.LabelForm>
                                    <C.InputNewOutsider />
                                </C.FormInputs>
                            </C.UpFormInputs>

                            <C.CenterFormInputs>
                                <C.FormInputs>
                                    <C.LabelForm>Telefone</C.LabelForm>
                                    <C.InputNewOutsider />
                                </C.FormInputs>

                                <C.FormInputs>
                                    <C.LabelForm>Endereço</C.LabelForm>
                                    <C.InputNewOutsider />
                                </C.FormInputs>
                            </C.CenterFormInputs>
                        </C.ContainerInputs>
                    </C.ContainerForm>
                    <C.ContainerButtonSave>
                        <C.ButtonSave>Salvar</C.ButtonSave>
                    </C.ContainerButtonSave>
                </C.Content>
            </C.AllContainer>
        </C.Container>
    )
}