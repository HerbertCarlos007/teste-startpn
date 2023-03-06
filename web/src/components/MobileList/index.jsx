import React, { useEffect, useState } from "react"
import * as C from './styles'
import perfil from '../../assets/perfil.png'
import { BsFillGearFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import { OutsidersService } from '../../services/outsidersService'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import photoOutsider from '../../assets/group.png'
import { BiCamera } from 'react-icons/bi'
import { Modal } from '../Modal'
import Fab from '@mui/material/Fab';
import api from "../../services/api"

export const MobileList = () => {

    useEffect(() => {
        getOutsiders()
        getCustomFields()
    }, [])

    const [isSelected, setIsSelected] = useState(false)
    const [outsiders, setOutsiders] = useState([]);
    const [newFields, setNewFields] = useState([])
    const [fields, setFields] = useState([])
    const [valueField, setValueField] = useState('')

    const [showCreationModalConfigurationOutsider, setShowCreationModalConfigurationOutsider] = useState(false)
    const [showCreationModalNewOutsider, setShowCreationModalNewOutsider] = useState(false)

    const handleCloseModalNewOutsider = () => {
        setShowCreationModalNewOutsider(false)
    }

    const handleCloseModalConfigurationOutsider = () => {
        setShowCreationModalConfigurationOutsider(false)
    }

    const getOutsiders = async (typeOutsider) => {
        const outsiderServices = new OutsidersService();
        const response = await outsiderServices.getOutsiders(typeOutsider);
        setOutsiders(response);
        setIsSelected(typeOutsider === 'cliente' ? true : false);
    };


    const addInput = (e) => {
        e.preventDefault()
        setNewFields([...newFields, ''])
    }

    const deleteCustomField = async (position) => {
        setNewFields([...newFields.filter((_, index) => index !== position)])

    }


    const getCustomFields = async () => {
        const response = await api.get('/custom-fields')
        setFields(response.data.customFields)

    }

    const createCustomField = async () => {
        const response = await api.post('/custom-fields', {
            name: valueField
        })
        setShowCreationModalConfigurationOutsider(false)
        getCustomFields()
    }

    const deleteField = async (id) => {
        const response = await api.delete(`/custom-fields/${id}`)
        getCustomFields()
        setCreationModalConfiguration(false)
        getCustomFields()
    }

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
                <C.ContainerModal>
                    <C.HeaderModal>
                        <C.LeftSectionModal>
                            <C.IconClose onClick={() => setShowCreationModalConfigurationOutsider(false)}>X</C.IconClose>
                            <C.TitleModal>Configuração</C.TitleModal>
                        </C.LeftSectionModal>

                        <C.RightSectionModal>
                            <C.ButtonAction onClick={createCustomField}>Editar</C.ButtonAction>
                        </C.RightSectionModal>
                    </C.HeaderModal>
                    <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>
                </C.ContainerModal>

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

                    {fields && fields.map((field, index) =>
                        <C.ContainerFormConfiguration>
                            <C.ContainerInputsConfiguration>
                                <C.LabelFormConfiguration style={{ marginRight: '160px' }}>{field.name}</C.LabelFormConfiguration>
                                <C.ContainerBox>
                                    <C.Box>{index + 1}</C.Box>
                                    <C.InputsConfiguration onChange={(e) => setValueField(e.target.value)} />
                                    <C.IconTrash onClick={() => deleteField(field.id)}><HiOutlineTrash /></C.IconTrash>
                                </C.ContainerBox>
                            </C.ContainerInputsConfiguration>
                            <C.ContainerCheckbox>
                                <C.CheckboxConfiguration type='checkbox' />
                                <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                            </C.ContainerCheckbox>
                        </C.ContainerFormConfiguration>)}

                    <C.TextFieldsForm>Campos do formulário</C.TextFieldsForm>
                    {newFields && newFields.map((newField, index) =>
                        <C.ContainerFormConfiguration>
                            <C.ContainerInputsConfiguration>
                                <C.LabelFormConfiguration>Nome do campo</C.LabelFormConfiguration>
                                <C.ContainerBox>
                                    <C.Box>{index + 1}</C.Box>
                                    <C.InputsConfiguration onChange={(e) => setValueField(e.target.value)} />
                                    <C.IconTrash onClick={() => deleteCustomField(index)}><HiOutlineTrash /></C.IconTrash>
                                </C.ContainerBox>
                            </C.ContainerInputsConfiguration>
                            <C.ContainerCheckbox>
                                <C.CheckboxConfiguration type='checkbox' />
                                <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                            </C.ContainerCheckbox>
                        </C.ContainerFormConfiguration>)}
                    <C.IconPlus>
                        <AiOutlinePlus />
                        <C.TextAddNewField onClick={addInput}>Adicionar novo campo</C.TextAddNewField>
                    </C.IconPlus>
                </C.ContentForm>
            </Modal>

            <Fab
                color="primary"
                style={{ position: 'fixed', bottom: '20px', right: '20px' }}
                onClick={() => setShowCreationModalNewOutsider(true)}
            >
                <AiOutlinePlus size={27} />
            </Fab>

            <Modal show={showCreationModalNewOutsider} onClose={handleCloseModalNewOutsider}>
                <C.ContainerModal>
                    <C.HeaderModal>
                        <C.LeftSectionModal>
                            <C.IconClose onClick={() => setShowCreationModalNewOutsider(false)}>X</C.IconClose>
                            <C.TitleModal>Criar terceiro</C.TitleModal>
                        </C.LeftSectionModal>

                        <C.RightSectionModal>
                            <C.ButtonAction >Adicionar</C.ButtonAction>
                        </C.RightSectionModal>
                    </C.HeaderModal>
                    <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>
                </C.ContainerModal>

                <C.ContainerPhotoOutsider>
                    <C.PhotoOutsider src={photoOutsider} />
                    <C.ContainerUploadPhoto>
                        <input
                            type='file'
                            id='input-file'
                            // onChange={uploadImage}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor='input-file'>
                            <C.IconUpload as='span'>
                                <BiCamera />
                            </C.IconUpload>
                        </label>
                    </C.ContainerUploadPhoto>
                </C.ContainerPhotoOutsider>

                <C.ContainerForm>
                    <C.ContainerInputs>
                        <C.LabelForm>Nome do terceiro</C.LabelForm>
                        <C.Input />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Telefone</C.LabelForm>
                        <C.Input />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Endereço</C.LabelForm>
                        <C.Input />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Nome do terceiro</C.LabelForm>
                        <C.Select >
                            <C.OptionsSelect >Selecione</C.OptionsSelect>
                            <C.OptionsSelect >Cliente</C.OptionsSelect>
                            <C.OptionsSelect >Fornecedor</C.OptionsSelect>
                        </C.Select>
                    </C.ContainerInputs>
                </C.ContainerForm>
            </Modal>
        </C.Container >

    )
}