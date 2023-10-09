import { StyleSheet } from 'react-native';
import{Card, Text} from'react-native-paper'

export function Cardcomponente({nome, tipoSanguineo}){
    return(
<Card style={styles.card}>
<Card.Title title={nome}/>
<Card.Content>
 <Text style={StyleSheet.contentText}>
Tipo Sanguineo:{tipoSanguineo}

 </Text>

</Card.Content>

</Card>

    );
}

const styles =StyleSheet.create({

card:{
    marginTop:12,
    backgroundColor: 'green',
    color: 'white'

},

contentText:{
color: 'white'

}

})