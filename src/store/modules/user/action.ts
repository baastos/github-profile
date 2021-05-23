import { User } from "./types";

export function addUserToState(user: User){
  return {
    type: 'ADD_USER_TO_STATE',
    payload: {
      user
    }
  }
}
export function removeUserToState(){
  return {
    type: 'REMOVE_USER_TO_STATE',
  }
}
export function loadUserToState(){
  return {
    type: 'LOAD_USER_TO_STATE',
 
  }
}