import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import { Header } from '../../components/Header'
import { Table } from '../../components/Table'
import { ModalEditAndCreate } from '../../components/ModalEditAndCreate'
import { styles } from './styles'
import { EvilIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { OutsidersService } from '../../services/outsidersService'
import api from '../../services/api';

export const Outsiders = () => {

    const [showModalConfiguration, setShowModalConfiguration] = useState(false)
    const [outsiders, setOutsiders] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        getOutsiders('cliente')
    }, [])

    const handleOpenModalConfiguration = () => {
        setShowModalConfiguration(true)

    }

    const handleCloseModalConfiguration = () => {
        setShowModalConfiguration(false)
    }

    const getOutsiders = async (typeOutsider) => {
        const outsiderServices = new OutsidersService();
        const response = await outsiderServices.getOutsiders(typeOutsider);
        setOutsiders(response);

    };

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <View style={styles.leftSide}>
                        <Text style={styles.title}>Terceiros</Text>
                    </View>

                    <View style={styles.righSide}>
                        <TouchableOpacity onPress={handleOpenModalConfiguration}>
                            <View style={styles.containerActions}>
                                <EvilIcons name="gear" size={24} color="#476EE6" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.containerActions}>
                                <AntDesign name="search1" size={24} color="#476EE6" />
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.containerSwitchOutsider}>
                    <TouchableOpacity onPress={() => { setIsSelected(true); getOutsiders('cliente'); }}>
                        <View style={[styles.containerSwtich, isSelected && styles.selected]}>
                            <Text style={[styles.text, isSelected && styles.selectedText]}>Clientes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { setIsSelected(false); getOutsiders('fornecedor'); }}>
                        <View style={[styles.containerSwtich, !isSelected && styles.selected]}>
                            <Text style={[styles.text, !isSelected && styles.selectedText]}>Fornecedores</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Table />
            </View>

            <ModalEditAndCreate visibleModal={showModalConfiguration}>
                <View style={styles.modalContainerConfiguration}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <TouchableOpacity style={styles.buttonCloseModalDelete} onPress={handleCloseModalConfiguration}>
                                <EvilIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Configuração</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerEdit}>
                                <TouchableOpacity >
                                    <Text style={styles.buttonEdit}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.containerSwitchOutsider}>
                        <TouchableOpacity>
                            <View style={styles.containerClient}>
                                <Text style={styles.textClient}>Clientes</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.containerSuppliers}>
                                <Text style={styles.textSuppliers}>Fornecedores</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.textFieldsForm}>Campos do formulário</Text>

                    <View style={styles.containerForm}>
                        <Text style={styles.nameField}>Nome do campo</Text>
                        <View style={styles.inputField}>
                            <View style={styles.ContainerIndex}>
                                <Text style={styles.textIndex}>1</Text>
                            </View>
                            <TextInput placeholder='ola' style={styles.input} />
                            <TouchableOpacity style={styles.buttonTrash}>
                                <EvilIcons name="trash" size={37} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerIsRequired}>
                        <TouchableOpacity>
                            <Checkbox color='#476EE6' style={styles.checkbox} />
                        </TouchableOpacity>
                        <Text>o campo é obrigatório?</Text>
                    </View>

                    <View style={styles.containerForm}>
                        <Text style={styles.nameField}>Nome do campo</Text>
                        <View style={styles.inputField}>
                            <View style={styles.ContainerIndex}>
                                <Text style={styles.textIndex}>1</Text>
                            </View>
                            <TextInput placeholder='ola' style={styles.input} />
                            <TouchableOpacity style={styles.buttonTrash}>
                                <EvilIcons name="trash" size={37} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerIsRequired}>
                        <TouchableOpacity>
                            <Checkbox color='#476EE6' style={styles.checkbox} />
                        </TouchableOpacity>
                        <Text>o campo é obrigatório?</Text>
                    </View>

                    <View>
                        <TouchableOpacity >
                            <View style={styles.buttonNewField}>
                                <AntDesign name="plus" size={24} color="#476EE6" />
                                <Text style={styles.textNewField}>
                                    Adicionar novo campo
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalEditAndCreate>
        </>
    )
}