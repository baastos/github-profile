import { AxiosResponse } from "axios";
import {all, takeLatest, call, put, select} from 'redux-saga/effects'
import { StoreProps } from "../..";
import { api } from "../../../services/api";
import { addUserToState } from "./action";

type AxiosResponseProps = {
  id: number;
  login: string;
  company: string;
  email: string;
  location: string;
  bio: string;
  avatar_url: string;
  name: string;
}

 function* getUser(){

  const token: string = yield select((state: StoreProps) => state.token)
    if(token){
      const response: AxiosResponse<AxiosResponseProps> = yield call(api.get, "user",{
        headers: {
            Authorization: `Bearer ${token}`,
        }})
  
        const user = response.data
  
        yield put(addUserToState(user))
    }

  }
export default all([
  takeLatest('LOAD_USER_TO_STATE', getUser)
])