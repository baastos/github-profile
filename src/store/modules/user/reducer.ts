import {Reducer} from 'redux'
import producer from 'immer'
import { User } from './types'

const INITIAL_STATE: User = {
  id: 0,
  login: '',
  company: '',
  email: '',
  location: '',
  bio: '',
  avatar_url: '',
  name: ''
}

export const user: Reducer<User> = (state = INITIAL_STATE, action) =>{
  return producer(state, draft=> {
    switch(action.type){
      case 'ADD_USER_TO_STATE': {
        const { user } = action.payload;
        draft = {
          ...user
        };
        return draft
      }
      case 'REMOVE_USER_TO_STATE': {
        draft = INITIAL_STATE;
        localStorage.removeItem('REDUXTOKEN.GITHUBPROFILE');
        return draft;
      }
      default:{
        return draft;
      }
    }
  })
} 