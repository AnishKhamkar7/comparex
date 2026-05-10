import { createRoute } from '@tanstack/react-router';
import { rootRoute, protectedRoute, publicRoute } from './routes';
import { AuthCallbackPage } from '~/pages/public/auth-callback';
import { AuthPage } from '~/pages/public/auth';
import { HomePage } from '~/pages/public/home';
import { DashboardPage } from '~/pages/protected/dashboard';

const indexRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/',
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/login',
  component: () => <AuthPage mode="login" />,
});

const signupRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/signup',
  component: () => <AuthPage mode="signup" />,
});

const authCallbackRoute = createRoute({
  getParentRoute: () => publicRoute,
  path: '/auth/callback',
  component: AuthCallbackPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/dashboard',
  component: () => <DashboardPage />,
});

export const routeTree = rootRoute.addChildren([
  publicRoute.addChildren([indexRoute, loginRoute, signupRoute, authCallbackRoute]),
  protectedRoute.addChildren([dashboardRoute]),
]);
