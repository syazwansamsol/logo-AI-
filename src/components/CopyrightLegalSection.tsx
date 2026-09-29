import React, { useState } from 'react';
import { BookOpen, UserCheck, Scale, FileSignature, Copy, Check, Shield, FileText } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

export const CopyrightLegalSection: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [copiedClause, setCopiedClause] = useState<boolean>(false);
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const { title, lawBasis, pillars } = IP_DATA.copyright;

  const sampleAgreementClause = `KLAUSA PENYERAHAN HAK CIPTA LOGO SEKOLAH (CONTOH STANDARD):

"Pereka / Pencipta dengan ini bersetuju memindahkan dan menyerahkan secara mutlak segala hak cipta, hak pemilikan harta intelek, dan hak komersial bagi reka bentuk logo ini kepada [NAMA RASMI SEKOLAH / LEMBAGA PENGELOLA SEKOLAH].

Pereka mengesahkan bahawa karya akhir ini mengandungi olahan kreatif asal dan tidak melanggar hak cipta mana-mana pihak ketiga. Sebarang konsep awal yang dijana menggunakan kecerdasan buatan (AI) telah diolah semula secara material bagi menjamin keaslian dan pematuhan Akta Hak Cipta 1987 Malaysia."`;

  const handleCopyClause = () => {
    navigator.clipboard.writeText(sampleAgreementClause);
    setCopiedClause(true);
    setTimeout(() => setCopiedClause(false), 3000);
  };

  const getPillarIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UserCheck className="w-5 h-5" />;
      case 1:
        return <FileSignature className="w-5 h-5" />;
      case 2:
        return <Scale className="w-5 h-5" />;
      case 3:
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Shield className="w-5 h-5" />;
    }
  };

  return (
    <section id="hak-cipta" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Muka Surat 3: Kerangka Perundangan
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Pemeriksaan di Bawah {lawBasis}</span>
          </div>
        </div>

        {/* 4 Pillars Interactive Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Left Column: 4 Pillars Interactive List */}
          <div className="lg:col-span-6 space-y-3">
            {pillars.map((pillar, idx) => {
              const isSelected = selectedPillar === idx;
              return (
                <div
                  key={pillar.number}
                  onClick={() => setSelectedPillar(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? isDark
                        ? 'bg-emerald-950/40 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20'
                        : 'bg-emerald-50/70 border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                      : isDark
                      ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? 'bg-emerald-500 text-slate-950 font-bold'
                          : isDark
                          ? 'bg-slate-800 text-emerald-400'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {getPillarIcon(idx)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {pillar.number}. {pillar.title}
                        </h3>
                        {isSelected && (
                          <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hidden sm:inline">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {pillar.description}
                      </p>
                      <div className="mt-2.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400/90">
                        💡 {pillar.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-dive Focus & Sample Agreement Clause */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Active Pillar Spotlight */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Fokus Undang-Undang #{pillars[selectedPillar].number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {pillars[selectedPillar].title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {pillars[selectedPillar].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-2">
                <div className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-emerald-500" />
                  <span>Implikasi Praktikal kepada Pihak Sekolah:</span>
                </div>
                {selectedPillar === 0 && (
                  <p>
                    Jangan bergantung semata-mata pada teks prompt. Sekiranya logo dijana 100% oleh komputer tanpa campur tangan intelektual manusia, sekolah mungkin tidak mempunyai hak undang-undang untuk menyaman pihak ketiga yang meniru logo tersebut di mahkamah.
                  </p>
                )}
                {selectedPillar === 1 && (
                  <p>
                    Setiap garisan vektor yang dilukis oleh guru seni atau pereka jemputan menghasilkan perlindungan hak cipta sah. Simpan lakaran draf dan fail projek bertarikh sebagai bukti penciptaan.
                  </p>
                )}
                {selectedPillar === 2 && (
                  <p>
                    Oleh kerana Parlimen Malaysia belum meminda undang-undang khusus untuk AI generatif, amalan industri yang paling selamat adalah mengikut standard konvensional penyerahan karya manusia.
                  </p>
                )}
                {selectedPillar === 3 && (
                  <p>
                    Surat penyerahan hak (Deed of Assignment) ini penting jika guru berpindah sekolah atau pereka luar menuntut bayaran royalti di kemudian hari.
                  </p>
                )}
              </div>
            </div>

            {/* Practical Template: Deed of Assignment */}
            <div
              className={`p-6 rounded-2xl border ${
                isDark
                  ? 'bg-slate-950/60 border-emerald-900/40'
                  : 'bg-emerald-50/40 border-emerald-200'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                    Templat Klausa Penyerahan Hak (Deed of Assignment)
                  </h4>
                </div>
                <button
                  onClick={handleCopyClause}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 ${
                    copiedClause
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : isDark
                      ? 'bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800'
                      : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {copiedClause ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Klausa</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-[11px] font-mono whitespace-pre-wrap leading-relaxed border border-slate-800 overflow-x-auto">
                {sampleAgreementClause}
              </pre>

              <div className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">
                Gunakan klausa ini di dalam surat lantikan rasmi pereka grafik atau perjanjian PIBG.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
