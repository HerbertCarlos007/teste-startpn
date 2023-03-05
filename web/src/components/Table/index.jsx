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

    }

    const getEachOutsider = async (id) => {
        try {
            const response = await api.get(`/outsiders/${id}`)
            const data = response.data
            setName(data.name)
            setEmail(data.email)
            setTelephone(data.telephone)
            setAddress(data.address)
            setTypeOutsider(data.typeOutsider)
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
            setShowCreationModalEditOutsider(false)
            location.reload()
        } catch (error) {

        }
    }

    const deleteOutsider = async (id) => {
        await api.delete(`/outsiders/${id}`)
        setShowCreationModalDeleteOutsider(false)
        location.reload()
    }

    const hideExcessiveLongNames = (name) => {
        if (name.length > 27) {
            return name.slice(0, 24) + "...";
        } else {
            return name;
        }
    }

    return (
        <C.Container>
            <C.HeaderTable>
                <C.ContentHeaderTable>
                    <C.CheckboxHeader type='checkbox' />
                    <C.ColumnName>Nome</C.ColumnName>
                    <C.ColumnName>E-mail</C.ColumnName>
                    <C.ColumnName>Telefone</C.ColumnName>
                    <C.ColumnName>Endereço</C.ColumnName>
                </C.ContentHeaderTable>
            </C.HeaderTable>
            {outsiders.map((outsider, index) =>
                <C.TableRow>
                    <C.RowContent>
                        <C.RowLeftCorner>
                            <C.ChecboxContainerTable type='checkbox' />
                            <C.OutsiderAvatar src={outsider.avatar} />
                        </C.RowLeftCorner>
                        <C.ColumnValue title={outsider.name}>{hideExcessiveLongNames(outsider.name)}</C.ColumnValue>
                        <C.ColumnValue title={outsider.email}>{hideExcessiveLongNames(outsider.email)}</C.ColumnValue>
                        <C.ColumnValue title={outsider.telephone}>{hideExcessiveLongNames(outsider.telephone)}</C.ColumnValue>
                        <C.ColumnValue title={outsider.address}>{hideExcessiveLongNames(outsider.address)}</C.ColumnValue>
                        <C.IconMenu onClick={() => getEachOutsider(outsider.id)}><CgMenu /></C.IconMenu>
                    </C.RowContent>
                </C.TableRow>
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
                                <C.Select onChange={handleChangeSelect} value={typeOutsider}>
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