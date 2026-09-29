import React from 'react';
import { Sun, Moon, Users, Sparkles, MessageSquare } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenGroupModal: () => void;
  onOpenChat: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleTheme,
  onOpenGroupModal,
  onOpenChat,
  activeSection,
}) => {
  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950/85 border-emerald-950/50 text-slate-100'
          : 'bg-white/85 border-slate-200/80 text-slate-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#pengenalan"
          className="font-display text-lg sm:text-xl font-bold tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
          <span className={isDark ? 'text-white' : 'text-slate-900'}>
            Harta Intelek <span className="text-emerald-500">Logo AI</span>
          </span>
        </a>

        {/* Zone 2: Clean 4-5 text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#kesesuaian"
            className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${
              activeSection === 'kesesuaian' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''
            }`}
          >
            Kesesuaian AI
          </a>
          <a
            href="#hak-cipta"
            className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${
              activeSection === 'hak-cipta' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''
            }`}
          >
            Hak Cipta & MyIPO
          </a>
          <a
            href="#risiko"
            className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${
              activeSection === 'risiko' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''
            }`}
          >
            6 Risiko Utama
          </a>
          <a
            href="#kalkulator-audit"
            className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${
              activeSection === 'kalkulator-audit' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''
            }`}
          >
            Kalkulator Risiko
          </a>
          <a
            href="#7-langkah"
            className={`transition-colors hover:text-emerald-600 dark:hover:text-emerald-400 whitespace-nowrap ${
              activeSection === '7-langkah' ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : ''
            }`}
          >
            7 Langkah Panduan
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          {/* Chatbot Trigger */}
          <button
            onClick={onOpenChat}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all shadow-xs cursor-pointer whitespace-nowrap ${
              isDark
                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-950/40'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200'
            }`}
            title="Tanya AI Percuma Tanpa API"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tanya AI</span>
            <span className="sm:hidden">AI</span>
          </button>

          {/* Group 4 Button */}
          <button
            onClick={onOpenGroupModal}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
              isDark
                ? 'border-emerald-900/60 bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40'
                : 'border-emerald-200 bg-emerald-50/70 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Kumpulan 4</span>
          </button>

          {/* Dark / Light Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Tukar Mod Paparan"
            className={`p-2 rounded-lg border transition-colors cursor-pointer ${
              isDark
                ? 'border-slate-800 bg-slate-900 text-amber-300 hover:bg-slate-800'
                : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
};
