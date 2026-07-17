import{useReducer,useState} from 'react'
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return{...state,count:state.count+1}
        case 'decrement':
            return{...state,count:state.count-1}
        case 'double':
            return{...state,count:state.count*2}
        default:
            return state
    }
}

const ReducerExample=()=>{
    const [state,dispatch]=useReducer(reducer,{count:0})
    return(
        <>
            <p>count:{state.count}</p>
            <button onClick={()=>dispatch({type:'increment'})}>+</button>
            <button onClick={()=>dispatch({type:'decrement'})}>-</button>
            <button onClick={()=>dispatch({type:'double'})}>x2</button>
        </>
);
};
export default ReducerExample;