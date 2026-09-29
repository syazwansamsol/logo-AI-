import React, { useEffect, useState, useMemo } from 'react';

interface DoodleItem {
  id: string;
  name: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  size: number;
  rotation: number;
  speed: number;
  type: 'shield' | 'cap' | 'book' | 'pen' | 'vector' | 'spark' | 'trademark' | 'copyright' | 'scales' | 'lightbulb';
  delay: number;
}

export const DoodleBackground: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDoodle, setActiveDoodle] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // normalized -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const doodles: DoodleItem[] = useMemo(() => [
    { id: 'd1', name: 'Lencana Sekolah', x: 6, y: 12, size: 48, rotation: -12, speed: 1.2, type: 'shield', delay: 0 },
    { id: 'd2', name: 'Topi Graduasi', x: 88, y: 15, size: 54, rotation: 15, speed: 0.9, type: 'cap', delay: 1.5 },
    { id: 'd3', name: 'Buku Ilmu', x: 14, y: 38, size: 50, rotation: 8, speed: 1.4, type: 'book', delay: 2.2 },
    { id: 'd4', name: 'Pena Vektor', x: 84, y: 42, size: 46, rotation: -20, speed: 1.1, type: 'pen', delay: 0.8 },
    { id: 'd5', name: 'Nod Vektor Bezier', x: 92, y: 72, size: 52, rotation: 10, speed: 1.3, type: 'vector', delay: 3.1 },
    { id: 'd6', name: 'Percikan AI', x: 8, y: 68, size: 44, rotation: 25, speed: 1.5, type: 'spark', delay: 1.9 },
    { id: 'd7', name: 'Cap Dagangan ™', x: 78, y: 88, size: 42, rotation: -8, speed: 0.8, type: 'trademark', delay: 2.7 },
    { id: 'd8', name: 'Hak Cipta ©', x: 22, y: 86, size: 44, rotation: 12, speed: 1.0, type: 'copyright', delay: 0.5 },
    { id: 'd9', name: 'Neraca Perundangan', x: 48, y: 92, size: 46, rotation: -5, speed: 1.2, type: 'scales', delay: 1.1 },
    { id: 'd10', name: 'Inovasi & Idea', x: 50, y: 8, size: 42, rotation: 6, speed: 1.0, type: 'lightbulb', delay: 3.5 },
    { id: 'd11', name: 'Simbol Perlindungan', x: 93, y: 28, size: 40, rotation: -15, speed: 1.3, type: 'shield', delay: 2.0 },
    { id: 'd12', name: 'Sains & Teknologi', x: 5, y: 50, size: 38, rotation: 18, speed: 0.9, type: 'spark', delay: 1.4 },
  ], []);

  const strokeColor = isDark ? 'rgba(52, 211, 153, 0.22)' : 'rgba(5, 150, 105, 0.24)';
  const activeStrokeColor = isDark ? '#34d399' : '#059669';
  const fillColor = isDark ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.06)';

  const renderDoodleIcon = (type: DoodleItem['type']) => {
    switch (type) {
      case 'shield':
        return (
          <path
            d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 6v6 M9 10l3 3 5-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'cap':
        return (
          <path
            d="M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'book':
        return (
          <path
            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20 M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z M9 7h6 M9 11h4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'pen':
        return (
          <path
            d="M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z M2 2l7.586 7.586"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'vector':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="5" cy="19" r="3" />
            <circle cx="19" cy="5" r="3" />
            <path d="M5 16C5 9 12 5 16 5" strokeLinecap="round" />
            <line x1="5" y1="16" x2="5" y2="10" strokeDasharray="2 2" />
            <line x1="16" y1="5" x2="10" y2="5" strokeDasharray="2 2" />
          </g>
        );
      case 'spark':
        return (
          <path
            d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      case 'trademark':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="4" />
            <path d="M6 7h4v10M8 7v10 M14 17V7l3 5 3-5v10" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      case 'copyright':
        return (
          <g fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M14.5 9.5a3.5 3.5 0 1 0 0 5" strokeLinecap="round" />
          </g>
        );
      case 'scales':
        return (
          <path
            d="M12 3v18 M7 7l5-2 5 2 M4 13l3-6 3 6c0 1.5-1.5 2-3 2s-3-.5-3-2z M14 13l3-6 3 6c0 1.5-1.5 2-3 2s-3-.5-3-2z M9 21h6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
      case 'lightbulb':
        return (
          <path
            d="M9 18h6 M10 22h4 M12 2a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3 6h8c1.5-1.5 3-3.5 3-6a7 7 0 0 0-7-7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        );
    }
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none transition-opacity duration-700"
    >
      {/* Ambient background mesh gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          isDark
            ? 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.14),rgba(5,31,27,0))]'
            : 'bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]'
        }`}
      />

      {/* Floating Doodles */}
      {doodles.map((doodle) => {
        const isActive = activeDoodle === doodle.id;
        const offsetX = mousePos.x * 14 * doodle.speed;
        const offsetY = mousePos.y * 14 * doodle.speed;

        return (
          <div
            key={doodle.id}
            onMouseEnter={() => setActiveDoodle(doodle.id)}
            onMouseLeave={() => setActiveDoodle(null)}
            className="pointer-events-auto absolute cursor-pointer transition-transform duration-300 ease-out"
            style={{
              left: `${doodle.x}%`,
              top: `${doodle.y}%`,
              transform: `translate(${offsetX}px, ${offsetY}px) rotate(${doodle.rotation}deg) scale(${isActive ? 1.25 : 1})`,
              animation: `floatSlow ${7 + doodle.speed * 2}s ease-in-out infinite alternate`,
              animationDelay: `${doodle.delay}s`,
            }}
          >
            <div
              className={`p-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? 'bg-emerald-500/15 backdrop-blur-xs ring-1 ring-emerald-400/50 shadow-lg'
                  : ''
              }`}
              style={{
                color: isActive ? activeStrokeColor : strokeColor,
              }}
            >
              <svg
                width={doodle.size}
                height={doodle.size}
                viewBox="0 0 24 24"
                className="overflow-visible"
              >
                {renderDoodleIcon(doodle.type)}
              </svg>
            </div>

            {/* Tooltip on doodle hover */}
            {isActive && (
              <div
                className={`absolute left-1/2 -bottom-7 -translate-x-1/2 px-2 py-0.5 text-[11px] font-medium tracking-wide whitespace-nowrap rounded shadow-sm border transition-opacity ${
                  isDark
                    ? 'bg-slate-900/90 text-emerald-300 border-emerald-800/60'
                    : 'bg-white/95 text-emerald-950 border-emerald-200'
                }`}
              >
                {doodle.name}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
