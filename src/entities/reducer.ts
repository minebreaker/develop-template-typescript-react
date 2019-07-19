import {User} from "./user"
import {List} from "immutable"
import {Todo} from "./todo"
import {combineReducers} from "redux"


export type EntityState = {
    user: List<User>
    todo: List<Todo>
}


type UserAction = AddUserAction

const ADD_USER = "entity/user/add"

export type AddUserAction = {
    type: typeof ADD_USER,
    name: string
}

export const addUser: (name: string) => AddUserAction = name =>
    ({type: ADD_USER, name})


const userReducer = (state: List<User> | undefined = List(), action: UserAction) => {
    switch (action.type) {
        case ADD_USER:
            return state.push({name: action.name})
        default:
            return state
    }
}

const todoReducer = (state: List<Todo> | undefined = List()) => {
    return state
}

export const entityReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})
