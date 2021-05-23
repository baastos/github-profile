import {Reducer} from 'redux'
import producer from 'immer'



const storagedToken = localStorage.getItem('REDUXTOKEN.GITHUBPROFILE');

 const token: Reducer<string> = (state = storagedToken ?? '', action) => {

  return producer(state, draft => {

    switch(action.type){

      case 'ADD_TOKEN_TO_STATE': {

        const { token } = action.payload;

        draft = token;

        localStorage.setItem('REDUXTOKEN.GITHUBPROFILE', token);

        return draft
      }
      case 'REMOVE_TOKEN_TO_STATE': {
        draft = '';
        localStorage.removeItem('REDUXTOKEN.GITHUBPROFILE');

        return draft
      }
      default:{
        return draft;
      }
    }
  })
} 
export default token;