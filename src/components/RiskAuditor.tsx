import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, ShieldAlert, CheckCircle, RefreshCw, FileText, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  title: string;
  subtitle: string;
  options: {
    label: string;
    points: number;
    tip: string;
  }[];
}

export const RiskAuditor: React.FC<{ isDark: boolean; onOpenChat: () => void }> = ({ isDark, onOpenChat }) => {
  const questions: Question[] = [
    {
      id: 'format',
      title: '1. Apakah format fail akhir logo sekolah anda?',
      subtitle: 'Ketajaman resolusi untuk cetakan sulaman & papan tanda sekolah.',
      options: [
        {
          label: 'Vektor Penuh (.AI, .EPS, .SVG, .PDF Vector)',
          points: 20,
          tip: 'Cemerlang. Sesuai untuk sebarang saiz cetakan tanpa pecah.',
        },
        {
          label: 'Raster Sahaja (PNG / JPG / WEBP hasil langsung AI)',
          points: 0,
          tip: 'Bahaya! Fail raster akan pecah bila dicetak pada kain rentang atau disulam.',
        },
      ],
    },
    {
      id: 'authorship',
      title: '2. Sejauh manakah pereka manusia mengolah konsep AI tersebut?',
      subtitle: 'Syarat Pengarang Manusia (Akta Hak Cipta 1987).',
      options: [
        {
          label: 'Pereka melukis semula vektor, mengolah tipografi & susunan elemen',
          points: 20,
          tip: 'Sangat baik. Memenuhi elemen kreativiti manusia untuk perlindungan hak cipta.',
        },
        {
          label: 'Diambil terus mentah-mentah daripada output prompt AI',
          points: 0,
          tip: 'Berisiko! Output AI tulen mungkin tidak diiktiraf mempunyai hak cipta.',
        },
      ],
    },
    {
      id: 'search',
      title: '3. Adakah anda telah membuat semakan imej terbalik & carian MyIPO?',
      subtitle: 'Mencegah persamaan tidak sengaja dengan logo institusi lain.',
      options: [
        {
          label: 'Sudah, carian Google Lens & portal MyIPO Online telah disahkan bersih',
          points: 20,
          tip: 'Bagus. Mengurangkan risiko disaman atau dibantah semasa pendaftaran.',
        },
        {
          label: 'Belum pernah membuat sebarang carian tanda serupa',
          points: 0,
          tip: 'Berisiko tinggi! AI mungkin menghasilkan lambang yang mirip logo berdaftar lain.',
        },
      ],
    },
    {
      id: 'license',
      title: '4. Apakah status akaun dan lesen platform AI yang digunakan?',
      subtitle: 'Pematuhan terma perkhidmatan (Terms of Service).',
      options: [
        {
          label: 'Pelan berbayar komersial atau platform dengan lesen jelas (cth: Adobe Firefly)',
          points: 20,
          tip: 'Selamat. Memenuhi hak penggunaan untuk organisasi dan komersial.',
        },
        {
          label: 'Pelan percuma biasa dengan sekatan penggunaan bukan komersial',
          points: 5,
          tip: 'Perlu berhati-hati. Sesetengah platform percuma mengehadkan hak komersial.',
        },
      ],
    },
    {
      id: 'contract',
      title: '5. Adakah terdapat surat perjanjian penyerahan hak cipta rasmi?',
      subtitle: 'Pemilikan dalaman sekolah (Deed of Assignment).',
      options: [
        {
          label: 'Ada perjanjian bertulis rasmi memindahkan hak cipta kepada pihak sekolah',
          points: 20,
          tip: 'Terbaik. Mengelakkan pereka luar menuntut bayaran royalti di kemudian hari.',
        },
        {
          label: 'Hanya persetujuan lisan atau belum ada sebarang surat rasmi',
          points: 5,
          tip: 'Segera sediakan surat serah hak bagi menjamin pemilikan institusi.',
        },
      ],
    },
  ];

  const [answers, setAnswers] = useState<Record<string, number>>({
    format: 20,
    authorship: 20,
    search: 0,
    license: 20,
    contract: 5,
  });

  const handleSelect = (questionId: string, points: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: points }));
  };

  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);

  const getStatus = (score: number) => {
    if (score >= 80) {
      return {
        zone: 'Zon Hijau: Tahap Pematuhan Tinggi',
        color: 'text-emerald-500',
        borderColor: 'border-emerald-500',
        bgColor: isDark ? 'bg-emerald-950/30' : 'bg-emerald-50',
        advice: 'Tahniah! Logo sekolah anda memenuhi piawaian Akta Hak Cipta 1987 dan mempunyai peluang amat cerah untuk didaftarkan di MyIPO tanpa isu liabiliti.',
      };
    }
    if (score >= 50) {
      return {
        zone: 'Zon Kuning: Berwaspada (Perlu Pembaikan)',
        color: 'text-amber-500',
        borderColor: 'border-amber-500',
        bgColor: isDark ? 'bg-amber-950/30' : 'bg-amber-50',
        advice: 'Terdapat beberapa kelemahan kritikal (cth: ketiadaan carian MyIPO atau fail vektor). Baiki aspek ini sebelum logo dirasmikan oleh pihak pentadbir.',
      };
    }
    return {
      zone: 'Zon Merah: Risiko Kritikal Liabiliti',
      color: 'text-rose-500',
      borderColor: 'border-rose-500',
      bgColor: isDark ? 'bg-rose-950/30' : 'bg-rose-50',
      advice: 'AMARAN: Menggunakan logo ini secara rasmi amat berisiko. Anda terdedah kepada isu hak cipta, imej cetakan pecah, dan penolakan pendaftaran MyIPO. Sila rujuk 7 Langkah Kumpulan 4 segera!',
    };
  };

  const status = getStatus(totalScore);

  const handleReset = () => {
    setAnswers({
      format: 20,
      authorship: 20,
      search: 20,
      license: 20,
      contract: 20,
    });
  };

  return (
    <section id="kalkulator-audit" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Alat Pengaudit Kendiri Interaktif
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Kalkulator & Pengaudit Risiko Logo AI Sekolah
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Jawab 5 soalan audit berikut untuk mengukur skor keselamatan perundangan logo institusi anda
            sebelum dihantar ke kilang cetakan atau didaftarkan di MyIPO.
          </p>
        </div>

        {/* Audit Tool Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 5 Questions */}
          <div className="lg:col-span-7 space-y-6">
            {questions.map((q) => {
              const currentPoints = answers[q.id];

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {q.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                    {q.subtitle}
                  </p>

                  <div className="space-y-2">
                    {q.options.map((opt, i) => {
                      const isSelected = currentPoints === opt.points;
                      return (
                        <button
                          key={i}
                          onClick={() => handleSelect(q.id, opt.points)}
                          className={`w-full p-3 rounded-xl border text-left text-xs transition-all cursor-pointer flex items-center justify-between gap-3 ${
                            isSelected
                              ? isDark
                                ? 'bg-emerald-950/60 border-emerald-500 text-white font-semibold'
                                : 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold'
                              : isDark
                              ? 'bg-slate-800/30 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                isSelected
                                  ? 'border-emerald-500 bg-emerald-500 text-white'
                                  : 'border-slate-400'
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </span>
                            <span>{opt.label}</span>
                          </div>
                          <span className="font-mono text-[11px] text-slate-400 shrink-0">
                            +{opt.points}%
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Score Gauge & Assessment Results */}
          <div className="lg:col-span-5 sticky top-24">
            <div
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isDark ? 'bg-slate-900/80 border-slate-800 shadow-xl' : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Keputusan Penilaian Kendiri
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs text-slate-500 hover:text-emerald-500 transition-colors flex items-center gap-1 cursor-pointer"
                  title="Tetapkan Semua Markah Maksimum"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Semak Semua</span>
                </button>
              </div>

              {/* Dynamic Animated Circular Score Indicator */}
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      className="stroke-slate-200 dark:stroke-slate-800"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke={
                        totalScore >= 80 ? '#10b981' : totalScore >= 50 ? '#f59e0b' : '#f43f5e'
                      }
                      strokeWidth="8"
                      strokeDasharray="264"
                      strokeDashoffset={264 - (264 * totalScore) / 100}
                      strokeLinecap="round"
                      fill="none"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white">
                      {totalScore}%
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-slate-400">
                      Skor Pematuhan
                    </span>
                  </div>
                </div>

                <div className={`mt-4 px-3 py-1 rounded-full text-xs font-bold ${status.color}`}>
                  {status.zone}
                </div>
              </div>

              {/* Advisory Output */}
              <div className={`p-4 rounded-xl border ${status.borderColor} ${status.bgColor} mt-4`}>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                  {status.advice}
                </p>
              </div>

              {/* Quick links to action */}
              <div className="mt-6 space-y-2">
                <a
                  href="#7-langkah"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Lihat 7 Langkah Penyelesaian</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={onOpenChat}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Konsultasi AI Mengenai Logo Anda</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
