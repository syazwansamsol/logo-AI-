import React, { useState } from 'react';
import { Award, GraduationCap, Shirt, BookOpen, CheckCircle, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';
import { IP_DATA, TrademarkClass } from '../data/ipContent';

export const TrademarkClassVisualizer: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [selectedClass, setSelectedClass] = useState<number>(41);
  const [complianceChecks, setComplianceChecks] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: true,
  });

  const { title, lawBasis, keyPrinciple, conditions, classes } = IP_DATA.trademark;
  const currentClassData = classes.find((c) => c.classNumber === selectedClass) || classes[0];

  const toggleCheck = (idx: number) => {
    setComplianceChecks((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <section id="cap-dagangan" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Muka Surat 4: Perlindungan Praktikal MyIPO
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Perbezaan penting antara Hak Cipta dan Cap Dagangan: di bawah <span className="font-semibold text-slate-900 dark:text-white">{lawBasis}</span>,
            MyIPO menilai fungsi tanda komersial, bukan siapa atau mesin mana yang menjananya!
          </p>
        </div>

        {/* Key Principle Banner */}
        <div
          className={`p-6 rounded-2xl border mb-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isDark
              ? 'bg-slate-900/70 border-emerald-900/40 text-slate-200'
              : 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-500 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                Prinsip Asas Akta Cap Dagangan 2019
              </div>
              <p className="text-sm font-medium leading-relaxed">
                "{keyPrinciple}"
              </p>
            </div>
          </div>

          <a
            href="https://iponline2u.myipo.gov.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            <span>Portal MyIPO Online</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 4 Conditions for Registration */}
        <div className="mb-16">
          <div className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
            <span>4 Syarat Kelulusan Pendaftaran Cap Dagangan MyIPO:</span>
            <span className="text-xs font-normal text-slate-500">Klik untuk semak logo anda</span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {conditions.map((cond, idx) => {
              const isChecked = complianceChecks[idx];
              return (
                <div
                  key={cond.title}
                  onClick={() => toggleCheck(idx)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? isDark
                        ? 'bg-emerald-950/20 border-emerald-700/50'
                        : 'bg-emerald-50/40 border-emerald-300'
                      : isDark
                      ? 'bg-slate-900/30 border-slate-800 opacity-60'
                      : 'bg-slate-50 border-slate-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      Syarat 0{idx + 1}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 text-white'
                          : 'border border-slate-400 dark:border-slate-600'
                      }`}
                    >
                      {isChecked && <CheckCircle className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {cond.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {cond.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3 Important Classes for School Registration */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Klasifikasi Nice (Nice Classification)
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              3 Kelas Cap Dagangan Paling Penting untuk Sekolah
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Pendaftaran di MyIPO dibuat mengikut kelas barangan dan perkhidmatan. Sekolah disarankan mendaftar dalam ketiga-tiga kelas ini bagi perlindungan menyeluruh.
            </p>
          </div>

          {/* Interactive Class Selector Tabs */}
          <div className="grid sm:grid-cols-3 gap-3 mb-8">
            {classes.map((cls) => {
              const isCurrent = selectedClass === cls.classNumber;
              return (
                <button
                  key={cls.classNumber}
                  onClick={() => setSelectedClass(cls.classNumber)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                    isCurrent
                      ? isDark
                        ? 'bg-emerald-950/60 border-emerald-500 text-white shadow-sm ring-1 ring-emerald-500/30'
                        : 'bg-emerald-50 border-emerald-600 text-emerald-950 shadow-sm ring-1 ring-emerald-500/30'
                      : isDark
                      ? 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                      KELAS {cls.classNumber}
                    </span>
                    {cls.classNumber === 41 && <GraduationCap className="w-4 h-4 text-emerald-500" />}
                    {cls.classNumber === 25 && <Shirt className="w-4 h-4 text-emerald-500" />}
                    {cls.classNumber === 16 && <BookOpen className="w-4 h-4 text-emerald-500" />}
                  </div>
                  <div className="text-sm font-bold">{cls.name}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {cls.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Class Preview & Mockup */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Detail Specifications */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  Peranan Strategik Kelas {currentClassData.classNumber}
                </span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {currentClassData.name} ({currentClassData.subtitle})
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2">
                  {currentClassData.relevanceToSchool}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 block mb-2">
                  Contoh Penggunaan & Item Dilindungi:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentClassData.examples.map((ex, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{ex}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                *Nota MyIPO: Tempoh perlindungan setiap pendaftaran cap dagangan sah selama 10 tahun dan boleh diperbaharui setiap dekad.
              </div>
            </div>

            {/* Right: Dynamic Interactive School Mockup */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 text-white border border-emerald-900/50 shadow-xl relative overflow-hidden flex flex-col items-center justify-center min-h-[260px]">
                
                {/* Mockup context header */}
                <div className="absolute top-3 left-3 text-[10px] uppercase font-mono tracking-wider text-emerald-400 bg-slate-900/80 px-2 py-0.5 rounded border border-emerald-800">
                  MOCKUP {currentClassData.classNumber}: {currentClassData.mockupContext}
                </div>

                {/* Simulated Graphic Representation */}
                {selectedClass === 41 && (
                  <div className="w-full max-w-[280px] bg-slate-100 text-slate-900 p-4 rounded-lg shadow-2xl border-4 border-amber-600/40 relative text-center mt-4">
                    <div className="text-[9px] font-serif tracking-widest text-slate-600 uppercase">
                      Kementerian Pendidikan Malaysia
                    </div>
                    <div className="my-2 flex justify-center">
                      <div className="w-12 h-12 rounded-full border-2 border-emerald-800 bg-emerald-50 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-emerald-800" />
                      </div>
                    </div>
                    <div className="font-serif text-xs font-bold text-slate-900">
                      SIJIL TAMAT PERSEKOLAHAN
                    </div>
                    <div className="text-[8px] text-slate-500 mt-1">
                      Dilindungi Cap Dagangan Kelas 41 (MyIPO)
                    </div>
                  </div>
                )}

                {selectedClass === 25 && (
                  <div className="flex flex-col items-center mt-4">
                    <div className="w-36 h-40 bg-emerald-900 rounded-t-3xl border-2 border-emerald-700/60 shadow-xl relative flex items-center justify-center p-4">
                      {/* Pocket */}
                      <div className="w-20 h-22 bg-emerald-950/80 border border-emerald-600 rounded-b-xl flex flex-col items-center justify-center p-2 shadow-inner">
                        <Award className="w-7 h-7 text-amber-400 mb-1" />
                        <span className="text-[7px] font-bold text-center tracking-tight text-white">
                          SMK BISTARI
                        </span>
                        <span className="text-[6px] text-emerald-300 font-mono">
                          REG. TM 25
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-300 mt-2 font-medium">
                      Sulaman Poket Baju Rasmi & Pakaian Sukan
                    </span>
                  </div>
                )}

                {selectedClass === 16 && (
                  <div className="w-full max-w-[260px] bg-amber-50 text-slate-900 p-4 rounded-xl shadow-2xl border-l-8 border-emerald-800 relative mt-4">
                    <div className="flex items-center justify-between border-b border-amber-200 pb-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-emerald-800 text-white flex items-center justify-center font-bold text-xs">
                        SK
                      </div>
                      <span className="text-[9px] font-mono text-slate-500">BUKU LATIHAN</span>
                    </div>
                    <div className="space-y-1.5 py-1">
                      <div className="h-2 bg-amber-200/60 rounded w-full" />
                      <div className="h-2 bg-amber-200/60 rounded w-4/5" />
                    </div>
                    <div className="mt-3 text-[8px] font-bold text-emerald-900 text-right">
                      Cap Dagangan Kelas 16 Berdaftar
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
