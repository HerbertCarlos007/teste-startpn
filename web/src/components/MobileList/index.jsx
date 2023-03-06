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
    const [file, setFile] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [typeOutsider, setTypeOutsider] = useState('')
    const [selectedId, setSelectedId] = useState('')

    const [showCreationModalConfigurationOutsider, setShowCreationModalConfigurationOutsider] = useState(false)
    const [showCreationModalNewOutsider, setShowCreationModalNewOutsider] = useState(false)
    const [showCreationModalEditOutsider, setShowCreationModalEditOutsider] = useState(false)
    const [showCreationModalActions, setShowCreationModalActions] = useState(false)
    const [showCreationModalDeleteOutsider, setShowCreationModalDeleteOutsider] = useState(false)


    const handleCloseModalNewOutsider = () => {
        setShowCreationModalNewOutsider(false)
    }

    const handleCloseModalEditOutsider = () => {
        setShowCreationModalEditOutsider(false)
    }

    const handleShowCreationModalEditOutsider = () => {
        setShowCreationModalEditOutsider(true)
        setShowCreationModalActions(false)
    }

    const handleShowCreationModalDeleteOutsider = () => {
        setShowCreationModalDeleteOutsider(true)
        setShowCreationModalActions(false)
    }

    const handleCloseModalDeleteOutsider = () => {
        setShowCreationModalDeleteOutsider(false)
    }

    const handleCloseModalActions = () => {
        setShowCreationModalActions(false)
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
            setShowCreationModalActions(true)

        } catch (error) {

        }
    }


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

    const handleChangeSelect = (e) => {
        const textSelect = e.target.value
        setTypeOutsider(textSelect)
    }

    const createNewOutsider = async (e) => {
        e.preventDefault()
        try {
            const formData = new FormData();
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            formData.append('file', file);
            formData.append('outsiderData', JSON.stringify({
                name,
                email,
                telephone,
                address,
                typeOutsider,
            }))
            await api.post('/outsiders', formData, config)

            setShowCreationModalNewOutsider(false)
            getOutsiders()
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
            getOutsiders()
        } catch (error) {

        }
    }

    const deleteOutsider = async (id) => {
        await api.delete(`/outsiders/${id}`)
        setShowCreationModalDeleteOutsider(false)
        getOutsiders()
    }

    const uploadImage = async (event) => {
        setFile(event.target.files[0]);

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
                                <C.ImagePerfil src={outsider.avatar} />
                                <C.Name>{outsider.name}</C.Name>
                            </C.LeftSection>

                            <C.IconOptions>
                                <SlOptionsVertical size={27} onClick={() => getEachOutsider(outsider.id)} />
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
                            <C.ButtonAction onClick={createNewOutsider}>Adicionar</C.ButtonAction>
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
                            onChange={uploadImage}
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
                        <C.Input onChange={(e) => setName(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input onChange={(e) => setEmail(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Telefone</C.LabelForm>
                        <C.Input onChange={(e) => setTelephone(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Endereço</C.LabelForm>
                        <C.Input onChange={(e) => setAddress(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Nome do terceiro</C.LabelForm>
                        <C.Select onChange={handleChangeSelect}>
                            <C.OptionsSelect >Selecione</C.OptionsSelect>
                            <C.OptionsSelect >Cliente</C.OptionsSelect>
                            <C.OptionsSelect >Fornecedor</C.OptionsSelect>
                        </C.Select>
                    </C.ContainerInputs>
                </C.ContainerForm>
            </Modal>

            <Modal show={showCreationModalActions} onClose={handleCloseModalActions}>
                <C.HeaderModal>
                    <C.LeftSectionModal style={{ position: 'relative', right: '35px' }}>
                        <C.TitleModal >Ações</C.TitleModal>
                    </C.LeftSectionModal>
                    <C.RightSectionModal>
                        <C.IconClose onClick={handleCloseModalActions}>X</C.IconClose>
                    </C.RightSectionModal>
                </C.HeaderModal>
                <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>

                <C.ContentActions>
                    <C.TextActions onClick={handleShowCreationModalEditOutsider}>Editar terceiro</C.TextActions>
                    <C.Line style={{ width: '350px', marginTop: '15px', }}></C.Line>
                    <C.TextActions onClick={handleShowCreationModalDeleteOutsider} style={{ color: '#EA0000' }}>Deletar terceiro</C.TextActions>
                    <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>
                </C.ContentActions>
            </Modal>

            <Modal show={showCreationModalDeleteOutsider} onClose={handleCloseModalDeleteOutsider}>
                <C.HeaderModal>
                    <C.LeftSectionModal>
                        <C.IconClose onClick={() => setShowCreationModalDeleteOutsider(false)}>X</C.IconClose>
                        <C.TitleModal>Excluir terceiro</C.TitleModal>
                    </C.LeftSectionModal>

                    <C.RightSectionModal>
                        <C.ButtonAction
                            style={{ backgroundColor: '#FFE1E1', borderRadius: '50px', color: '#EA0000', border: '1px solid #FFE1E1' }}
                            onClick={() => deleteOutsider(selectedId)}>Excluir</C.ButtonAction>
                    </C.RightSectionModal>
                </C.HeaderModal>
                <C.Line style={{ width: '350px', marginTop: '15px' }}></C.Line>

                <C.ContentDeleteOutsider>
                    <C.TextToDelete>
                        Tem certeza que deseja excluir o cliente <b>{name}</b>
                    </C.TextToDelete>
                </C.ContentDeleteOutsider>
            </Modal>


            <Modal show={showCreationModalEditOutsider} onClose={handleCloseModalEditOutsider}>
                <C.ContainerModal>
                    <C.HeaderModal>
                        <C.LeftSectionModal>
                            <C.IconClose onClick={() => setShowCreationModalEditOutsider(false)}>X</C.IconClose>
                            <C.TitleModal>Editar terceiro</C.TitleModal>
                        </C.LeftSectionModal>

                        <C.RightSectionModal>
                            <C.ButtonAction onClick={() => updateOutsider(selectedId)}>Editar</C.ButtonAction>
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
                            onChange={uploadImage}
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
                        <C.Input value={name} onChange={(e) => setName(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>E-mail</C.LabelForm>
                        <C.Input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Telefone</C.LabelForm>
                        <C.Input value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Endereço</C.LabelForm>
                        <C.Input value={address} onChange={(e) => setAddress(e.target.value)} />
                    </C.ContainerInputs>

                    <C.ContainerInputs>
                        <C.LabelForm>Nome do terceiro</C.LabelForm>
                        <C.Select value={typeOutsider} onChange={handleChangeSelect}>
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