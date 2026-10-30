/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – TEORI KINETIK GAS
 * Pengajar: Mister Jo
 */

export type QuestionType = 'pg' | 'pgk' | 'bs';

export type MaterialGroupId =
  | 'persamaan-umum'
  | 'dua-keadaan'
  | 'gas-bocor'
  | 'energi-kinetik'
  | 'energi-dalam'
  | 'ekuipartisi'
  | 'kecepatan-efektif';

export interface MaterialGroupInfo {
  id: MaterialGroupId;
  number: number;
  name: string;
  shortName: string;
  description: string;
  totalQuestions: number;
  iconName: string;
}

export interface FormulaItem {
  id: string;
  groupId: MaterialGroupId;
  nama: string;
  rumusLatex: string;
  rumusPlain: string;
  keteranganSimbol: { simbol: string; arti: string; satuan: string }[];
  kondisiPenggunaan: string;
  penjelasanSingkat: string;
  audioText: string;
}

export interface StatementItem {
  id: number;
  text: string;
  correct: boolean;
  explanation: string;
}

export interface OptionItem {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
  explanation?: string;
}

export interface QuestionStimulus {
  text: string;
  table?: {
    caption?: string;
    headers: string[];
    rows: (string | number)[][];
  };
  graphType?:
    | 'pv-cycle'
    | 'p-t'
    | 'v-t'
    | 'ek-t'
    | 'vrms-t'
    | 'leakage-p-t'
    | 'dof-heat'
    | 'two-tanks'
    | 'piston-cylinder'
    | 'kinetic-particles'
    | 'none';
  graphTitle?: string;
  graphDetails?: Record<string, any>;
}

export interface RumusKunci {
  nama: string;
  rumusLatex: string;
  rumusPlain: string;
  keteranganSimbol: { simbol: string; arti: string; satuan: string }[];
  kondisiPenggunaan: string;
  alasanPemilihan: string;
}

export interface Pembahasan {
  memahamiSoal: {
    diketahui: string[];
    ditanyakan: string;
    infoPenting: string;
  };
  identifikasiKonsep: {
    konsep: string;
    alasan: string;
  };
  rumusKunci: string;
  langkahPenyelesaian: string[];
  analisisJawaban: {
    mengapaBenar: string;
    opsiLain: string;
  };
  kesimpulan: string;
  tipsMengerjakan: string;
}

export interface CaraCepatMisterJo {
  judulTrik: string;
  hubunganMatematis: string;
  substitusiSingkat: string;
  trikHindariHitungPanjang: string;
  caraCekKewajaran: string;
  kapanDigunakan: string;
}

export interface AudioScript {
  stimulus: string;
  soal: string;
  rumusKunci: string;
  pembahasan: string;
  caraCepat: string;
  kesimpulan: string;
}

export interface Question {
  id: number;
  groupId: MaterialGroupId;
  groupTitle: string;
  type: QuestionType;
  title: string;
  stimulus: QuestionStimulus;
  questionPrompt: string;
  options?: OptionItem[]; // For PG & PGK (5 options A-E)
  statements?: StatementItem[]; // For BS (exactly 3 statements)
  correctAnswer: string | string[] | boolean[]; // For PG: 'A', for PGK: ['A', 'C'], for BS: [true, false, true]
  rumusKunci: RumusKunci;
  pembahasan: Pembahasan;
  caraCepatMisterJo: CaraCepatMisterJo;
  audioScript: AudioScript;
}

export interface UserAnswerState {
  answered: boolean;
  userSelection: string | string[] | (boolean | null)[];
  isCorrect: boolean;
  scoreEarned: number; // 0 to 1 scale per question
  submittedAt: number;
}

export type TextSizeSetting = 'normal' | 'besar' | 'ekstra-besar';

export interface UserProgress {
  answers: Record<number, UserAnswerState>;
  totalScore: number;
  lastActiveQuestion: number;
  startedAt: number;
  updatedAt: number;
  ttsEnabled: boolean;
  ttsRate: number;
  textSize: TextSizeSetting;
}
