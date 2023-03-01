import { View, Text, Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import letter from '../../../assets/mail.png'
import { ButtonActions } from '../ButtonActions'

export const ResendEmail = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>E-mail enviado!</Text>
            </View>
                <Text style={styles.textInstructions}>Um link de recuperação de senha foi enviado</Text>
                <Text style={styles.textInstructions}>para o e-mail mateus@startpn.com</Text>

            <View style={styles.containerLetter}>
                <Image source={letter} />
            </View>

            <ButtonActions title='Entrar' />
            <TouchableOpacity style={styles.buttonResendEmail}>
                <Text style={styles.textResendEmail}>Reenviar -email</Text>
            </TouchableOpacity>
        </View>
    )
}