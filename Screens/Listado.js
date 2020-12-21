import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AlumnosContext} from '../Context/AlumnosContext';

const Listado = ({navigation}) => {

    const {lista,setPersona,eliminar} = useContext(AlumnosContext);

    return (
    
    <View style={styles.container}>
        <Header
            centerComponent={{ text: 'Registrados', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'person-add', color: '#fff', onPress:()=>{
                 setPersona({
                     id:null,
                     nombre:"",
                     apellidop:"",
                     apellidom:"",
                     municipio:"",
                 })   

                 navigation.navigate('Formulario',{status:"add"})

            }}}
            containerStyle={{backgroundColor:'#258902'}}
        />
        <ScrollView>
        {
            lista.length>0
            ?
            lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.id}</ListItem.Title>
                        <ListItem.Subtitle>{a.descripcion}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.id)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setPersona({
                                id:a.id.toString(),
                                nombre:a.nombre,
                                apellidop:a.apellidop,
                                apellidom:a.apellidom,
                                municipio:a.municipio,
                            })

                            navigation.navigate('Formulario',{status:"edit"})
                        }}/>

                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay personas registradas</Text>
        }
        </ScrollView>
    </View>
    );
}
 
export default Listado;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});