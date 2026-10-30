/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KATALOG PEMBAHASAN SOAL
 * Pengajar: Mister Jo
 */

import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  Sparkles,
  Zap,
  Filter,
  ArrowRight,
  Lightbulb,
} from 'lucide-react';
import { ALL_QUESTIONS } from '../../data/questions';
import { UserProgress } from '../../types';
import { MathRenderer } from '../MathRenderer';

interface ReviewViewProps {
  progress: UserProgress;
  onSelectQuestionToQuiz: (id: number) => void;
  onSpeakExplanation: (text: string) => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  progress,
  onSelectQuestionToQuiz,
  onSpeakExplanation,
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'answered' | 'wrong' | 'correct'>('all');

  const filteredQuestions = ALL_QUESTIONS.filter((q) => {
    const ans = progress.answers[q.id];
    if (filterMode === 'all') return true;
    if (filterMode === 'answered') return ans?.answered;
    if (filterMode === 'wrong') return ans?.answered && !ans.isCorrect;
    if (filterMode === 'correct') return ans?.answered && ans.isCorrect;
    return true;
  });

  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header Pembahasan */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <CheckCircle2 className="w-4 h-4" />
            BEDAH TUNTAS & SOLUSI
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Katalog Pembahasan Soal TKA
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Pelajari kembali setiap konsep fisika, periksa cara pengerjaan langkah demi langkah, dan kuasai strategi Cara Cepat Mister Jo!
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-3xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Filter className="w-4 h-4 text-red-600" />
          <span>Filter Tampilan:</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterMode === 'all'
                ? 'bg-red-700 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua 30 Soal
          </button>
          <button
            onClick={() => setFilterMode('answered')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterMode === 'answered'
                ? 'bg-red-700 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Sudah Dikerjakan
          </button>
          <button
            onClick={() => setFilterMode('wrong')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterMode === 'wrong'
                ? 'bg-rose-600 text-white shadow'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
            }`}
          >
            Jawaban Salah (Perlu Evaluasi)
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterMode === 'correct'
                ? 'bg-emerald-600 text-white shadow'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            Jawaban Benar
          </button>
        </div>
      </div>

      {/* Daftar Pembahasan Soal */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <p className="text-slate-500 text-base">Tidak ada soal yang cocok dengan filter ini.</p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const ans = progress.answers[q.id];

            return (
              <div
                key={q.id}
                className="bg-white rounded-3xl border-2 border-slate-200 hover:border-red-300 p-6 sm:p-8 shadow-sm transition-all space-y-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-red-800 text-white font-extrabold text-sm flex items-center justify-center font-mono">
                      {q.id}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-red-700 block">{q.groupTitle}</span>
                      <h2 className="text-lg font-bold text-slate-900">{q.title}</h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {ans?.answered ? (
                      ans.isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Benar (100)
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
                          <XCircle className="w-3.5 h-3.5" /> Evaluasi ({Math.round(ans.scoreEarned * 100)})
                        </span>
                      )
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        <HelpCircle className="w-3.5 h-3.5" /> Belum Dikerjakan
                      </span>
                    )}

                    <button
                      onClick={() => onSelectQuestionToQuiz(q.id)}
                      className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all flex items-center gap-1 shadow-sm active:scale-95"
                    >
                      <span>Kerjakan Ulang</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Rumus Kunci & Cara Cepat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card Rumus Kunci */}
                  <div className="bg-red-950 text-white p-4 rounded-2xl border border-red-800 space-y-2">
                    <div className="flex items-center justify-between text-amber-300 font-bold text-xs uppercase">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5" /> Rumus Kunci
                      </span>
                      <span className="text-[10px] text-rose-300">{q.rumusKunci.nama}</span>
                    </div>
                    <div className="py-1 text-center overflow-x-auto">
                      <MathRenderer math={q.rumusKunci.rumusLatex} displayMode={true} fallbackText={q.rumusKunci.rumusPlain} />
                    </div>
                    <p className="text-[11px] text-slate-300">
                      <strong>Alasan:</strong> {q.rumusKunci.alasanPemilihan}
                    </p>
                  </div>

                  {/* Card Cara Cepat Mister Jo */}
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-amber-950 space-y-2">
                    <div className="flex items-center justify-between font-extrabold text-xs text-amber-900 uppercase">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        Cara Cepat: {q.caraCepatMisterJo.judulTrik}
                      </span>
                      <button
                        onClick={() => onSpeakExplanation(q.audioScript.caraCepat)}
                        className="text-amber-800 hover:text-amber-950 p-1"
                        title="Dengarkan Suara Mister Jo"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-mono text-xs bg-white/80 p-2 rounded-xl border border-amber-200 text-amber-900">
                      {q.caraCepatMisterJo.substitusiSingkat}
                    </p>
                    <p className="text-[11px] text-amber-900">
                      {q.caraCepatMisterJo.trikHindariHitungPanjang}
                    </p>
                  </div>
                </div>

                {/* Langkah demi langkah ringkas */}
                <div className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                    <span>Langkah Solusi Terstruktur:</span>
                    <button
                      onClick={() => onSpeakExplanation(q.audioScript.pembahasan)}
                      className="text-red-700 font-bold flex items-center gap-1 hover:underline"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Dengarkan Penjelasan Lengkap</span>
                    </button>
                  </div>
                  {q.pembahasan.langkahPenyelesaian.map((l, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {l}
                    </p>
                  ))}
                  <div className="pt-2 font-bold text-emerald-800 border-t border-slate-200 mt-2">
                    Kesimpulan: {q.pembahasan.kesimpulan}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
