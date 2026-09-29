import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Trash2,
  Copy,
  Check,
  Minimize2,
  Maximize2,
  HelpCircle,
  ShieldCheck,
  Key,
} from 'lucide-react';
import { CHATBOT_KNOWLEDGE_BASE } from '../data/ipContent';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const AiChatbot: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}> = ({ isOpen, onClose, isDark }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: `Salam sejahtera! Saya ialah **Pembantu Pintar Harta Intelek Kumpulan 4**.\n\nAnda boleh bertanyakan apa sahaja berkaitan undang-undang hak cipta logo sekolah, pendaftaran MyIPO, risiko liabiliti, atau panduan reka bentuk hibrid secara **100% percuma tanpa sebarang API**!\n\nPilih soalan lazim di bawah atau taip soalan anda.`,
      timestamp: 'Baru sahaja',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const quickQuestions = [
    'Boleh daftar MyIPO tak?',
    'Apa beza Kelas 41, 25 & 16?',
    'Kenapa fail raster bahaya?',
    'Perlukah letak kredit AI?',
    'Contoh surat serah hak',
    'Cadangan prompt selamat',
  ];

  // Natural language query processor for zero-API engine
  const findBestAnswer = (query: string): string => {
    const qLower = query.toLowerCase().trim();

    // Check specific prompt generator request
    if (qLower.includes('prompt') || qLower.includes('arahan') || qLower.includes('contoh prompt')) {
      return `🎨 **Cadangan Formula Prompt Selamat untuk Logo Sekolah:**\n\nUntuk mengelakkan plagiarisme dan persamaan tidak sengaja, gunakan formula berstruktur ini di dalam Midjourney / Canva / Adobe Firefly:\n\n\`"Minimalist educational school emblem vector concept, featuring an open book and glowing torch of knowledge, clean geometric shield, vibrant emerald green and navy blue, flat vector style, white background, no text, no letters, no copyrighted symbols --no 3d render, realistic photo, gradients"\`\n\n💡 **Peringatan Kumpulan 4:** Gunakan output ini semata-mata sebagai papan idea (mood board), kemudian minta pereka grafik melukis semula dalam Adobe Illustrator!`;
    }

    if (qLower.includes('saman') || qLower.includes('mahkamah') || qLower.includes('liabiliti')) {
      return `⚖️ **Risiko Saman Mahkamah & Liabiliti Sekolah:**\n\n1. Di bawah undang-undang harta intelek, ketidaktahuan (*ignorance of the law*) **bukanlah suatu pembelaan sah**. Sekiranya AI menjana elemen yang mirip logo syarikat atau sekolah lain, pihak pemilik asal boleh menuntut pampasan ganti rugi terhadap sekolah yang menggunakan tanda tersebut.\n2. Inilah sebabnya langkah **Carian Imej Terbalik (Reverse Image Search)** dan **Carian Pangkalan Data MyIPO** sebelum pelancaran logo adalah wajib!`;
    }

    if (qLower.includes('pibg') || qLower.includes('kpm') || qLower.includes('jpn') || qLower.includes('pengetua')) {
      return `🏫 **Prosedur Kelulusan Sekolah & KPM:**\n\n- Mengikut tatakelola pendidikan di Malaysia, pertukaran identiti atau lencana sekolah kerajaan/bantuan kerajaan hendaklah dibentangkan dalam **Mesyuarat Pengurusan Sekolah** dan dimaklumkan kepada **PIBG**.\n- Sekiranya melibatkan pertukaran rasmi lencana sekolah, kertas kerja pengesahan perlu diajukan kepada **PPD/JPN** untuk rekod rasmi bahagian pendaftar sekolah.`;
    }

    // Scan knowledge base
    for (const item of CHATBOT_KNOWLEDGE_BASE) {
      for (const trigger of item.triggers) {
        if (qLower.includes(trigger)) {
          return item.answer;
        }
      }
    }

    // Default intelligent synthesized answer
    return `Terima kasih atas soalan anda mengenai: *"${query}"*.\n\nBerdasarkan panduan **Kumpulan 4** dan kerangka **Akta Hak Cipta 1987 & Akta Cap Dagangan 2019**:\n\n1. **Karya janaan AI mentah** mempunyai kelemahan ketara dari sudut keunikan eksklusif dan ketiadaan perlindungan hak cipta pengarang manusia.\n2. **Pendaftaran di MyIPO** membenarkan pendaftaran tanda (logo) asalkan ia unik, tidak mengelirukan, dan tidak menggunakan lambang larangan (Jata Negeri/Diraja).\n3. **Pendekatan Hibrid** adalah kunci utama: gunakan AI hanya untuk penjanaan konsep awal, kemudian minta pereka lukis semula dalam vektor.\n\nCuba tanya mengenai: *'Kelas 41'*, *'Perjanjian serah hak'*, atau *'Risiko fail raster'* untuk maklumat terperinci!`;
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate smart thinking delay
    setTimeout(() => {
      const responseText = findBestAnswer(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome_reset',
        sender: 'bot',
        text: 'Perbualan telah diset semula. Sedia membantu anda dengan sebarang persoalan logo AI & MyIPO!',
        timestamp: 'Baru sahaja',
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ${
        isExpanded
          ? 'inset-3 sm:inset-6 md:inset-10'
          : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[94vw] sm:w-[420px] h-[600px] max-h-[85vh]'
      }`}
    >
      <div
        className={`w-full h-full rounded-2xl border shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl transition-colors ${
          isDark
            ? 'bg-slate-950/95 border-emerald-900/60 text-slate-100 shadow-emerald-950/60'
            : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/60'
        }`}
      >
        {/* Header */}
        <div
          className={`px-4 py-3 border-b flex items-center justify-between shrink-0 ${
            isDark
              ? 'bg-emerald-950/40 border-emerald-900/40'
              : 'bg-emerald-50/80 border-emerald-100'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xs sm:text-sm font-bold tracking-tight">
                  Tanya AI Harta Intelek
                </h3>
                <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
                  Percuma / Tiada API
                </span>
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Pangkalan Pengetahuan Kumpulan 4 & MyIPO
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <button
              onClick={clearChat}
              title="Kosongkan Perbualan"
              className="p-1.5 hover:text-rose-500 transition-colors rounded-lg cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              title={isExpanded ? 'Kecilkan' : 'Besarkan'}
              className="p-1.5 hover:text-emerald-500 transition-colors rounded-lg cursor-pointer hidden sm:block"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              title="Tutup Chat"
              className="p-1.5 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                {isBot && (
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 relative group ${
                    isBot
                      ? isDark
                        ? 'bg-slate-900 border border-slate-800 text-slate-200'
                        : 'bg-slate-100/90 text-slate-800'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {/* Content with basic formatting */}
                  <div className="whitespace-pre-wrap leading-relaxed space-y-2">
                    {msg.text.split('\n').map((line, i) => {
                      if (line.startsWith('### ')) {
                        return (
                          <div key={i} className="font-bold text-sm text-emerald-400 mt-2">
                            {line.replace('### ', '')}
                          </div>
                        );
                      }
                      if (line.startsWith('`"') && line.endsWith('"`')) {
                        return (
                          <pre
                            key={i}
                            className="p-2.5 rounded-lg bg-slate-950 text-emerald-300 font-mono text-[11px] whitespace-pre-wrap overflow-x-auto border border-emerald-900/60"
                          >
                            {line.slice(1, -1)}
                          </pre>
                        );
                      }
                      return (
                        <p key={i}>
                          {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Message footer */}
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-black/10 dark:border-white/10 text-[10px] opacity-70">
                    <span>{msg.timestamp}</span>
                    {isBot && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer"
                        title="Salin Teks"
                      >
                        {isCopied === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span>Tersalin</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Salin</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {!isBot && (
                  <div className="w-6 h-6 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex gap-2.5 items-center text-slate-400 text-xs">
              <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-150" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse delay-300" />
                <span className="text-[11px] font-medium ml-1">Menyemak fakta PDF & MyIPO...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 py-2 border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 overflow-x-auto shrink-0 flex items-center gap-1.5 no-scrollbar">
          <span className="text-[10px] uppercase font-bold text-slate-400 whitespace-nowrap pl-1">
            Cadangan:
          </span>
          {quickQuestions.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-full border whitespace-nowrap transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-900'
              }`}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tanya soalan tentang logo AI sekolah, MyIPO..."
              className={`flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500'
                  : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
              }`}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`p-2 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                isDark
                  ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Hantar</span>
            </button>
          </form>
          <div className="text-[10px] text-center text-slate-400 mt-2">
            AI berasaskan pangkalan data PDF & Akta Perundangan Malaysia. Tiada sambungan API diperlukan.
          </div>
        </div>
      </div>
    </div>
  );
};
