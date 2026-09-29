import React, { useState } from 'react';
import { CheckCircle2, Circle, ChevronRight, Check, Printer, Sparkles, AlertCircle } from 'lucide-react';
import { IP_DATA, StepItem } from '../data/ipContent';

export const StepPipeline: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });
  const [activeStep, setActiveStep] = useState<number>(3);

  const { steps } = IP_DATA;

  const toggleStep = (stepNum: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompletedSteps((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const totalSteps = steps.length;
  const completedCount = Object.values(completedSteps).filter(Boolean).length;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100);

  const currentStepData = steps.find((s) => s.number === activeStep) || steps[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="7-langkah" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Muka Surat 7: Pelan Tindakan Komprehensif
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
              7 Langkah Menghasilkan Logo Sekolah Selamat
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Ikuti peta alir kerja ini langkah demi langkah untuk memastikan rekaan logo institusi anda memenuhi
              semua kriteria perundangan Akta Hak Cipta 1987, Akta Cap Dagangan 2019, dan piawaian KPM.
            </p>
          </div>

          {/* Progress Tracker Card */}
          <div
            className={`p-4 rounded-2xl border min-w-[240px] shrink-0 ${
              isDark
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white mb-2">
              <span>Kemajuan Pelaksanaan</span>
              <span className="font-mono text-emerald-600 dark:text-emerald-400">
                {completedCount} / {totalSteps} Selesai ({progressPercentage}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <button
              onClick={handlePrint}
              className="w-full py-1.5 px-3 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Senarai Semak Rasmi</span>
            </button>
          </div>
        </div>

        {/* 7-Step Interactive Stepper Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Stepper Navigation Column */}
          <div className="lg:col-span-6 space-y-3">
            {steps.map((step) => {
              const isSelected = activeStep === step.number;
              const isChecked = !!completedSteps[step.number];

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(step.number)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-center justify-between gap-3 ${
                    isSelected
                      ? isDark
                        ? 'bg-emerald-950/40 border-emerald-500/80 ring-1 ring-emerald-500/30'
                        : 'bg-emerald-50/80 border-emerald-500 ring-1 ring-emerald-500/30'
                      : isDark
                      ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <button
                      onClick={(e) => toggleStep(step.number, e)}
                      title={isChecked ? 'Tandakan belum selesai' : 'Tandakan selesai'}
                      className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-600 text-white'
                          : 'border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 text-transparent'
                      }`}
                    >
                      <Check className="w-4 h-4 stroke-[3]" />
                    </button>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          LANGKAH 0{step.number}
                        </span>
                        {isChecked && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                            ✓ Selesai
                          </span>
                        )}
                      </div>
                      <h3
                        className={`text-sm font-bold truncate ${
                          isChecked ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-500 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Step Detail Spotlight */}
          <div className="lg:col-span-6">
            <div
              className={`p-6 sm:p-8 rounded-2xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800'
                  : 'bg-white border-slate-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10">
                  Langkah 0{currentStepData.number} daripada 07
                </span>
                <button
                  onClick={(e) => toggleStep(currentStepData.number, e)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
                    completedSteps[currentStepData.number]
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : 'border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>
                    {completedSteps[currentStepData.number] ? 'Telah Dilaksanakan' : 'Tanda Selesai'}
                  </span>
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {currentStepData.title}
              </h3>

              <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-4 leading-relaxed">
                {currentStepData.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                <strong>Huraian Panduan:</strong> {currentStepData.details}
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Petua & Tindakan Penting (Best Practices):
                </h4>
                <div className="space-y-2">
                  {currentStepData.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Special callout on Step 6/7 */}
              {currentStepData.number === 6 && (
                <div className="mt-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300">
                  💡 <strong>Tip MyIPO:</strong> Permohonan boleh difailkan secara individu oleh pentadbir sekolah atau melalui ejen cap dagangan berdaftar untuk mengelakkan bantahan carian.
                </div>
              )}
              {currentStepData.number === 7 && (
                <div className="mt-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-800 dark:text-amber-300">
                  ⚠️ <strong>Peringatan KPM:</strong> Pastikan moto dan falsafah sekolah sejajar dengan Falsafah Pendidikan Kebangsaan (FPK) serta mendapat minit kelulusan rasmi.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
