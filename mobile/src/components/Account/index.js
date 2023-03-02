import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles'
import photo from '../../../assets/photo.png'
import { MaterialIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export const Account = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <TouchableOpacity>
                    <View style={styles.containerIconIconArrow}>
                        <AntDesign name="arrowleft" size={24} color="#476EE6" style={styles.iconArrow}/>
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

                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.textSave}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    )
}