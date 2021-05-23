export function AddTokenToState(token: string){
  return{
    type: 'ADD_TOKEN_TO_STATE',
    payload: {
      token
    }
  }
}

export function LoadTokenToState(){

  return{
    type: 'LOAD_TOKEN_TO_STATE',
  }
}

export function RemoveTokenToState(){

  return{
    type: 'REMOVE_TOKEN_TO_STATE',
  }
}
