/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – SIMULASI LATIHAN UJIAN TKA TEORI KINETIK GAS (30 SOAL)
 * Pengajar: Mister Jo
 */

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Volume2,
  Sparkles,
  Zap,
  BookOpen,
  ArrowRight,
  Check,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';
import { Question, UserAnswerState, UserProgress } from '../../types';
import { ALL_QUESTIONS } from '../../data/questions';
import { MathRenderer } from '../MathRenderer';
import { ScientificGraph } from '../ScientificGraph';

interface QuizViewProps {
  progress: UserProgress;
  activeQuestionId: number;
  onSelectQuestion: (id: number) => void;
  onSubmitAnswer: (questionId: number, selection: any) => void;
  onSpeakStimulus: (text: string) => void;
  onSpeakQuestion: (text: string) => void;
  onSpeakPembahasan: (text: string) => void;
  onSpeakCaraCepat: (text: string) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  progress,
  activeQuestionId,
  onSelectQuestion,
  onSubmitAnswer,
  onSpeakStimulus,
  onSpeakQuestion,
  onSpeakPembahasan,
  onSpeakCaraCepat,
}) => {
  const currentQuestion = ALL_QUESTIONS.find((q) => q.id === activeQuestionId) || ALL_QUESTIONS[0];
  const existingAnswer: UserAnswerState | undefined = progress.answers[currentQuestion.id];

  // State pilihan pengguna lokal
  const [pgSelection, setPgSelection] = useState<string>('');
  const [pgkSelection, setPgkSelection] = useState<string[]>([]);
  const [bsSelection, setBsSelection] = useState<(boolean | null)[]>([null, null, null]);

  // Sinkronisasi state saat berpindah nomor soal
  useEffect(() => {
    if (existingAnswer && existingAnswer.answered) {
      if (currentQuestion.type === 'pg') {
        setPgSelection((existingAnswer.userSelection as string) || '');
      } else if (currentQuestion.type === 'pgk') {
        setPgkSelection((existingAnswer.userSelection as string[]) || []);
      } else if (currentQuestion.type === 'bs') {
        setBsSelection((existingAnswer.userSelection as (boolean | null)[]) || [null, null, null]);
      }
    } else {
      setPgSelection('');
      setPgkSelection([]);
      setBsSelection([null, null, null]);
    }
  }, [currentQuestion.id, existingAnswer]);

  // Handler pengiriman jawaban
  const handleSubmit = () => {
    let finalSelection: any;

    if (currentQuestion.type === 'pg') {
      if (!pgSelection) return;
      finalSelection = pgSelection;
    } else if (currentQuestion.type === 'pgk') {
      if (pgkSelection.length === 0) return;
      finalSelection = pgkSelection;
    } else if (currentQuestion.type === 'bs') {
      if (bsSelection.some((val) => val === null)) return;
      finalSelection = bsSelection;
    }

    onSubmitAnswer(currentQuestion.id, finalSelection);

    // Cek jika jawaban benar, tembakkan confetti perayaan!
    let correct = false;
    if (currentQuestion.type === 'pg') {
      correct = finalSelection === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'pgk') {
      const uArr = [...finalSelection].sort().join('');
      const cArr = [...(currentQuestion.correctAnswer as string[])].sort().join('');
      correct = uArr === cArr;
    } else if (currentQuestion.type === 'bs') {
      const cArr = currentQuestion.correctAnswer as boolean[];
      correct = finalSelection.every((val: boolean, i: number) => val === cArr[i]);
    }

    if (correct) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.65 },
          colors: ['#dc2626', '#f59e0b', '#ffffff'],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const isAnswered = existingAnswer?.answered;

  const isFormValid = () => {
    if (currentQuestion.type === 'pg') return !!pgSelection;
    if (currentQuestion.type === 'pgk') return pgkSelection.length > 0;
    if (currentQuestion.type === 'bs') return bsSelection.every((val) => val !== null);
    return false;
  };

  // Navigasi soal
  const handlePrev = () => {
    if (activeQuestionId > 1) onSelectQuestion(activeQuestionId - 1);
  };

  const handleNext = () => {
    if (activeQuestionId < 30) onSelectQuestion(activeQuestionId + 1);
  };

  // Ukuran font berbasis pengaturan pengguna
  const getTextSizeClass = () => {
    switch (progress.textSize) {
      case 'besar':
        return {
          title: 'text-2xl sm:text-3xl',
          stimulus: 'text-lg sm:text-xl',
          prompt: 'text-xl sm:text-2xl',
          option: 'text-lg sm:text-xl',
          solution: 'text-base sm:text-lg',
        };
      case 'ekstra-besar':
        return {
          title: 'text-3xl sm:text-4xl',
          stimulus: 'text-xl sm:text-2xl',
          prompt: 'text-2xl sm:text-3xl',
          option: 'text-xl sm:text-2xl',
          solution: 'text-lg sm:text-xl',
        };
      default:
        return {
          title: 'text-xl sm:text-2xl',
          stimulus: 'text-base sm:text-lg',
          prompt: 'text-lg sm:text-xl',
          option: 'text-base sm:text-lg',
          solution: 'text-sm sm:text-base',
        };
    }
  };

  const sizeClasses = getTextSizeClass();

  return (
    <div className="space-y-6 py-2 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Grid Pemilihan Nomor Soal 1-30 */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase font-extrabold text-slate-500 tracking-wider">
            Navigasi Soal (1 - 30):
          </span>
          <div className="flex items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Benar
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> Salah
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span> Belum
            </span>
          </div>
        </div>

        <div className="grid grid-cols-10 sm:grid-cols-15 gap-1.5 sm:gap-2">
          {ALL_QUESTIONS.map((q) => {
            const ans = progress.answers[q.id];
            const isActive = q.id === activeQuestionId;
            let btnBg = 'bg-slate-100 text-slate-700 hover:bg-slate-200';
            if (ans?.answered) {
              btnBg = ans.isCorrect
                ? 'bg-emerald-600 text-white hover:bg-emerald-700 font-bold'
                : 'bg-rose-600 text-white hover:bg-rose-700 font-bold';
            }
            if (isActive) {
              btnBg += ' ring-2 ring-red-600 ring-offset-2 scale-105 shadow';
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(q.id)}
                className={`h-9 sm:h-10 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all flex items-center justify-center ${btnBg}`}
                aria-label={`Nomor ${q.id}`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Kartu Soal Utama */}
      <article className="bg-white rounded-3xl border-2 border-slate-200 shadow-md p-6 sm:p-8 space-y-6">
        {/* Header Metadata Soal */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-red-700 to-rose-600 text-white font-extrabold text-base flex items-center justify-center font-mono shadow-md">
              {currentQuestion.id}
            </span>
            <div>
              <span className="text-xs font-bold text-red-700 uppercase tracking-wider block">
                {currentQuestion.groupTitle}
              </span>
              <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 mt-0.5">
                {currentQuestion.type === 'pg'
                  ? 'Pilihan Ganda (1 Jawaban Benar)'
                  : currentQuestion.type === 'pgk'
                  ? 'Pilihan Ganda Kompleks (Pilih Semua yang Benar)'
                  : 'Benar - Salah (Nilai Setiap Pernyataan)'}
              </span>
            </div>
          </div>

          <button
            onClick={() => onSpeakStimulus(currentQuestion.audioScript.stimulus)}
            className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            aria-label="Dengarkan Narator Membaca Stimulus"
          >
            <Volume2 className="w-4 h-4" />
            <span>Dengarkan Stimulus</span>
          </button>
        </div>

        {/* Judul Soal */}
        <h2 className={`${sizeClasses.title} font-extrabold text-slate-900 leading-snug`}>
          {currentQuestion.title}
        </h2>

        {/* STIMULUS (Wacana, Tabel, Grafik Ilmiah) */}
        <div className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200/80 space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200 pb-2">
            <span>Stimulus Masalah HOTS:</span>
          </div>

          {/* Teks Wacana */}
          <p className={`${sizeClasses.stimulus} text-slate-700 leading-relaxed font-sans`}>
            {currentQuestion.stimulus.text}
          </p>

          {/* Tabel Data Eksperimen Jika Ada */}
          {currentQuestion.stimulus.table && (
            <div className="overflow-x-auto my-3">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-white">
                {currentQuestion.stimulus.table.caption && (
                  <caption className="text-xs font-bold text-slate-500 py-1.5 text-left italic">
                    {currentQuestion.stimulus.table.caption}
                  </caption>
                )}
                <thead className="bg-red-900 text-white">
                  <tr>
                    {currentQuestion.stimulus.table.headers.map((h, i) => (
                      <th key={i} className="px-4 py-2.5 font-bold">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {currentQuestion.stimulus.table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-red-50/40">
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2.5 text-slate-700 font-mono text-xs sm:text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Grafik / Diagram Ilmiah Presisi */}
          {currentQuestion.stimulus.graphType && currentQuestion.stimulus.graphType !== 'none' && (
            <ScientificGraph
              type={currentQuestion.stimulus.graphType}
              title={currentQuestion.stimulus.graphTitle}
              details={currentQuestion.stimulus.graphDetails}
            />
          )}
        </div>

        {/* NASKAH SOAL */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-extrabold text-red-700 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Pertanyaan & Instruksi:
            </span>

            <button
              onClick={() => onSpeakQuestion(currentQuestion.audioScript.soal)}
              className="text-xs font-semibold text-slate-500 hover:text-red-700 flex items-center gap-1"
              aria-label="Dengarkan Naskah Soal"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Baca Soal</span>
            </button>
          </div>

          <p className={`${sizeClasses.prompt} font-bold text-slate-900 leading-snug`}>
            {currentQuestion.questionPrompt}
          </p>
        </div>

        {/* PILIHAN JAWABAN */}
        <div className="space-y-3 pt-2">
          {/* 1. Tipe PILIHAN GANDA (PG) */}
          {currentQuestion.type === 'pg' && currentQuestion.options && (
            <div className="space-y-3">
              {currentQuestion.options.map((opt) => {
                const isSelected = pgSelection === opt.id;
                let cardStyle = 'border-slate-200 hover:border-red-300 bg-white';
                if (isSelected) {
                  cardStyle = 'border-red-600 bg-red-50/70 shadow-sm ring-1 ring-red-500';
                }
                if (isAnswered) {
                  if (opt.id === currentQuestion.correctAnswer) {
                    cardStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-500';
                  } else if (isSelected && !existingAnswer?.isCorrect) {
                    cardStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-400';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswered}
                    onClick={() => setPgSelection(opt.id)}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-4 ${cardStyle} disabled:cursor-default`}
                  >
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm font-mono flex-shrink-0 ${
                        isSelected
                          ? 'bg-red-700 text-white'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className={`${sizeClasses.option} text-slate-800 leading-relaxed font-medium mt-0.5`}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. Tipe PILIHAN GANDA KOMPLEKS (PGK) */}
          {currentQuestion.type === 'pgk' && currentQuestion.options && (
            <div className="space-y-3">
              <span className="text-xs text-slate-500 italic block mb-1">
                Centang setiap opsi yang menurut Anda bernilai benar:
              </span>
              {currentQuestion.options.map((opt) => {
                const isChecked = pgkSelection.includes(opt.id);
                const isKey = (currentQuestion.correctAnswer as string[]).includes(opt.id);

                let cardStyle = 'border-slate-200 hover:border-red-300 bg-white';
                if (isChecked) {
                  cardStyle = 'border-red-600 bg-red-50/60 ring-1 ring-red-500';
                }
                if (isAnswered) {
                  if (isKey) {
                    cardStyle = 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500 font-semibold';
                  } else if (isChecked && !isKey) {
                    cardStyle = 'border-rose-500 bg-rose-50 ring-1 ring-rose-400';
                  }
                }

                const handleToggle = () => {
                  if (isAnswered) return;
                  if (isChecked) {
                    setPgkSelection(pgkSelection.filter((id) => id !== opt.id));
                  } else {
                    setPgkSelection([...pgkSelection, opt.id]);
                  }
                };

                return (
                  <button
                    key={opt.id}
                    disabled={isAnswered}
                    onClick={handleToggle}
                    className={`w-full p-4 rounded-2xl border-2 text-left transition-all flex items-start gap-4 ${cardStyle} disabled:cursor-default`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5 border ${
                        isChecked
                          ? 'bg-red-700 text-white border-red-700'
                          : 'bg-slate-50 text-slate-700 border-slate-300'
                      }`}
                    >
                      {isChecked ? <Check className="w-4 h-4 stroke-[3]" /> : opt.id}
                    </div>
                    <span className={`${sizeClasses.option} text-slate-800 leading-relaxed font-medium`}>
                      {opt.text}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* 3. Tipe BENAR - SALAH (BS) */}
          {currentQuestion.type === 'bs' && currentQuestion.statements && (
            <div className="space-y-4">
              {currentQuestion.statements.map((stmt, idx) => {
                const currentVal = bsSelection[idx];
                const correctVal = stmt.correct;

                return (
                  <div
                    key={stmt.id}
                    className="p-4 sm:p-5 rounded-2xl border-2 border-slate-200 bg-white space-y-3"
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-red-100 text-red-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className={`${sizeClasses.option} text-slate-800 leading-relaxed font-medium flex-1`}>
                        {stmt.text}
                      </p>
                    </div>

                    {/* Tombol Pilihan Benar / Salah */}
                    <div className="flex items-center gap-3 pt-2 justify-end">
                      <button
                        disabled={isAnswered}
                        onClick={() => {
                          const next = [...bsSelection];
                          next[idx] = true;
                          setBsSelection(next);
                        }}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all border-2 ${
                          currentVal === true
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        } ${
                          isAnswered && correctVal === true
                            ? 'ring-4 ring-emerald-300'
                            : ''
                        }`}
                      >
                        BENAR
                      </button>

                      <button
                        disabled={isAnswered}
                        onClick={() => {
                          const next = [...bsSelection];
                          next[idx] = false;
                          setBsSelection(next);
                        }}
                        className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all border-2 ${
                          currentVal === false
                            ? 'bg-rose-600 border-rose-600 text-white shadow-md'
                            : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
                        } ${
                          isAnswered && correctVal === false
                            ? 'ring-4 ring-emerald-300'
                            : ''
                        }`}
                      >
                        SALAH
                      </button>
                    </div>

                    {/* Evaluasi per statement jika sudah submit */}
                    {isAnswered && (
                      <div className="pt-2 text-xs text-slate-600 border-t border-slate-100 flex items-start gap-2">
                        {currentVal === correctVal ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 mt-0.5 flex-shrink-0" />
                        )}
                        <span className="leading-snug">{stmt.explanation}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* TOMBOL KONFIRMASI / SUBMIT */}
        {!isAnswered ? (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold text-base shadow-lg transition-all active:scale-95 disabled:opacity-40 disabled:pointer-events-none flex items-center gap-2"
            >
              <Check className="w-5 h-5 stroke-[3]" />
              <span>Konfirmasi & Kunci Jawaban</span>
            </button>
          </div>
        ) : (
          <div className="pt-4 border-t border-slate-100">
            {/* Banner Evaluasi Jawaban */}
            <div
              className={`p-5 rounded-2xl border-2 flex items-center justify-between gap-4 ${
                existingAnswer?.isCorrect
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border-rose-300 text-rose-900'
              }`}
            >
              <div className="flex items-center gap-3">
                {existingAnswer?.isCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-rose-600 flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-extrabold text-lg">
                    {existingAnswer?.isCorrect ? 'Luar Biasa! Jawaban Anda Tepat!' : 'Perlu Evaluasi! Jawaban Kurang Tepat'}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-90 mt-0.5">
                    {existingAnswer?.isCorrect
                      ? 'Analisis fisika dan perhitungan numerik Anda sangat cermat!'
                      : 'Jangan berkecil hati. Mari bedah konsep dan perhitungannya bersama Mister Jo di bawah ini.'}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider block opacity-75">Skor Soal</span>
                <span className="text-xl font-mono font-black">
                  {Math.round((existingAnswer?.scoreEarned || 0) * 100)} / 100
                </span>
              </div>
            </div>
          </div>
        )}

        {/* PEMBAHASAN LENGKAP 7 LANGKAH (Hanya muncul setelah jawaban dikirim) */}
        {isAnswered && (
          <section className="mt-8 space-y-6 pt-6 border-t-2 border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                  📚
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Pembahasan Tuntas 7 Langkah Ilmiah
                </h3>
              </div>

              <button
                onClick={() => onSpeakPembahasan(currentQuestion.audioScript.pembahasan)}
                className="px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm"
                aria-label="Dengarkan Pembahasan Mister Jo"
              >
                <Volume2 className="w-4 h-4" />
                <span>Dengarkan Pembahasan</span>
              </button>
            </div>

            {/* Bagian Khusus: RUMUS KUNCI */}
            <div className="bg-gradient-to-br from-red-950 via-rose-950 to-slate-900 text-white p-6 rounded-3xl border-2 border-red-500 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-red-800 pb-3">
                <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm uppercase tracking-wider">
                  <Zap className="w-5 h-5 text-amber-400" />
                  RUMUS KUNCI SOAL INI
                </div>
                <span className="text-xs text-rose-200 font-mono">{currentQuestion.rumusKunci.nama}</span>
              </div>

              {/* Tampilan Rumus KaTeX Besar */}
              <div className="py-2 text-center overflow-x-auto">
                <MathRenderer
                  math={currentQuestion.rumusKunci.rumusLatex}
                  displayMode={true}
                  fallbackText={currentQuestion.rumusKunci.rumusPlain}
                />
              </div>

              {/* Keterangan Simbol & Satuan */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200 pt-2 border-t border-red-900/60">
                {currentQuestion.rumusKunci.keteranganSimbol.map((sim, i) => (
                  <div key={i} className="flex items-baseline gap-2 bg-slate-900/60 p-2 rounded-xl border border-red-900/40">
                    <span className="font-mono font-bold text-amber-300">{sim.simbol}</span>
                    <span className="text-slate-300 flex-1">{sim.arti}</span>
                    <span className="text-[10px] font-mono text-rose-300">{sim.satuan}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-rose-200/90 pt-1 space-y-1">
                <p><strong>Kondisi Penggunaan:</strong> {currentQuestion.rumusKunci.kondisiPenggunaan}</p>
                <p><strong>Alasan Pemilihan:</strong> {currentQuestion.rumusKunci.alasanPemilihan}</p>
              </div>
            </div>

            {/* Bagian Khusus: CARA CEPAT MISTER JO */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 p-6 rounded-3xl shadow-md space-y-3">
              <div className="flex items-center justify-between border-b border-amber-200 pb-3">
                <div className="flex items-center gap-2 text-amber-900 font-black text-sm uppercase tracking-wider">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  CARA CEPAT MISTER JO: {currentQuestion.caraCepatMisterJo.judulTrik}
                </div>
                <button
                  onClick={() => onSpeakCaraCepat(currentQuestion.audioScript.caraCepat)}
                  className="px-3 py-1.5 rounded-xl bg-amber-200 hover:bg-amber-300 text-amber-950 font-bold text-xs transition-all flex items-center gap-1 shadow-sm"
                  aria-label="Dengarkan Cara Cepat Mister Jo"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengarkan Trik</span>
                </button>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-amber-950 leading-relaxed">
                <p><strong>Hubungan Matematis Singkat:</strong> {currentQuestion.caraCepatMisterJo.hubunganMatematis}</p>
                <p className="bg-white/80 p-3 rounded-2xl border border-amber-200 font-mono text-amber-900">
                  {currentQuestion.caraCepatMisterJo.substitusiSingkat}
                </p>
                <p><strong>Trik Hindari Hitung Panjang:</strong> {currentQuestion.caraCepatMisterJo.trikHindariHitungPanjang}</p>
                <p><strong>Cara Cek Kewajaran Hasil:</strong> {currentQuestion.caraCepatMisterJo.caraCekKewajaran}</p>
                <p className="text-amber-800 text-[11px] italic">
                  * Kapan Digunakan: {currentQuestion.caraCepatMisterJo.kapanDigunakan}
                </p>
              </div>
            </div>

            {/* 7 Langkah Terstruktur */}
            <div className="space-y-4 pt-2">
              {/* 1. Memahami Soal */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-sm text-red-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">1</span>
                  Memahami Soal
                </h4>
                <div className="text-xs sm:text-sm text-slate-700 space-y-1 pl-6">
                  <div><strong>Diketahui:</strong>
                    <ul className="list-disc pl-5 mt-1 space-y-0.5">
                      {currentQuestion.pembahasan.memahamiSoal.diketahui.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                  <p><strong>Ditanyakan:</strong> {currentQuestion.pembahasan.memahamiSoal.ditanyakan}</p>
                  <p><strong>Informasi Penting:</strong> {currentQuestion.pembahasan.memahamiSoal.infoPenting}</p>
                </div>
              </div>

              {/* 2. Identifikasi Konsep */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-extrabold text-sm text-red-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">2</span>
                  Identifikasi Konsep
                </h4>
                <div className="text-xs sm:text-sm text-slate-700 pl-6 space-y-1">
                  <p><strong>Konsep Fisika:</strong> {currentQuestion.pembahasan.identifikasiKonsep.konsep}</p>
                  <p><strong>Alasan Pemilihan:</strong> {currentQuestion.pembahasan.identifikasiKonsep.alasan}</p>
                </div>
              </div>

              {/* 3. Rumus Utama */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-extrabold text-sm text-red-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">3</span>
                  Rumus Utama yang Diterapkan
                </h4>
                <p className="font-mono text-xs sm:text-sm text-red-800 pl-6 bg-white p-2.5 rounded-xl border border-slate-200">
                  {currentQuestion.pembahasan.rumusKunci}
                </p>
              </div>

              {/* 4. Penyelesaian Langkah demi Langkah */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-extrabold text-sm text-red-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">4</span>
                  Penyelesaian Langkah Demi Langkah
                </h4>
                <div className="space-y-1.5 pl-6">
                  {currentQuestion.pembahasan.langkahPenyelesaian.map((langkah, i) => (
                    <p key={i} className="text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
                      {langkah}
                    </p>
                  ))}
                </div>
              </div>

              {/* 5. Analisis Jawaban */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="font-extrabold text-sm text-red-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-red-700 text-white flex items-center justify-center text-xs">5</span>
                  Analisis Jawaban & Distraktor
                </h4>
                <div className="text-xs sm:text-sm text-slate-700 pl-6 space-y-1">
                  <p><strong>Mengapa Benar:</strong> {currentQuestion.pembahasan.analisisJawaban.mengapaBenar}</p>
                  <p><strong>Mengapa Opsi Lain Salah:</strong> {currentQuestion.pembahasan.analisisJawaban.opsiLain}</p>
                </div>
              </div>

              {/* 6. Kesimpulan */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                <h4 className="font-extrabold text-sm text-emerald-900 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs">6</span>
                  Kesimpulan Akhir
                </h4>
                <p className="text-xs sm:text-sm text-emerald-950 font-bold pl-6">
                  {currentQuestion.pembahasan.kesimpulan}
                </p>
              </div>

              {/* 7. Tips Mengerjakan */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-1">
                <h4 className="font-extrabold text-sm text-amber-900 uppercase tracking-wide flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  Tips Mengerjakan Soal Sejenis (Mister Jo)
                </h4>
                <p className="text-xs sm:text-sm text-amber-950 pl-6 leading-relaxed">
                  {currentQuestion.pembahasan.tipsMengerjakan}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* NAVIGASI SEBELUMNYA & BERIKUTNYA */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <button
            onClick={handlePrev}
            disabled={activeQuestionId <= 1}
            className="px-5 py-3 rounded-2xl border-2 border-slate-200 hover:border-red-400 font-bold text-sm text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-2 active:scale-95"
            aria-label="Soal Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Sebelumnya</span>
          </button>

          <span className="font-mono text-xs font-bold text-slate-400">
            {activeQuestionId} dari 30
          </span>

          <button
            onClick={handleNext}
            disabled={activeQuestionId >= 30}
            className="px-6 py-3 rounded-2xl bg-red-700 hover:bg-red-800 text-white font-bold text-sm disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-2 shadow-md active:scale-95"
            aria-label="Soal Berikutnya"
          >
            <span>Berikutnya</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </article>
    </div>
  );
};
