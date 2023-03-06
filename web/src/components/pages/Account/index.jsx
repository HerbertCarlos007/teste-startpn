import React, { useState, useEffect } from "react";
import api from '../../../services/api'
import * as C from './styles'
import { Header } from '../../Header'
import { SideBar } from "../../Sidebar";
import { UploadPhoto } from "../../UploadPhoto";
import { HeaderAccount } from '../../HeaderAccount'

export const Account = () => {

    const [user, setUser] = useState({})
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const id = localStorage.getItem('id')
        const response = await api.get(`/users/${id}`)
        setUser(response.data.user)
    }

    return (
        <>  
            <HeaderAccount/>
            <C.Container>
                <C.SidebarContainer>
                    <SideBar isVisible={isVisible} setIsVisible={setIsVisible} />
                </C.SidebarContainer>

                <C.AllContainer>
                    <Header title='Minha conta' />
                    <C.Content>
                        <UploadPhoto />
                        <C.ContainerForm>
                            <C.ContainerInputs>
                                <C.UpFormInputs>
                                    <C.FormInputs>
                                        <C.LabelForm>Nome</C.LabelForm>
                                        <C.InputNewOutsider value={user.name} />
                                    </C.FormInputs>

                                    <C.FormInputs>
                                        <C.LabelForm>E-mail</C.LabelForm>
                                        <C.InputNewOutsider value={user.email} />
                                    </C.FormInputs>
                                </C.UpFormInputs>

                                <C.CenterFormInputs>
                                    <C.FormInputs>
                                        <C.LabelForm>Telefone</C.LabelForm>
                                        <C.InputNewOutsider value={user.telephone} />
                                    </C.FormInputs>

                                    <C.FormInputs>
                                        <C.LabelForm>Endereço</C.LabelForm>
                                        <C.InputNewOutsider value={user.address} />
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
        </>
    )
}