import React, { useState } from "react";
import * as C from './styles'
import { Modal } from '../Modal'
import { CgMenu } from 'react-icons/cg'
import { GrFormClose } from 'react-icons/gr'

export const Table = () => {

    const [showCreationModal, setShowCreationModal] = useState(false)
    const [showCreationModalDeleteOutsider, setShowCreationModalDeleteOutsider] = useState(false)

    const handleCreationModal = () => {
        setShowCreationModal(true)
    }

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

            <C.ContainerTable>
                <C.ContentTable>
                    <C.Checkbox type='checkbox' />
                    <C.TextInformationsOutsider>Mateus Santos</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>mateus@startpn.com</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>11 97796-5692</C.TextInformationsOutsider>
                    <C.TextInformationsOutsider>Av. Brg. Faria Lima, 2355 - São Paulo <br /> - SP, 01452-922</C.TextInformationsOutsider>
                    <C.IconMenu onClick={handleCreationModal}><CgMenu /></C.IconMenu>
                </C.ContentTable>
            </C.ContainerTable>

            <Modal show={showCreationModal} onClose={handleCloseCreationModal}>
                <C.ModalContainer>
                    <C.TopSectionModal>
                        <C.TextTitleModal>Ações</C.TextTitleModal>
                        <C.IconClose onClick={handleCloseCreationModal}><GrFormClose /></C.IconClose>
                    </C.TopSectionModal>
                    <C.Line />

                    <C.MidSectionModal>
                        <C.TextEditOutsider onClick={handleCreationModalDeleteOutsider}>Editar Terceiro</C.TextEditOutsider>
                        <C.Line />
                        <C.TextDeleteOutsider>Excluir terceiro</C.TextDeleteOutsider>
                        <C.Line />
                    </C.MidSectionModal>
                </C.ModalContainer>
            </Modal>

            <Modal show={showCreationModalDeleteOutsider} onClose={handleCloseModalDeleteOutsider}>
                <C.ModalContainerDeleteOutsider>
                    <C.TopSectionModalDeleteOutsider>
                        <C.LeftSideModalDeleteOutsider>
                            <C.IconClose style={{ marginBottom: '6px' }} onClick={handleCloseModalDeleteOutsider}><GrFormClose /></C.IconClose>
                            <C.TextTitleModal>Excluir terceiro</C.TextTitleModal>
                        </C.LeftSideModalDeleteOutsider>
                        <C.TextModalDeleteOutsider>Excluir</C.TextModalDeleteOutsider>
                    </C.TopSectionModalDeleteOutsider>
                    <C.Line />

                    <C.ContainerConfirmDelete>
                        <C.TextConfirmDeleteOutsider>
                            Tem certeza que deseja excluir o ?
                        </C.TextConfirmDeleteOutsider>
                        <C.TextIndent>cliente
                            <C.TextBold> Mateus santos </C.TextBold>
                        </C.TextIndent>
                    </C.ContainerConfirmDelete>

                </C.ModalContainerDeleteOutsider>
            </Modal>
        </C.Container>
    )
}