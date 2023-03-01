import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox';
import { styles } from './styles'
import logo from '../../../assets/logo.png'
import { ButtonActions } from '../ButtonActions'

export const Register = ({ setFormState }) => {
    return (
        <View style={styles.container}>

            <View style={styles.topSection}>
                <Image source={logo} />
                <Text style={styles.title}>Cadastro</Text>
            </View>

            <View style={styles.containerForm}>
                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Nome</Text>
                    <TextInput style={styles.input} placeholder='Insira seu nome' />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>E-mail</Text>
                    <TextInput style={styles.input} placeholder='Insira seu e-mail' />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Senha</Text>
                    <TextInput style={styles.input} placeholder='Insira sua senha' />
                </View>

                <View style={styles.containerInputs}>
                    <Text style={styles.textName}>Confirme sua senha</Text>
                    <TextInput style={styles.input} placeholder='Confirme sua senha' />
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

            <TouchableOpacity style={styles.button} onPress={() => setFormState('login')}>
                <Text style={styles.text}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}