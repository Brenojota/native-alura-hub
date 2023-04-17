import api from "../api";

export async function showRepositories(login){
    try{
        const result = await api.get(`/users/${login}/repos`);
        return result.data
    }
    catch(error){
        console.log(error);
        return []
    }
}


export async function updateRepos(postId, nome, data, id){
    try{
        await api.put(`/repos/${id}`, {
            name: nome,
            data: data,
            postId: postId,
            id: id
        });
        return 'sucesso'
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}
export async function createRepos(postId, nome, data){
    try{
        await api.post(`/repos/`, {
            name: nome,
            data: data,
            postId: postId,
        });
        return 'sucesso'
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}

export async function deleteRepos(id){
    try{
        await api.delete(`/repos/${id}`, );
        return 'sucesso'
    }
    catch(error){
        console.log(error);
        return 'erro'
    }
}
