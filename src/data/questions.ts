/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – 30 SOAL NUMERIK HOTS TEORI KINETIK GAS
 * Pengajar: Mister Jo
 */

import { Question } from '../types';
import { QUESTIONS_GROUP_1 } from './questionsGroup1';
import { QUESTIONS_GROUP_2 } from './questionsGroup2';
import { QUESTIONS_GROUP_3 } from './questionsGroup3';
import { QUESTIONS_GROUP_4 } from './questionsGroup4';
import { QUESTIONS_GROUP_5 } from './questionsGroup5';
import { QUESTIONS_GROUP_6 } from './questionsGroup6';
import { QUESTIONS_GROUP_7 } from './questionsGroup7';

export const ALL_QUESTIONS: Question[] = [
  ...QUESTIONS_GROUP_1, // 1 to 5 (5 soal: K1)
  ...QUESTIONS_GROUP_2, // 6 to 10 (5 soal: K2)
  ...QUESTIONS_GROUP_3, // 11 to 14 (4 soal: K3)
  ...QUESTIONS_GROUP_4, // 15 to 18 (4 soal: K4)
  ...QUESTIONS_GROUP_5, // 19 to 22 (4 soal: K5)
  ...QUESTIONS_GROUP_6, // 23 to 26 (4 soal: K6)
  ...QUESTIONS_GROUP_7, // 27 to 30 (4 soal: K7)
];

export const getQuestionById = (id: number): Question | undefined => {
  return ALL_QUESTIONS.find((q) => q.id === id);
};

export const getQuestionsByGroup = (groupId: string): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.groupId === groupId);
};

export const getQuestionsByType = (type: 'pg' | 'pgk' | 'bs'): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.type === type);
};
