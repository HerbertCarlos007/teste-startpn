import React, { useState, useEffect } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import perfil from '../../../assets/perfil.png'
import photo from '../../../assets/photo.png'
import group from '../../../assets/group.png'
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { ModalComponent } from '../Modal'
import { ModalEditAndCreate } from '../ModalEditAndCreate'
import api from '../../services/api';
import { FAB } from 'react-native-elements';
import { OutsidersService } from '../../services/outsidersService'

export const Table = ({ outsiders, getOutsiders }) => {

    const [showModal, setShowModal] = useState(false)
    const [showModalDeleteOutsider, setShowModalDeleteOutsider] = useState(false)
    const [showModalEditOutsider, setShowModalEditOutsider] = useState(false)
    const [showModalNewOutsider, setShowModalNewOutsider] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [address, setAddress] = useState('')
    const [typeOutsider, setTypeOutsider] = useState('')
    const [selectedId, setSelectedId] = useState('')

    useEffect(() => {
        getOutsiders('cliente')
    }, [])

    const handleName = (value) => {
        setName(value)
    }

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handleTelephone = (value) => {
        setTelephone(value)
    }

    const handleAddress = (value) => {
        setAddress(value)
    }

    const handleTypeOutsider = (value) => {
        setTypeOutsider(value)
    }

    const handleOpenModalDeleteOustider = () => {
        setShowModalDeleteOutsider(true)
        setShowModal(false)
    }

    const handleCloseModalDeleteOutsider = () => {
        setShowModalDeleteOutsider(false)
    }

    const handleOpenModalEditOutsider = () => {
        setShowModalEditOutsider(true)
        setShowModal(false)
    }

    const handleCloseModalEditOutsider = () => {
        setShowModalEditOutsider(false)
    }

    const handleOpenModalNewOutsider = () => {
        setShowModalNewOutsider(true)
        setShowModal(false)
    }

    const handleCloseModalNewOutsider = () => {
        setShowModalNewOutsider(false)
    }

    const hideExcessiveLongNames = (name) => {
        if (name.length > 30) {
            return name.slice(0, 27) + "...";
        } else {
            return name;
        }
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
            setShowModalNewOutsider(false)
            getOutsiders('cliente')
        } catch (error) {
            console.error(error);
        }
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
            setShowModal(true)
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
            setShowModalEditOutsider(false)
            getOutsiders('cliente')
        } catch (error) {

        }
    }

    const deleteOutsider = async (id) => {
        await api.delete(`/outsiders/${id}`)
        setShowModalDeleteOutsider(false)
        getOutsiders('cliente')
    }

    return (
        <>
            <FAB
                icon={<AntDesign name="plus" size={24} color="#fff" />}
                color='#476EE6'
                placement='right'
                style={{ zIndex: 9 }}
                onPress={handleOpenModalNewOutsider}
            />
            <View style={styles.container} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={outsiders}
                    renderItem={({ item }) =>

                        <View style={styles.containerList}>
                            <View style={styles.topSection}>
                                <View style={styles.leftSide}>
                                    <Checkbox color='#476EE6' style={styles.checkbox} />
                                    <Image source={perfil} />
                                    <Text>{hideExcessiveLongNames(item.name)}</Text>
                                </View>

                                <View style={styles.rightSide}>
                                    <TouchableOpacity onPress={() => getEachOutsider(item.id)}>
                                        <Entypo
                                            name="dots-three-vertical"
                                            size={24} color="black"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.line}>

                            </View>

                            <View style={styles.centerSection}>
                                <View style={styles.contentHeader}>
                                    <Text style={styles.columnName}>Email</Text>
                                    <Text style={styles.columnName}>Telefone</Text>
                                    <Text style={styles.columnName}>Endereço</Text>
                                </View>

                                <View style={styles.rowContent}>
                                    <Text style={styles.columnValue}>
                                        {item.email}
                                    </Text>

                                    <Text style={styles.columnValue}>
                                        {item.telephone}
                                    </Text>

                                    <View >
                                        <Text style={styles.columnValue}>
                                            {item.address}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>}
                />

            </View>
            <ModalComponent
                visibleModal={showModal}

            >
                <View style={styles.containerModal}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <Text style={styles.textAction}>Acoes</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <EvilIcons name="close" size={24} color="black" onPress={() => setShowModal(false)} />
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.containerActions}>
                        <TouchableOpacity onPress={handleOpenModalEditOutsider}>
                            <Text style={styles.textEdit}>
                                Editar terceiro
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.containerActions}>
                        <TouchableOpacity onPress={handleOpenModalDeleteOustider}>
                            <Text style={styles.textDelete}>
                                Excluir terceiro
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.line}></View>
                </View>
            </ModalComponent>

            <ModalComponent visibleModal={showModalDeleteOutsider}>
                <View style={styles.modalContainerDelete}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <TouchableOpacity style={styles.buttonCloseModalDelete} onPress={handleCloseModalDeleteOutsider}>
                                <EvilIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textTitle} >Excluir terceiro</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerDelete}>
                                <TouchableOpacity onPress={() => deleteOutsider(selectedId)}>
                                    <Text style={styles.buttonDelete}>Exluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>
                    <View style={styles.containerInstructions}>
                        <Text style={styles.textDeleteOutsider}>Tem certeza que deseja excluir o {'\n'} cliente Mateus santos ?</Text>
                    </View>
                </View>
            </ModalComponent>

            <ModalEditAndCreate visibleModal={showModalEditOutsider}>
                <View style={styles.modalContainerDelete}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <TouchableOpacity style={styles.buttonCloseModalDelete} onPress={handleCloseModalEditOutsider}>
                                <EvilIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Editar terceiro</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerEdit}>
                                <TouchableOpacity onPress={() => updateOutsider(selectedId)}>
                                    <Text style={styles.buttonEdit}>Editar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.uploadPhoto}>
                        <Image source={photo} />
                        <View style={styles.containerIconPhoto}>
                            <TouchableOpacity>
                                <MaterialIcons name="enhance-photo-translate" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.containerForm}>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Nome do terceiro</Text>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={handleName}
                            />
                        </View>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>E-mail</Text>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={handleEmail}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Telefone</Text>
                            <TextInput
                                style={styles.input}
                                value={telephone}
                                onChangeText={handleTelephone}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Endereço</Text>
                            <TextInput
                                style={styles.input}
                                value={address}
                                onChangeText={handleTelephone}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Tipo</Text>
                            <TextInput
                                style={styles.input}
                                value={typeOutsider}
                                onChangeText={handleTypeOutsider}
                            />
                        </View>
                    </View>
                </View>
            </ModalEditAndCreate>

            <ModalEditAndCreate visibleModal={showModalNewOutsider}>
                <View style={styles.modalContainerDelete}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <TouchableOpacity style={styles.buttonCloseModalDelete} onPress={handleCloseModalNewOutsider}>
                                <EvilIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Criar terceiro</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerEdit}>
                                <TouchableOpacity onPress={createNewOutsider}>
                                    <Text style={styles.buttonEdit}>Adicionar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.line}></View>

                    <View style={styles.uploadPhoto}>
                        <Image source={group} />
                        <View style={styles.containerIconPhoto}>
                            <TouchableOpacity>
                                <MaterialIcons name="enhance-photo-translate" size={24} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.containerForm}>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Nome do terceiro</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleName}
                            />
                        </View>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>E-mail</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleEmail}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Telefone</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={handleTelephone}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Endereço</Text>
                            <TextInput style={styles.input}
                                onChangeText={handleAddress}
                            />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Tipo</Text>
                            <TextInput style={styles.input}
                                onChangeText={handleTypeOutsider}
                            />
                        </View>
                    </View>
                </View>
            </ModalEditAndCreate>
        </>

    )
}