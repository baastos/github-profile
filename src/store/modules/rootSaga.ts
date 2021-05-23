import {all} from 'redux-saga/effects'

import token from './token/sagas'
import user from './user/sagas'

export default function* rootSaga(): any{
  return yield all([
    token,
    user
  ])
}