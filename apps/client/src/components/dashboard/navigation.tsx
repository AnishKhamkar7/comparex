import { Home, Users, Settings, LogOut } from 'lucide-react';
import { cn } from '../../../~/lib/utils';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Collaborations', href: '/collaborations', icon: Users },
  { label: 'Settings', href: '/settings', icon: Settings },
];

export function Navigation({ isOpen, onClose }: NavigationProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20 transition-opacity" onClick={onClose} />
      )}

      {/* Sidebar */}
      <nav
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-40 transition-transform duration-300 flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Logo / Brand */}
        <div className="p-6 border-b border-border">
          <h2 className="text-xl font-bold tracking-tight">Progress Tracker</h2>
          <p className="text-xs text-muted-foreground mt-1">Gamified Growth</p>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border p-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>
    </>
  );
}
