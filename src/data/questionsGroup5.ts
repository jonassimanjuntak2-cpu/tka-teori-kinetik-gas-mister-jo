/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 5: ENERGI DALAM GAS IDEAL (4 SOAL)
 * Q19: PG, Q20: PGK, Q21: BS, Q22: PG
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_5: Question[] = [
  // SOAL 19 (PG)
  {
    id: 19,
    groupId: 'energi-dalam',
    groupTitle: 'Kelompok 5: Energi Dalam Gas Ideal',
    type: 'pg',
    title: 'Energi Dalam Gas Diatomik Oksigen pada Ruang Inkubator',
    stimulus: {
      text: 'Sebuah inkubator riset biologi menggunakan ruang steril tertutup bervolume tetap yang diisi gas Oksigen murni (O₂, gas diatomik) sebanyak n = 2,0 mol. Suhu di dalam inkubator dikendalikan secara stabil pada suhu kamar 27 °C (300 K). Pada rentang temperatur kamar ini (sekitar 300 K), molekul diatomik Oksigen aktif bergerak dalam 3 mode translasi dan 2 mode rotasi (derajat kebebasan f = 5), sementara mode vibrasi belum tereksitasi aktif. Gas Oksigen diasumsikan berperilaku sebagai gas ideal dengan konstanta gas universal R = 8,31 J/(mol·K).',
      table: {
        caption: 'Data Kondisi Inkubator Gas Oksigen',
        headers: ['Parameter', 'Nilai', 'Keterangan'],
        rows: [
          ['Jumlah Zat (n)', '2,0 mol', 'Gas Oksigen O₂ (Diatomik)'],
          ['Suhu Ruang (T)', '27 °C (300 K)', 'Suhu kamar termostatik'],
          ['Derajat Kebebasan (f)', 'f = 5', '3 Translasi + 2 Rotasi'],
          ['Tetapan Gas (R)', '8,31 J/(mol·K)', 'Konstanta gas universal'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Distribusi Derajat Kebebasan Molekul Diatomik pada Suhu Kamar',
    },
    questionPrompt: 'Berdasarkan teori kinetik gas ideal, besar energi dalam total (U) yang tersimpan pada gas Oksigen di dalam inkubator tersebut adalah...',
    options: [
      { id: 'A', text: '7,48 kJ (7.479 Joule)' },
      { id: 'B', text: '9,97 kJ (9.972 Joule)' },
      { id: 'C', text: '12,47 kJ (12.465 Joule)' },
      { id: 'D', text: '14,96 kJ (14.958 Joule)' },
      { id: 'E', text: '17,45 kJ (17.451 Joule)' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Energi Dalam Gas Diatomik Suhu Sedang (f = 5)',
      rumusLatex: 'U = \\frac{f}{2} n R T = \\frac{5}{2} n R T',
      rumusPlain: 'U = (5/2) * n * R * T',
      keteranganSimbol: [
        { simbol: 'U', arti: 'Energi dalam total gas', satuan: 'Joule (J)' },
        { simbol: 'f', arti: 'Derajat kebebasan aktif (f = 5 untuk diatomik suhu kamar)', satuan: 'tanpa satuan' },
        { simbol: 'n', arti: 'Jumlah mol gas', satuan: '2,0 mol' },
        { simbol: 'R', arti: 'Konstanta gas universal', satuan: '8,31 J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak', satuan: '300 K' },
      ],
      kondisiPenggunaan: 'Digunakan khusus untuk gas diatomik (seperti O2, N2, H2) pada rentang suhu sedang (±250 K - 500 K).',
      alasanPemilihan: 'Gas diatomik pada suhu kamar memiliki 5 derajat kebebasan aktif (bukan 3 seperti gas monoatomik).',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 2,0 mol gas diatomik Oksigen (O₂)',
          'T = 27 °C = 300 K',
          'Suhu kamar → derajat kebebasan f = 5 (3 translasi + 2 rotasi)',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Energi dalam total U dalam satuan kJ.',
        infoPenting: 'Identifikasi jenis gas diatomik pada suhu kamar mewajibkan penggunaan f = 5, bukan f = 3!',
      },
      identifikasiKonsep: {
        konsep: 'Energi Dalam Gas Ideal Diatomik Berdasarkan Teori Derajat Kebebasan.',
        alasan: 'Energi dalam merupakan penjumlahan energi seluruh molekul pada semua derajat kebebasan aktif.',
      },
      rumusKunci: 'U = (5/2) n R T',
      langkahPenyelesaian: [
        'Langkah 1: Tentukan derajat kebebasan: f = 5 (karena gas diatomik pada 300 K)',
        'Langkah 2: Substitusikan ke rumus energi dalam:',
        'U = (5/2) × 2,0 mol × 8,31 J/(mol·K) × 300 K',
        'U = 5 × (8,31 × 300) J',
        '8,31 × 300 = 2.493 J/mol',
        'U = 5 × 2.493 J = 12.465 Joule = 12,465 kJ ≈ 12,47 kJ',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C benar karena 5 × 2.493 = 12.465 J = 12,47 kJ.',
        opsiLain: 'Opsi A (7,48 kJ) terjadi jika siswa keliru menganggap Oksigen sebagai gas monoatomik (memakai f = 3 → 3 × 2.493 = 7.479 J). Opsi E (17,45 kJ) terjadi jika memakai f = 7 (suhu tinggi). Opsi B dan D berasal dari kesalahan aritmatika.',
      },
      kesimpulan: 'Energi dalam gas Oksigen di dalam inkubator adalah 12,47 kJ (12.465 Joule).',
      tipsMengerjakan: 'Pahami klasifikasi f: Gas monoatomik (He, Ne, Ar) SELALU f = 3. Gas diatomik (O2, N2, H2): pada suhu rendah (<250 K) f = 3; suhu kamar (300 K - 500 K) f = 5; suhu tinggi (>1000 K) f = 7.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Coret Angka 2: (5/2) × 2 = 5',
      hubunganMatematis: 'Karena n = 2 mol, maka (5/2) × 2 langsung saling mencoret menjadi 5!',
      substitusiSingkat: 'RT pada 300 K ≈ 2.500 J. Maka U = 5 × 2.500 = 12.500 J = 12,5 kJ ≈ 12,47 kJ!',
      trikHindariHitungPanjang: 'Cukup kalikan 5 dengan 2.493: 5 × 2.500 - 5 × 7 = 12.500 - 35 = 12.465 J!',
      caraCekKewajaran: 'Energi kinetik translasi murni adalah 3/2 nRT = 7,48 kJ. Ditambah energi rotasi 2/2 nRT = 4,99 kJ. Total = 7,48 + 4,99 = 12,47 kJ.',
      kapanDigunakan: 'Sangat cocok untuk gas diatomik dengan mol genap pada suhu kamar.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti gas Oksigen diatomik sebanyak 2 mol di dalam ruang inkubator pada suhu 27 derajat Celsius.',
      soal: 'Berapakah energi dalam total gas Oksigen tersebut?',
      rumusKunci: 'Rumus kuncinya U sama dengan lima per dua dikali n kali R kali T, karena Oksigen adalah gas diatomik pada suhu kamar dengan f sama dengan 5.',
      pembahasan: 'Faktor lima per dua dikali 2 mol menghasilkan tepat 5. Lima dikali 8,31 dikali 300 Kelvin menghasilkan 12.465 Joule atau 12,47 kiloJoule.',
      caraCepat: 'Trik Mister Jo: Jangan pakai rumus f sama dengan 3! Oksigen punya 5 derajat kebebasan. Coret angka dua pada pecahan dengan 2 mol, langsung kalikan 5 dengan 2.500, ketemu 12 koma 5 kiloJoule dalam tiga detik!',
      kesimpulan: 'Jawaban yang benar adalah opsi C, 12,47 kiloJoule.',
    },
  },

  // SOAL 20 (PGK)
  {
    id: 20,
    groupId: 'energi-dalam',
    groupTitle: 'Kelompok 5: Energi Dalam Gas Ideal',
    type: 'pgk',
    title: 'Perbandingan Pemanasan Gas Monoatomik (He) dan Diatomik (N2)',
    stimulus: {
      text: 'Dua buah tabung silinder kaku A dan B dipanaskan bersamaan sehingga masing-masing suhunya mengalami kenaikan yang sama persis sebesar ΔT = 50 K (atau 50 °C). Tabung A berisi nA = 3,0 mol gas Helium (monoatomik He, f = 3), sedangkan tabung B berisi nB = 2,0 mol gas Nitrogen (diatomik N₂, f = 5 pada rentang suhu kamar pengujian). Kedua sistem tidak mengalami perubahan volume dan tidak ada gas yang bocor. Konstanta gas ideal R = 8,31 J/(mol·K).',
      table: {
        caption: 'Kondisi Pengujian Pemanasan Tabung A dan Tabung B',
        headers: ['Wadah', 'Gas', 'Mol (n)', 'Derajat Kebebasan (f)', 'Kenaikan Suhu (ΔT)'],
        rows: [
          ['Tabung A', 'Helium (Monoatomik)', '3,0 mol', 'f = 3', 'ΔT = 50 K'],
          ['Tabung B', 'Nitrogen (Diatomik)', '2,0 mol', 'f = 5', 'ΔT = 50 K'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Perbandingan Kenaikan Energi Dalam terhadap Kenaikan Suhu',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR mengenai perubahan energi dalam (ΔU) pada kedua wadah tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Perubahan energi dalam gas Helium pada tabung A adalah sekitar 1.870 Joule (1,87 kJ).' },
      { id: 'B', text: 'Perubahan energi dalam gas Nitrogen pada tabung B adalah sekitar 2.078 Joule (2,08 kJ).' },
      { id: 'C', text: 'Perbandingan perubahan energi dalam pada tabung A terhadap tabung B adalah ΔUA : ΔUB = 9 : 10.' },
      { id: 'D', text: 'Meskipun jumlah mol gas Helium lebih banyak (3 mol vs 2 mol), gas Nitrogen menyerap lebih banyak energi dalam karena memiliki derajat kebebasan yang lebih tinggi.' },
      { id: 'E', text: 'Perubahan energi dalam gas ideal bergantung pada volume awal bejana gas.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    rumusKunci: {
      nama: 'Perubahan Energi Dalam Multi-Spesies Gas',
      rumusLatex: '\\Delta U = \\frac{f}{2} n R \\Delta T, \\quad \\frac{\\Delta U_A}{\\Delta U_B} = \\frac{f_A \\cdot n_A}{f_B \\cdot n_B}',
      rumusPlain: 'Delta U = (f/2) * n * R * Delta T dan Delta UA / Delta UB = (fA * nA) / (fB * nB)',
      keteranganSimbol: [
        { simbol: 'ΔU', arti: 'Perubahan energi dalam', satuan: 'Joule' },
        { simbol: 'fA, fB', arti: 'Derajat kebebasan gas He (3) dan N2 (5)', satuan: 'tanpa satuan' },
        { simbol: 'nA, nB', arti: 'Jumlah mol (3 mol dan 2 mol)', satuan: 'mol' },
        { simbol: 'ΔT', arti: 'Kenaikan temperatur mutlak', satuan: '50 K' },
      ],
      kondisiPenggunaan: 'Digunakan saat membandingkan absorpsi energi dalam berbagai jenis gas ideal.',
      alasanPemilihan: 'Menunjukkan bagaimana interaksi antara jumlah partikel (n) dan struktur internal molekul (f) menentukan kapasitas energi sistem.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Tabung A: He (monoatomik, fA = 3), nA = 3,0 mol, ΔT = 50 K',
          'Tabung B: N₂ (diatomik, fB = 5), nB = 2,0 mol, ΔT = 50 K',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Evaluasi kebenaran seluruh pilihan pernyataan A, B, C, D, E.',
        infoPenting: 'ΔT sama untuk kedua tabung sehingga rasio ΔUA : ΔUB murni ditentukan oleh perkalian f × n.',
      },
      identifikasiKonsep: {
        konsep: 'Perubahan Energi Dalam Sistem Gas Monoatomik vs Diatomik.',
        alasan: 'Molekul diatomik memiliki kapasitas tampung energi termal lebih besar per mol karena memiliki mode rotasi.',
      },
      rumusKunci: 'ΔU = (f/2) n R ΔT',
      langkahPenyelesaian: [
        '1. Hitung ΔUA (Tabung A He): ΔUA = (3/2) × 3,0 × 8,31 × 50 = 4,5 × 415,5 = 1.869,75 J ≈ 1.870 J. (Pernyataan A BENAR)',
        '2. Hitung ΔUB (Tabung B N₂): ΔUB = (5/2) × 2,0 × 8,31 × 50 = 5,0 × 415,5 = 2.077,5 J ≈ 2.078 J. (Pernyataan B BENAR)',
        '3. Rasio Perubahan Energi Dalam: ΔUA / ΔUB = (fA · nA) / (fB · nB) = (3 × 3) / (5 × 2) = 9 / 10 = 0,90. Jadi ΔUA : ΔUB = 9 : 10. (Pernyataan C BENAR)',
        '4. Analisis Fisis: Perkalian fA·nA = 9, sedangkan fB·nB = 10. Karena 10 > 9, gas Nitrogen pada tabung B menyerap pertambahan energi dalam lebih besar dibanding gas Helium di tabung A. Derajat kebebasan yang lebih tinggi mengungguli perbedaan jumlah mol. (Pernyataan D BENAR)',
        '5. Analisis Pernyataan E: Menurut hukum termodinamika gas ideal klasik (Hukum Joule), energi dalam gas ideal HANYA fungsi dari temperatur T (U = U(T)), dan sama sekali tidak bergantung pada volume wadah V. (Pernyataan E SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan D benar secara kuantitatif dan kualitatif fisis. Rasio 9 : 10, nilai 1.870 J dan 2.078 J tepat.',
        opsiLain: 'Pernyataan E salah karena energi dalam gas ideal tidak bergantung pada volume, melainkan hanya pada temperatur mutlak T.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
      tipsMengerjakan: 'Untuk mencari perbandingan ΔU pada kenaikan suhu yang sama, cukup kalikan derajat kebebasan f dengan mol n! Tabung A: 3 × 3 = 9. Tabung B: 5 × 2 = 10. Rasionya langsung 9 : 10!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Cepat Perkalian (f × n)',
      hubunganMatematis: 'ΔU sebanding lurus dengan (f × n) jika ΔT sama.',
      substitusiSingkat: 'Tabung A: 3 × 3 = 9. Tabung B: 5 × 2 = 10. Rasio ΔUA : ΔUB = 9 : 10 seketika!',
      trikHindariHitungPanjang: 'Tak perlu mengalikan R = 8,31 dan ΔT = 50 dua kali. Cukup gunakan faktor 9 dan 10!',
      caraCekKewajaran: '1.870 / 2.078 = 0,8999 ≈ 0,90 (tepat 9/10). Sempurna!',
      kapanDigunakan: 'Dapat digunakan pada seluruh soal perbandingan energi dalam gas multijenis.',
    },
    audioScript: {
      stimulus: 'Perhatikan pemanasan gas Helium 3 mol dan gas Nitrogen 2 mol dengan kenaikan suhu yang sama 50 Kelvin.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya delta U sama dengan f per dua dikali n kali R kali delta T.',
      pembahasan: 'Perubahan energi dalam Helium adalah 1.870 Joule dan Nitrogen adalah 2.078 Joule. Perbandingannya adalah 9 banding 10. Meskipun mol Helium lebih banyak, gas Nitrogen menyerap lebih banyak energi karena memiliki derajat kebebasan yang lebih besar.',
      caraCepat: 'Trik Mister Jo: Pada kenaikan suhu yang sama, cukup kalikan derajat kebebasan f dengan mol n! Helium dapat 3 dikali 3 sama dengan 9. Nitrogen dapat 5 dikali 2 sama dengan 10. Perbandingannya langsung 9 banding 10 tanpa ribet!',
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
    },
  },

  // SOAL 21 (BS)
  {
    id: 21,
    groupId: 'energi-dalam',
    groupTitle: 'Kelompok 5: Energi Dalam Gas Ideal',
    type: 'bs',
    title: 'Evaluasi Konseptual Energi Dalam pada Berbagai Proses Termodinamika',
    stimulus: {
      text: 'Seorang guru fisika mengajukan tiga premis teoretis kepada siswanya mengenai sifat dasar energi dalam (U) pada gas ideal. Guru tersebut meminta siswa menguji keabsahan setiap premis berdasarkan hukum pertama termodinamika dan teori kinetik gas ideal klasik.',
      table: {
        caption: 'Karakteristik Energi Dalam Gas Ideal pada Berbagai Kondisi',
        headers: ['Proses Termodinamika', 'Persamaan Perubahan Energi Dalam', 'Ketergantungan Variabel'],
        rows: [
          ['Umum', 'U = (f/2) n R T', 'Hanya fungsi suhu mutlak T'],
          ['Isotermal', 'ΔT = 0 → ΔU = 0', 'Suhu konstan maka energi dalam konstan'],
          ['Isobarik / Isokhorik', 'ΔU = (f/2) n R ΔT', 'Perubahan suhu menentukan ΔU'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Isotermal vs Isobarik dalam Kacamata Energi Dalam',
    },
    questionPrompt: 'Nilailah kebenaran dari masing-masing pernyataan fisika berikut:',
    statements: [
      {
        id: 1,
        text: 'Berdasarkan Hukum Joule untuk gas ideal, energi dalam suatu sistem gas ideal hanya bergantung pada suhu mutlaknya (U = U(T)), serta tidak bergantung pada tekanan maupun volume wadah.',
        correct: true,
        explanation: 'Pada gas ideal, diasumsikan tidak ada gaya tarik-menarik antarmolekul (potensial intermolekul = 0). Oleh karena itu, energi dalam murni merupakan akumulasi energi kinetik mikroskopis yang hanya merupakan fungsi dari temperatur mutlak T. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Pada sembarang proses isotermal yang dialami oleh gas ideal tertutup, perubahan energi dalam gas selalu bernilai nol (ΔU = 0), meskipun gas melakukan usaha luar atau menyerap kalor dari lingkungan.',
        correct: true,
        explanation: 'Pada proses isotermal, suhu awal sama dengan suhu akhir (T1 = T2 sehingga ΔT = 0). Karena ΔU = (f/2) n R ΔT, maka nilai ΔU dipastikan tepat nol. Semua kalor yang diserap dialihkan sepenuhnya menjadi usaha (Q = W). Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Jika 1 mol gas Helium (monoatomik) dan 1 mol gas Oksigen (diatomik pada suhu kamar) berada pada suhu mutlak yang sama, maka gas Helium memiliki energi dalam yang lebih besar dibanding gas Oksigen.',
        correct: false,
        explanation: 'U = (f/2) nRT. Untuk Helium (monoatomik) f = 3 sehingga U_He = 3/2 nRT. Untuk Oksigen (diatomik suhu kamar) f = 5 sehingga U_O2 = 5/2 nRT. Karena 5/2 > 3/2, maka energi dalam Oksigen justru lebih besar (5/3 kali lipat) dibanding Helium. Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Hukum Joule Gas Ideal & Teorema Derajat Kebebasan',
      rumusLatex: 'U(T) = \\frac{f}{2} n R T, \\quad \\Delta U = \\frac{f}{2} n R \\Delta T',
      rumusPlain: 'U = (f/2) * n * R * T dan Delta U = (f/2) * n * R * Delta T',
      keteranganSimbol: [
        { simbol: 'U', arti: 'Energi dalam gas ideal', satuan: 'Joule' },
        { simbol: 'f', arti: 'Derajat kebebasan (mono=3, dia=5)', satuan: 'tanpa satuan' },
        { simbol: 'ΔT', arti: 'Perubahan suhu mutlak', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat memverifikasi aksioma termodinamika gas ideal.',
      alasanPemilihan: 'Memastikan siswa memahami bahwa ketiadaan energi potensial intermolekul membuat U semata-mata fungsi T.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Gas ideal tanpa interaksi potensial molekuler',
          'Proses isotermal: T konstan (ΔT = 0)',
          'Helium (monoatomik, f=3) vs Oksigen (diatomik, f=5)',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan teoretis.',
        infoPenting: 'Hukum pertama termodinamika: ΔU = Q - W. Jika ΔT = 0 maka ΔU = 0.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Joule, Proses Isotermal, dan Perbandingan Energi Dalam Berdasarkan Derajat Kebebasan.',
        alasan: 'Merupakan materi inti pengujian pemahaman konseptual tingkat lanjut.',
      },
      rumusKunci: 'U = (f/2) nRT dan ΔU = (f/2) nR ΔT',
      langkahPenyelesaian: [
        '1. Pernyataan 1: Untuk gas ideal klasik, dU = (∂U/∂T)_V dT + (∂U/∂V)_T dV. Karena gas ideal tidak memiliki gaya tarik intermolekuler, (∂U/∂V)_T = 0 (Eksperimen Joule). Maka U murni hanya fungsi suhu T. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Pada proses isotermal, T1 = T2 maka ΔT = 0. Mengakibatkan ΔU = (f/2) n R (0) = 0 secara mutlak. (Pernyataan 2 BENAR)',
        '3. Pernyataan 3: U_He = (3/2) nRT, sedangkan U_O2 = (5/2) nRT. Rasio U_He / U_O2 = 3 / 5 = 0,60. Energi dalam Helium lebih KECIL, bukan lebih besar! (Pernyataan 3 SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 dan 2 benar secara teoretis termodinamika. Pernyataan 3 salah karena gas diatomik memiliki mode rotasi tambahan sehingga menyimpan energi dalam lebih banyak.',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Ingat kata kunci: "Isotermal = Suhu Tetap = Perubahan Energi Dalam PASTI NOL (ΔU = 0)"!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Mantra Sakti: Isotermal Pasti ΔU = 0',
      hubunganMatematis: 'ΔT = 0 ⟹ ΔU = 0 mutlak!',
      substitusiSingkat: 'Untuk gas monoatomik vs diatomik: f=3 vs f=5. Jelas f=5 menyimpan lebih banyak energi!',
      trikHindariHitungPanjang: 'Cukup amati derajat kebebasan f! Yang f-nya lebih besar, energi dalamnya lebih tinggi.',
      caraCekKewajaran: 'Molekul beratom dua selain bisa bergerak lurus juga bisa berputar jungkir balik (rotasi), tentu energinya lebih banyak.',
      kapanDigunakan: 'Sangat sering muncul pada soal konseptual UTBK Saintek.',
    },
    audioScript: {
      stimulus: 'Mari cermati tiga premis penting mengenai sifat dasar energi dalam pada gas ideal.',
      soal: 'Nilailah kebenaran dari masing-masing pernyataan berikut.',
      rumusKunci: 'Rumus kuncinya U sama dengan f per dua n R T, dan delta U sama dengan f per dua n R delta T.',
      pembahasan: 'Pernyataan 1 benar, energi dalam gas ideal murni hanya bergantung pada suhu mutlak. Pernyataan 2 benar, pada proses isotermal delta T sama dengan nol sehingga delta U selalu nol. Pernyataan 3 salah, karena gas diatomik memiliki 5 derajat kebebasan sehingga energi dalamnya lebih besar dari gas monoatomik.',
      caraCepat: 'Trik Mister Jo: Ingat mantra sakti, pada proses isotermal suhu tidak berubah maka delta U pasti nol! Dan molekul diatomik f-nya 5, pasti lebih berenergi dibanding monoatomik yang f-nya 3!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 22 (PG)
  {
    id: 22,
    groupId: 'energi-dalam',
    groupTitle: 'Kelompok 5: Energi Dalam Gas Ideal',
    type: 'pg',
    title: 'Pemanasan Isokhorik Gas Argon dalam Tabung Kaca Pyrex',
    stimulus: {
      text: 'Di laboratorium spektroskopi gas, sampel gas Argon murni (gas monoatomik Ar, f = 3, massa molar M = 40 g/mol) sebanyak n = 1,5 mol ditempatkan di dalam tabung kaca Pyrex kaku tertutup bervolume tetap (isokhorik). Pemanas filamen listrik menyuplai kalor sehingga suhu gas Argon naik secara bertahap dari suhu awal 20 °C (293 K) hingga mencapai suhu akhir 100 °C (373 K). Diketahui konstanta gas universal R = 8,31 J/(mol·K).',
      table: {
        caption: 'Data Perubahan Termal Sampel Gas Argon',
        headers: ['Parameter', 'Nilai Awal', 'Nilai Akhir', 'Selisih Perubahan (Δ)'],
        rows: [
          ['Suhu Celsius (t)', '20 °C', '100 °C', 'Δt = 80 °C'],
          ['Suhu Mutlak (T)', '293 K', '373 K', 'ΔT = 80 K'],
          ['Jumlah Mol (n)', '1,5 mol', '1,5 mol', 'Tetap (isokhorik tertutup)'],
          ['Derajat Kebebasan', 'f = 3', 'f = 3', 'Monoatomik konstan'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Kenaikan Energi Dalam terhadap Perubahan Suhu ΔT',
    },
    questionPrompt: 'Besar kenaikan atau perubahan energi dalam (ΔU) gas Argon di dalam tabung kaca tersebut adalah sekitar...',
    options: [
      { id: 'A', text: '997 Joule' },
      { id: 'B', text: '1.247 Joule' },
      { id: 'C', text: '1.496 Joule' },
      { id: 'D', text: '1.870 Joule' },
      { id: 'E', text: '2.493 Joule' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Perubahan Energi Dalam Gas Monoatomik (f = 3)',
      rumusLatex: '\\Delta U = \\frac{3}{2} n R \\Delta T',
      rumusPlain: 'Delta U = (3/2) * n * R * Delta T',
      keteranganSimbol: [
        { simbol: 'ΔU', arti: 'Perubahan energi dalam', satuan: 'Joule (J)' },
        { simbol: 'n', arti: 'Jumlah mol gas Argon', satuan: '1,5 mol' },
        { simbol: 'R', arti: 'Konstanta gas universal', satuan: '8,31 J/(mol·K)' },
        { simbol: 'ΔT', arti: 'Kenaikan suhu (373 K - 293 K)', satuan: '80 K' },
      ],
      kondisiPenggunaan: 'Digunakan untuk menghitung pertambahan energi dalam gas monoatomik yang mengalami kenaikan suhu ΔT.',
      alasanPemilihan: 'Gas Argon adalah gas mulia monoatomik dengan f = 3 pada segala rentang suhu wajar.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 1,5 mol gas monoatomik Argon (f = 3)',
          't1 = 20 °C (293 K), t2 = 100 °C (373 K)',
          'ΔT = 373 - 293 = 80 K (selisih dalam Celsius dan Kelvin bernilai persis sama!)',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Kenaikan energi dalam (ΔU) dalam Joule.',
        infoPenting: 'Selisih suhu Δt = 100 - 20 = 80 °C nilainya PERSIS SAMA dengan selisih Kelvin ΔT = 80 K.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Energi Dalam Gas Monoatomik dan Kesetaraan Selisih Skala Suhu.',
        alasan: 'Argon monoatomik memiliki f = 3 sehingga rumus ΔU = (3/2) n R ΔT berlaku penuh.',
      },
      rumusKunci: 'ΔU = (3/2) n R ΔT',
      langkahPenyelesaian: [
        'Langkah 1: Hitung selisih suhu mutlak: ΔT = 373 K - 293 K = 80 K',
        'Langkah 2: Substitusikan ke rumus: ΔU = (3/2) × n × R × ΔT',
        'ΔU = 1,5 × 1,5 mol × 8,31 J/(mol·K) × 80 K',
        '1,5 × 1,5 = 2,25',
        '2,25 × 80 = 180',
        'ΔU = 180 × 8,31 J = 1.495,8 Joule ≈ 1.496 Joule',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C benar karena 180 × 8,31 = 1.495,8 J ≈ 1.496 Joule.',
        opsiLain: 'Opsi A (997 J) terjadi jika siswa mengabaikan faktor 3/2 (hanya menghitung nRΔT = 1,5 × 8,31 × 80 = 997,2 J). Opsi D (1.870 J) terjadi jika salah menggunakan f = 5 (diatomik). Opsi B dan E akibat kesalahan faktor pengali.',
      },
      kesimpulan: 'Besar kenaikan energi dalam gas Argon adalah 1.496 Joule.',
      tipsMengerjakan: 'Perhatikan keajaiban angka: 2,25 × 80 = 180 bulat! Kalikan 180 dengan 8,31: 180 × 8,31 = 1.495,8 Joule.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Angka Bulat 2,25 × 80 = 180',
      hubunganMatematis: 'ΔU = 2,25 × R × 80 = 180 × R.',
      substitusiSingkat: '180 × 8,31 ≈ 180 × 8,3 = 1.494 J ≈ 1.496 Joule!',
      trikHindariHitungPanjang: 'Kalikan 2,25 dengan 80 terlebih dahulu untuk mendapatkan angka bulat 180, baru kalikan 8,31!',
      caraCekKewajaran: '180 × 8 = 1.440. Sedikit lebih besar dari 1.440 adalah 1.496 J. Sangat presisi!',
      kapanDigunakan: 'Sangat cocok untuk gas monoatomik 1,5 mol.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti pemanasan 1,5 mol gas Argon di dalam tabung kaca dari suhu 20 hingga 100 derajat Celsius.',
      soal: 'Berapakah kenaikan energi dalam gas Argon tersebut?',
      rumusKunci: 'Rumus kuncinya delta U sama dengan tiga per dua dikali n kali R kali delta T.',
      pembahasan: 'Selisih suhunya adalah 80 Kelvin. Tiga per dua dikali 1,5 mol adalah 2,25. Dikalikan 80 menghasilkan 180. Seratus delapan puluh dikali 8,31 menghasilkan 1.496 Joule.',
      caraCepat: 'Trik Mister Jo: Selisih suhu Celsius langsung sama dengan selisih Kelvin! Kalikan 2,25 dengan 80 menghasilkan 180 bulat! Kalikan dengan 8,31, langsung ketemu 1.496 Joule dalam hitungan detik!',
      kesimpulan: 'Jawaban yang benar adalah opsi C, 1.496 Joule.',
    },
  },
];
