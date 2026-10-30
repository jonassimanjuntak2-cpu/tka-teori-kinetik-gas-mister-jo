/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – PETA MATERI 7 KELOMPOK TEORI KINETIK GAS
 * Pengajar: Mister Jo
 */

import React from 'react';
import {
  Map,
  Volume2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Atom,
  Flame,
  Wind,
  Layers,
  Gauge,
  GitCompare,
  Zap,
} from 'lucide-react';
import { MATERIAL_GROUPS } from '../../data/formulas';
import { ALL_QUESTIONS } from '../../data/questions';
import { UserProgress } from '../../types';

interface CurriculumMapProps {
  progress: UserProgress;
  onSelectQuestion: (questionId: number) => void;
  onSpeakMapOverview: () => void;
}

export const CurriculumMap: React.FC<CurriculumMapProps> = ({
  progress,
  onSelectQuestion,
  onSpeakMapOverview,
}) => {
  const getGroupIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom':
        return <Atom className="w-5 h-5 text-red-600" />;
      case 'GitCompare':
        return <GitCompare className="w-5 h-5 text-rose-600" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-sky-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-600" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-emerald-600" />;
      default:
        return <Map className="w-5 h-5 text-red-600" />;
    }
  };

  const getQuestionStatus = (id: number) => {
    const ans = progress.answers[id];
    if (!ans || !ans.answered) return { label: 'Belum Dijawab', color: 'bg-slate-100 text-slate-600', icon: HelpCircle };
    if (ans.isCorrect) return { label: 'Benar', color: 'bg-emerald-100 text-emerald-800', icon: CheckCircle2 };
    return { label: 'Salah', color: 'bg-rose-100 text-rose-800', icon: XCircle };
  };

  const getTypeLabel = (type: 'pg' | 'pgk' | 'bs') => {
    if (type === 'pg') return { label: 'PG', color: 'bg-red-50 text-red-700 border-red-200' };
    if (type === 'pgk') return { label: 'PGK', color: 'bg-amber-50 text-amber-700 border-amber-200' };
    return { label: 'Benar-Salah', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
  };

  return (
    <div className="space-y-8 py-4 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header Peta Materi */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <Map className="w-4 h-4" />
            KURIKULUM LENGKAP TKA
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Peta Materi 7 Kelompok Teori Kinetik Gas
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Jelajahi alur kompetensi, sebaran 30 soal, serta pantau status penguasaan materi Anda di setiap kelompok secara real-time!
          </p>
        </div>

        <button
          onClick={onSpeakMapOverview}
          className="flex-shrink-0 px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg transition-all active:scale-95 flex items-center gap-2"
          aria-label="Dengarkan Ulasan Peta Materi"
        >
          <Volume2 className="w-5 h-5" />
          <span>Ulasan Mister Jo</span>
        </button>
      </div>

      {/* Grid 7 Kelompok Materi */}
      <div className="space-y-6">
        {MATERIAL_GROUPS.map((group) => {
          const groupQuestions = ALL_QUESTIONS.filter((q) => q.groupId === group.id);
          const answeredInGroup = groupQuestions.filter((q) => progress.answers[q.id]?.answered).length;
          const correctInGroup = groupQuestions.filter((q) => progress.answers[q.id]?.isCorrect).length;
          const percentDone = Math.round((answeredInGroup / group.totalQuestions) * 100);

          return (
            <div
              key={group.id}
              className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:border-red-300 transition-all space-y-4"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-red-50 border border-red-100 mt-1">
                    {getGroupIcon(group.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-red-100 text-red-800">
                        Kelompok {group.number}
                      </span>
                      <h2 className="text-xl font-extrabold text-slate-900">{group.name}</h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">{group.description}</p>
                  </div>
                </div>

                {/* Progress bar kelompok */}
                <div className="flex items-center gap-4 min-w-[200px]">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-600 mb-1">
                      <span>Progres</span>
                      <span className="font-mono text-red-700 font-bold">
                        {correctInGroup}/{group.totalQuestions} Benar ({percentDone}%)
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-300"
                        style={{ width: `${percentDone}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Daftar Soal dalam Kelompok Ini */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
                {groupQuestions.map((q) => {
                  const status = getQuestionStatus(q.id);
                  const type = getTypeLabel(q.type);
                  const StatusIcon = status.icon;

                  return (
                    <button
                      key={q.id}
                      onClick={() => onSelectQuestion(q.id)}
                      className="p-3.5 rounded-2xl border border-slate-200 hover:border-red-500 hover:bg-red-50/30 text-left transition-all group flex flex-col justify-between"
                      aria-label={`Buka Soal Nomor ${q.id}: ${q.title}`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="w-7 h-7 rounded-lg bg-red-900 text-white font-extrabold text-xs flex items-center justify-center font-mono group-hover:bg-red-600 transition-colors">
                          {q.id}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${type.color}`}>
                          {type.label}
                        </span>
                      </div>

                      <h3 className="text-xs font-bold text-slate-800 line-clamp-2 mb-2 group-hover:text-red-700 transition-colors">
                        {q.title}
                      </h3>

                      <div className="flex items-center justify-between w-full pt-2 border-t border-slate-100 text-[11px]">
                        <span className={`px-2 py-0.5 rounded-full font-semibold flex items-center gap-1 ${status.color}`}>
                          <StatusIcon className="w-3 h-3" />
                          {status.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-red-600 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
