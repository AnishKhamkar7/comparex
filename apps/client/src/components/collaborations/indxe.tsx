import { useState } from 'react';
import { QrCode, Copy, Share2 } from 'lucide-react';

export function Collaborations() {
  const [nameTag, setNameTag] = useState('PixelAdventurer');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(nameTag);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Collaborations</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Share your journey and connect with other progress trackers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* QR Code Scanner Section */}
        <div className="border-2 border-border rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <QrCode className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-xl font-bold text-center mb-6">Scan QR Code</h2>

          <div className="relative aspect-square rounded-lg border-2 border-dashed border-border bg-primary/5 flex items-center justify-center mb-6">
            <div className="text-center">
              <p className="text-muted-foreground text-sm font-mono">QR SCANNER</p>
              <p className="text-xs text-muted-foreground mt-2 max-w-xs">
                Click to open your device camera and scan a friend&apos;s QR code
              </p>
            </div>
          </div>

          <button className="w-full px-4 py-3 rounded-lg font-semibold transition-all bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95">
            Open Scanner
          </button>
        </div>

        {/* Name Tag / Share Section */}
        <div className="border-2 border-border rounded-2xl p-8">
          <div className="flex justify-center mb-4">
            <Share2 className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-xl font-bold text-center mb-6">Your Name Tag</h2>

          {/* Name Tag Display */}
          <div className="mb-6 p-4 rounded-lg border-2 border-dashed border-border bg-primary/5 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Your ID
            </p>
            <p className="font-mono font-bold text-xl text-foreground break-all">{nameTag}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              onClick={handleCopy}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all border-2 border-border hover:border-primary/50 hover:bg-primary/5 active:scale-95"
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy Name Tag'}
            </button>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95">
              <QrCode className="w-4 h-4" />
              Generate QR Code
            </button>
          </div>
        </div>
      </div>

      {/* Connected Collaborators */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Connected Trackers</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-bold text-primary text-sm">P{i}</span>
                </div>
                <span className="text-xs text-muted-foreground">Streak: {15 + i * 2} days</span>
              </div>

              <p className="font-semibold mb-1">Collaborator {i}</p>
              <p className="text-xs text-muted-foreground mb-3">
                Level {3 + i} • Connected 2 weeks ago
              </p>

              <div className="h-1.5 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${60 + i * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
