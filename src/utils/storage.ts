/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – PERSISTENSI PROGRESS LOCALSTORAGE
 * Pengajar: Mister Jo
 */

import { UserProgress, UserAnswerState, TextSizeSetting } from '../types';
import { ALL_QUESTIONS } from '../data/questions';

const STORAGE_KEY = 'fisika_jenius_progress_v1';

export const INITIAL_PROGRESS: UserProgress = {
  answers: {},
  totalScore: 0,
  lastActiveQuestion: 1,
  startedAt: Date.now(),
  updatedAt: Date.now(),
  ttsEnabled: true,
  ttsRate: 1.0,
  textSize: 'normal',
};

export const loadUserProgress = (): UserProgress => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...INITIAL_PROGRESS, startedAt: Date.now() };
    const parsed = JSON.parse(raw) as UserProgress;
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      answers: parsed.answers || {},
    };
  } catch (e) {
    console.error('Gagal memuat progress dari localStorage:', e);
    return { ...INITIAL_PROGRESS, startedAt: Date.now() };
  }
};

export const saveUserProgress = (progress: UserProgress): void => {
  try {
    const updated = { ...progress, updatedAt: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Gagal menyimpan progress ke localStorage:', e);
  }
};

export const clearUserProgress = (): UserProgress => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Gagal mereset progress di localStorage:', e);
  }
  return { ...INITIAL_PROGRESS, startedAt: Date.now() };
};

export const evaluateAnswer = (
  questionId: number,
  selection: string | string[] | (boolean | null)[]
): UserAnswerState => {
  const q = ALL_QUESTIONS.find((item) => item.id === questionId);
  if (!q) {
    return {
      answered: true,
      userSelection: selection,
      isCorrect: false,
      scoreEarned: 0,
      submittedAt: Date.now(),
    };
  }

  let isCorrect = false;
  let scoreEarned = 0;

  if (q.type === 'pg') {
    isCorrect = (selection as string) === (q.correctAnswer as string);
    scoreEarned = isCorrect ? 1.0 : 0.0;
  } else if (q.type === 'pgk') {
    const userArr = Array.isArray(selection) ? (selection as string[]).slice().sort() : [];
    const correctArr = Array.isArray(q.correctAnswer) ? (q.correctAnswer as string[]).slice().sort() : [];
    const sameLength = userArr.length === correctArr.length;
    const allMatch = sameLength && userArr.every((val, idx) => val === correctArr[idx]);

    isCorrect = allMatch;
    // Pilihan ganda kompleks: penilaian ketepatan kombinasi (skor penuh jika 100% pas, skor parsial proporsional jika benar sebagian tanpa jawaban salah)
    if (allMatch) {
      scoreEarned = 1.0;
    } else {
      // Hitung ketepatan per opsi
      const truePositives = userArr.filter((val) => correctArr.includes(val)).length;
      const falsePositives = userArr.filter((val) => !correctArr.includes(val)).length;
      if (falsePositives === 0 && truePositives > 0) {
        scoreEarned = truePositives / correctArr.length;
      } else {
        scoreEarned = 0;
      }
    }
  } else if (q.type === 'bs') {
    const userBoolArr = Array.isArray(selection) ? (selection as (boolean | null)[]) : [];
    const correctBoolArr = Array.isArray(q.correctAnswer) ? (q.correctAnswer as boolean[]) : [];
    let correctCount = 0;
    for (let i = 0; i < 3; i++) {
      if (userBoolArr[i] === correctBoolArr[i]) {
        correctCount++;
      }
    }
    scoreEarned = correctCount / 3.0;
    isCorrect = correctCount === 3;
  }

  return {
    answered: true,
    userSelection: selection,
    isCorrect,
    scoreEarned,
    submittedAt: Date.now(),
  };
};

export const calculateTotalStats = (progress: UserProgress) => {
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let totalScoreWeight = 0;

  ALL_QUESTIONS.forEach((q) => {
    const ans = progress.answers[q.id];
    if (ans && ans.answered) {
      answeredCount++;
      totalScoreWeight += ans.scoreEarned;
      if (ans.isCorrect) {
        correctCount++;
      } else {
        wrongCount++;
      }
    }
  });

  const finalScore100 = Math.round((totalScoreWeight / 30) * 100);
  const accuracyPercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return {
    answeredCount,
    correctCount,
    wrongCount,
    unansweredCount: 30 - answeredCount,
    finalScore100,
    accuracyPercent,
    isCompleted: answeredCount === 30,
  };
};
