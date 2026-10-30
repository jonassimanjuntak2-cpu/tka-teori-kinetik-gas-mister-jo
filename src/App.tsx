/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – TEORI KINETIK GAS
 * Tagline: "Pahami Konsepnya, Kuasai Hitungannya, Taklukkan TKA-nya!"
 * Pengajar: Mister Jo
 */

import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, NavView } from './components/Navbar';
import { MisterJoAvatar } from './components/MisterJoAvatar';
import { ResetModal } from './components/ResetModal';
import { HomeView } from './components/views/HomeView';
import { GuideView } from './components/views/GuideView';
import { CurriculumMap } from './components/views/CurriculumMap';
import { FormulaBankView } from './components/views/FormulaBankView';
import { QuizView } from './components/views/QuizView';
import { ReviewView } from './components/views/ReviewView';
import { StatsView } from './components/views/StatsView';
import { SettingsView } from './components/views/SettingsView';
import {
  loadUserProgress,
  saveUserProgress,
  clearUserProgress,
  evaluateAnswer,
  calculateTotalStats,
} from './utils/storage';
import { speechEngine } from './utils/speech';
import { TextSizeSetting, UserProgress } from './types';
import { ALL_QUESTIONS, getQuestionById } from './data/questions';

export default function App() {
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [currentView, setCurrentView] = useState<NavView>('home');
  const [activeQuestionId, setActiveQuestionId] = useState<number>(() => progress.lastActiveQuestion || 1);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);

  // Audio state
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentNarrationText, setCurrentNarrationText] = useState<string>(
    'Halo, para pejuang TKA! Selamat datang di Fisika Jenius bersama Mister Jo. Mari kita taklukkan Teori Kinetik Gas hari ini!'
  );

  // Simpan perubahan progress ke localStorage
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Sinkronisasi speed rate
  useEffect(() => {
    speechEngine.setRate(progress.ttsRate);
  }, [progress.ttsRate]);

  // Handler audio terpadu
  const playSpeech = useCallback(
    (text: string) => {
      if (!progress.ttsEnabled) return;
      setCurrentNarrationText(text);
      speechEngine.speak(
        text,
        () => {
          setIsSpeaking(false);
          setIsPaused(false);
        },
        () => {
          setIsSpeaking(true);
          setIsPaused(false);
        }
      );
    },
    [progress.ttsEnabled]
  );

  const handleStopSpeech = () => {
    speechEngine.stop();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  const handlePauseSpeech = () => {
    speechEngine.pause();
    setIsPaused(true);
    setIsSpeaking(false);
  };

  const handleResumeSpeech = () => {
    speechEngine.resume();
    setIsPaused(false);
    setIsSpeaking(true);
  };

  const handleToggleTts = () => {
    const nextVal = !progress.ttsEnabled;
    setProgress((prev) => ({ ...prev, ttsEnabled: nextVal }));
    if (!nextVal) {
      handleStopSpeech();
    }
  };

  const handleChangeTtsRate = (newRate: number) => {
    setProgress((prev) => ({ ...prev, ttsRate: newRate }));
    speechEngine.setRate(newRate);
  };

  const handleUpdateTextSize = (size: TextSizeSetting) => {
    setProgress((prev) => ({ ...prev, textSize: size }));
  };

  // Navigasi dengan narasi audio otomatis
  const handleNavigate = (view: NavView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Narator aktif sesuai menu
    switch (view) {
      case 'home':
        playSpeech(
          'Selamat datang kembali di Beranda Fisika Jenius! Di sini kamu bisa memantau progres belajarmu dan melanjutkan latihan soal Teori Kinetik Gas.'
        );
        break;
      case 'guide':
        playSpeech(
          'Menu Petunjuk Penggunaan. Di sini Mister Jo jelaskan cara memanfaatkan seluruh menu dan keunggulan belajar di Fisika Jenius.'
        );
        break;
      case 'map':
        playSpeech(
          'Menu Peta Materi. Kita punya tujuh kelompok materi Teori Kinetik Gas dengan total tiga puluh soal numerik HOTS. Pantau materi mana yang sudah kamu kuasai!'
        );
        break;
      case 'formulas':
        playSpeech(
          'Menu Bank Rumus. Kumpulan rumus resmi teori kinetik gas dengan penjabaran simbol, satuan internasional, dan pelafalan ilmiah langsung dari Mister Jo.'
        );
        break;
      case 'quiz': {
        const q = getQuestionById(activeQuestionId);
        playSpeech(
          `Soal nomor ${activeQuestionId}. ${q?.groupTitle}. Baca stimulus dengan teliti dan pilih jawaban terbaikmu!`
        );
        break;
      }
      case 'review':
        playSpeech(
          'Menu Pembahasan Soal. Mari kita bedah tuntas penyelesaian langkah demi langkah dan kuasai strategi Cara Cepat Mister Jo!'
        );
        break;
      case 'stats':
        playSpeech(
          'Menu Statistik Belajar. Lihat capaian nilaimu, persentase akurasi, dan rekomendasi materi yang perlu kamu perkuat.'
        );
        break;
      case 'settings':
        playSpeech(
          'Menu Pengaturan. Kamu bisa mengatur kecepatan suara Mister Jo, menyesuaikan ukuran tulisan, atau mereset progres latihan.'
        );
        break;
    }
  };

  // Pilih soal spesifik
  const handleSelectQuestion = (id: number) => {
    setActiveQuestionId(id);
    setProgress((prev) => ({ ...prev, lastActiveQuestion: id }));
    setCurrentView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const q = getQuestionById(id);
    if (q) {
      playSpeech(`Soal nomor ${id}. ${q.groupTitle}. ${q.title}. Simak stimulusnya baik-baik!`);
    }
  };

  // Submit jawaban
  const handleSubmitAnswer = (questionId: number, selection: any) => {
    const evaluated = evaluateAnswer(questionId, selection);

    setProgress((prev) => {
      const updatedAnswers = {
        ...prev.answers,
        [questionId]: evaluated,
      };

      // Hitung akumulasi skor
      let totalW = 0;
      Object.values(updatedAnswers).forEach((ans) => {
        totalW += ans.scoreEarned;
      });
      const finalScore = Math.round((totalW / 30) * 100);

      return {
        ...prev,
        answers: updatedAnswers,
        totalScore: finalScore,
      };
    });

    const q = getQuestionById(questionId);
    if (evaluated.isCorrect) {
      playSpeech(
        `Hebat sekali! Jawabanmu untuk soal nomor ${questionId} tepat! Analisis fisikamu sangat cermat. Sekarang simak pembahasan lengkap dan cara cepatnya di bawah!`
      );
    } else {
      playSpeech(
        `Jawabanmu untuk soal nomor ${questionId} masih kurang tepat. Jangan menyerah! Justru dari kesalahan ini kita perkuat konsepnya. Simak bedah tuntas langkah demi langkah berikut ini!`
      );
    }
  };

  // Reset Progress
  const handleConfirmReset = () => {
    const fresh = clearUserProgress();
    setProgress(fresh);
    setActiveQuestionId(1);
    setCurrentView('home');
    playSpeech(
      'Seluruh progress latihan telah berhasil direset. Mari kita mulai kembali lembaran baru dengan penuh semangat bersama Mister Jo!'
    );
  };

  // Narasi sambutan Mister Jo
  const handleNarratorWelcome = () => {
    playSpeech(
      'Halo, para pejuang TKA! Selamat datang di Fisika Jenius bersama Mister Jo. Hari ini kita akan menaklukkan Teori Kinetik Gas. Jangan takut dengan rumusnya. Kita pelajari pelan-pelan, pahami konsepnya, lalu kita buktikan dengan perhitungan. Siap menjadi jagoan fisika? Tekan tombol Mulai Latihan sekarang!'
    );
  };

  const stats = calculateTotalStats(progress);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-red-700 selection:text-white">
      {/* 1. Header Navbar Merah Putih */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        answeredCount={stats.answeredCount}
        totalScore100={stats.finalScore100}
      />

      {/* 2. Banner Avatar Pembimbing Mister Jo (Sticky/Prominent di atas konten) */}
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 pt-4">
        <MisterJoAvatar
          currentText={currentNarrationText}
          isSpeaking={isSpeaking}
          isPaused={isPaused}
          onPlay={() => playSpeech(currentNarrationText)}
          onPause={handlePauseSpeech}
          onResume={handleResumeSpeech}
          onStop={handleStopSpeech}
          ttsEnabled={progress.ttsEnabled}
          onToggleTts={handleToggleTts}
          ttsRate={progress.ttsRate}
          onChangeRate={handleChangeTtsRate}
          compact={currentView === 'quiz'}
        />
      </div>

      {/* 3. Konten Utama Berbasis View */}
      <main className="flex-1 pb-16">
        {currentView === 'home' && (
          <HomeView
            progress={progress}
            onStartQuiz={() => handleSelectQuestion(activeQuestionId)}
            onNavigateTo={handleNavigate}
            onNarratorWelcome={handleNarratorWelcome}
          />
        )}

        {currentView === 'guide' && (
          <GuideView
            onSpeakGuide={() =>
              playSpeech(
                'Selamat datang di panduan belajar Fisika Jenius! Gunakan menu Peta Materi untuk melihat tujuh kelompok materi, Bank Rumus untuk menghafal persamaan dengan satuan SI yang tepat, dan menu Mulai Latihan untuk menyelesaikan tiga puluh soal numerik HOTS. Setiap selesai menjawab, pelajari tujuh langkah pembahasan dan Cara Cepat Mister Jo!'
              )
            }
          />
        )}

        {currentView === 'map' && (
          <CurriculumMap
            progress={progress}
            onSelectQuestion={handleSelectQuestion}
            onSpeakMapOverview={() =>
              playSpeech(
                'Berikut adalah peta kurikulum Teori Kinetik Gas kita. Dimulai dari Persamaan Umum, Persamaan Dua Keadaan, Gas Bocor, Energi Kinetik, Energi Dalam, Teori Ekuipartisi, hingga Kecepatan Efektif. Pilih salah satu nomor soal untuk langsung berlatih!'
              )
            }
          />
        )}

        {currentView === 'formulas' && (
          <FormulaBankView
            onSpeakFormula={(nama, audio) => {
              playSpeech(`Rumus ${nama}. ${audio}`);
            }}
          />
        )}

        {currentView === 'quiz' && (
          <QuizView
            progress={progress}
            activeQuestionId={activeQuestionId}
            onSelectQuestion={handleSelectQuestion}
            onSubmitAnswer={handleSubmitAnswer}
            onSpeakStimulus={(text) => playSpeech(text)}
            onSpeakQuestion={(text) => playSpeech(text)}
            onSpeakPembahasan={(text) => playSpeech(text)}
            onSpeakCaraCepat={(text) => playSpeech(text)}
          />
        )}

        {currentView === 'review' && (
          <ReviewView
            progress={progress}
            onSelectQuestionToQuiz={handleSelectQuestion}
            onSpeakExplanation={(text) => playSpeech(text)}
          />
        )}

        {currentView === 'stats' && (
          <StatsView
            progress={progress}
            onSpeakStats={(text) => playSpeech(text)}
            onNavigateToQuiz={() => handleSelectQuestion(activeQuestionId)}
          />
        )}

        {currentView === 'settings' && (
          <SettingsView
            progress={progress}
            onUpdateTextSize={handleUpdateTextSize}
            onUpdateTtsRate={handleChangeTtsRate}
            onToggleTts={handleToggleTts}
            onRequestReset={() => setIsResetModalOpen(true)}
            onTestVoice={() =>
              playSpeech(
                'Halo! Suara narator Mister Jo berfungsi dengan sangat baik dan siap membimbing belajarmu di Fisika Jenius!'
              )
            }
          />
        )}
      </main>

      {/* 4. Dialog Modal Konfirmasi Reset */}
      <ResetModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={handleConfirmReset}
      />

      {/* 5. Footer Merah Putih Fisika Jenius */}
      <footer className="bg-slate-900 text-white border-t-2 border-red-800/60 py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-400">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold text-base mb-1">
              <span>⚛️ FISIKA JENIUS</span>
              <span className="text-red-400">•</span>
              <span className="text-amber-300 font-serif italic">Mister Jo</span>
            </div>
            <p className="text-slate-400">
              Aplikasi Simulasi & Pembelajaran Latihan TKA Fisika SMA – Teori Kinetik Gas (30 Soal Numerik HOTS).
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="text-slate-300 font-semibold">
              Tagline: "Pahami Konsepnya, Kuasai Hitungannya, Taklukkan TKA-nya!"
            </span>
            <span className="text-[11px] text-slate-500">
              Vercel Deployment Ready • LocalStorage Offline Persistence • KaTeX Engine
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
