/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – BANK RUMUS LENGKAP TEORI KINETIK GAS
 * Pengajar: Mister Jo
 */

import React, { useState } from 'react';
import {
  FileSpreadsheet,
  Volume2,
  Search,
  Filter,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { FORMULA_BANK, MATERIAL_GROUPS } from '../../data/formulas';
import { MathRenderer } from '../MathRenderer';

interface FormulaBankViewProps {
  onSpeakFormula: (formulaTitle: string, spokenText: string) => void;
}

export const FormulaBankView: React.FC<FormulaBankViewProps> = ({ onSpeakFormula }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFormulas = FORMULA_BANK.filter((item) => {
    const matchGroup = selectedGroup === 'all' || item.groupId === selectedGroup;
    const matchSearch =
      item.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.penjelasanSingkat.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kondisiPenggunaan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGroup && matchSearch;
  });

  return (
    <div className="space-y-8 py-4 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header Bank Rumus */}
      <div className="bg-gradient-to-r from-red-900 via-rose-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-red-500/30">
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-700/80 text-amber-300 text-xs font-bold">
            <FileSpreadsheet className="w-4 h-4" />
            KATALOG RUMUS ILMIAH RESMI
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Bank Rumus Teori Kinetik Gas
          </h1>
          <p className="text-rose-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            Kompilasi rumus ilmiah berstandar buku teks fisika dengan penjelasan variabel, satuan SI, batasan kondisi berlaku, dan pelafalan audio langsung oleh Mister Jo.
          </p>
        </div>
      </div>

      {/* Filter dan Pencarian */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama rumus atau variabel..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* Group Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-2 md:pb-0 scrollbar-none">
          <button
            onClick={() => setSelectedGroup('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedGroup === 'all'
                ? 'bg-red-700 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Semua ({FORMULA_BANK.length})
          </button>
          {MATERIAL_GROUPS.map((g) => (
            <button
              key={g.id}
              onClick={() => setSelectedGroup(g.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedGroup === g.id
                  ? 'bg-red-700 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {g.shortName}
            </button>
          ))}
        </div>
      </div>

      {/* Daftar Kartu Rumus */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredFormulas.map((f) => {
          const groupMeta = MATERIAL_GROUPS.find((g) => g.id === f.groupId);

          return (
            <div
              key={f.id}
              className="bg-white rounded-3xl border-2 border-slate-200 hover:border-red-400 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700 border border-red-200">
                    {groupMeta?.shortName || 'Teori Kinetik Gas'}
                  </span>

                  {/* Tombol Audio Pelafalan Rumus */}
                  <button
                    onClick={() => onSpeakFormula(f.nama, f.audioText)}
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold transition-all flex items-center gap-1 text-xs"
                    title="Dengarkan Pengucapan Rumus oleh Mister Jo"
                    aria-label={`Dengarkan rumus ${f.nama}`}
                  >
                    <Volume2 className="w-4 h-4" />
                    <span>Dengarkan</span>
                  </button>
                </div>

                <h2 className="text-lg font-extrabold text-slate-900 leading-snug">{f.nama}</h2>

                {/* Display Rumus KaTeX Vertikal Rapi */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-red-50/60 to-rose-50/40 border border-red-200 text-center overflow-x-auto my-2">
                  <MathRenderer math={f.rumusLatex} displayMode={true} fallbackText={f.rumusPlain} />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {f.penjelasanSingkat}
                </p>

                {/* Tabel Keterangan Simbol & Satuan */}
                <div className="pt-2">
                  <span className="text-xs uppercase font-extrabold text-slate-400 tracking-wider block mb-1.5">
                    Keterangan Variabel & Satuan SI:
                  </span>
                  <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 space-y-1.5">
                    {f.keteranganSimbol.map((sim, i) => (
                      <div key={i} className="flex items-baseline justify-between text-xs gap-2">
                        <span className="font-mono font-bold text-red-800">{sim.simbol}</span>
                        <span className="text-slate-600 flex-1 text-left px-2">{sim.arti}</span>
                        <span className="font-mono text-slate-500 text-[11px] bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {sim.satuan}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Kondisi Penggunaan */}
              <div className="pt-3 border-t border-slate-100 text-xs text-slate-600 bg-amber-50/60 p-3 rounded-2xl border border-amber-200/60">
                <strong className="text-amber-900 block mb-0.5 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Kondisi Kapan Rumus Digunakan:
                </strong>
                <span>{f.kondisiPenggunaan}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
