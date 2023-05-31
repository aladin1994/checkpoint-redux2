import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISCOMPLIT } from "../actionTypes/TodoTypes";

const initialState = {
todos:[
    {id:Math.random(),text:"learn redux",isCompleted:false},
    {id:Math.random(),text:"learn react",isCompleted:false},
    {id:Math.random(),text:"learn hooks",isCompleted:false},
]
}

const TodoReducer= (state = initialState, { type, payload }) => {
 switch (type) {
    case ADD_TODO:
        return{...state,todos:[...state.todos,{id:Math.random(),text:payload,isCompleted:false}]}
    case DELETE_TODO:
        return{...state,todos:state.todos.filter((el)=>el.id!==payload)}
        case EDIT_TODO:
            return{...state,todos:state.todos.map((el)=>el.id==payload.id?{...el,text:payload.newText}:el)}
        case ISCOMPLIT:
            return{...state,todos:state.todos.map((el)=>el.id==payload?{...el,isCompleted:!el.isCompleted}:el)}
    default:
        return state
 }
}
export default TodoReducer