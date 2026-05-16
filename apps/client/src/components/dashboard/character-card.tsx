import { Star } from 'lucide-react';

interface CharacterCardProps {
  character: {
    name: string;
    level: number;
    stage: 'seedling' | 'growth' | 'flourish' | 'evolved';
  };
}

const stageLabels = {
  seedling: 'Seedling',
  growth: 'Growth',
  flourish: 'Flourish',
  evolved: 'Evolved',
};

const stageDescriptions = {
  seedling: 'Just starting your journey',
  growth: 'Building momentum and strength',
  flourish: 'Reaching your potential',
  evolved: 'Fully transformed and powerful',
};

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className="border-2 border-border rounded-2xl p-8 text-center">
      {/* Character Display Area */}
      <div className="relative mb-8">
        {/* Placeholder for pixelated character image */}
        <div className="aspect-square rounded-lg border-2 border-dashed border-border bg-primary/5 flex items-center justify-center min-h-64">
          <div className="text-center">
            <p className="text-muted-foreground text-sm font-mono">PIXEL CHARACTER</p>
            <p className="text-xs text-muted-foreground mt-1">
              public/characters/{character.stage}.png
            </p>
          </div>
        </div>
      </div>

      {/* Character Info */}
      <h2 className="text-2xl font-bold">{character.name}</h2>

      <div className="mt-4 space-y-3">
        {/* Stage Badge */}
        <div className="inline-block">
          <span className="bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
            {stageLabels[character.stage]}
          </span>
        </div>

        {/* Level Display */}
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Level</span>
          <span className="text-3xl font-bold text-primary">{character.level}</span>
        </div>

        {/* Stage Description */}
        <p className="text-sm text-muted-foreground">{stageDescriptions[character.stage]}</p>
      </div>

      {/* XP Progress */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            XP Progress
          </span>
          <span className="text-xs font-semibold text-primary">750 / 1000</span>
        </div>
        <div className="w-full h-2 bg-border rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-primary transition-all duration-500"></div>
        </div>
      </div>

      {/* Achievement Indicators */}
      <div className="mt-6 flex justify-center gap-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-2 rounded-lg border border-primary/20 bg-primary/5">
            <Star className="w-4 h-4 text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}
