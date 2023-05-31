import { ADD_TODO, DELETE_TODO, EDIT_TODO, ISCOMPLIT } from "../actionTypes/TodoTypes"

export const Add_todo=(newText)=>{
    return{type:ADD_TODO,payload:newText}
}
export const Delete_todo=(id)=>{
    return{type:DELETE_TODO,payload:id}
}
export const Edit_todo=(id,newText)=>{
    return{type:EDIT_TODO,payload:{id,newText}}
}
export const Iscomplit=(id)=>{
    return{type:ISCOMPLIT,payload:id}
}