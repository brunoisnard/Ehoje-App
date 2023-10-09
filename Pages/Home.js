import { StatusBar } from 'expo-status-bar';
import{Cardcomponente} from '../Components/Card'
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';


const data=[
{nome: 'Bruno',tipoSanguineo: 'AB+', id:1},
{nome: 'Ronaldo',tipoSanguineo: 'A+', id:2}
]


export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
         data={data }
         renderItem={({item})=><Cardcomponente nome={item.nome} TipoSanguineo={item.tipoSanguineo}/>}
        //keyExtractor={({item})=> item.id}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
