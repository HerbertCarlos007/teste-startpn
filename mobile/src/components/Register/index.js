import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, } from 'react-native'
import Checkbox from 'expo-checkbox';
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import api from '../../services/api'
import axios from 'axios'



export const Register = ({ setFormState }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleName = (value) => {
        setName(value)
    }

    const handleEmail = (value) => {
        setEmail(value)
    }

    const handlePassword = (value) => {
        setPassword(value)
    }

    const handleConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const register = async () => {
        try {
            const response = await api.post('/register', {
                name, email, password, confirmPassword
            })
            setFormState('login')
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Nome</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira seu nome'
                        value={name}
                        onChangeText={handleName}
                    />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>E-mail</Text>
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

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Confirme sua senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Confirme sua senha'
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={handleConfirmPassword}
                    />
                </View>
            </View>

            <View style={styles.containerTerms}>
                <Text style={styles.textTermPrivacy}>Termos de uso e privacidade</Text>
                <View style={styles.contentTerms}>
                    <Checkbox color='#476EE6' style={styles.checkbox} />
                    <Text style={styles.textTerm}>Ao clicar neste botão, eu concordo com {"\n"}
                        os  termos de uso e privacidade da {"\n"} nossa empresa.
                    </Text>
                </View>
                <Text style={styles.LinkTerms}>Termos de uso e privacidade</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textLogin} onPress={() => setFormState('login')}>Já tem conta? Login</Text>
            </TouchableOpacity>
        </View>
    )
}