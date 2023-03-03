import React, { useState, useEffect } from "react";
import * as C from './styles'
import { Table } from '../../Table'
import { SideBar } from '../../Sidebar'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxGear } from 'react-icons/rx'
import { GrFormClose } from 'react-icons/gr'
import { BiCamera } from 'react-icons/bi'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiOutlinePlus } from 'react-icons/ai'
import photo from '../../../assets/group.png'
import { Modal } from '../../Modal'
import { Header } from "../../Header";
import { OutsidersService } from '../../../services/outsidersService'

import api from '../../../services/api'

export const Outsiders = () => {

    const [outsiders, setOutsiders] = useState([]);
    const [newFields, setNewFields] = useState([])
    const [fields, setFields] = useState([])
    const [valueField, setValueField] = useState('')
    const [searchedOutsiderValue, setSearchedOutsiderValue] = useState('');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [typeOutsider, setTypeOutsider] = useState('')
    const [showCreationModalNewOutsider, setCreationModalNewOutsider] = useState(false)
    const [showCreationModalConfiguration, setCreationModalConfiguration] = useState(false)

    useEffect(() => {
        getOutsiders('cliente')
        getCustomFields()
    }, [])

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

    const handleChangeSelect = (e) => {
        const textSelect = e.target.value
        setTypeOutsider(textSelect)
    }

    const createNewOutsider = async (e) => {
        e.preventDefault()

        try {
            await api.post('/outsiders', {
                name,
                email,
                telephone,
                address,
                typeOutsider
            })

            setCreationModalNewOutsider(false)
            window.location.reload()
        } catch (error) {

        }
    }

    const getCustomFields = async () => {
        const response = await api.get('/custom-fields')
        setFields(response.data.customFields)

    }

    const addInput = (e) => {
        e.preventDefault()
        setNewFields([...newFields, ''])
    }

    const createCustomField = async () => {
        const response = await api.post('/custom-fields', {
            name: valueField
        })
        window.location.reload()
    }

    const deleteField = async (id) => {
        const response = await api.delete(`/custom-fields/${id}`)
        getCustomFields()
    }

    const deleteCustomField = async (position) => {
        setNewFields([...newFields.filter((_, index) => index !== position)])
        
    }

    const getOutsiders = async (typeOutsider) => {
        const outsiderServices = new OutsidersService()
        const response = await outsiderServices.getOutsiders(typeOutsider)
        setOutsiders(response)
        console.log(outsiders)
    }

    const searchOutsider = () => {
        const searchedOutsiders = outsiders
            .find((availableOutsiders) => availableOutsiders.name.toUpperCase() === searchedOutsiderValue.toUpperCase())
        return setOutsiders([searchedOutsiders])
    }

    const handleSearchInputChange = (e) => {
        setSearchedOutsiderValue(e.target.value)
    }

    return (
        <C.Container>
            <C.SidebarContainer>
                <SideBar />
            </C.SidebarContainer>

            <C.ContainerAllContent>
                <Header title='Terceiros' />
                <C.ContainerOptions>
                    <C.LeftSection>
                        <C.ContainerCustomersAndSuppliers>
                            <C.TextCostumers onClick={() => getOutsiders('cliente')}>Clientes</C.TextCostumers>
                            <C.TextSuppliers onClick={() => getOutsiders('fornecedor')}>Fornecedores</C.TextSuppliers>
                        </C.ContainerCustomersAndSuppliers>
                        <C.IconSearch ><AiOutlineSearch /></C.IconSearch>
                        <C.Input
                            placeholder="Pesquisar"
                        // value={searchedOutsiderValue}
                        // onChange={handleSearchInputChange}
                        />
                        <C.ContainerGear onClick={handleCreationModalConfiguration}>
                            <RxGear />
                        </C.ContainerGear>
                    </C.LeftSection>

                    <C.RightSection onClick={handleCreationModalNewOutsider}>
                        <C.ButtonNewOutsider>Novo terceiro</C.ButtonNewOutsider>
                    </C.RightSection>
                </C.ContainerOptions>

                <C.ContentContainer>
                    <Table outsiders={outsiders} />
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
                        <C.ButtonActions onClick={createNewOutsider}>Criar</C.ButtonActions>
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
                                    <C.InputNewOutsider onChange={(e) => setName(e.target.value)} />
                                </C.FormInputs>

                                <C.FormInputs>
                                    <C.LabelForm>E-mail</C.LabelForm>
                                    <C.InputNewOutsider onChange={(e) => setEmail(e.target.value)} />
                                </C.FormInputs>
                            </C.UpFormInputs>

                            <C.CenterFormInputs>
                                <C.FormInputs>
                                    <C.LabelForm>Telefone</C.LabelForm>
                                    <C.InputNewOutsider onChange={(e) => setTelephone(e.target.value)} />
                                </C.FormInputs>

                                <C.FormInputs>
                                    <C.LabelForm>Endereço</C.LabelForm>
                                    <C.InputNewOutsider onChange={(e) => setAddress(e.target.value)} />
                                </C.FormInputs>
                            </C.CenterFormInputs>

                            <C.DownFormInputs>
                                <C.FormInputs>
                                    <C.LabelForm>Tipo</C.LabelForm>
                                    <C.Select onChange={handleChangeSelect}>
                                        <C.OptionsSelect >Selecione</C.OptionsSelect>
                                        <C.OptionsSelect >Cliente</C.OptionsSelect>
                                        <C.OptionsSelect >Fornecedor</C.OptionsSelect>
                                    </C.Select>
                                </C.FormInputs>


                                {fields.map((field) =>
                                    <>
                                        <C.FormInputs>
                                            <C.LabelForm>{field.name}</C.LabelForm>
                                            <C.InputNewOutsider placeholder={field.description} />
                                        </C.FormInputs>
                                    </>
                                )}
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
                        <C.ButtonActions onClick={createCustomField}>Editar</C.ButtonActions>
                    </C.TopSectionModalNewOutsider>
                    <C.Line style={{ width: '365px' }} />

                    <C.ContainerCustomersAndSuppliers style={{ width: '350px', gap: '130px', position: 'relative', left: '10px', marginTop: '15px' }}>
                        <C.TextCostumers>Clientes</C.TextCostumers>
                        <C.TextSuppliers>Fornecedores</C.TextSuppliers>
                    </C.ContainerCustomersAndSuppliers>

                    <C.TextFieldsForm>Campos do formulário</C.TextFieldsForm>

                    {fields.map((field, index) =>
                        <C.ContainerFormConfiguration>
                            <C.ContainerInputsConfiguration>
                                <C.LabelFormConfiguration style={{marginRight: '160px'}}>{field.name}</C.LabelFormConfiguration>
                                <C.ContainerBox>
                                    <C.Box>{index + 1}</C.Box>
                                    <C.InputsConfiguration onChange={(e) => setValueField(e.target.value)} />
                                    <C.IconTrash onClick={() => deleteField(field.id)}><HiOutlineTrash /></C.IconTrash>
                                </C.ContainerBox>
                            </C.ContainerInputsConfiguration>
                            <C.ContainerCheckbox>
                                <C.Checkbox type='checkbox' />
                                <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                            </C.ContainerCheckbox>
                        </C.ContainerFormConfiguration>)}

                    {newFields.map((newField, index) =>
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
                                <C.Checkbox type='checkbox' />
                                <C.TextIsRequired>O campo e obrigatorio?</C.TextIsRequired>
                            </C.ContainerCheckbox>
                        </C.ContainerFormConfiguration>
                    )}

                    <C.IconPlus>
                        <AiOutlinePlus />
                        <C.TextAddNewField onClick={addInput}>Adicionar novo campo</C.TextAddNewField>
                    </C.IconPlus>

                </C.ModalContainerConfiguration>
            </Modal>
        </C.Container >
    )
}