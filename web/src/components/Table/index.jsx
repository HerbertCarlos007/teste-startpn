import React, { useState } from "react";
import * as C from './styles'
import { Modal } from '../Modal'
import { CgMenu } from 'react-icons/cg'
import { GrFormClose } from 'react-icons/gr'

export const Table = () => {

    const [showCreationModal, setShowCreationModal] = useState(false)

    const handleCreationModal = () => {
        setShowCreationModal(true)
    }

    const handleCloseCreationModal = () => {
        setShowCreationModal(false)
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
                        <C.TextEditOutsider>Editar Terceiro</C.TextEditOutsider>
                        <C.Line />
                        <C.TextDeleteOutsider>Excluir terceiro</C.TextDeleteOutsider>
                        <C.Line />
                    </C.MidSectionModal>
                </C.ModalContainer>
            </Modal>
        </C.Container>
    )
}