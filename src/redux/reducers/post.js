
const reducer=(posts=[],action)=>{
    switch(action.type){
        case "CREATE":
            return [...posts,action.payload];
        case "FETCH_ALL":   
            return action.payload;
        case "LIKE_POST":
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts
    }
}
export default reducer