import React, { useState } from 'react';
import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import perfil from '../../../assets/perfil.png'
import photo from '../../../assets/photo.png'
import group from '../../../assets/group.png'
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { ModalComponent } from '../Modal'
import { ModalEditAndCreate } from '../ModalEditAndCreate'

import Dropdown from 'react-native-input-select';



export const Table = () => {

    const [showModal, setShowModal] = useState(false)
    const [showModalDeleteOutsider, setShowModalDeleteOutsider] = useState(false)
    const [showModalEditOutsider, setShowModalEditOutsider] = useState(false)

    const [country, setCountry] = useState();


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

    const data = [
        {
            id: 1,
            nome: 'Matheus Santos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {
            id: 2,
            nome: 'Robert Vitoriano',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {
            id: 3,
            nome: 'Patrick Alves',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 4,
            nome: 'Herbert Carlos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 5,
            nome: 'Bruno Sousa',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 6,
            nome: 'Vitor Carlos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

    ]

    return (
        <>
            <View style={styles.container} >
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>

                        <View style={styles.containerList}>
                            <View style={styles.topSection}>
                                <View style={styles.leftSide}>
                                    <Checkbox color='#476EE6' style={styles.checkbox} />
                                    <Image source={perfil} />
                                    <Text>{item.nome}</Text>
                                </View>

                                <View style={styles.rightSide}>
                                    <TouchableOpacity onPress={() => setShowModal(true)}>
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
                                <View style={styles.leftSideTitles}>
                                    <Text style={styles.titleEmail}>Email</Text>
                                    <Text style={styles.titleTelephone}>Telefone</Text>
                                    <Text style={styles.titleAddress}>Endereço</Text>
                                </View>

                                <View style={styles.rightSideDatas}>
                                    <Text style={styles.valueEmail}>
                                        {item.email}
                                    </Text>

                                    <Text style={styles.valueTelephone}>
                                        {item.telefone}
                                    </Text>

                                    <View style={styles.containerAddress}>
                                        <Text style={styles.valueAddress}>
                                            {item.endereco}
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
                            <Text style={styles.textTitle}>Excluir terceiro</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerDelete}>
                                <TouchableOpacity >
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
                                <TouchableOpacity >
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
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>E-mail</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Telefone</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Endereço</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Tipo</Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                </View>
            </ModalEditAndCreate>

            <ModalEditAndCreate visibleModal={showModalEditOutsider}>
                <View style={styles.modalContainerDelete}>
                    <View style={styles.topSectionModal}>
                        <View style={styles.leftSideModal}>
                            <TouchableOpacity style={styles.buttonCloseModalDelete} onPress={handleCloseModalEditOutsider}>
                                <EvilIcons name="close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text style={styles.textTitle}>Criar terceiro</Text>
                        </View>
                        <View style={styles.rightSideModal}>
                            <View style={styles.containerEdit}>
                                <TouchableOpacity >
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
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>E-mail</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Telefone</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Endereço</Text>
                            <TextInput style={styles.input} />
                        </View>

                        <View style={styles.containerInputs}>
                            <Text style={styles.labelForm}>Tipo</Text>
                            <TextInput style={styles.input} />
                        </View>
                    </View>
                </View>
            </ModalEditAndCreate>
        </>

    )
}