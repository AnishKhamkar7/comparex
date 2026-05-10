import { Navigate, Outlet, createRootRoute, createRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { AuthCallbackPage } from '~/pages/public/auth-callback';
import { AuthPage } from '~/pages/public/auth';
import { HomePage } from '~/pages/public/home';
import { DashboardPage } from '~/pages/protected/dashboard';
import { authClient } from '~/lib/auth-client';

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

const protectedRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'protected',
  component: () => {
    const { data, isPending } = authClient.useSession();

    if (isPending) {
      return null;
    }

    if (!data?.session) {
      return <Navigate to="/login" replace />;
    }

    return <Outlet />;
  },
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <AuthPage mode="login" />,
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/signup',
  component: () => <AuthPage mode="signup" />,
});

const authCallbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth/callback',
  component: AuthCallbackPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => protectedRoute,
  path: '/dashboard',
  component: () => <DashboardPage />,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  signupRoute,
  authCallbackRoute,
  protectedRoute.addChildren([dashboardRoute]),
]);
