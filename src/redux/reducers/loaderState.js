const reducer=(loaderState=false,action)=>{
    switch(action.type){
        case "SET_LOADER":
            return true
        case "UNSET_LOADER":   
            return false
       
        default:
            return false
    }
}
export default reducer