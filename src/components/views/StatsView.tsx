/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – STATISTIK BELAJAR & EVALUASI KEMAMPUAN
 * Pengajar: Mister Jo
 */

import React from 'react';
import {
  BarChart3,
  Trophy,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  Sparkles,
  TrendingUp,
  Award,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import { UserProgress } from '../../types';
import { MATERIAL_GROUPS } from '../../data/formulas';
import { ALL_QUESTIONS } from '../../data/questions';
import { calculateTotalStats } from '../../utils/storage';

interface StatsViewProps {
  progress: UserProgress;
  onSpeakStats: (text: string) => void;
  onNavigateToQuiz: () => void;
}

export const StatsView: React.FC<StatsViewProps> = ({
  progress,
  onSpeakStats,
  onNavigateToQuiz,
}) => {
  const stats = calculateTotalStats(progress);

  // Analisis per kelompok materi
  const groupStats = MATERIAL_GROUPS.map((g) => {
    const qInGroup = ALL_QUESTIONS.filter((q) => q.groupId === g.id);
    const answered = qInGroup.filter((q) => progress.answers[q.id]?.answered).length;
    const correct = qInGroup.filter((q) => progress.answers[q.id]?.isCorrect).length;
    const percent = Math.round((correct / g.totalQuestions) * 100);
    return {
      ...g,
      answered,
      correct,
      percent,
      isMastered: percent >= 75,
    };
  });

  const masteredGroups = groupStats.filter((g) => g.isMastered);
  const needImprovementGroups = groupStats.filter((g) => !g.isMastered);

  // Penentuan Tingkat Kompetensi
  let competencyLevel = 'Pemula (Tahap Awal)';
  let badgeColor = 'bg-slate-100 text-slate-800 border-slate-300';
  let motivationMessage =
    'Perjalanan ribuan mil dimulai dari langkah pertama! Kerjakan lebih banyak soal agar penalaran fisika Anda makin tajam bersama Mister Jo.';

  if (stats.finalScore100 >= 85) {
    competencyLevel = 'Master Fisika Jenius (Sangat Mahir)';
    badgeColor = 'bg-amber-100 text-amber-900 border-amber-300 ring-2 ring-amber-400';
    motivationMessage =
      'Luar biasa istimewa! Penguasaan konsep dan ketelitian hitungan Teori Kinetik Gas Anda berada di level puncak. Anda siap 100% menaklukkan TKA Fisika!';
  } else if (stats.finalScore100 >= 70) {
    competencyLevel = 'Mahir (Kemampuan Tinggi)';
    badgeColor = 'bg-emerald-100 text-emerald-900 border-emerald-300';
    motivationMessage =
      'Bagus sekali! Pemahaman konsep dasar Anda sangat kokoh. Tingkatkan sedikit lagi ketelitian pada variasi soal gas bocor dan derajat kebebasan!';
  } else if (stats.finalScore100 >= 50) {
    competencyLevel = 'Menengah (Berkembang Baik)';
    badgeColor = 'bg-blue-100 text-blue-900 border-blue-300';
    motivationMessage =
      'Capaian yang baik! Anda sudah memahami pola umum gas ideal. Pelajari kembali bagian "Cara Cepat Mister Jo" untuk mempercepat waktu pengerjaan.';
  }

  const audioSummaryText = `Halo Pejuang TKA! Mister Jo sudah mengevaluasi hasil belajarmu. Dari 30 soal, kamu telah menyelesaikan ${stats.answeredCount} soal dengan nilai akhir ${stats.finalScore100} skala seratus. Tingkat kemampuanmu saat ini adalah ${competencyLevel}. ${motivationMessage}`;

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header Statistik */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <BarChart3 className="w-4 h-4" />
            RAPOR & EVALUASI BELAJAR
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Statistik Capaian Teori Kinetik Gas
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Pantau ketelitian numerik, akurasi penalaran, dan peta kekuatan materi Anda untuk persiapan TKA Fisika yang optimal.
          </p>
        </div>

        <button
          onClick={() => onSpeakStats(audioSummaryText)}
          className="flex-shrink-0 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center gap-2"
          aria-label="Dengarkan Evaluasi Mister Jo"
        >
          <Volume2 className="w-5 h-5" />
          <span>Evaluasi Mister Jo</span>
        </button>
      </div>

      {/* 4 Kartu Metrik Utama */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Skor Akhir */}
        <div className="bg-white p-5 rounded-3xl border-2 border-amber-200 shadow-sm text-center space-y-1">
          <Trophy className="w-6 h-6 text-amber-500 mx-auto mb-1" />
          <span className="text-xs uppercase font-extrabold text-slate-400 block tracking-wider">
            Nilai Akhir (0 - 100)
          </span>
          <span className="text-3xl sm:text-4xl font-black text-amber-600 font-mono">
            {stats.finalScore100}
          </span>
          <span className="text-[11px] text-slate-500 block">Bobot Transparan</span>
        </div>

        {/* Akurasi */}
        <div className="bg-white p-5 rounded-3xl border-2 border-emerald-200 shadow-sm text-center space-y-1">
          <TrendingUp className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
          <span className="text-xs uppercase font-extrabold text-slate-400 block tracking-wider">
            Akurasi Jawaban
          </span>
          <span className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
            {stats.accuracyPercent}%
          </span>
          <span className="text-[11px] text-slate-500 block">Dari Soal Terjawab</span>
        </div>

        {/* Jawaban Benar */}
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm text-center space-y-1">
          <CheckCircle2 className="w-6 h-6 text-emerald-500 mx-auto mb-1" />
          <span className="text-xs uppercase font-extrabold text-slate-400 block tracking-wider">
            Benar Penuh
          </span>
          <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
            {stats.correctCount}
          </span>
          <span className="text-[11px] text-slate-500 block">Soal Tepat</span>
        </div>

        {/* Jawaban Salah / Evaluasi */}
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-sm text-center space-y-1">
          <XCircle className="w-6 h-6 text-rose-500 mx-auto mb-1" />
          <span className="text-xs uppercase font-extrabold text-slate-400 block tracking-wider">
            Perlu Perbaikan
          </span>
          <span className="text-3xl sm:text-4xl font-black text-rose-600 font-mono">
            {stats.wrongCount}
          </span>
          <span className="text-[11px] text-slate-500 block">Jawaban Keliru</span>
        </div>
      </div>

      {/* Rapor Penilaian Kompetensi Siswa */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Tingkat Kompetensi Teori Kinetik Gas
            </span>
            <h2 className="text-2xl font-black text-slate-900 mt-0.5">
              Status Kemampuan Siswa
            </h2>
          </div>

          <span className={`px-4 py-2 rounded-2xl font-black text-sm border self-start ${badgeColor}`}>
            {competencyLevel}
          </span>
        </div>

        {/* Pesan Motivasi Mister Jo */}
        <div className="bg-red-50/80 p-5 rounded-2xl border border-red-200/80 flex items-start gap-3">
          <div className="text-2xl select-none mt-0.5">👨‍🏫</div>
          <div className="space-y-1">
            <h3 className="font-extrabold text-sm text-red-950">Catatan Motivasi Mister Jo:</h3>
            <p className="text-xs sm:text-sm text-red-900 leading-relaxed font-medium">
              "{motivationMessage}"
            </p>
          </div>
        </div>
      </div>

      {/* Analisis Detail Per Kelompok Materi */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Capaian 7 Kelompok Materi Teori Kinetik Gas
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Detail penguasaan per submateri untuk mengetahui titik kekuatan dan kelemahan Anda
          </p>
        </div>

        <div className="space-y-4">
          {groupStats.map((g) => (
            <div key={g.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm font-bold text-slate-900">
                <span>{g.name}</span>
                <span className="font-mono text-xs text-slate-600">
                  {g.correct} dari {g.totalQuestions} Soal Benar ({g.percent}%)
                </span>
              </div>

              <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    g.percent >= 75
                      ? 'bg-emerald-500'
                      : g.percent >= 50
                      ? 'bg-amber-500'
                      : 'bg-red-500'
                  }`}
                  style={{ width: `${g.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rekomendasi Belajar Lanjutan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50/60 p-6 rounded-3xl border border-emerald-200 space-y-3">
          <h3 className="font-extrabold text-base text-emerald-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Materi yang Sudah Dikuasai
          </h3>
          {masteredGroups.length > 0 ? (
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
              {masteredGroups.map((g) => (
                <li key={g.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                  <span>{g.shortName} ({g.percent}% benar)</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-slate-600 italic">
              Belum ada materi dengan capaian ≥ 75%. Teruslah berlatih!
            </p>
          )}
        </div>

        <div className="bg-rose-50/60 p-6 rounded-3xl border border-rose-200 space-y-3">
          <h3 className="font-extrabold text-base text-rose-950 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            Materi yang Perlu Diperkuat
          </h3>
          {needImprovementGroups.length > 0 ? (
            <ul className="space-y-2 text-xs sm:text-sm text-rose-900">
              {needImprovementGroups.map((g) => (
                <li key={g.id} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                  <span>{g.shortName} ({g.percent}% benar)</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-emerald-800 font-bold">
              Selamat! Seluruh materi telah dikuasai dengan sangat baik!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
