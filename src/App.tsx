import React, { useState, useEffect } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { DoodleBackground } from './components/DoodleBackground';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SuitabilityComparison } from './components/SuitabilityComparison';
import { CopyrightLegalSection } from './components/CopyrightLegalSection';
import { TrademarkClassVisualizer } from './components/TrademarkClassVisualizer';
import { RisksMatrix } from './components/RisksMatrix';
import { AttributionGuide } from './components/AttributionGuide';
import { RiskAuditor } from './components/RiskAuditor';
import { StepPipeline } from './components/StepPipeline';
import { AiChatbot } from './components/AiChatbot';
import { Group4Modal } from './components/Group4Modal';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme-mode');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('pengenalan');

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  }, [isDark]);

  // Track active section on scroll for nav link highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['kesesuaian', 'hak-cipta', 'risiko', 'kalkulator-audit', '7-langkah'];
      const scrollY = window.scrollY + 200;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToAudit = () => {
    const el = document.getElementById('kalkulator-audit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-300 ${
        isDark ? 'bg-[#081816] text-slate-100' : 'bg-[#fcfdfd] text-slate-900'
      }`}
    >
      {/* Interactive Floating Animated Doodle Background Effect */}
      <DoodleBackground isDark={isDark} />

      {/* Relative content layer above doodles */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Top Bar adhering to Top Bar Contract */}
        <Header
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
          onOpenGroupModal={() => setIsGroupModalOpen(true)}
          onOpenChat={() => setIsChatOpen(true)}
          activeSection={activeSection}
        />

        {/* Main Content Sections corresponding to all 7 pages */}
        <main className="flex-1">
          {/* Muka Surat 1: Pengenalan & 4 Soalan Utama */}
          <HeroSection
            isDark={isDark}
            onSelectAudit={scrollToAudit}
            onOpenChat={() => setIsChatOpen(true)}
          />

          {/* Muka Surat 2: Sesuaikah Guna AI? (Alat Bantu vs Mentah) */}
          <SuitabilityComparison isDark={isDark} />

          {/* Muka Surat 3: Hak Cipta: Isu Utama (Akta Hak Cipta 1987) */}
          <CopyrightLegalSection isDark={isDark} />

          {/* Muka Surat 4: Cap Dagangan: Perlindungan Praktikal (Akta Cap Dagangan 2019 & MyIPO) */}
          <TrademarkClassVisualizer isDark={isDark} />

          {/* Muka Surat 5: 6 Risiko Utama & Matriks Carta Visual Dinamik Kumpulan 4 */}
          <RisksMatrix isDark={isDark} />

          {/* Muka Surat 6: Perlukah Atribusi? & Semakan Terma Platform */}
          <AttributionGuide isDark={isDark} />

          {/* Pengaudit & Kalkulator Risiko Interaktif (Khas Institusi & Guru) */}
          <RiskAuditor isDark={isDark} onOpenChat={() => setIsChatOpen(true)} />

          {/* Muka Surat 7: 7 Langkah Garis Panduan Praktikal & Pelan Tindakan */}
          <StepPipeline isDark={isDark} />
        </main>

        {/* Footer with Group 4 & MyIPO legal references */}
        <Footer
          isDark={isDark}
          onOpenGroupModal={() => setIsGroupModalOpen(true)}
        />
      </div>

      {/* Floating Chat Trigger Button (Zero API AI Chatbot) */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          aria-label="Buka Chatbot AI Percuma"
          className="fixed bottom-5 right-5 z-40 p-3.5 sm:px-4 sm:py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/50 flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ring-2 ring-emerald-400/40"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-tight hidden sm:inline">
            Tanya AI Harta Intelek
          </span>
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-700/80 text-emerald-200 hidden md:inline">
            Percuma
          </span>
        </button>
      )}

      {/* AI Chatbot Window (Free Without API) */}
      <AiChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        isDark={isDark}
      />

      {/* Kumpulan 4 Modal Info */}
      <Group4Modal
        isOpen={isGroupModalOpen}
        onClose={() => setIsGroupModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
