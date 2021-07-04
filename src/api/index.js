import axios from 'axios'
const url='https://yourcrazymemories.herokuapp.com/posts';
export const fetchPosts=()=>axios.get(url)
export const createPost=(post)=>axios.post(url,post)
export const likePost=(id)=>axios.patch(`${url}/${id}/likePost`)
export const deletePost=(id)=>axios.delete(`${url}/${id}/deletePost`)