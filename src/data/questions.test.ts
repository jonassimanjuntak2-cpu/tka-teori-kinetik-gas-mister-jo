/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – UNIT TEST DATA SOAL & LOGIKA EVALUASI
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_QUESTIONS } from './questions';

test('Memverifikasi Tepat 30 Soal', () => {
  assert.equal(ALL_QUESTIONS.length, 30, 'Total soal wajib tepat 30 soal');
});

test('Memverifikasi Urutan ID 1 sampai 30 tanpa terputus', () => {
  for (let i = 0; i < 30; i++) {
    assert.equal(ALL_QUESTIONS[i].id, i + 1, `Soal pada indeks ${i} harus memiliki id ${i + 1}`);
  }
});

test('Memverifikasi Distribusi 7 Kelompok Materi Sesuai Kuota', () => {
  const k1 = ALL_QUESTIONS.filter((q) => q.groupId === 'persamaan-umum').length;
  const k2 = ALL_QUESTIONS.filter((q) => q.groupId === 'dua-keadaan').length;
  const k3 = ALL_QUESTIONS.filter((q) => q.groupId === 'gas-bocor').length;
  const k4 = ALL_QUESTIONS.filter((q) => q.groupId === 'energi-kinetik').length;
  const k5 = ALL_QUESTIONS.filter((q) => q.groupId === 'energi-dalam').length;
  const k6 = ALL_QUESTIONS.filter((q) => q.groupId === 'ekuipartisi').length;
  const k7 = ALL_QUESTIONS.filter((q) => q.groupId === 'kecepatan-efektif').length;

  assert.equal(k1, 5, 'Kelompok 1 (Persamaan Umum Gas Ideal) harus tepat 5 soal');
  assert.equal(k2, 5, 'Kelompok 2 (Persamaan Dua Keadaan) harus tepat 5 soal');
  assert.equal(k3, 4, 'Kelompok 3 (Gas Bocor dan Nonbocor) harus tepat 4 soal');
  assert.equal(k4, 4, 'Kelompok 4 (Energi Kinetik Gas) harus tepat 4 soal');
  assert.equal(k5, 4, 'Kelompok 5 (Energi Dalam Gas) harus tepat 4 soal');
  assert.equal(k6, 4, 'Kelompok 6 (Teori Ekuipartisi Energi) harus tepat 4 soal');
  assert.equal(k7, 4, 'Kelompok 7 (Kecepatan Efektif RMS) harus tepat 4 soal');
});

test('Memverifikasi Distribusi Tipe Soal Tepat 10 PG, 10 PGK, 10 BS', () => {
  const pgCount = ALL_QUESTIONS.filter((q) => q.type === 'pg').length;
  const pgkCount = ALL_QUESTIONS.filter((q) => q.type === 'pgk').length;
  const bsCount = ALL_QUESTIONS.filter((q) => q.type === 'bs').length;

  assert.equal(pgCount, 10, 'Pilihan Ganda biasa harus tepat 10 soal');
  assert.equal(pgkCount, 10, 'Pilihan Ganda Kompleks harus tepat 10 soal');
  assert.equal(bsCount, 10, 'Benar-Salah harus tepat 10 soal');
});

test('Memverifikasi Integritas Opsi PG dan PGK (Tepat 5 Opsi A-E)', () => {
  const pgAndPgk = ALL_QUESTIONS.filter((q) => q.type === 'pg' || q.type === 'pgk');
  for (const q of pgAndPgk) {
    assert.ok(q.options, `Soal ID ${q.id} harus memiliki options`);
    assert.equal(q.options?.length, 5, `Soal ID ${q.id} harus memiliki tepat 5 pilihan (A-E)`);
    const optionIds = q.options?.map((o) => o.id).join('');
    assert.equal(optionIds, 'ABCDE', `Soal ID ${q.id} harus berurutan A, B, C, D, E`);

    if (q.type === 'pg') {
      assert.equal(typeof q.correctAnswer, 'string', `Soal PG ID ${q.id} harus berupa string tunggal`);
      assert.ok(['A', 'B', 'C', 'D', 'E'].includes(q.correctAnswer as string), `Kunci PG ${q.id} harus valid A-E`);
    } else {
      assert.ok(Array.isArray(q.correctAnswer), `Soal PGK ID ${q.id} kunci harus array`);
      assert.ok((q.correctAnswer as string[]).length >= 1, `Soal PGK ID ${q.id} harus memiliki minimal 1 kunci`);
    }
  }
});

test('Memverifikasi Integritas Soal Benar-Salah (Tepat 3 Pernyataan)', () => {
  const bsQuestions = ALL_QUESTIONS.filter((q) => q.type === 'bs');
  for (const q of bsQuestions) {
    assert.ok(q.statements, `Soal BS ID ${q.id} harus memiliki statements`);
    assert.equal(q.statements?.length, 3, `Soal BS ID ${q.id} harus memiliki tepat 3 pernyataan`);
    assert.ok(Array.isArray(q.correctAnswer), `Kunci BS ID ${q.id} harus array`);
    assert.equal((q.correctAnswer as boolean[]).length, 3, `Kunci BS ID ${q.id} harus memiliki 3 nilai boolean`);

    const statements = q.statements || [];
    for (let sIdx = 0; sIdx < 3; sIdx++) {
      const statementItem = statements[sIdx];
      assert.ok(statementItem, `Statement ${sIdx + 1} must exist`);
      assert.equal(typeof statementItem.correct, 'boolean', `Statement ${sIdx + 1} soal ${q.id} harus boolean`);
      assert.equal(statementItem.correct, (q.correctAnswer as boolean[])[sIdx], `Statement correct harus cocok dengan kunci`);
      assert.ok(statementItem.explanation && statementItem.explanation.length > 5, `Statement ${sIdx + 1} soal ${q.id} harus punya penjelasan`);
    }
  }
});

test('Memverifikasi Kelengkapan 7 Bagian Pembahasan Wajib pada Seluruh 30 Soal', () => {
  for (const q of ALL_QUESTIONS) {
    assert.ok(q.pembahasan, `Soal ID ${q.id} harus memiliki pembahasan`);
    assert.ok(q.pembahasan.memahamiSoal, `Soal ID ${q.id} harus punya memahamiSoal`);
    assert.ok(q.pembahasan.memahamiSoal.diketahui.length > 0, `Soal ID ${q.id} harus punya diketahui`);
    assert.ok(q.pembahasan.memahamiSoal.ditanyakan, `Soal ID ${q.id} harus punya ditanyakan`);
    assert.ok(q.pembahasan.identifikasiKonsep.konsep, `Soal ID ${q.id} harus punya identifikasiKonsep`);
    assert.ok(q.pembahasan.rumusKunci, `Soal ID ${q.id} harus punya rumusKunci`);
    assert.ok(q.pembahasan.langkahPenyelesaian.length >= 2, `Soal ID ${q.id} harus punya langkahPenyelesaian`);
    assert.ok(q.pembahasan.analisisJawaban.mengapaBenar, `Soal ID ${q.id} harus punya mengapaBenar`);
    assert.ok(q.pembahasan.kesimpulan, `Soal ID ${q.id} harus punya kesimpulan`);
    assert.ok(q.pembahasan.tipsMengerjakan, `Soal ID ${q.id} harus punya tipsMengerjakan`);
  }
});

test('Memverifikasi Bagian Rumus Kunci dan Cara Cepat Mister Jo pada Seluruh 30 Soal', () => {
  for (const q of ALL_QUESTIONS) {
    // Rumus Kunci
    assert.ok(q.rumusKunci, `Soal ID ${q.id} harus punya rumusKunci`);
    assert.ok(q.rumusKunci.nama, `Soal ID ${q.id} harus punya nama rumus kunci`);
    assert.ok(q.rumusKunci.rumusLatex, `Soal ID ${q.id} harus punya rumusLatex`);
    assert.ok(q.rumusKunci.keteranganSimbol.length >= 2, `Soal ID ${q.id} harus punya keterangan simbol`);
    assert.ok(q.rumusKunci.kondisiPenggunaan, `Soal ID ${q.id} harus punya kondisi penggunaan`);
    assert.ok(q.rumusKunci.alasanPemilihan, `Soal ID ${q.id} harus punya alasan pemilihan`);

    // Cara Cepat Mister Jo
    assert.ok(q.caraCepatMisterJo, `Soal ID ${q.id} harus punya caraCepatMisterJo`);
    assert.ok(q.caraCepatMisterJo.judulTrik, `Soal ID ${q.id} harus punya judul trik`);
    assert.ok(q.caraCepatMisterJo.hubunganMatematis, `Soal ID ${q.id} harus punya hubungan matematis`);
    assert.ok(q.caraCepatMisterJo.substitusiSingkat, `Soal ID ${q.id} harus punya substitusi singkat`);
    assert.ok(q.caraCepatMisterJo.trikHindariHitungPanjang, `Soal ID ${q.id} harus punya trik hindari hitung panjang`);
    assert.ok(q.caraCepatMisterJo.caraCekKewajaran, `Soal ID ${q.id} harus punya cara cek kewajaran`);
    assert.ok(q.caraCepatMisterJo.kapanDigunakan, `Soal ID ${q.id} harus punya kapan digunakan`);

    // Audio Script
    assert.ok(q.audioScript, `Soal ID ${q.id} harus punya audioScript`);
    assert.ok(q.audioScript.stimulus, `Soal ID ${q.id} harus punya audio stimulus`);
    assert.ok(q.audioScript.soal, `Soal ID ${q.id} harus punya audio soal`);
    assert.ok(q.audioScript.pembahasan, `Soal ID ${q.id} harus punya audio pembahasan`);
    assert.ok(q.audioScript.caraCepat, `Soal ID ${q.id} harus punya audio cara cepat`);
  }
});
