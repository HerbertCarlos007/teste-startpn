import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import api from '../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = ({ setFormState }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const login = async () => {
        const response = await api.post('/auth', {
            email, password
        })
        if (response.status === 200) {
            AsyncStorage.setItem('token', response.data.token)
            AsyncStorage.setItem('id', response.data.user.id)
            navigate('/outsiders')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Dados de acesso</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira seu e-mail'
                        value={email}
                        onChangeText={handleEmail}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira sua senha'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={handlePassword}
                    />
                </View>

                <TouchableOpacity style={styles.buttonForgotPassword} onPress={login} >
                    <Text style={styles.textForgotPassword} onPress={() => setFormState('forgotPassword')}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}