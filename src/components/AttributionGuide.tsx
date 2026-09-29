import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, AlertCircle, FileCheck, Shield, ExternalLink } from 'lucide-react';
import { IP_DATA } from '../data/ipContent';

export const AttributionGuide: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('canva');
  const { title, coreRule, rules } = IP_DATA.attribution;

  const platforms = [
    {
      id: 'canva',
      name: 'Canva Magic Studio',
      commercialUse: 'Dibenarkan (Pro & Percuma dengan syarat)',
      attributionRequired: 'Tidak wajib untuk rekaan akhir',
      notes: 'Elemen berbayar/Pro memerlukan langganan sah. Lesen fon & grafik stok Canva tertakluk kepada Content License Agreement.',
      status: 'Selamat untuk Konsep Sekolah',
    },
    {
      id: 'firefly',
      name: 'Adobe Firefly',
      commercialUse: 'Dibenarkan (Pelan komersial)',
      attributionRequired: 'Tidak wajib',
      notes: 'Dilatih secara eksklusif menggunakan Adobe Stock bebas royalti dan kandungan domain awam. Mempunyai ganti rugi liabiliti (indemnification) untuk pengguna enterprise.',
      status: 'Paling Selamat di Pasaran',
    },
    {
      id: 'midjourney',
      name: 'Midjourney',
      commercialUse: 'Hanya untuk Pelan Berbayar (Standard / Pro)',
      attributionRequired: 'Tidak wajib di bawah pelan berbayar',
      notes: 'Pengguna percuma (lama) atau tanpa langganan aktif tidak memiliki hak komersial. Output adalah terbuka (public) secara lalai melainkan melanggan pelan Pro/Stealth.',
      status: 'Perlu Langganan Berbayar',
    },
    {
      id: 'bing',
      name: 'Microsoft Designer / Bing',
      commercialUse: 'Penggunaan Peribadi / Bukan Komersial sahaja',
      attributionRequired: 'Tidak rasmi untuk institusi',
      notes: 'Terma perkhidmatan Microsoft menyatakan imej janaan DALL-E percuma adalah untuk "Personal, non-commercial use". Kurang sesuai untuk logo rasmi berdaftar.',
      status: 'Berisiko untuk Logo Institusi',
    },
  ];

  const currentPlatform = platforms.find((p) => p.id === selectedPlatform) || platforms[0];

  return (
    <section id="atribusi" className="py-16 md:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            Muka Surat 6: Integriti & Etika
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kekeliruan paling lazim dalam kalangan warga pendidik: adakah sekolah wajib meletakkan tanda
            "Dijana oleh AI" pada bendera atau lencana sekolah?
          </p>
        </div>

        {/* Core Law Rule Callout Banner */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
            isDark
              ? 'bg-emerald-950/30 border-emerald-800/50'
              : 'bg-emerald-50/80 border-emerald-200'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
              <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                Ketetapan Perundangan Malaysia
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {coreRule}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                Tidak ada mana-mana seksyen dalam Akta Hak Cipta 1987 yang mendenda atau mewajibkan pengguna mencetak nama enjin AI pada pakaian seragam atau dokumen rasmi.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Practical Caveats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {rules.map((rule) => (
            <div
              key={rule.number}
              className={`p-6 rounded-2xl border transition-all ${
                isDark
                  ? 'bg-slate-900/50 border-slate-800'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs flex items-center justify-center mb-4">
                0{rule.number}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {rule.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Platform Terms Comparison */}
        <div
          className={`rounded-2xl p-6 sm:p-8 border ${
            isDark
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white border-slate-200 shadow-md'
          }`}
        >
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              Panduan Praktikal Platform
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Status Lesen & Atribusi Mengikut Alat AI Popular
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Ketahui syarat lesen sebelum sekolah anda memuat turun konsep daripada platform berikut:
            </p>
          </div>

          {/* Platform Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-6">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                  selectedPlatform === p.id
                    ? isDark
                      ? 'bg-emerald-950/60 border-emerald-500 text-white ring-1 ring-emerald-500/30'
                      : 'bg-emerald-50 border-emerald-600 text-emerald-950 ring-1 ring-emerald-500/30'
                    : isDark
                    ? 'bg-slate-800/40 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          {/* Selected Platform Details */}
          <div className="grid sm:grid-cols-3 gap-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                Kebenaran Komersial
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {currentPlatform.commercialUse}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                Kewajipan Atribusi
              </span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                {currentPlatform.attributionRequired}
              </span>
            </div>

            <div>
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                Status Keselamatan
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {currentPlatform.status}
              </span>
            </div>

            <div className="sm:col-span-3 pt-3 border-t border-slate-200/60 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase block mb-1">
                Catatan Penting untuk Sekolah:
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentPlatform.notes}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
