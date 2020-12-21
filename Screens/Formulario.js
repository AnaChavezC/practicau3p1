import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AlumnosContext} from '../Context/AlumnosContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'

const validations =Yup.object().shape({
    id:Yup.number().typeError('Este campo es numérico').max(9999,"Deben ser 4 números").required('Obligatorio'),
    nombre: Yup.string().required('Obligatorio'),
    apellidop: Yup.string().required('Obligatorio'),
    apellidom: Yup.string().required('Obligatorio'),
    municipio: Yup.string().nullable().required('Selecciona municipio')
    
})

export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {persona,lista,setPersona,setLista}= useContext(AlumnosContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Registrarse</Text>

            <Formik
                initialValues={persona}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Persona/'+persona.id).update(persona).then(()=>{
                         alert("Persona registrada")
                     })
                    const temporal = lista.filter(al=>al.id!=persona.id);
                    setLista([...temporal,ropa]);
                    resetForm({
                        id:"",
                        nombre:"",
                        apellidop:"",
                        apellidom:"",
                        municipio:""
                    })
                    navigation.navigate('En lista')

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setPersona(values)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('id')}
                            onBlur={handleBlur('id')}
                            placeholder="Id"
                            value={values.id}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.id && <Text style={styles.texterror}>{errors.id}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre"
                            value={values.nombre}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}
                        
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('apellidop')}
                            onBlur={handleBlur('apellidop')}
                            placeholder="Apellido Paterno"
                            value={values.apellidop}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.apellidop && <Text style={styles.texterror}>{errors.apellidop}</Text>}
                         
                         
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('apellidom')}
                            onBlur={handleBlur('apellidom')}
                            placeholder="Apellido Materno"
                            value={values.apellidom}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.apellidom && <Text style={styles.texterror}>{errors.apellidom}</Text>}

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.municipio}
                                onValueChange={ (v)=>
                                    setFieldValue('municipio',v)
                                }
                            >
                                <Picker.Item color="grey" label="Municipios" value="" />
                                <Picker.Item color="black" label="Tijuana" value="Tijuana"/>
                                <Picker.Item color="black" label="Mexicali" value="Mexicali"/>
                                <Picker.Item color="black" label="Rosarito" value="Rosarito"/>
                                <Picker.Item color="black" label="Tecate" value="Tecate"/>
                                <Picker.Item color="black" label="Ensenada" value="Ensenada"/>
                            </Picker>
                        </View>

                        {errors.municipio && <Text style={styles.texterror}>{errors.municipio}</Text>}      

                     
                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Registrar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'gray', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: 'gray', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });