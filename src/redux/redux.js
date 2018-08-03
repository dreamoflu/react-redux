const ADD_GUN = 'ADD_GUN';
const REMOVE_GUN ='REMOVE_GUN';
const initState={
    num:10,
    name:'李亚军'
}

export function conter(state=initState,action){
    console.log(state,action)
    switch (action.type){
        case ADD_GUN:
          return {...state,num:state.num+1}
        case REMOVE_GUN:
           return {...state,num:state.num-1}
         default:
           return state
    }
}

export function changeData(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
        
    }
}
export function addGun (){
    return {type:ADD_GUN}
};
export function removeGun (){
    return {type:REMOVE_GUN}
};