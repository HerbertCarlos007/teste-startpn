import React, { useState } from "react"
import * as C from './styles'
import perfil from '../../assets/perfil.png'
import { BsFillGearFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import { OutsidersService } from '../../services/outsidersService'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import { Modal } from '../Modal'

export const MobileList = () => {

    const [isSelected, setIsSelected] = useState(false)
    const [outsiders, setOutsiders] = useState([]);

    const [showCreationModalConfigurationOutsider, setShowCreationModalConfigurationOutsider] = useState(false)

    const handleCloseModalConfigurationOutsider = () => {
        setShowCreationModalConfigurationOutsider(false)
    }

    const getOutsiders = async (typeOutsider) => {
        const outsiderServices = new OutsidersService();
        const response = await outsiderServices.getOutsiders(typeOutsider);
        setOutsiders(response);
        setIsSelected(typeOutsider === 'cliente' ? true : false);
    };



    return (
        <C.Container>
            <C.ContainerOptions>
                <C.Title>Terceiro</C.Title>
                <C.ContainerConfigurationAndSearch>
                    <C.IconConfiguration onClick={() => setShowCreationModalConfigurationOutsider(true)}>
                        <BsFillGearFill size={27} color='#476EE6' />
                    </C.IconConfiguration>
                    <C.IconSearch>
                        <AiOutlineSearch size={27} color='#476EE6' />
                    </C.IconSearch>
                </C.ContainerConfigurationAndSearch>
            </C.ContainerOptions>

            <C.ContainerCustomersAndSuppliers>
                <C.TextCostumers
                    onClick={() => getOutsiders('cliente')}
                    style={{
                        backgroundColor: isSelected ? '#476EE6' : '',
                        color: isSelected ? 'white' : '',
                        padding: '5px',
                        borderRadius: '100px',
                    }}
                >
                    Clientes
                </C.TextCostumers>

                <C.TextSuppliers
                    onClick={() => getOutsiders('fornecedor')}
                    style={{
                        backgroundColor: !isSelected ? '#476EE6' : '',
                        color: !isSelected ? 'white' : '',
                        padding: '5px',
                        borderRadius: '100px',
                    }}
                >
                    Fornecedores
                </C.TextSuppliers>
            </C.ContainerCustomersAndSuppliers>

            {outsiders.map((outsider) =>
                <>
                    <C.ContainerList>
                        <C.UpSectionList>
                            <C.LeftSection>
                                <C.Checkbox type='checkbox' />
                                <C.ImagePerfil src={perfil} />
                                <C.Name>{outsider.name}</C.Name>
                            </C.LeftSection>

                            <C.IconOptions>
                                <SlOptionsVertical size={27} />
                            </C.IconOptions>
                        </C.UpSectionList>
                        <C.Line></C.Line>

                        <C.Content>
                            <C.Header>
                                <C.TextHeader>E-mail</C.TextHeader>
                                <C.TextHeader>Telefone</C.TextHeader>
                                <C.TextHeader>Endereço</C.TextHeader>
                            </C.Header>
                            <C.Row>
                                <C.TextRow>{outsider.email}</C.TextRow>
                                <C.TextRow>{outsider.telephone}</C.TextRow>
                                <C.TextRow>{outsider.address}</C.TextRow>
                            </C.Row>
                        </C.Content>
                    </C.ContainerList>
                </>
            )}


            <Modal show={showCreationModalConfigurationOutsider} onClose={handleCloseModalConfigurationOutsider}>
                <C.ContainerModalConfiguration>
                    <C.HeaderConfiguration>
                        <C.LeftSectionHeader>
                            <C.IconClose>X</C.IconClose>
                            <C.TitleModal>Configuração</C.TitleModal>
                        </C.LeftSectionHeader>

                        <C.RightSectionHeader>
                            <C.ButtonAction>Editar</C.ButtonAction>
                        </C.RightSectionHeader>
                    </C.HeaderConfiguration>
                    <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>
                </C.ContainerModalConfiguration>

                <C.ContainerCustomersAndSuppliers style={{ width: '350px', marginTop: '20px' }}>
                    <C.TextCostumers
                        onClick={() => getOutsiders('cliente')}
                        style={{
                            backgroundColor: isSelected ? '#476EE6' : '',
                            color: isSelected ? 'white' : '',
                            padding: '5px',
                            borderRadius: '100px',
                        }}
                    >
                        Clientes
                    </C.TextCostumers>

                    <C.TextSuppliers
                        onClick={() => getOutsiders('fornecedor')}
                        style={{
                            backgroundColor: !isSelected ? '#476EE6' : '',
                            color: !isSelected ? 'white' : '',
                            padding: '5px',
                            borderRadius: '100px',
                        }}
                    >
                        Fornecedores
                    </C.TextSuppliers>
                </C.ContainerCustomersAndSuppliers>
                <C.ContentForm>

                    <C.TextFieldsForm>Campos do formulário</C.TextFieldsForm>

                    <C.ContainerFormConfiguration>
                        <C.ContainerInputsConfiguration>
                            <C.LabelFormConfiguration>Nome do campo</C.LabelFormConfiguration>
                            <C.ContainerBox>
                                <C.Box>1</C.Box>
                                <C.InputsConfiguration />
                                <C.IconTrash ><HiOutlineTrash /></C.IconTrash>
                            </C.ContainerBox>
                        </C.ContainerInputsConfiguration>
                        <C.ContainerCheckbox>
                            <C.CheckboxConfiguration type='checkbox' />
                            <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                        </C.ContainerCheckbox>
                    </C.ContainerFormConfiguration>


                    <C.IconPlus>
                        <AiOutlinePlus />
                        <C.TextAddNewField >Adicionar novo campo</C.TextAddNewField>
                    </C.IconPlus>
                </C.ContentForm>
            </Modal>

        </C.Container >

    )
}