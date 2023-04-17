import api from "../api";

    // async esperar retornar dados
export async function buscaUsuario(nomeUsuario){
    try{
                    // esperar a resposta para verificacao
        const result = await api.get(`/users/${nomeUsuario}`);
        return result.data;
    }
    catch(error){
        console.log(error);
        return {};
    }
}