/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – PETUNJUK PENGGUNAAN & MANFAAT BELAJAR
 * Pengajar: Mister Jo
 */

import React from 'react';
import {
  BookOpen,
  Volume2,
  CheckCircle,
  HelpCircle,
  Award,
  Zap,
  Target,
  FileSpreadsheet,
  BarChart2,
} from 'lucide-react';

interface GuideViewProps {
  onSpeakGuide: () => void;
}

export const GuideView: React.FC<GuideViewProps> = ({ onSpeakGuide }) => {
  return (
    <div className="space-y-8 py-4 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Header Petunjuk */}
      <div className="bg-gradient-to-r from-red-900 to-rose-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <BookOpen className="w-4 h-4" />
            PANDUAN LENGKAP SISWA
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Petunjuk Penggunaan & Manfaat Belajar
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Optimalkan proses belajar Anda untuk menaklukkan soal-soal penalaran numerik tingkat tinggi (HOTS) Teori Kinetik Gas bersama Mister Jo!
          </p>
        </div>

        <button
          onClick={onSpeakGuide}
          className="flex-shrink-0 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center gap-2"
          aria-label="Dengarkan Petunjuk Mister Jo"
        >
          <Volume2 className="w-5 h-5" />
          <span>Dengarkan Petunjuk</span>
        </button>
      </div>

      {/* Panduan Penggunaan Seluruh Menu */}
      <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-3">
          <Target className="w-6 h-6 text-red-600" />
          Panduan Eksplorasi Menu Aplikasi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">1</span>
              <span>Menu Beranda</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pusat kendali latihan. Menampilkan salam hangat Mister Jo, ringkasan skor latihan Anda, kelengkapan pengerjaan 30 soal, dan tombol cepat untuk melanjutkan latihan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">2</span>
              <span>Menu Peta Materi</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Memetakan tujuh kelompok materi Teori Kinetik Gas secara terstruktur. Anda dapat memantau submateri mana yang sudah dikuasai dan submateri yang masih perlu penguatan.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">3</span>
              <span>Menu Bank Rumus</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Katalog rumus ilmiah berstandar buku teks dengan KaTeX vertikal rapi, penjabaran simbol, satuan internasional (SI), serta narator pembaca rumus agar tidak tertukar variabel.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">4</span>
              <span>Menu Mulai Latihan</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Panggung simulasi ujian profesional! Menampilkan naskah soal berfont besar, stimulus ilmiah interaktif, dan validasi jawaban seketika tanpa membuka kunci sebelum Anda mengirim jawaban.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">5</span>
              <span>Menu Pembahasan 7 Langkah</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bedah tuntas setiap soal melalui 7 langkah pedagogis, dilengkapi bagian "RUMUS KUNCI" dan "CARA CEPAT MISTER JO" untuk mengenali trik substitusi singkat.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <span className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center text-xs">6</span>
              <span>Statistik & Pengaturan</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Analisis grafik capaian, akurasi nilai, kecepatan narator TTS, ukuran font yang dapat dibesarkan, serta fasilitas tombol Reset Progress yang aman.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Manfaat Belajar Utama */}
      <section className="bg-gradient-to-br from-red-50 to-rose-50 p-6 sm:p-8 rounded-3xl border border-red-200 space-y-4">
        <h2 className="text-xl sm:text-2xl font-extrabold text-red-950 flex items-center gap-2.5">
          <Award className="w-6 h-6 text-red-700" />
          5 Manfaat Utama Belajar di Fisika Jenius
        </h2>

        <div className="space-y-3">
          <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-red-100 shadow-sm">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Membangun Nalar Fisika Bukan Sekadar Hafalan</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Setiap soal dirancang kontekstual berbasis fenomena nyata industri dan sains modern sehingga Anda memahami alasan di balik setiap rumus.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-red-100 shadow-sm">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Menguasai Trik Cara Cepat Mister Jo yang Akurat</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Hemat waktu ujian hingga 70% dengan menguasai trik rasio, eliminasi faktor pengali, dan cek kewajaran hasil tanpa mengorbankan konsep ilmiah.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-red-100 shadow-sm">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Belajar Interaktif dengan Narator Bersuara Ramah</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Mendengarkan pelafalan simbol-simbol matematika dalam bahasa Indonesia yang tepat mencegah kebingungan saat membaca persamaan kompleks.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-red-100 shadow-sm">
            <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Penyimpanan Otomatis Offline Bebas Khawatir</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Seluruh jawaban, waktu pengerjaan, dan riwayat nilai Anda tersimpan langsung di browser secara otomatis. Tidak hilang meskipun tab ditutup atau di-refresh!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
