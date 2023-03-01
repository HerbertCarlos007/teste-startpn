import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { styles } from './styles'


export const Table = () => {
    const data = [
        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },

        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        {   
            id: 1,
            email: 'mateus@startpn.com',
            telefone: '11 97796-5692',
            endereco: 'Av. Brg. Faria Lima, 2355 - São Paulo - SP, 01452-922'
        },
        
        
    ]


    return (
       
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={({item}) =>  <View style={styles.container}>
                    <View style={styles.topSection}>
                        <View style={styles.leftSide}>
                            <Text>ola</Text>
                            <Text>olaaa</Text>
                            <Text>olaaa</Text>
                        </View>
        
                        <View style={styles.rightSide}>
                            <Text>Olaa</Text>
                        </View>
                    </View>
        
                    <View style={styles.line}>
        
                    </View>
        
        
                    <View style={styles.centerSection}>
                        <View>
                            <Text>Email</Text>
                            <Text>Telefone</Text>
                            <Text>Endereço</Text>
                        </View>
                        <View>
                            <Text>
                                {item.email}
                            </Text>

                            <Text>
                                {item.telefone}
                            </Text>
                            
                            
                            <Text>
                                {item.endereco}
                            </Text>
                        </View>
                    </View>
        
                </View>}
                />
            </SafeAreaView>
    )
}