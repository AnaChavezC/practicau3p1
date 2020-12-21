import React, { useState,useContext} from "react";
import { View, Picker,StyleSheet,Text , ScrollView} from "react-native";
// import Picker from "react-native";
import {ListItem} from 'react-native-elements';
import {AlumnosContext} from '../Context/AlumnosContext';

const Consulta = () => {
    const {lista}= useContext(AlumnosContext);
    const [listaSelected, setListaSelected]= useState([]);

    const addSelect=(t)=>{
        const temporal = lista.filter((selected)=>{
            return selected.temporada===t;
        })
        setListaSelected(temporal)
    }
    return (
        <View style={styles.container}>
            <Picker
                style={{ height: 50, width: 180 }}
                onValueChange={(itemValue) => addSelect(itemValue)}
            >
                <Picker.Item label="Municipios" value="" />
                <Picker.Item  label="Tijuana" value="Tijuana"/>
                <Picker.Item label="Mexicali" value="Mexicali"/>
                <Picker.Item  label="Rosarito" value="Rosarito"/>
                <Picker.Item  label="Tecate" value="Tecate"/>
                <Picker.Item  label="Ensenada" value="Ensenada"/>
            </Picker>
            <ScrollView>
        {
            listaSelected.length>0
            ?
            listaSelected.map((a,i)=>(
                <ListItem key={i} bottomDivider style={{marginTop:10, textAlign:'center', fontSize:20, width:400}}>
                    <ListItem.Content>
                        <ListItem.Title>{a.id}</ListItem.Title>
                        <ListItem.Subtitle>{a.municipio}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay personas registradas</Text>
        }
        </ScrollView>
        </View>
    )
}

export default Consulta

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      alignItems: "center"
    }
  });
  