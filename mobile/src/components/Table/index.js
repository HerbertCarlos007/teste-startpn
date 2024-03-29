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
import * as ImagePicker from 'expo-image-picker';

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
    const [file, setFile] = useState('')
    const [photo, setPhoto] = useState(null);
    const [fields, setFields] = useState([])

    useEffect(() => {
        getOutsiders('cliente')
        getCustomFields()

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
            const formData = new FormData();
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };
            formData.append('file', photo);
            formData.append('outsiderData', JSON.stringify({
                name,
                email,
                telephone,
                address,
                typeOutsider,
            }))
            await api.post('/outsiders', formData, config)
            setShowModalNewOutsider(false)
            getOutsiders('cliente')
        } catch (error) {
            console.error(error);
        }
    }

    const handleSelectPhoto = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setPhoto(result.assets);
            }

            console.log(result.assets)
        } catch (e) {
            console.log(e);
        }
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

    const getCustomFields = async () => {
        const response = await api.get('/custom-fields')
        setFields(response.data.customFields)

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
                                    <Image source={item.avatar} />
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
                        <Text style={styles.textDeleteOutsider}>Tem certeza que deseja excluir o {name}?</Text>
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
                        {photo ? (
                            <Image source={{ uri: photo }} style={styles.photoPreview} />
                        ) : (
                            <Image source={group} />
                        )}
                        <View style={styles.containerIconPhoto}>
                            <TouchableOpacity onPress={handleSelectPhoto}>
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

                        {fields && fields.map((field) =>
                            <View style={styles.containerInputs}>
                                <Text style={styles.labelForm}>{field.name}</Text>
                                <TextInput style={styles.input}
                                    onChangeText={handleAddress}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ModalEditAndCreate>
        </>

    )
}