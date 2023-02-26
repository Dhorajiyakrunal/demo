const intialState = {
    Appdata : []
}

const AppoinmentReducer = (state = intialState,action)=>{

    if(action.type === 'APPACTION'){
        return{...state,Appdata:[...state.Appdata,action.payload]}
    }

    return state;

} 

export default AppoinmentReducer

