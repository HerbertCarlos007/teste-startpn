import React, { useState } from "react";
import * as C from './styles'
import { Table } from '../../Table'
import { SideBar } from '../../Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'
import perfilImage from '../../../assets/perfil.png'
import { GrFormClose } from 'react-icons/gr'
import { BiCamera } from 'react-icons/bi'
import Dropdown from 'react-bootstrap/Dropdown';
import photo from '../../../assets/group.png'

import { Modal } from '../../Modal'
import { ButtonActions } from "../../ButtonActions";



export const Outsiders = () => {

    const [showCreationModalNewOutsider, setCreationModalNewOutsider] = useState(false)

    const handleCreationModalNewOutsider = () => {
        setCreationModalNewOutsider(true)

    }


    const handleCloseModalNewOutsider = () => {
        setCreationModalNewOutsider(false)
    }

    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.ContainerAllContent>
                <C.TopContainer>
                    <C.TextOutsider>Terceiros</C.TextOutsider>
                    <C.DropDown>
                        <Dropdown >
                            <Dropdown.Toggle style=
                                {{
                                    backgroundColor: "#FFFFFF",
                                    border: '1px solid #D8D8D8',
                                    borderRadius: '60px',
                                    color: 'black'
                                }}
                                id="dropdown-basic"
                            >
                                <C.ImagePerfil src={perfilImage} />
                                <C.TextName>Mateus Barbosa</C.TextName>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item >Perfil</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </C.DropDown>
                </C.TopContainer>
                <C.ContainerOptions>
                    <C.LeftSection>
                        <C.ContainerCustomersAndSuppliers>
                            <C.TextCostumers>Clientes</C.TextCostumers>
                            <C.TextSuppliers>Fornecedores</C.TextSuppliers>
                        </C.ContainerCustomersAndSuppliers>
                        <C.IconSearch><AiOutlineSearch /></C.IconSearch>
                        <C.Input placeholder="Pesquisar" />

                        <C.ContainerGear>
                            <RxGear />
                        </C.ContainerGear>
                    </C.LeftSection>

                    <C.RightSection onClick={handleCreationModalNewOutsider}>
                        <C.ButtonNewOutsider>Novo terceiro</C.ButtonNewOutsider>
                    </C.RightSection>
                </C.ContainerOptions>


                <C.ContentContainer>
                    <Table />
                </C.ContentContainer>
            </C.ContainerAllContent>

            <Modal show={showCreationModalNewOutsider} onClose={handleCloseModalNewOutsider}>
                <C.ModalContainerNewOutsider>
                    <C.TopSectionModalNewOutsider>
                        <C.LeftSideNewOutsider>
                            <C.IconClose style={{ marginBottom: '6px' }} onClick={handleCloseModalNewOutsider}>
                                <GrFormClose />
                            </C.IconClose>
                            <C.TextTitleModal>Criar terceiro</C.TextTitleModal>
                        </C.LeftSideNewOutsider>
                        <ButtonActions>Criar</ButtonActions>
                    </C.TopSectionModalNewOutsider>
                    <C.Line />

                    <C.ContainerPhotoOutsider>
                        <C.PhotoOutsider src={photo} />
                        <C.ContainerUploadPhoto>
                            <C.IconUpload><BiCamera /></C.IconUpload>
                        </C.ContainerUploadPhoto>
                    </C.ContainerPhotoOutsider>

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

                            <C.DownFormInputs>
                                <C.FormInputs>
                                    <C.LabelForm>Tipo</C.LabelForm>
                                    <C.Select>
                                        <C.OptionsSelect>Selecione</C.OptionsSelect>
                                    </C.Select>
                                </C.FormInputs>
                            </C.DownFormInputs>
                        </C.ContainerInputs>
                    </C.ContainerForm>
                </C.ModalContainerNewOutsider>
            </Modal>
        </C.Container>
    )
}