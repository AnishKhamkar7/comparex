export const DashboardPage = () => {
  return (
    <main className="grid min-h-screen bg-background text-foreground lg:grid-cols-[1fr_460px]">
      <section className="hidden border-r border-border bg-secondary/40 px-10 py-12 lg:flex lg:flex-col lg:justify-between">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          CompareX
        </div>
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold tracking-normal">
            Welcome to your CompareX dashboard.
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            This is your workspace to manage and compare your data efficiently.
          </p>
        </div>
      </section>
    </main>
  );
};
