import { ReactNode } from 'react';
import { RouteProps as RouteDomProps, Redirect, Route as RouteDOM } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface RouteProps extends RouteDomProps {
  isPrivate?: boolean;
  children: ReactNode
}

export function Route({ isPrivate = false, children, ...rest }: RouteProps) {
  const { isAuthenticated } = useAuth();

  return (
    <RouteDOM {...rest} render={({ location }) => isPrivate === isAuthenticated ? children : <Redirect to={{ pathname: isPrivate ? '/' : '/profile', state: { from: location } }} />} />
  )

}