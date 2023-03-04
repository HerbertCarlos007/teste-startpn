import React, { useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import api from '../../services/api'

export const ForgotPassword = ({ setFormState }) => {

    const [email, setEmail] = useState('')

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handleSendEmail = async (e) => {
        e.preventDefault()
        try {
            await api.post('/forgot-password', {
                email
            })
            setFormState('resendEmail')
        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Esqueceu a senha ?</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>E=mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira seu e-mail'
                        value={email}
                        onChangeText={handleEmail}
                    />
                </View>

            </View>
            <TouchableOpacity style={styles.button} onPress={handleSendEmail}>
                <Text style={styles.text}>Recuperar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRecoverPassword} onPress={() => setFormState('login')}>
                <Text style={styles.textRemeberPassword}>Lembrou da senha?</Text>
            </TouchableOpacity>
        </View>
    )
}