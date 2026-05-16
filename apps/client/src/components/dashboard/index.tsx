import { useState } from 'react';
import { Upload } from 'lucide-react';
import { SidebarToggle } from '~/components/dashboard/sidebar-toggle';
import { Navigation } from '~/components/dashboard/navigation';
import { StreakCounter } from '~/components/dashboard/streak-counter';
import { CharacterCard } from '~/components/dashboard/character-card';

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      {/* Floating Sidebar Toggle */}
      <SidebarToggle isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Navigation Sidebar */}
      <Navigation isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <main className="relative z-10 px-4 py-8 md:px-8 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your Progress</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Watch your character evolve as you track daily achievements
          </p>
        </div>

        {/* Upload Section */}
        <div className="mb-12">
          <label className="block group cursor-pointer">
            <div className="relative border-2 border-dashed border-border rounded-2xl p-8 md:p-12 transition-all hover:border-primary/50 hover:bg-primary/5">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />

              <div className="flex flex-col items-center justify-center gap-4 text-center">
                {preview ? (
                  <div className="relative w-32 h-32">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <>
                    <Upload className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div>
                      <p className="font-semibold text-foreground">Drop your evidence here</p>
                      <p className="text-sm text-muted-foreground mt-1">or click to browse</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </label>
        </div>

        {/* Streak + Character Layout */}
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 items-start">
          {/* Streak Counter */}
          <div>
            <StreakCounter days={15} />
          </div>

          {/* Character Card */}
          <div>
            <CharacterCard
              character={{
                name: 'Pixel Adventurer',
                level: 5,
                stage: 'growth', // 'seedling' | 'growth' | 'flourish' | 'evolved'
              }}
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { label: 'Total Progress', value: '75%' },
            { label: 'This Month', value: '12 days' },
            { label: 'Best Streak', value: '20 days' },
            { label: 'Level', value: '5' },
          ].map((stat) => (
            <div key={stat.label} className="border border-border rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
