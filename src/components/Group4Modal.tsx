import React from 'react';
import { X, Users, Award, ShieldCheck, BookOpen, ExternalLink, Heart } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

export const Group4Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}> = ({ isOpen, onClose, isDark }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div
        className={`w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden transition-all ${
          isDark
            ? 'bg-slate-900 border-emerald-900/60 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">Tentang Kumpulan 4</h3>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Penyelidikan Harta Intelek & Kecerdasan Buatan
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            Aplikasi interaktif ini dibangunkan oleh <strong>Kumpulan 4</strong> sebagai projek advokasi dan perkongsian ilmu untuk mendepani gelombang penggunaan AI generatif dalam institusi pendidikan di Malaysia.
          </p>

          <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 space-y-2">
            <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Objektif Penyelidikan Kumpulan 4:</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 list-disc list-inside">
              <li>Menganalisis jurang antara Akta Hak Cipta 1987 dan output komputer AI.</li>
              <li>Menjelaskan prosedur pendaftaran Cap Dagangan MyIPO bagi Kelas 41, 25, dan 16.</li>
              <li>Menghasilkan garis panduan hibrid 7 langkah yang praktikal untuk sekolah.</li>
              <li>Mencegah risiko pembaziran dana sekolah akibat pelanggaran hak cipta.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
            <span className="font-bold text-slate-900 dark:text-white block">Rujukan Dokumen Sumber:</span>
            <p className="text-slate-500 dark:text-slate-400">
              Berdasarkan pembentangan rasmi <em>"Isu Harta Intelek: Logo Sekolah Dijana AI - Sesuaikah? Boleh didaftarkan? Apa risikonya? Perlukah atribusi?"</em>
            </p>
          </div>

          <div className="text-xs text-slate-400 italic pt-2">
            Penafian: Maklumat ini adalah untuk tujuan pendidikan sahaja dan bukan merupakan nasihat perundangan formal. Sila rujuk MyIPO atau peguam bertauliah bagi hal ehwal pendaftaran rasmi.
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950/80 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
