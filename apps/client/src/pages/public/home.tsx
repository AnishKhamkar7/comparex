import { Link } from '@tanstack/react-router';

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            CompareX
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
            Product comparisons without the noise.
          </h1>
          <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">
            Sign in with Google to start building your comparison workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="inline-flex h-11 items-center justify-center border border-primary bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="inline-flex h-11 items-center justify-center border border-border px-6 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
