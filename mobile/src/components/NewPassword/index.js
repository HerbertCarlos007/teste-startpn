import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import { ButtonActions } from '../ButtonActions'

export const NewPassword = ({setFormState}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Criar nova senha</Text>
            </View>
            <Text style={styles.textInstructions}>Preencha os campos abaixo com a nova senha </Text>
            <Text style={styles.textInstructions}>que deseja cadastrar</Text>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Nova senha</Text>
                    <TextInput style={styles.input} placeholder='Insira a nova senha' />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Confirmação de nova senha</Text>
                    <TextInput style={styles.input} placeholder='Insira a confirmação da sua senha' />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => setFormState('login')}>
                <Text style={styles.text}>Criar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonRememberPassword} onPress={() => setFormState('login')}>
                <Text style={styles.textRemeberPassword}>Lembrou da senha?</Text>
            </TouchableOpacity>
        </View>
    )
}