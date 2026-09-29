import React, { useState } from 'react';
import { Check, X, ZoomIn, Sparkles, Layers, ShieldAlert, Cpu } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

export const SuitabilityComparison: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(2); // 1x, 2x, 4x
  const [activeTab, setActiveTab] = useState<'both' | 'suitable' | 'unsuitable'>('both');

  const { suitable, unsuitable } = IP_DATA.suitability;

  return (
    <section id="kesesuaian" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Muka Surat 2: Penilaian Kesesuaian
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Sesuaikah Guna AI untuk Logo Sekolah?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            AI generatif adalah rakan kolaborasi yang hebat untuk fasa permulaan, namun berbahaya
            jika outputnya diambil terus sebagai lambang rasmi institusi.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-xs mb-8 border border-slate-200/80 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('both')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'both'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Kedua-duanya
          </button>
          <button
            onClick={() => setActiveTab('suitable')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'suitable'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
            }`}
          >
            Sesuai
          </button>
          <button
            onClick={() => setActiveTab('unsuitable')}
            className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'unsuitable'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-rose-500'
            }`}
          >
            Kurang Sesuai
          </button>
        </div>

        {/* Side-by-side Suitability Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Sesuai Sebagai Alat Bantu */}
          {(activeTab === 'both' || activeTab === 'suitable') && (
            <div
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                isDark
                  ? 'bg-emerald-950/20 border-emerald-800/40 hover:border-emerald-700/60'
                  : 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {suitable.title}
                  </h3>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
                    Syor Terbaik: Pendekatan Hibrid (AI + Pereka)
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {suitable.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {pt.heading}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 2: Kurang Sesuai Jika Mentah-mentah */}
          {(activeTab === 'both' || activeTab === 'unsuitable') && (
            <div
              className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
                isDark
                  ? 'bg-rose-950/20 border-rose-900/40 hover:border-rose-800/60'
                  : 'bg-rose-50/50 border-rose-200 hover:border-rose-300'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                  <X className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {unsuitable.title}
                  </h3>
                  <p className="text-xs text-rose-600 dark:text-rose-400 font-medium">
                    Risiko Tinggi: Mengambil fail mentah terus dari prompt
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {unsuitable.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                        {pt.heading}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Visual Simulator: Raster vs Vector Zoom Proof */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Simulasi Interaktif: Ujian Ketajaman Cetakan</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Kenapa Sekolah Memerlukan Fail Vektor, Bukan Fail Raster AI?
              </h3>
            </div>

            {/* Zoom Selector */}
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <span className="text-xs font-medium text-slate-500 px-2">Skala:</span>
              {[1, 2, 4].map((scale) => (
                <button
                  key={scale}
                  onClick={() => setZoomLevel(scale)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    zoomLevel === scale
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                  }`}
                >
                  {scale}x
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Raster Box (AI Raw) */}
            <div className="p-4 rounded-xl border border-rose-300 dark:border-rose-900/60 bg-rose-50/30 dark:bg-rose-950/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Output Mentah AI (Raster PNG/JPG)
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">72 DPI Berpiksel</span>
              </div>

              {/* Visual Simulated Raster Canvas */}
              <div className="h-44 sm:h-52 bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div
                  className="transition-transform duration-300 text-center"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    filter: zoomLevel > 1 ? `blur(${zoomLevel * 0.4}px)` : 'none',
                    imageRendering: 'pixelated',
                  }}
                >
                  {/* Simulated badge icon with pixelated rendering */}
                  <div className="w-24 h-24 border-4 border-dashed border-amber-400/80 rounded-2xl flex flex-col items-center justify-center p-2 bg-emerald-950/70">
                    <div className="w-8 h-8 rounded bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xs">
                      SK
                    </div>
                    <div className="text-[8px] font-mono text-emerald-200 mt-2 font-bold tracking-tight">
                      ILMU PENYULUH
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-rose-400 bg-slate-900/90 px-2 py-0.5 rounded border border-rose-800">
                  {zoomLevel > 1 ? `⚠️ Imej kabur & pecah pada saiz banner!` : 'Tampak elok di skrin kecil sahaja'}
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Mesin sulam lencana baju sekolah dan kilang cetakan banner memerlukan titik nod vektor,
                bukan piksel yang menghasilkan tepi bergegar.
              </p>
            </div>

            {/* Vector Box (Pereka Hibrid) */}
            <div className="p-4 rounded-xl border border-emerald-300 dark:border-emerald-800/60 bg-emerald-50/30 dark:bg-emerald-950/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Lukisan Vektor Pereka (SVG / .AI)
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Ketajaman Infiniti (300+ DPI)</span>
              </div>

              {/* Crisp SVG Master Vector Canvas */}
              <div className="h-44 sm:h-52 bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden relative">
                <div
                  className="transition-transform duration-300 text-center"
                  style={{
                    transform: `scale(${zoomLevel})`,
                  }}
                >
                  {/* Clean SVG Vector badge */}
                  <svg width="96" height="96" viewBox="0 0 100 100" className="drop-shadow-lg">
                    <path
                      d="M50 8 L85 24 V60 C85 78 50 94 50 94 C50 94 15 78 15 60 V24 Z"
                      fill="#064e3b"
                      stroke="#34d399"
                      strokeWidth="3"
                    />
                    <circle cx="50" cy="45" r="16" fill="#10b981" />
                    <path
                      d="M42 45 L48 51 L60 38"
                      stroke="#ffffff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <text
                      x="50"
                      y="74"
                      textAnchor="middle"
                      fill="#ffffff"
                      fontSize="7"
                      fontWeight="bold"
                      fontFamily="sans-serif"
                      letterSpacing="0.5"
                    >
                      SEKOLAH KEBANGSAAN
                    </text>
                  </svg>
                </div>

                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-emerald-400 bg-slate-900/90 px-2 py-0.5 rounded border border-emerald-800">
                  ✨ 100% Tajam tanpa kehilangan kualiti
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                Boleh dibesarkan daripada sekecil lencana kolar 2cm sehinggalah ke papan iklan 20 meter
                tanpa sebarang kehilangan resolusi.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
