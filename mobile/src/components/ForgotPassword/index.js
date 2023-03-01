import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import { ButtonActions } from '../ButtonActions'

export const ForgotPassword = ({setFormState}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Esqueceu a senha ?</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>E=mail</Text>
                    <TextInput style={styles.input} placeholder='Insira seu e-mail' />
                </View>

            </View>
            <TouchableOpacity style={styles.button} onPress={() => setFormState('resendEmail')}>
                <Text style={styles.text}>Recuperar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRecoverPassword} onPress={() => setFormState('login')}>
                <Text style={styles.textRemeberPassword}>Lembrou da senha?</Text>
            </TouchableOpacity>
        </View>
    )
}