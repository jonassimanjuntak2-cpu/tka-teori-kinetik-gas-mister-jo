/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – PENGATURAN APLIKASI
 * Pengajar: Mister Jo
 */

import React from 'react';
import {
  Settings,
  Volume2,
  VolumeX,
  Type,
  RotateCcw,
  Trash2,
  HardDrive,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { TextSizeSetting, UserProgress } from '../../types';

interface SettingsViewProps {
  progress: UserProgress;
  onUpdateTextSize: (size: TextSizeSetting) => void;
  onUpdateTtsRate: (rate: number) => void;
  onToggleTts: () => void;
  onRequestReset: () => void;
  onTestVoice: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  progress,
  onUpdateTextSize,
  onUpdateTtsRate,
  onToggleTts,
  onRequestReset,
  onTestVoice,
}) => {
  return (
    <div className="space-y-8 py-4 max-w-4xl mx-auto px-4 sm:px-6">
      {/* Header Pengaturan */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <Settings className="w-4 h-4" />
            PREFERENSI SISTEM
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Pengaturan Aplikasi
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Sesuaikan kenyamanan belajar Anda: ukuran tulisan, kecepatan narator audio Mister Jo, dan pengelolaan data progres offline.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
        {/* 1. Pengaturan Narator Audio */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <Volume2 className="w-5 h-5 text-red-600" />
            <span>Pengaturan Suara Narator Mister Jo</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Toggle Suara Aktif/Mute */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-sm text-slate-900 block">Status Narator Suara</span>
                <span className="text-xs text-slate-500">Aktifkan atau matikan suara Mister Jo</span>
              </div>
              <button
                onClick={onToggleTts}
                className={`p-3 rounded-2xl transition-all border ${
                  progress.ttsEnabled
                    ? 'bg-red-700 text-white border-red-700 shadow-md'
                    : 'bg-slate-200 text-slate-500 border-slate-300'
                }`}
                aria-label={progress.ttsEnabled ? 'Matikan Suara' : 'Aktifkan Suara'}
              >
                {progress.ttsEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
              </button>
            </div>

            {/* Kecepatan Narator */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="font-bold text-sm text-slate-900 block">Kecepatan Bicara (Speed Rate)</span>
              <div className="flex items-center gap-2">
                {[0.8, 1.0, 1.25, 1.5].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => onUpdateTtsRate(rate)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all border ${
                      progress.ttsRate === rate
                        ? 'bg-red-700 text-white border-red-700 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {rate}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onTestVoice}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 font-bold text-xs transition-all flex items-center gap-2 shadow-sm active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Uji Coba Suara Narator Mister Jo Sekarang</span>
            </button>
          </div>
        </section>

        {/* 2. Ukuran Tulisan (Font Size) */}
        <section className="space-y-4">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <Type className="w-5 h-5 text-red-600" />
            <span>Pengaturan Ukuran Tulisan Soal & Stimulus</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Aplikasi dirancang dengan font besar standar TKA. Anda dapat memperbesar tampilan teks agar lebih nyaman dibaca di tablet atau layar monitor:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'normal' as TextSizeSetting, label: 'Standar Besar (Bawaan)', desc: 'Ukuran ideal laptop & HP' },
              { id: 'besar' as TextSizeSetting, label: 'Lebih Besar (+2px)', desc: 'Teks soal & rumus ekstra jelas' },
              { id: 'ekstra-besar' as TextSizeSetting, label: 'Ekstra Besar (+4px)', desc: 'Maksimal keterbacaan' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => onUpdateTextSize(s.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  progress.textSize === s.id
                    ? 'border-red-600 bg-red-50/60 shadow-sm ring-1 ring-red-500'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <span className="font-extrabold text-sm text-slate-900 block">{s.label}</span>
                <span className="text-xs text-slate-500 mt-1 block">{s.desc}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 3. Penyimpanan Offline & Reset */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2.5 pb-2 border-b border-slate-100">
            <HardDrive className="w-5 h-5 text-red-600" />
            <span>Penyimpanan Progress Offline (LocalStorage)</span>
          </h2>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">Penyimpanan Otomatis Aktif</span>
              <p className="text-emerald-900/90 leading-relaxed">
                Setiap kali Anda menjawab soal, progress akan tersimpan seketika di peramban Anda secara offline tanpa memerlukan koneksi internet. Halaman aman di-refresh kapan pun tanpa kehilangan data.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={onRequestReset}
              className="px-6 py-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-extrabold text-sm border-2 border-rose-200 transition-all flex items-center gap-2 active:scale-95 shadow-sm"
            >
              <Trash2 className="w-4 h-4 text-rose-600" />
              <span>RESET SELURUH PROGRESS LATIHAN</span>
            </button>
            <span className="text-[11px] text-slate-500 block mt-1.5 ml-1">
              * Tombol ini akan memunculkan dialog konfirmasi sebelum menghapus riwayat jawaban Anda.
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
