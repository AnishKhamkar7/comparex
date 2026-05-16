import { Flame } from 'lucide-react';

interface StreakCounterProps {
  days: number;
}

export function StreakCounter({ days }: StreakCounterProps) {
  return (
    <div className="border-2 border-border rounded-2xl p-8 text-center bg-gradient-to-br from-primary/5 to-transparent">
      <div className="flex justify-center mb-4">
        <Flame className="w-8 h-8 text-orange-500 fill-orange-500" />
      </div>

      <div className="mb-4">
        <p className="text-5xl md:text-6xl font-bold tracking-tight text-primary">{days}</p>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mt-2">Day Streak</p>
      </div>

      <div className="pt-4 border-t border-border mt-4">
        <p className="text-xs text-muted-foreground">
          Keep it going! Your character grows stronger every day.
        </p>
      </div>
    </div>
  );
}
