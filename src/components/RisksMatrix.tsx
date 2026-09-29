import React, { useState } from 'react';
import { AlertTriangle, FileText, Copy, Maximize2, Globe, ShieldAlert, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { IP_DATA, RiskItem } from '../data/ipContent';

export const RisksMatrix: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [expandedRisk, setExpandedRisk] = useState<number | null>(1);
  const [selectedChartMode, setSelectedChartMode] = useState<'raw' | 'hybrid' | 'manual'>('hybrid');

  const { risks } = IP_DATA;

  const getRiskIcon = (name: string) => {
    switch (name) {
      case 'AlertTriangle':
        return <AlertTriangle className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Copy':
        return <Copy className="w-5 h-5" />;
      case 'Maximize2':
        return <Maximize2 className="w-5 h-5" />;
      case 'Globe':
        return <Globe className="w-5 h-5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getSeverityBadge = (level: RiskItem['impactLevel']) => {
    switch (level) {
      case 'Kritikal':
        return isDark
          ? 'bg-rose-950/60 text-rose-300 border-rose-800'
          : 'bg-rose-100 text-rose-800 border-rose-200';
      case 'Tinggi':
        return isDark
          ? 'bg-amber-950/60 text-amber-300 border-amber-800'
          : 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Sederhana':
        return isDark
          ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
          : 'bg-emerald-100 text-emerald-800 border-emerald-200';
    }
  };

  // Dynamic Radar Chart Coordinates (5 axes: Hak Cipta, Vektor, Cap Dagangan, Keunikan, Liabiliti)
  // Center is (150, 150), radius is 110
  const radarAxes = [
    { label: "Hak Cipta Sah", angle: -90 },
    { label: "Kualiti Vektor", angle: -18 },
    { label: "Lulus MyIPO", angle: 54 },
    { label: "Keunikan Budaya", angle: 126 },
    { label: "Bebas Liabiliti", angle: 198 },
  ];

  // Scores 0-100 for each mode
  const radarScores = {
    raw: [15, 20, 35, 30, 25],
    hybrid: [85, 100, 92, 90, 88], // Kumpulan 4 Recommendation
    manual: [95, 100, 95, 95, 90],
  };

  const currentScores = radarScores[selectedChartMode];

  const getPoint = (score: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const r = (score / 100) * 110;
    return {
      x: 150 + r * Math.cos(rad),
      y: 150 + r * Math.sin(rad),
    };
  };

  const polygonPoints = currentScores
    .map((score, i) => {
      const p = getPoint(score, radarAxes[i].angle);
      return `${p.x},${p.y}`;
    })
    .join(' ');

  return (
    <section id="risiko" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Muka Surat 5: Analisis Ancaman
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            6 Risiko Utama Logo Sekolah Dijana AI
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Mengetahui risiko membolehkan sekolah merancang mitigasi awal agar identiti sekolah tidak terdedah kepada tuntutan saman atau pembaziran dana awam.
          </p>
        </div>

        {/* Dynamic Visual Chart: Radar Matrix Created by Kumpulan 4 */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border mb-16 ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Layers className="w-3.5 h-3.5" />
                <span>Carta Visual Dinamik Kumpulan 4</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                Matriks Perbandingan Prestasi & Keselamatan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Pilih mod di bawah untuk melihat impak perundangan dan teknikal terhadap logo sekolah.
              </p>
            </div>

            {/* Mode Selector */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/80 shrink-0">
              <button
                onClick={() => setSelectedChartMode('raw')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedChartMode === 'raw'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                AI Mentah (100%)
              </button>
              <button
                onClick={() => setSelectedChartMode('hybrid')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedChartMode === 'hybrid'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-emerald-500'
                }`}
              >
                ⭐ Hibrid (Syor Kumpulan 4)
              </button>
              <button
                onClick={() => setSelectedChartMode('manual')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedChartMode === 'manual'
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Manual Penuh
              </button>
            </div>
          </div>

          {/* SVG Dynamic Radar Chart */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex justify-center">
              <svg width="320" height="320" viewBox="0 0 300 300" className="overflow-visible select-none">
                {/* Background Concentric Rings (20%, 40%, 60%, 80%, 100%) */}
                {[20, 40, 60, 80, 100].map((ring) => {
                  const r = (ring / 100) * 110;
                  return (
                    <circle
                      key={ring}
                      cx="150"
                      cy="150"
                      r={r}
                      fill="none"
                      stroke={isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)'}
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Axis Lines */}
                {radarAxes.map((axis, i) => {
                  const end = getPoint(100, axis.angle);
                  const labelPos = getPoint(125, axis.angle);
                  return (
                    <g key={i}>
                      <line
                        x1="150"
                        y1="150"
                        x2={end.x}
                        y2={end.y}
                        stroke={isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)'}
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                      <text
                        x={labelPos.x}
                        y={labelPos.y + 4}
                        textAnchor="middle"
                        fontSize="10"
                        fontWeight="600"
                        fill={isDark ? '#94a3b8' : '#475569'}
                        className="font-sans"
                      >
                        {axis.label}
                      </text>
                    </g>
                  );
                })}

                {/* Animated Score Area Polygon */}
                <polygon
                  points={polygonPoints}
                  fill={
                    selectedChartMode === 'hybrid'
                      ? 'rgba(16, 185, 129, 0.35)'
                      : selectedChartMode === 'raw'
                      ? 'rgba(244, 63, 94, 0.35)'
                      : 'rgba(2, 132, 199, 0.35)'
                  }
                  stroke={
                    selectedChartMode === 'hybrid'
                      ? '#10b981'
                      : selectedChartMode === 'raw'
                      ? '#f43f5e'
                      : '#0284c7'
                  }
                  strokeWidth="2.5"
                  className="transition-all duration-500 ease-out"
                />

                {/* Score Point Vertices */}
                {currentScores.map((score, i) => {
                  const p = getPoint(score, radarAxes[i].angle);
                  return (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="4.5"
                      fill={
                        selectedChartMode === 'hybrid'
                          ? '#34d399'
                          : selectedChartMode === 'raw'
                          ? '#fb7185'
                          : '#38bdf8'
                      }
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      className="transition-all duration-500"
                    />
                  );
                })}
              </svg>
            </div>

            {/* Radar Insights Breakdown */}
            <div className="lg:col-span-6 space-y-4">
              <div
                className={`p-4 rounded-xl border ${
                  selectedChartMode === 'hybrid'
                    ? isDark
                      ? 'bg-emerald-950/30 border-emerald-800/60'
                      : 'bg-emerald-50 border-emerald-200'
                    : selectedChartMode === 'raw'
                    ? isDark
                      ? 'bg-rose-950/30 border-rose-900/60'
                      : 'bg-rose-50 border-rose-200'
                    : isDark
                    ? 'bg-sky-950/30 border-sky-900/60'
                    : 'bg-sky-50 border-sky-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    {selectedChartMode === 'hybrid' && 'Analisis Model: Hibrid (Cadangan Kumpulan 4)'}
                    {selectedChartMode === 'raw' && 'Analisis Model: AI Mentah (Bahaya Liabiliti)'}
                    {selectedChartMode === 'manual' && 'Analisis Model: Reka Bentuk Tradisional Manual'}
                  </span>
                  <span className="text-xs font-mono font-bold">
                    Purata Skor: {Math.round(currentScores.reduce((a, b) => a + b, 0) / currentScores.length)}%
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedChartMode === 'hybrid' &&
                    'Pendekatan Hibrid menggabungkan kepantasan AI menjana idea dengan kepakaran pereka grafik menukarnya ke format vektor yang sah di bawah Akta Hak Cipta 1987 dan MyIPO. Ini adalah laluan paling selamat dan kos-efektif.'}
                  {selectedChartMode === 'raw' &&
                    'Menggunakan output AI secara mentah mendedahkan sekolah kepada penolakan pendaftaran MyIPO, ketiadaan hak eksklusif, imej cetakan pecah, dan potensi tuntutan mahkamah akibat kemiripan tidak disengajakan.'}
                  {selectedChartMode === 'manual' &&
                    'Selamat dan mempunyai hak cipta yang sangat kukuh, namun memerlukan kos yang lebih tinggi serta memakan masa lebih panjang untuk fasa penerokaan konsep awal.'}
                </p>
              </div>

              {/* Dimension Metrics Bar */}
              <div className="space-y-2">
                {radarAxes.map((axis, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-xs font-medium text-slate-600 dark:text-slate-400 w-32 truncate">
                      {axis.label}
                    </span>
                    <div className="flex-1 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          selectedChartMode === 'hybrid'
                            ? 'bg-emerald-500'
                            : selectedChartMode === 'raw'
                            ? 'bg-rose-500'
                            : 'bg-sky-500'
                        }`}
                        style={{ width: `${currentScores[i]}%` }}
                      />
                    </div>
                    <span className="text-xs font-mono font-bold w-10 text-right text-slate-700 dark:text-slate-300">
                      {currentScores[i]}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 6 Risks Interactive Accordion Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {risks.map((risk) => {
            const isExpanded = expandedRisk === risk.id;
            return (
              <div
                key={risk.id}
                className={`rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                  isExpanded
                    ? isDark
                      ? 'bg-slate-900 border-emerald-600/70 shadow-lg'
                      : 'bg-white border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : isDark
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      {getRiskIcon(risk.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getSeverityBadge(
                        risk.impactLevel
                      )}`}
                    >
                      {risk.impactLevel}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {risk.id}. {risk.title}
                  </h3>
                  <div className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-2">
                    {risk.tagline}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {risk.description}
                  </p>
                </div>

                {/* Mitigation Drawer */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800">
                  <button
                    onClick={() => setExpandedRisk(isExpanded ? null : risk.id)}
                    className="w-full flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <span>Langkah Mitigasi Sekolah</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {isExpanded && (
                    <div className="mt-2.5 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong>Cadangan Tindakan:</strong> {risk.mitigation}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
