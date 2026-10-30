/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – MODAL DIALOG RESET PROGRESS
 * Pengajar: Mister Jo
 */

import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';

interface ResetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ResetModal: React.FC<ResetModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-red-200 transform animate-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Tutup Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <h3 id="modal-title" className="text-xl font-bold text-slate-900 mb-2">
          Reset Seluruh Progress Latihan?
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          Apakah Anda yakin ingin menghapus seluruh progress latihan? Semua jawaban dan nilai yang
          tersimpan akan dihapus dan Anda akan memulai kembali dari nomor 1. Tindakan ini tidak dapat
          dibatalkan.
        </p>

        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-sm"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold transition-all shadow-md active:scale-95 text-sm flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Ya, Hapus Semua Progress
          </button>
        </div>
      </div>
    </div>
  );
};
