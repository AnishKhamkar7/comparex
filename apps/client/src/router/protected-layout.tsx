import { useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { SidebarToggle } from '~/components/dashboard/sidebar-toggle';
import { Navigation } from '~/components/dashboard/navigation';

export function ProtectedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <SidebarToggle isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="relative z-10 px-4 py-8 md:px-8 max-w-3xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
