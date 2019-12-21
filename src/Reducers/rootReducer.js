var initState=[];

var rootReducer = (state=initState,{type,payload})=>{
    switch(type)
    {
    case 'ADD':console.log(payload);
        return {state:payload};
    default:return state;
    }    
}

export default rootReducer;