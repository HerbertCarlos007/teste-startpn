import React, { useState } from "react";
import * as C from './styles'
import { Table } from '../../Table'
import { SideBar } from '../../Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'
import perfilImage from '../../../assets/perfil.png'
import { GrFormClose } from 'react-icons/gr'
import { BiCamera } from 'react-icons/bi'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import Dropdown from 'react-bootstrap/Dropdown';
import photo from '../../../assets/group.png'
import box from '../../../assets/box.png'

import { Modal } from '../../Modal'
import { ButtonActions } from "../../ButtonActions";



export const Outsiders = () => {

    const [showCreationModalNewOutsider, setCreationModalNewOutsider] = useState(false)
    const [showCreationModalConfiguration, setCreationModalConfiguration] = useState(false)

    const handleCreationModalNewOutsider = () => {
        setCreationModalNewOutsider(true)

    }


    const handleCloseModalNewOutsider = () => {
        setCreationModalNewOutsider(false)
    }

    const handleCreationModalConfiguration = () => {
        setCreationModalConfiguration(true)
    }

    const handleCloseModalConfiguration = () => {
        setCreationModalConfiguration(false)
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

                        <C.ContainerGear onClick={handleCreationModalConfiguration}>
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

            <Modal show={showCreationModalConfiguration} onClose={handleCloseModalConfiguration}>
                <C.ModalContainerConfiguration>
                    <C.TopSectionModalNewOutsider style={{ width: '365px' }}>
                        <C.LeftSideNewOutsider>
                            <C.IconClose style={{ marginBottom: '6px' }} onClick={handleCloseModalConfiguration}>
                                <GrFormClose />
                            </C.IconClose>
                            <C.TextTitleModal>Configuração</C.TextTitleModal>
                        </C.LeftSideNewOutsider>
                        <ButtonActions>Editar</ButtonActions>
                    </C.TopSectionModalNewOutsider>
                    <C.Line style={{ width: '365px' }} />

                    <C.ContainerCustomersAndSuppliers style={{ width: '350px', gap: '130px', position: 'relative', left: '10px', marginTop: '15px' }}>
                        <C.TextCostumers>Clientes</C.TextCostumers>
                        <C.TextSuppliers>Fornecedores</C.TextSuppliers>
                    </C.ContainerCustomersAndSuppliers>

                    <C.TextFieldsForm>Campos do formulário</C.TextFieldsForm>

                    <C.ContainerFormConfiguration>

                        <C.ContainerInputsConfiguration>
                            <C.LabelFormConfiguration>Nome do campo</C.LabelFormConfiguration>
                            <C.ContainerBox>
                                <C.Box>1</C.Box>
                                <C.InputsConfiguration placeholder="Nome do terceiro" />
                                <C.IconTrash><HiOutlineTrash /></C.IconTrash>
                            </C.ContainerBox>
                        </C.ContainerInputsConfiguration>
                        <C.ContainerCheckbox>
                            <C.Checkbox type='checkbox' />
                            <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                        </C.ContainerCheckbox>
                    </C.ContainerFormConfiguration>

                    <C.ContainerFormConfiguration>

                        <C.ContainerInputsConfiguration>
                            <C.LabelFormConfiguration>Nome do campo</C.LabelFormConfiguration>
                            <C.ContainerBox>
                                <C.Box>2</C.Box>
                                <C.InputsConfiguration placeholder="E-mail" />
                                <C.IconTrash><HiOutlineTrash /></C.IconTrash>
                            </C.ContainerBox>
                        </C.ContainerInputsConfiguration>
                        <C.ContainerCheckbox>
                            <C.Checkbox type='checkbox' />
                            <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                        </C.ContainerCheckbox>
                    </C.ContainerFormConfiguration>

                    <C.IconPlus>
                        <AiOutlinePlus />
                        <C.TextAddNewField>Adicionar novo campo</C.TextAddNewField>
                    </C.IconPlus>

                </C.ModalContainerConfiguration>
            </Modal>
        </C.Container>
    )
}