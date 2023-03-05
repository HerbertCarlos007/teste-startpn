import React, { useState } from "react"
import * as C from './styles'
import perfil from '../../assets/perfil.png'
import { BsFillGearFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import { OutsidersService } from '../../services/outsidersService'
import { Row } from "react-bootstrap"

export const MobileList = () => {

    const [isSelected, setIsSelected] = useState(false)
    const [outsiders, setOutsiders] = useState([]);

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
                    <C.IconConfiguration>
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

            <C.ContainerList>
                <C.UpSectionList>
                    <C.LeftSection>
                        <C.Checkbox type='checkbox' />
                        <C.ImagePerfil src={perfil} />
                        <C.Name>Mateus Santos</C.Name>
                    </C.LeftSection>

                    <C.IconOptions>
                        <SlOptionsVertical size={27} />
                    </C.IconOptions>
                </C.UpSectionList>
                <C.Line></C.Line>
            </C.ContainerList>

            <C.Content>
                <C.Header>
                    <C.TextHeader>E-mail</C.TextHeader>
                    <C.TextHeader>Telefone</C.TextHeader>
                    <C.TextHeader>Endereço</C.TextHeader>
                </C.Header>
                <C.Row>
                    <C.TextRow>herbert.saopaulino@hotmail.com</C.TextRow>
                    <C.TextRow>11-966119472</C.TextRow>
                    <C.TextRow>Rua zodiaco 291</C.TextRow>
                </C.Row>
            </C.Content>
        </C.Container >

    )
}