/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – AVATAR & KONTROLER SUARA MISTER JO
 * Pengajar: Mister Jo
 */

import React from 'react';
import { Volume2, VolumeX, Pause, Play, Square, Sparkles } from 'lucide-react';
import { speechEngine } from '../utils/speech';

interface MisterJoAvatarProps {
  currentText?: string;
  isSpeaking: boolean;
  isPaused: boolean;
  onPlay: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  ttsEnabled: boolean;
  onToggleTts: () => void;
  ttsRate: number;
  onChangeRate: (rate: number) => void;
  compact?: boolean;
}

export const MisterJoAvatar: React.FC<MisterJoAvatarProps> = ({
  currentText,
  isSpeaking,
  isPaused,
  onPlay,
  onPause,
  onResume,
  onStop,
  ttsEnabled,
  onToggleTts,
  ttsRate,
  onChangeRate,
  compact = false,
}) => {
  return (
    <div className={`bg-gradient-to-br from-red-900 via-rose-950 to-slate-900 border-2 border-red-500/40 rounded-3xl p-4 shadow-xl text-white transition-all duration-300 ${compact ? 'py-3' : 'py-4'}`}>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {/* Avatar Visual Mister Jo */}
        <div className="relative flex-shrink-0 group">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-red-600 via-rose-500 to-amber-400 p-1 shadow-lg ring-4 ring-red-500/30">
            <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Karakter Kartun Guru Fisika Mister Jo */}
              <div className="text-2xl sm:text-3xl select-none transform transition-transform group-hover:scale-110">
                👨‍🏫
              </div>
              <span className="text-[10px] font-bold tracking-wider text-amber-300 uppercase mt-0.5">
                Mister Jo
              </span>
            </div>
          </div>

          {/* Indikator Gelombang Suara Berbicara */}
          {isSpeaking && (
            <div className="absolute -bottom-1 -right-1 flex items-center gap-0.5 bg-red-600 px-1.5 py-0.5 rounded-full border border-white shadow">
              <span className="w-1 h-3 bg-white rounded-full animate-bounce"></span>
              <span className="w-1 h-4 bg-white rounded-full animate-bounce [animation-delay:0.15s]"></span>
              <span className="w-1 h-2 bg-white rounded-full animate-bounce [animation-delay:0.3s]"></span>
            </div>
          )}
        </div>

        {/* Kotak Ucapan & Dialog Narasi */}
        <div className="flex-1 text-center sm:text-left min-w-0">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-600/80 text-white flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Guru Fisika Pembimbing
            </span>
            <span className="text-xs text-amber-300 font-semibold hidden sm:inline">
              Mister Jo siap mengajarkan!
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-100 font-medium leading-snug line-clamp-2">
            {currentText ||
              '"Pahami konsepnya pelan-pelan, jangan takut rumus. Kita taklukkan Teori Kinetik Gas bersama!"'}
          </p>
        </div>

        {/* Kontroler Audio TTS */}
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
          {/* Tombol Play/Pause/Resume */}
          {isSpeaking ? (
            <button
              onClick={onPause}
              title="Jeda Suara Mister Jo"
              aria-label="Jeda Suara Mister Jo"
              className="p-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-md active:scale-95"
            >
              <Pause className="w-5 h-5" />
            </button>
          ) : isPaused ? (
            <button
              onClick={onResume}
              title="Lanjutkan Suara Mister Jo"
              aria-label="Lanjutkan Suara Mister Jo"
              className="p-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold transition-all shadow-md active:scale-95 animate-pulse"
            >
              <Play className="w-5 h-5 fill-current" />
            </button>
          ) : (
            <button
              onClick={onPlay}
              title="Dengarkan Suara Mister Jo"
              aria-label="Dengarkan Suara Mister Jo"
              className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <Play className="w-5 h-5 fill-current" />
              <span className="text-xs pr-1 font-semibold hidden md:inline">Bicara</span>
            </button>
          )}

          {/* Tombol Stop Suara */}
          {(isSpeaking || isPaused) && (
            <button
              onClick={onStop}
              title="Hentikan Suara"
              aria-label="Hentikan Suara"
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-rose-300 transition-all border border-slate-700 active:scale-95"
            >
              <Square className="w-5 h-5 fill-current" />
            </button>
          )}

          {/* Pengatur Kecepatan Bicara */}
          <select
            value={ttsRate}
            onChange={(e) => onChangeRate(parseFloat(e.target.value))}
            title="Kecepatan Bicara"
            aria-label="Kecepatan Bicara"
            className="bg-slate-800 text-amber-300 text-xs font-semibold py-2 px-2.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-red-400 cursor-pointer"
          >
            <option value="0.8">0.8x (Santai)</option>
            <option value="1.0">1.0x (Normal)</option>
            <option value="1.25">1.25x (Cepat)</option>
            <option value="1.5">1.5x (Kilat)</option>
          </select>

          {/* Toggle Suara Mute / Unmute */}
          <button
            onClick={onToggleTts}
            title={ttsEnabled ? 'Matikan Suara' : 'Aktifkan Suara'}
            aria-label={ttsEnabled ? 'Matikan Suara' : 'Aktifkan Suara'}
            className={`p-2.5 rounded-xl transition-all border ${
              ttsEnabled
                ? 'bg-red-700/60 hover:bg-red-600 text-white border-red-500/50'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-400 border-slate-700'
            }`}
          >
            {ttsEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};
