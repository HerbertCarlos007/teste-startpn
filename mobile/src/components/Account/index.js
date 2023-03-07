import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import photo from '../../../assets/photo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import api from '../../services/api'

export const Account = () => {

    const [user, setUser] = useState({})
    
    useEffect(() => {
        getUser()
    }, [])

    const navigation = useNavigation()

    const getUser = async () => {
        try {
            const id = await AsyncStorage.getItem('id')
            if (id) {
                const response = await api.get(`/users/${id}`)
                setUser(response.data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity onPress={() => navigation.navigate('outsiders')}>
                    <View style={styles.containerIconIconArrow}>
                        <AntDesign name="arrowleft" size={24} color="#476EE6" style={styles.iconArrow} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.myAccount}>Minha conta</Text>
            </View>

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
                    <Text style={styles.labelForm}>Nome</Text>
                    <TextInput style={styles.input} value={user.name}/>
                </View>
                <View style={styles.containerInputs}>
                    <Text style={styles.labelForm}>E-mail</Text>
                    <TextInput style={styles.input} value={user.email}/>
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.labelForm}>Numero</Text>
                    <TextInput style={styles.input} value={user.telephone}/>
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.labelForm}>senha</Text>
                    <TextInput 
                    style={styles.input} 
                    secureTextEntry={true}/>
                </View>

                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textSave}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}
