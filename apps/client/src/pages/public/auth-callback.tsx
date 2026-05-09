import { Link } from '@tanstack/react-router';

export const AuthCallbackPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-2xl font-semibold tracking-normal">
          Authentication complete
        </h1>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          You can continue to your CompareX workspace.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-10 items-center justify-center border border-primary bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Continue
        </Link>
      </div>
    </main>
  );
};
