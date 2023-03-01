import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import { ButtonActions } from '../ButtonActions'

export const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Dados de acesso</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>E=mail</Text>
                    <TextInput style={styles.input} placeholder='Insira seu e-mail' />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Senha</Text>
                    <TextInput style={styles.input} placeholder='Insira sua senha' />
                </View>

                <TouchableOpacity style={styles.buttonForgotPassword}>
                    <Text style={styles.textForgotPassword}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            <ButtonActions title='Entrar'/>
        </View>
    )
}