import React, {createContext, useState,useEffect} from 'react';
import firebase from '../Settings/ConfigFirebase';

export const AlumnosContext = createContext();


const AlumnosProvider = (props)=>{
    const [persona, setPersona] = useState({
        id:"",
        nombre:"",
        apellidop:"",
        apellidom:"",
        municipio:""
    })

    const [lista, setLista]= useState([]);
    
    useEffect(()=>{
        firebase.database().ref('Persona').on('value', snapshot=>{
            let personaLista=[];
            snapshot.forEach(row=>{
                personaLista.push({
                    id:row.key,
                    nombre:row.val().nombre,
                    apellidop:row.val().apellidop,
                    apellidom:row.val().apellidom,
                    municipio:row.val().municipio
                })
            })
            setLista(personaLista)
        })
    },[])




    const eliminar =(id)=>{
        firebase.database().ref('Persona/'+id).set(null).then(()=>{
            alert("Dado de baja")
        })

        const temporal = lista.filter((item)=>{
            return item.id!== id;
        })
        setLista(temporal)
    }

    
    return(
        <AlumnosContext.Provider
            value={{
                persona,
                lista,
                setPersona,
                setLista,
                eliminar,
            }}
        >
            {props.children}

        </AlumnosContext.Provider>
    )
}

export default AlumnosProvider;