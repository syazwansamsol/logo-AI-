import React, { useState } from 'react';
import { ShieldCheck, Sparkles, Scale, AlertCircle, ArrowDown, ChevronRight, CheckCircle2 } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

interface HeroSectionProps {
  isDark: boolean;
  onSelectAudit: () => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isDark, onSelectAudit, onOpenChat }) => {
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);

  const quickAnswers = [
    {
      q: "Sesuaikah?",
      badge: "Alat Bantu",
      answer: "Sangat sesuai untuk penjanaan konsep dan idea awal, tetapi TIDAK sesuai diguna mentah-mentah tanpa olahan pereka manusia.",
      statusColor: "text-emerald-500",
      ctaTarget: "#kesesuaian"
    },
    {
      q: "Boleh Didaftarkan?",
      badge: "MyIPO Akta 2019",
      answer: "Boleh didaftarkan sebagai Cap Dagangan di MyIPO asalkan memenuhi 4 syarat utama keunikan, tanpa mengira ia dibantu oleh AI.",
      statusColor: "text-sky-500",
      ctaTarget: "#hak-cipta"
    },
    {
      q: "Apa Risikonya?",
      badge: "6 Risiko Utama",
      answer: "Persamaan tidak sengaja, ketiadaan keeksklusifan, fail raster pecah, isu lesen komersial alat AI, dan sensitiviti budaya simbol.",
      statusColor: "text-amber-500",
      ctaTarget: "#risiko"
    },
    {
      q: "Perlukah Atribusi?",
      badge: "Undang-Undang Malaysia",
      answer: "Akta Hak Cipta 1987 tidak mewajibkan kredit AI, namun semak terma platform AI percuma dan amalkan ketelusan dokumentasi.",
      statusColor: "text-purple-500",
      ctaTarget: "#atribusi"
    }
  ];

  return (
    <section id="pengenalan" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Disclaimer & Category Kicker */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
          <div className="flex items-center gap-2 text-xs tracking-wider text-slate-500 dark:text-emerald-400/90 uppercase font-semibold">
            <span>Isu Harta Intelek</span>
            <span aria-hidden="true">·</span>
            <span>Garis Panduan Sekolah Malaysia</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-600 dark:text-emerald-300 font-bold">Kumpulan 4</span>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1 text-xs rounded-md border ${
              isDark
                ? 'bg-amber-950/30 border-amber-800/40 text-amber-300/90'
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 shrink-0 text-amber-500" />
            <span className="truncate">{IP_DATA.meta.disclaimer}</span>
          </div>
        </div>

        {/* Main Title & Editorial Headline */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
              Logo Sekolah <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
                Dijana AI
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-8">
              Peluang transformasi kreatif berhadapan realiti undang-undang. Fahami batas hak cipta,
              syarat pendaftaran Cap Dagangan MyIPO, serta panduan praktikal untuk pendidik dan pereka.
            </p>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onSelectAudit}
                className="px-5 py-3 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all transform active:scale-98 cursor-pointer flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Uji Risiko Logo Sekolah Anda</span>
              </button>

              <button
                onClick={onOpenChat}
                className={`px-5 py-3 rounded-xl font-semibold text-sm border transition-all cursor-pointer flex items-center gap-2 ${
                  isDark
                    ? 'border-slate-700 bg-slate-900/80 text-emerald-300 hover:bg-slate-800'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 shadow-xs'
                }`}
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Tanya AI Percuma (Tanpa API)</span>
              </button>
            </div>

            {/* Micro proof line */}
            <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-800/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Rujukan Akta Hak Cipta 1987</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Akta Cap Dagangan 2019 MyIPO</span>
              </div>
            </div>
          </div>

          {/* Interactive 4 Core Questions Display */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl p-6 border shadow-xl transition-all duration-300 ${
                isDark
                  ? 'bg-slate-900/70 border-emerald-950/70 shadow-emerald-950/30'
                  : 'bg-white/90 border-slate-200 shadow-slate-200/50'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  4 Soalan Penting PDF
                </div>
                <div className="text-xs text-slate-400">Klik untuk rumusan pantas</div>
              </div>

              {/* 4 Interactive Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickAnswers.map((item, index) => {
                  const isActive = selectedQuestion === index;
                  return (
                    <button
                      key={item.q}
                      onClick={() => setSelectedQuestion(index)}
                      className={`text-left p-3 rounded-xl border text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? isDark
                            ? 'bg-emerald-950/50 border-emerald-500/80 text-white ring-1 ring-emerald-500/30'
                            : 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500/30'
                          : isDark
                          ? 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.q}</span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                      </div>
                      <div className="text-[11px] font-normal text-slate-400 mt-1">
                        {item.badge}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Answer Box */}
              <div
                className={`p-4 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-950/60 border-slate-800/80'
                    : 'bg-slate-50/80 border-slate-200/80'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500 mt-0.5 shrink-0">
                    <Scale className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                      {quickAnswers[selectedQuestion].q}
                    </h2>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {quickAnswers[selectedQuestion].answer}
                    </p>
                    <a
                      href={quickAnswers[selectedQuestion].ctaTarget}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Ketahui huraian mendalam</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-16 text-center">
          <a
            href="#kesesuaian"
            className="inline-flex flex-col items-center text-xs font-medium text-slate-400 hover:text-emerald-500 transition-colors"
          >
            <span>Terokai Analisis Terperinci</span>
            <ArrowDown className="w-4 h-4 mt-1 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
