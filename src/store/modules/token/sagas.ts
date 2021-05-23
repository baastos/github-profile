import axios, { AxiosResponse } from "axios";
import {all, takeLatest, call, put} from 'redux-saga/effects'
import { AddTokenToState } from "./action";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

type AxiosResponseProps = {
  access_token: string;
}

 function* getToken() {

  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code');

  if (code) {
      const body = `client_id=${CLIENT_ID}`
          + `&client_secret=${CLIENT_SECRET}`
          + `&code=${code}`
          + `&redirect_uri=${REDIRECT_URI}`

      const response: AxiosResponse<AxiosResponseProps> = yield call(axios.post,'https://github.com/login/oauth/access_token', body, {
        headers: {
            'Accept': 'application/vnd.github.v3+json',
        }
      })

      const { access_token: token } = response.data;

      yield put(AddTokenToState(token))
  }
}
export default all([
  takeLatest('LOAD_TOKEN_TO_STATE', getToken)
])