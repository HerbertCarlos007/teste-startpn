import React, { useState, useEffect } from "react";
import * as C from './styles'
import { Modal } from '../Modal'
import { CgMenu } from 'react-icons/cg'
import { GrFormClose } from 'react-icons/gr'
import { BiCamera } from 'react-icons/bi'
import photo from '../../assets/photo.png'
import api from "../../services/api";


export const Table = ({ outsiders }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [typeOutsider, setTypeOutsider] = useState('')
    const [selectedId, setSelectedId] = useState('')
    const [showCreationModal, setShowCreationModal] = useState(false)
    const [showCreationModalDeleteOutsider, setShowCreationModalDeleteOutsider] = useState(false)
    const [showCreationModalEditOutsider, setShowCreationModalEditOutsider] = useState(false)

    const handleCloseCreationModal = () => {
        setShowCreationModal(false)
    }

    const handleCreationModalDeleteOutsider = () => {
        setShowCreationModalDeleteOutsider(true)
        setShowCreationModal(false)

    }

    const handleCloseModalDeleteOutsider = () => {
        setShowCreationModalDeleteOutsider(false)
    }

    const handleCreationModalEditOutsider = () => {
        setShowCreationModalEditOutsider(true)
        setShowCreationModal(false)

    }

    const handleCloseModalEditOutsider = () => {
        setShowCreationModalEditOutsider(false)
    }

    const handleChangeSelect = (e) => {
        const textSelect = e.target.value
        setTypeOutsider(textSelect)
        console.log(typeOutsider)
    }

    const getEachOutsider = async (id) => {
        try {
            const response = await api.get(`/outsiders/${id}`)
            const data = response.data
            setName(data.name)
            setEmail(data.email)
            setTelephone(data.telephone)
            setAddress(data.address)
            setSelectedId(data.id)
            setShowCreationModal(true)

        } catch (error) {

        }
    }

    const updateOutsider = async (id) => {
        try {
            await api.put(`/outsiders/${id}`, {
                id,
                name,
                email,
                telephone,
                address,
                typeOutsider
            })
            getOutsiders()
            setShowCreationModalEditOutsider(false)
        } catch (error) {

        }
    }

    const deleteOutsider = async (id) => {
        await api.delete(`/outsiders/${id}`)
        setShowCreationModalDeleteOutsider(false)
        getOutsiders()
    }

    console.log(outsiders)

    return (
        <C.Container>
            <C.HeaderTable>
                <C.ContentHeaderTable>
                    <C.Checkbox type='checkbox' />
                    <C.TextName>Nome</C.TextName>
                    <C.TextEmail>E-mail</C.TextEmail>
                    <C.TextNumber>Telefone</C.TextNumber>
                    <C.TextAdress>Endereço</C.TextAdress>
                </C.ContentHeaderTable>
            </C.HeaderTable>

            {outsiders.map((client, index) =>
                <C.ContainerTable>
                    <C.ContentTable>
                        <C.Checkbox type='checkbox' />
                        <C.TextInformationsOutsider>{client.name}</C.TextInformationsOutsider>
                        <C.TextInformationsOutsider>{client.email}</C.TextInformationsOutsider>
                        <C.TextInformationsOutsider>{client.telephone}</C.TextInformationsOutsider>
                        <C.TextInformationsOutsider>{client.address}</C.TextInformationsOutsider>
                        <C.IconMenu onClick={() => getEachOutsider(client.id)}><CgMenu /></C.IconMenu>
                    </C.ContentTable>
                </C.ContainerTable>
            )}

            <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
                <C.ModalContainer>
                    <C.TopSectionModal>
                        <C.TextTitleModal>Ações</C.TextTitleModal>
                        <C.IconClose onClick={handleCloseCreationModal}><GrFormClose /></C.IconClose>
                    </C.TopSectionModal>
                    <C.Line />

                    <C.MidSectionModal>
                        <C.TextEditOutsider onClick={handleCreationModalEditOutsider}>Editar Terceiro</C.TextEditOutsider>
                        <C.Line />
                        <C.TextDeleteOutsider onClick={handleCreationModalDeleteOutsider}>Excluir terceiro</C.TextDeleteOutsider>
                        <C.Line />
                    </C.MidSectionModal>
                </C.ModalContainer>
            </Modal>
            <Modal show={showCreationModalDeleteOutsider} onClose={handleCloseModalDeleteOutsider}>
                <C.ModalContainerDeleteOutsider>
                    <C.TopSectionModalDeleteOutsider>
                        <C.LeftSideModal>
                            <C.IconClose style={{ marginBottom: '6px' }} onClick={handleCloseModalDeleteOutsider}><GrFormClose /></C.IconClose>
                            <C.TextTitleModal>Excluir terceiro</C.TextTitleModal>
                        </C.LeftSideModal>
                        <C.ButtonActions onClick={() => deleteOutsider(selectedId)}>Excluir</C.ButtonActions>
                    </C.TopSectionModalDeleteOutsider>
                    <C.Line />

                    <C.ContainerConfirmDelete>
                        <C.TextConfirmDeleteOutsider>
                            Tem certeza que deseja excluir o
                        </C.TextConfirmDeleteOutsider>

                        {/* <C.TextBold   </C.TextBold> */}
                        <C.AlignInputNameDelete>
                            <C.InputNameDelete placeholder="cliente" disabled value={name} />
                        </C.AlignInputNameDelete>

                    </C.ContainerConfirmDelete>
                </C.ModalContainerDeleteOutsider>
            </Modal>

            <Modal show={showCreationModalEditOutsider} onClose={handleCloseModalEditOutsider}>
                <C.ModalContainerEditOutsider>
                    <C.TopSectionModalEditOutsider>
                        <C.LeftSideModal>
                            <C.IconClose style={{ marginBottom: '6px' }} onClick={handleCloseModalEditOutsider}><GrFormClose /></C.IconClose>
                            <C.TextTitleModal>Editar terceiro</C.TextTitleModal>
                        </C.LeftSideModal>
                        <C.ButtonActions onClick={() => updateOutsider(selectedId)}>Editar</C.ButtonActions>
                    </C.TopSectionModalEditOutsider>
                    <C.Line style={{ width: '605px' }} />

                    <C.ContainerPhotoOutsider>
                        <C.PhotoOutsider src={photo} />
                        <C.ContainerUploadPhoto>
                            <C.IconUpload><BiCamera /></C.IconUpload>
                        </C.ContainerUploadPhoto>
                    </C.ContainerPhotoOutsider>
                </C.ModalContainerEditOutsider>

                <C.ContainerForm>
                    <C.ContainerInputs>
                        <C.UpFormInputs>
                            <C.FormInputs>
                                <C.LabelForm>Nome do Terceiro</C.LabelForm>
                                <C.Input value={name} onChange={(e) => setName(e.target.value)} />
                            </C.FormInputs>

                            <C.FormInputs>
                                <C.LabelForm >E-mail</C.LabelForm>
                                <C.Input value={email} onChange={(e) => setEmail(e.target.value)} />
                            </C.FormInputs>
                        </C.UpFormInputs>

                        <C.CenterFormInputs>
                            <C.FormInputs>
                                <C.LabelForm>Telefone</C.LabelForm>
                                <C.Input value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                            </C.FormInputs>

                            <C.FormInputs>
                                <C.LabelForm>Endereço</C.LabelForm>
                                <C.Input value={address} onChange={(e) => setAddress(e.target.value)} />
                            </C.FormInputs>
                        </C.CenterFormInputs>

                        <C.DownFormInputs>
                            <C.FormInputs>
                                <C.LabelForm>Tipo</C.LabelForm>
                                <C.Select onChange={handleChangeSelect}>
                                    <C.OptionsSelect>Selecione</C.OptionsSelect>
                                    <C.OptionsSelect>Cliente</C.OptionsSelect>
                                    <C.OptionsSelect>Fornecedor</C.OptionsSelect>
                                </C.Select>
                            </C.FormInputs>
                        </C.DownFormInputs>
                    </C.ContainerInputs>
                </C.ContainerForm>
            </Modal >



        </C.Container>
    )
}