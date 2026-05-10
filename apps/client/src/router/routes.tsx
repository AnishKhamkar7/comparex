import { createRootRoute, createRoute, Navigate, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { authClient } from '~/lib/auth-client';

export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});

export const publicRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'public',
  component: () => {
    const { data, isPending } = authClient.useSession();

    if (isPending) {
      return null;
    }
    if (data?.session) {
      return <Navigate to="/dashboard" replace />;
    }
    return <Outlet />;
  },
});

export const protectedRoute = createRoute({
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
