import { ChevronRight } from 'lucide-react';

interface SidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function SidebarToggle({ isOpen, onToggle }: SidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-50 group transition-all duration-300 ${
        isOpen ? 'translate-x-64' : 'translate-x-0'
      }`}
    >
      <div
        className={`flex items-center justify-center w-12 h-12 rounded-r-2xl border-2 border-l-0 transition-all ${
          isOpen ? 'border-primary bg-primary/10' : 'border-border bg-card hover:border-primary/50'
        }`}
      >
        <ChevronRight
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
    </button>
  );
}
