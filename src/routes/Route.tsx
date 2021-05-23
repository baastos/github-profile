import { ReactNode } from 'react';
import { RouteProps as RouteDomProps, Redirect, Route as RouteDOM } from 'react-router-dom'
//REDUX
import { useSelector } from 'react-redux'
import { StoreProps } from '../store';

interface RouteProps extends RouteDomProps {
  isPrivate?: boolean;
  children: ReactNode
}

export function Route({ isPrivate = false, children, ...rest }: RouteProps) {


  const token = useSelector<StoreProps, string>(state => state.token);


  return (
    <RouteDOM {...rest} render={({ location }) =>
      isPrivate === !!token
        ?
        children
        :
        <Redirect to={{
          pathname:
            isPrivate ? '/' : '/profile', state: { from: location }
        }} />} />
  )

}