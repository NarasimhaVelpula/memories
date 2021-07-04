import *  as api from '../../api'

export const getPosts=()=>async(dispatch)=>{
    try{
        const {data}= await api.fetchPosts();
        const action={type:'FETCH_ALL',payload:data}
        dispatch(action);

    }
    catch(error){
        console.log(error.message)
    }
   
}

export const createPost=(post)=>async(dispatch)=>{
    try{
        dispatch({type:'SET_LOADER'})
        const {data}= await api.createPost(post)
        dispatch({type:'UNSET_LOADER'})
        const action={type:'CREATE',payload:data}
        dispatch(action)
    }
    catch(error){
        console.log(error.message)
    }
}

export const likePost=(post_id)=>async(dispatch)=>{
    try{
        dispatch({type:'SET_LOADER'})
        const {data}= await api.likePost(post_id)
        dispatch({type:'UNSET_LOADER'})
        
        const action={type:'LIKE_POST',payload:data}
        dispatch(action)
    }
    catch(error){
        console.log(error.message)
    }
}

export const deletePost=(post_id)=>async(dispatch)=>{
    try{
        dispatch({type:'SET_LOADER'})
        await api.deletePost(post_id)
        const {data}= await api.fetchPosts();
        const action={type:'FETCH_ALL',payload:data}
        dispatch({type:'UNSET_LOADER'})
        dispatch(action);
    }
    catch(error){

    }
}