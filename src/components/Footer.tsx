import React from 'react';
import { ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

export const Footer: React.FC<{
  isDark: boolean;
  onOpenGroupModal: () => void;
}> = ({ isDark, onOpenGroupModal }) => {
  return (
    <footer
      className={`border-t transition-colors ${
        isDark
          ? 'bg-slate-950 border-emerald-950/40 text-slate-400'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-3">
            <div className="font-display text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Isu Harta Intelek: Logo Sekolah Dijana AI</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-md">
              Inisiatif pendidikan dan kesedaran harta intelek untuk membantu institusi pendidikan Malaysia memanfaatkan teknologi kecerdasan buatan secara bertanggungjawab dan beretika.
            </p>
            <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Diciptakan oleh Kumpulan 4
            </div>
          </div>

          {/* Quick Legal Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Pautan Rasmi
            </div>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="https://www.myipo.gov.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
                >
                  <span>Portal Rasmi MyIPO</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://iponline2u.myipo.gov.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
                >
                  <span>Carian Cap Dagangan IP Online</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.moe.gov.my/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
                >
                  <span>Kementerian Pendidikan Malaysia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Disclaimer */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
              Penafian Undang-Undang
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
              Kandungan aplikasi ini adalah bagi tujuan maklumat dan kesedaran umum semata-mata, bukan merupakan nasihat perundangan formal. Sila rujuk MyIPO atau pengamal undang-undang harta intelek bertauliah.
            </p>
          </div>
        </div>

        {/* Quiet Bottom Strip */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <div>
            © {new Date().getFullYear()} Isu Harta Intelek: Logo Sekolah Dijana AI · Diciptakan oleh Kumpulan 4
          </div>
          <button
            onClick={onOpenGroupModal}
            className="hover:text-emerald-500 transition-colors cursor-pointer"
          >
            Maklumat Kumpulan 4
          </button>
        </div>
      </div>
    </footer>
  );
};
