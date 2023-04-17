import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import estilos from './estilos';
import { updateRepos } from '../../services/requisicoes/repositorios';
import { deleteRepos } from '../../services/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {
    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    async function save(){
        const result = await updateRepos(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id
        );

        if(result === 'sucesso'){
            Alert.alert("Alterações feitas com sucesso")
            navigation.goBack()
        }
        else{
            Alert.alert("Erro ao atualizar repositório")
        }
    }

    async function deletar(){
        const result = await deleteRepos(route.params.item.id);

        if(result === 'sucesso'){
            Alert.alert('Repositório deletado');
            navigation.goBack();
        }else{
            Alert.alert('Erro ao deletar repositório')
        }

    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChangeText={setData}
            />
            <TouchableOpacity
                onPress={ save } 
                style={estilos.botao} 
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={deletar}
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
