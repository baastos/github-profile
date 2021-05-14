import { Switch } from 'react-router-dom'
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Route } from './Route'

export function Routes() {

    return (
        <Switch>
            <Route isPrivate path="/profile">
                <Profile />
            </Route>

            <Route exact path="/">
                <Login />
            </Route>
        </Switch>
    )
}

