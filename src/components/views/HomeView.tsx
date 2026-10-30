/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – TAMPILAN BERANDA UTAMA
 * Pengajar: Mister Jo
 */

import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Trophy,
  CheckCircle2,
  Atom,
  Flame,
  Wind,
  Layers,
  Gauge,
  Volume2,
  Play,
  RotateCcw,
} from 'lucide-react';
import { UserProgress } from '../../types';
import { MATERIAL_GROUPS } from '../../data/formulas';
import { calculateTotalStats } from '../../utils/storage';

interface HomeViewProps {
  progress: UserProgress;
  onStartQuiz: () => void;
  onNavigateTo: (view: any) => void;
  onNarratorWelcome: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  progress,
  onStartQuiz,
  onNavigateTo,
  onNarratorWelcome,
}) => {
  const stats = calculateTotalStats(progress);

  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-red-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-sky-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-rose-600" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <div className="space-y-10 py-4 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero Banner Merah Putih Fisika Jenius */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-rose-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl border-4 border-red-500/30">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-amber-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 border border-red-400/40 text-amber-200 text-xs sm:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-400" />
              IDENTITAS PENGAJAR: MISTER JO
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              FISIKA JENIUS – <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-rose-100 to-amber-300">
                TEORI KINETIK GAS
              </span>
            </h1>

            <p className="text-lg sm:text-2xl font-serif italic text-rose-200 font-medium">
              "Pahami Konsepnya, Kuasai Hitungannya, Taklukkan TKA-nya!"
            </p>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Aplikasi simulasi dan pembelajaran interaktif berstandar TKA Fisika SMA tingkat tinggi (HOTS).
              Dilengkapi <strong>tepat 30 soal penalaran numerik</strong>, stimulus wacana kompleks, grafik ilmiah presisi,
              serta bimbingan langsung suara pengajar <strong>Mister Jo</strong> dengan trik Cara Cepat dan pembahasan tuntas 7 langkah!
            </p>

            {/* Tombol Aksi */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onStartQuiz}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-red-500/40 transition-all active:scale-95 flex items-center gap-3 group"
              >
                <span>{stats.answeredCount > 0 ? 'Lanjutkan Latihan' : 'Mulai Latihan Sekarang'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onNarratorWelcome}
                className="px-5 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-amber-300 border border-amber-500/40 font-bold text-sm sm:text-base transition-all active:scale-95 flex items-center gap-2.5 shadow-md"
                title="Dengarkan Sambutan Mister Jo"
                aria-label="Dengarkan Sambutan Mister Jo"
              >
                <Volume2 className="w-5 h-5 text-amber-400" />
                <span>Sambutan Mister Jo</span>
              </button>
            </div>
          </div>

          {/* Kartu Ringkasan Progress Pengguna */}
          <div className="w-full lg:w-80 bg-slate-950/70 border-2 border-red-500/40 rounded-3xl p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-amber-400" />
                Progress Belajar Anda
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-red-900/60 text-red-300 font-bold">
                {stats.answeredCount}/30 Soal
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-slate-300 font-semibold mb-1">
                  <span>Kelengkapan Latihan</span>
                  <span className="font-mono text-amber-300 font-bold">
                    {Math.round((stats.answeredCount / 30) * 100)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-400 rounded-full transition-all duration-500"
                    style={{ width: `${(stats.answeredCount / 30) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Nilai Skala 100</span>
                  <span className="text-2xl font-extrabold text-amber-300 font-mono">
                    {stats.finalScore100}
                  </span>
                </div>
                <div className="bg-slate-900 p-3 rounded-2xl border border-slate-800 text-center">
                  <span className="text-[11px] text-slate-400 block">Akurasi Jawaban</span>
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                    {stats.accuracyPercent}%
                  </span>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
                <span>Jawaban Benar: <strong className="text-emerald-400">{stats.correctCount}</strong></span>
                <span>Salah: <strong className="text-rose-400">{stats.wrongCount}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Tipe Soal Berstandar TKA */}
      <section className="space-y-4">
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Distribusi 3 Tipe Soal Ujian TKA
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Soal tersebar merata secara harmonis dengan perbandingan tepat 10 : 10 : 10
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border-2 border-red-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-700 font-extrabold text-xl mb-4">
              10
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pilihan Ganda (PG)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lima pilihan jawaban (A, B, C, D, E) dengan distraktor penalaran yang kuat untuk menguji ketelitian substitusi numerik.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-amber-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-700 font-extrabold text-xl mb-4">
              10
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pilihan Ganda Kompleks (PGK)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Memilih seluruh pernyataan yang benar dari 5 opsi analisis fisis yang saling terkait tanpa pola tebakan sembarangan.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-emerald-100 shadow-md hover:shadow-xl transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-extrabold text-xl mb-4">
              10
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Benar-Salah (BS)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Tepat tiga pernyataan penalaran numerik mendalam yang masing-masing harus diuji keabsahannya secara saintifik.
            </p>
          </div>
        </div>
      </section>

      {/* 7 Kelompok Materi Teori Kinetik Gas */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Peta 7 Kelompok Materi Pembelajaran
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Cakupan lengkap kurikulum Teori Kinetik Gas tanpa ada materi yang terlewat
            </p>
          </div>

          <button
            onClick={() => onNavigateTo('map')}
            className="text-red-700 hover:text-red-800 font-bold text-sm inline-flex items-center gap-1.5 self-start"
          >
            Lihat Peta Lengkap
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MATERIAL_GROUPS.map((g) => (
            <div
              key={g.id}
              className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm hover:border-red-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-2xl bg-red-50">{getGroupIcon(g.iconName)}</div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                    {g.totalQuestions} Soal HOTS
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{g.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{g.description}</p>
              </div>

              <button
                onClick={() => onNavigateTo('formulas')}
                className="text-xs font-semibold text-red-600 hover:text-red-700 pt-3 border-t border-slate-100 flex items-center justify-between"
              >
                <span>Pelajari Rumus Kunci</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
