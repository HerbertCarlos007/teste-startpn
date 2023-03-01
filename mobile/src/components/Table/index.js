import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import perfil from '../../../assets/perfil.png'
import Checkbox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons'


export const Table = () => {
    const data = [
        {
            id: 1,
            nome: 'Matheus Santos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {
            id: 2,
            nome: 'Robert Vitoriano',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {
            id: 3,
            nome: 'Patrick Alves',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 4,
            nome: 'Herbert Carlos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 5,
            nome: 'Bruno Sousa',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {
            id: 6,
            nome: 'Vitor Carlos',
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

    ]


    return (

        <SafeAreaView>
            <View style={styles.container}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>

                        <View style={styles.containerList}>
                            <View style={styles.topSection}>
                                <View style={styles.leftSide}>
                                    <Checkbox color='#476EE6' style={styles.checkbox} />
                                    <Image source={perfil} />
                                    <Text>{item.nome}</Text>
                                </View>

                                <View style={styles.rightSide}>
                                    <TouchableOpacity>
                                        <Entypo name="dots-three-vertical" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.line}>

                            </View>

                            <View style={styles.centerSection}>
                                <View style={styles.leftSideTitles}>
                                    <Text style={styles.titleEmail}>Email</Text>
                                    <Text style={styles.titleTelephone}>Telefone</Text>
                                    <Text style={styles.titleAddress}>Endereço</Text>
                                </View>

                                <View style={styles.rightSideDatas}>
                                    <Text style={styles.valueEmail}>
                                        {item.email}
                                    </Text>

                                    <Text style={styles.valueTelephone}>
                                        {item.telefone}
                                    </Text>

                                    <View style={styles.containerAddress}>
                                        <Text style={styles.valueAddress}>
                                            {item.endereco}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                        </View>}
                />
            </View>
        </SafeAreaView>
    )
}