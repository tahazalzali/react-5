import * as ActionTypes from './ActionTypes'
import DISHES from "../shared/dishes";

export const Dishes=(state =DISHES,action)=>{
switch(action.type){

    case ActionTypes.ADD_COMMENT:
        var  comment=action.payload;
        comment.id=state.length;;
        comment.date=new Date().toISOString()
         return state.concat(comment)
        default:  return state
    }
}