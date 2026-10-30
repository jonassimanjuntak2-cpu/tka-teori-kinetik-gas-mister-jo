/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 2: PERSAMAAN DUA KEADAAN GAS IDEAL (5 SOAL)
 * Q6: BS, Q7: PG, Q8: PGK, Q9: BS, Q10: PG
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_2: Question[] = [
  // SOAL 6 (BS)
  {
    id: 6,
    groupId: 'dua-keadaan',
    groupTitle: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    type: 'bs',
    title: 'Analisis Siklus Termodinamika Segitiga P-V Gas Ideal',
    stimulus: {
      text: 'Sejumlah mol gas ideal diatomik menjalani siklus termodinamika tertutup A → B → C → A seperti yang tertera pada diagram P-V. Proses A → B adalah ekspansi isobarik pada tekanan konstan PA = PB = 2,0 × 10⁵ Pa dengan pertambahan volume dari VA = 2,0 Liter menjadi VB = 6,0 Liter. Pada titik A, suhu mutlak gas terukur TA = 300 K. Selanjutnya, proses B → C adalah pendinginan isokhorik pada volume tetap hingga tekanannya turun menjadi PC = 1,0 × 10⁵ Pa. Siklus ditutup dengan proses kompresi linier C → A kembali ke kondisi mula-mula.',
      table: {
        caption: 'Koordinat Keadaan Titik Siklus P-V',
        headers: ['Titik Titik Keadaan', 'Tekanan (P)', 'Volume (V)', 'Suhu (T)'],
        rows: [
          ['Keadaan A', '2,0 × 10⁵ Pa', '2,0 Liter', '300 K'],
          ['Keadaan B', '2,0 × 10⁵ Pa', '6,0 Liter', 'TB (dihitung)'],
          ['Keadaan C', '1,0 × 10⁵ Pa', '6,0 Liter', 'TC (dihitung)'],
        ],
      },
      graphType: 'pv-cycle',
      graphTitle: 'Diagram Siklus Termodinamika Tekanan vs Volume (P-V)',
    },
    questionPrompt: 'Berdasarkan hukum dua keadaan gas ideal, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Suhu gas pada titik keadaan B setelah mengalami pemanasan isobarik adalah tepat sebesar 900 K (627 °C).',
        correct: true,
        explanation: 'Pada proses isobarik (P tetap), V sebanding dengan T. VB / VA = 6/2 = 3. Maka TB = 3 × TA = 3 × 300 K = 900 K. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Suhu gas pada titik keadaan C setelah mengalami penurunan tekanan isokhorik adalah 450 K (177 °C).',
        correct: true,
        explanation: 'Pada proses isokhorik (V tetap), P sebanding dengan T. PC / PB = (1,0 × 10⁵) / (2,0 × 10⁵) = 1/2. Maka TC = (1/2) × TB = (1/2) × 900 K = 450 K. Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Perbandingan suhu terendah terhadap suhu tertinggi gas di dalam seluruh siklus tersebut adalah 1 : 2.',
        correct: false,
        explanation: 'Suhu pada titik A adalah 300 K (terendah), titik B adalah 900 K (tertinggi), dan titik C adalah 450 K. Rasio suhu terendah terhadap tertinggi adalah TA : TB = 300 : 900 = 1 : 3, BUKAN 1 : 2. Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Hukum Isobarik (Charles) & Isokhorik (Gay-Lussac)',
      rumusLatex: '\\text{A}\\to\\text{B (Isobarik): } \\frac{V_A}{T_A} = \\frac{V_B}{T_B}, \\quad \\text{B}\\to\\text{C (Isokhorik): } \\frac{P_B}{T_B} = \\frac{P_C}{T_C}',
      rumusPlain: 'TB = TA * (VB/VA) dan TC = TB * (PC/PB)',
      keteranganSimbol: [
        { simbol: 'TA, TB, TC', arti: 'Suhu mutlak di tiap titik siklus', satuan: 'Kelvin' },
        { simbol: 'VA, VB', arti: 'Volume pada proses isobarik', satuan: 'Liter' },
        { simbol: 'PB, PC', arti: 'Tekanan pada proses isokhorik', satuan: 'Pa' },
      ],
      kondisiPenggunaan: 'Digunakan saat menguraikan proses termodinamika per tahapan pada diagram grafik P-V.',
      alasanPemilihan: 'Karena mol gas terkurung konstan, relasi P1V1/T1 = P2V2/T2 berlaku pada setiap titik lintasan.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Titik A: PA = 2 × 10⁵ Pa, VA = 2 L, TA = 300 K',
          'Titik B: PB = 2 × 10⁵ Pa, VB = 6 L (Isobarik)',
          'Titik C: PC = 1 × 10⁵ Pa, VC = 6 L (Isokhorik)',
        ],
        ditanyakan: 'Kebenaran pernyataan 1, 2, dan 3.',
        infoPenting: 'Siklus tertutup dengan jumlah partikel gas konstan.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Dua Keadaan Gas Ideal pada Siklus Termodinamika Grafis P-V.',
        alasan: 'Hubungan proporsionalitas V terhadap T (isobarik) dan P terhadap T (isokhorik).',
      },
      rumusKunci: 'TB = TA(VB/VA) dan TC = TB(PC/PB)',
      langkahPenyelesaian: [
        '1. Titik B (Isobarik): TB = TA × (VB / VA) = 300 K × (6,0 L / 2,0 L) = 300 K × 3 = 900 K. (Pernyataan 1 BENAR)',
        '2. Titik C (Isokhorik): TC = TB × (PC / PB) = 900 K × (1,0 × 10⁵ / 2,0 × 10⁵) = 900 K × 0,5 = 450 K. (Pernyataan 2 BENAR)',
        '3. Evaluasi Rentang Suhu Siklus: TA = 300 K (suhu minimum), TB = 900 K (suhu maksimum), TC = 450 K. Rasio T_min : T_max = 300 : 900 = 1 : 3. Klaim pernyataan yang menyebut 1 : 2 adalah keliru. (Pernyataan 3 SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 dan 2 terbukti benar dari rumus Boyle-Gay Lussac. Pernyataan 3 salah karena rasionya adalah 1 : 3.',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Pada diagram P-V, nilai perkalian P × V berbanding lurus dengan suhu T. Cukup hitung PA·VA = 4, PB·VB = 12, PC·VC = 6. Maka rasionya adalah 4 : 12 : 6 = 2 : 6 : 3, sehingga TA : TB : TC = 300 K : 900 K : 450 K!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Cepat Perkalian Koordinat P × V',
      hubunganMatematis: 'Karena n dan R konstan, maka T sebanding lurus dengan nilai (P × V).',
      substitusiSingkat: 'Titik A: 2 × 2 = 4 (mewakili 300 K). Titik B: 2 × 6 = 12 (karena 12 adalah 3 × 4, maka TB = 3 × 300 = 900 K!). Titik C: 1 × 6 = 6 (karena 6 adalah 1,5 × 4, maka TC = 1,5 × 300 = 450 K!).',
      trikHindariHitungPanjang: 'Cukup kalikan angka sumbu P dan sumbu V di setiap titik sudut! Nilai P×V langsung menunjukkan perbandingan suhu mutlak secara instan!',
      caraCekKewajaran: 'Suhu tertinggi pasti di titik terjauh dari titik asal (0,0), yaitu titik B (P=2, V=6).',
      kapanDigunakan: 'Dapat digunakan pada seluruh grafik siklus P-V gas ideal apapun bentuknya!',
    },
    audioScript: {
      stimulus: 'Perhatikan diagram P-V siklus segitiga ABC berikut ini.',
      soal: 'Evaluasilah apakah ketiga pernyataan tentang suhu pada siklus ini bernilai Benar atau Salah.',
      rumusKunci: 'Rumus kuncinya P satu kali V satu per T satu sama dengan P dua kali V dua per T dua.',
      pembahasan: 'Pernyataan 1 benar, suhu di titik B adalah 900 Kelvin. Pernyataan 2 benar, suhu di titik C adalah 450 Kelvin. Pernyataan 3 salah, karena rasio suhu terendah terhadap tertinggi adalah 300 banding 900 yaitu 1 banding 3, bukan 1 banding 2.',
      caraCepat: 'Trik Mister Jo: Suhu sebanding dengan P dikali V! Titik A bernilai 4, titik B bernilai 12, dan titik C bernilai 6. Langsung ketahuan suhunya 300, 900, dan 450 Kelvin tanpa rumus berbelit-belit!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 7 (PG)
  {
    id: 7,
    groupId: 'dua-keadaan',
    groupTitle: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    type: 'pg',
    title: 'Kompresi Dinamis pada Silinder Aktuator Pneumatik Kereta',
    stimulus: {
      text: 'Sistem pengereman kereta cepat menggunakan tabung aktuator pneumatik berpiston ganda. Pada kondisi rileks sebelum pengereman, udara terkurung di dalam silinder memiliki volume awal V1 = 12,0 Liter, tekanan terukur P1 = 1,0 atm, dan suhu kamar 27 °C (300 K). Ketika masinis menginjak rem darurat, piston hidrolik bergerak cepat memampatkan udara hingga volumenya menyusut tajam menjadi V2 = 3,0 Liter. Akibat kompresi cepat dan disipasi panas gesekan dinding silinder, suhu udara di dalam tabung melonjak naik menjadi 127 °C (400 K).',
      table: {
        caption: 'Parameter Termodinamika Aktuator Pneumatik',
        headers: ['Keadaan', 'Volume (V)', 'Suhu (T)', 'Tekanan (P)'],
        rows: [
          ['Kondisi Awal (1)', '12,0 Liter', '27 °C (300 K)', '1,0 atm'],
          ['Kondisi Terkompresi (2)', '3,0 Liter', '127 °C (400 K)', 'P₂ (dicari)'],
        ],
      },
      graphType: 'piston-cylinder',
      graphTitle: 'Ilustrasi Kompresi Udara Silinder Pneumatik',
    },
    questionPrompt: 'Dengan menganggap udara di dalam silinder berperilaku sebagai gas ideal dan tidak ada kebocoran udara sama sekali, tekanan akhir P2 di dalam silinder tersebut adalah...',
    options: [
      { id: 'A', text: '3,00 atm' },
      { id: 'B', text: '4,00 atm' },
      { id: 'C', text: '5,33 atm' },
      { id: 'D', text: '6,25 atm' },
      { id: 'E', text: '8,00 atm' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Persamaan Umum Dua Keadaan (Boyle-Gay Lussac)',
      rumusLatex: '\\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2} \\implies P_2 = P_1 \\cdot \\left(\\frac{V_1}{V_2}\\right) \\cdot \\left(\\frac{T_2}{T_1}\\right)',
      rumusPlain: 'P2 = P1 * (V1 / V2) * (T2 / T1)',
      keteranganSimbol: [
        { simbol: 'P₁, P₂', arti: 'Tekanan awal dan akhir gas', satuan: 'atm' },
        { simbol: 'V₁, V₂', arti: 'Volume awal dan akhir gas', satuan: 'Liter' },
        { simbol: 'T₁, T₂', arti: 'Suhu mutlak awal dan akhir (Kelvin)', satuan: '300 K dan 400 K' },
      ],
      kondisiPenggunaan: 'Digunakan saat sistem tertutup (mol n tetap) mengalami perubahan volume dan suhu secara bersamaan.',
      alasanPemilihan: 'Persamaan ini secara analitis memisahkan kontribusi penyusutan volume dan kenaikan suhu terhadap kenaikan tekanan.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'V1 = 12,0 L, V2 = 3,0 L (penyusutan 4 kali lipat)',
          'P1 = 1,0 atm',
          'T1 = 27 °C = 300 K, T2 = 127 °C = 400 K',
          'Tidak ada kebocoran (n konstan)',
        ],
        ditanyakan: 'Tekanan akhir P2 dalam satuan atm.',
        infoPenting: 'Jangan lupa mengubah suhu Celsius ke Kelvin sebelum menghitung rasio T2/T1.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Gabungan Boyle-Gay Lussac untuk Sistem Non-Bocor.',
        alasan: 'Tekanan akhir dipengaruhi oleh dua efek: kompresi ruang dan eksitasi termal.',
      },
      rumusKunci: 'P2 = P1 × (V1 / V2) × (T2 / T1)',
      langkahPenyelesaian: [
        'Langkah 1: Tentukan rasio perubahan volume: V1 / V2 = 12,0 / 3,0 = 4,0',
        'Langkah 2: Tentukan rasio perubahan suhu mutlak: T2 / T1 = 400 K / 300 K = 4/3 ≈ 1,333',
        'Langkah 3: Hitung tekanan akhir P2: P2 = 1,0 atm × 4,0 × (4/3)',
        'P2 = 16 / 3 atm = 5,333 atm ≈ 5,33 atm',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C tepat karena perkalian faktor volume (4) dan faktor suhu (4/3) menghasilkan 16/3 = 5,33 atm.',
        opsiLain: 'Opsi B (4,00 atm) merupakan kesalahan fatal jika menganggap proses isotermal (mengabaikan perubahan suhu). Opsi A (3,00 atm) salah hitung. Opsi E (8,00 atm) terjadi jika rasio suhu menggunakan Celsius (127/27 ≈ 4,7).',
      },
      kesimpulan: 'Tekanan akhir udara di dalam aktuator pneumatik adalah 5,33 atm.',
      tipsMengerjakan: 'Pikirkan secara fisik: Volume mengecil 4 kali lipat, tekanan ingin naik 4 kali lipat. Suhu naik dari 300 K ke 400 K (faktor 4/3), tekanan makin terdorong naik. Jadi P2 = 1 × 4 × (4/3) = 16/3 = 5,33 atm.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Multiplikasi Faktor 4 × 4/3',
      hubunganMatematis: 'P2 = P1 × (faktor V) × (faktor T).',
      substitusiSingkat: 'Faktor volume = 12 / 3 = 4. Faktor suhu = 400 / 300 = 4/3. Maka P2 = 1 × 4 × (4/3) = 16 / 3 = 5,33 atm!',
      trikHindariHitungPanjang: 'Pecahan 16 dibagi 3 langsung diingat: 15/3 = 5, sisa 1/3 = 0,33 → 5,33 atm.',
      caraCekKewajaran: 'Tekanan harus lebih tinggi dari 4 atm (karena ada tambahan pemanasan), namun tidak setinggi 8 atm. 5,33 atm adalah angka yang sangat masuk akal.',
      kapanDigunakan: 'Sangat efektif saat volume dan suhu awal-akhir berupa kelipatan bulat yang mudah disederhanakan.',
    },
    audioScript: {
      stimulus: 'Mari kita kaji silinder pneumatik pengereman kereta bervolume awal 12 Liter yang dimampatkan menjadi 3 Liter saat suhunya naik dari 27 menjadi 127 derajat Celsius.',
      soal: 'Berapakah tekanan akhir udara di dalam tabung silinder?',
      rumusKunci: 'Rumus kuncinya P dua sama dengan P satu dikali V satu per V dua dikali T dua per T satu.',
      pembahasan: 'Volume mengecil empat kali lipat, sehingga faktor volume adalah empat. Suhu naik dari 300 Kelvin menjadi 400 Kelvin, sehingga faktor suhu adalah empat per tiga. Empat dikali empat per tiga adalah enam belas per tiga, yaitu lima koma tiga tiga atmosfer.',
      caraCepat: 'Trik Mister Jo: Cukup kalikan satu dikali empat dikali empat per tiga! Enam belas per tiga langsung ketemu lima koma tiga tiga dalam hitungan detik!',
      kesimpulan: 'Jawaban yang tepat adalah opsi C, 5,33 atmosfer.',
    },
  },

  // SOAL 8 (PGK)
  {
    id: 8,
    groupId: 'dua-keadaan',
    groupTitle: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    type: 'pgk',
    title: 'Eksperimen Dua Tahap Pemanasan Gas dalam Ruang Uji',
    stimulus: {
      text: 'Di laboratorium termofisika, 1,0 mol gas ideal diatomik berada di dalam wadah silinder bermuatan pegas dan katup pengunci. Pengujian dilakukan melalui dua tahapan berurutan:\n• Tahap I (Isokhorik): Gas mula-mula bervolume V1 = 5,0 Liter pada tekanan P1 = 2,0 × 10⁵ Pa dan suhu T1 = 300 K. Piston dikunci mati sehingga volume tetap, lalu dipanaskan hingga suhunya mencapai T2 = 600 K.\n• Tahap II (Isobarik): Kunci piston dilepas sehingga piston bebas bergerak menjaga tekanan konstan pada nilai P2, kemudian pemanasan dilanjutkan hingga suhu gas melonjak menjadi T3 = 900 K dan volumenya mengembang menjadi V3.',
      table: {
        caption: 'Tahapan Transformasi Keadaan Gas',
        headers: ['Tahap', 'Proses', 'Volume (V)', 'Tekanan (P)', 'Suhu (T)'],
        rows: [
          ['Kondisi Awal (1)', 'Mula-mula', '5,0 Liter', '2,0 × 10⁵ Pa', '300 K'],
          ['Kondisi Antara (2)', 'Isokhorik (V tetap)', '5,0 Liter', 'P₂ (dihitung)', '600 K'],
          ['Kondisi Akhir (3)', 'Isobarik (P tetap)', 'V₃ (dihitung)', 'P₂ (tetap)', '900 K'],
        ],
      },
      graphType: 'p-t',
      graphTitle: 'Lintasan Dua Tahap pada Bidang Tekanan-Suhu',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR mengenai parameter fisis gas pada akhir tahap I dan tahap II? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Tekanan gas pada akhir Tahap I (P2) berlipat dua menjadi 4,0 × 10⁵ Pa.' },
      { id: 'B', text: 'Volume gas pada akhir Tahap II (V3) mengembang menjadi 7,5 Liter.' },
      { id: 'C', text: 'Perbandingan volume akhir terhadap volume mula-mula adalah V3 : V1 = 3 : 2.' },
      { id: 'D', text: 'Tekanan gas pada kondisi akhir (P3) bernilai sama dengan tekanan awal mula-mula (P1).' },
      { id: 'E', text: 'Rasio perkalian (P3 · V3) terhadap (P1 · V1) bernilai tepat sama dengan rasio suhu mutlak T3 / T1 = 3 : 1.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    rumusKunci: {
      nama: 'Hukum Isokhorik Tahap I & Hukum Isobarik Tahap II',
      rumusLatex: 'P_2 = P_1 \\left(\\frac{T_2}{T_1}\\right), \\quad V_3 = V_2 \\left(\\frac{T_3}{T_2}\\right), \\quad \\frac{P_3 V_3}{P_1 V_1} = \\frac{T_3}{T_1}',
      rumusPlain: 'P2 = P1*(T2/T1) dan V3 = V2*(T3/T2)',
      keteranganSimbol: [
        { simbol: 'P₁, P₂', arti: 'Tekanan pada tahap isokhorik', satuan: 'Pa' },
        { simbol: 'V₂, V₃', arti: 'Volume pada tahap isobarik', satuan: 'Liter' },
        { simbol: 'T₁, T₂, T₃', arti: 'Suhu mutlak (300 K, 600 K, 900 K)', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat mengurai proses komposit bertahap (isokhorik dilanjutkan isobarik).',
      alasanPemilihan: 'Menganalisis hubungan keadaan per segmen memastikan tidak ada salah penerapan variabel konstan.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Kondisi 1: V1 = 5,0 L, P1 = 2,0 × 10⁵ Pa, T1 = 300 K',
          'Tahap I (Isokhorik): V2 = V1 = 5,0 L, T2 = 600 K',
          'Tahap II (Isobarik): P3 = P2, T3 = 900 K',
        ],
        ditanyakan: 'Evaluasi kebenaran opsi A, B, C, D, E.',
        infoPenting: 'Tahap I menjaga V tetap, Tahap II menjaga P tetap pada nilai P2.',
      },
      identifikasiKonsep: {
        konsep: 'Termodinamika Gas Dua Tahap (Isokhorik + Isobarik berturutan).',
        alasan: 'Membutuhkan penguasaan proses Gay-Lussac dan Charles secara terpadu.',
      },
      rumusKunci: 'P2 = P1 (T2/T1) dan V3 = V2 (T3/T2)',
      langkahPenyelesaian: [
        '1. Akhir Tahap I (Isokhorik): P2 / T2 = P1 / T1 → P2 = P1 × (T2 / T1) = 2,0 × 10⁵ Pa × (600 / 300) = 4,0 × 10⁵ Pa. (Pernyataan A BENAR)',
        '2. Akhir Tahap II (Isobarik): P3 = P2 = 4,0 × 10⁵ Pa. V3 / T3 = V2 / T2 → V3 = V2 × (T3 / T2) = 5,0 L × (900 / 600) = 5,0 L × 1,5 = 7,5 Liter. (Pernyataan B BENAR)',
        '3. Rasio Volume V3 / V1: V3 = 7,5 L dan V1 = 5,0 L → V3 : V1 = 7,5 : 5,0 = 3 : 2. (Pernyataan C BENAR)',
        '4. Periksa Opsi D: P3 bernilai 4,0 × 10⁵ Pa, sedangkan P1 mula-mula adalah 2,0 × 10⁵ Pa. Jadi P3 = 2 P1 ≠ P1. (Pernyataan D SALAH)',
        '5. Periksa Opsi E: (P3 · V3) / (P1 · V1) = (4,0 × 10⁵ × 7,5) / (2,0 × 10⁵ × 5,0) = (4 × 7,5) / (2 × 5) = 30 / 10 = 3. Sedangkan T3 / T1 = 900 / 300 = 3. Nilainya persis sama yaitu 3 : 1. (Pernyataan E BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan E bernilai benar secara fisika dan matematika. P2 berlipat dua menjadi 4 bar, V3 memuai menjadi 7,5 L (rasio 3:2), dan rasio PV sebanding dengan rasio T.',
        opsiLain: 'Pernyataan D salah karena tekanan akhir adalah 4 bar, dua kali lipat lebih besar dibanding tekanan awal mula-mula (2 bar).',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
      tipsMengerjakan: 'Pada gas tertutup (n tetap), perbandingan (P_akhir · V_akhir) / (P_awal · V_awal) SELALU bernilai persis sama dengan T_akhir / T_awal apapun tahapan proses yang dilaluinya!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Universal (P·V sebanding T)',
      hubunganMatematis: 'P·V sebanding lurus dengan T mutlak.',
      substitusiSingkat: 'T3 / T1 = 900 / 300 = 3. Karena P naik 2 kali lipat pada tahap 1, maka V harus naik 3 / 2 = 1,5 kali lipat pada tahap 2! V3 = 5 × 1,5 = 7,5 Liter langsung terbukti!',
      trikHindariHitungPanjang: 'Tak perlu mengulang rumus gas ideal dari nol, gunakan sifat kekekalan PV/T.',
      caraCekKewajaran: 'Suhu naik dari 300 K menjadi 900 K (3 kali lipat), wajar jika P naik 2x dan V naik 1,5x (2 × 1,5 = 3).',
      kapanDigunakan: 'Cocok untuk segala proses bertingkat dalam soal UTBK/TKA.',
    },
    audioScript: {
      stimulus: 'Simak eksperimen pemanasan gas dua tahap berikut: tahap pertama isokhorik sampai 600 Kelvin, dilanjutkan tahap kedua isobarik sampai 900 Kelvin.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya P dua sama dengan P satu dikali T dua per T satu, dan V tiga sama dengan V dua dikali T tiga per T dua.',
      pembahasan: 'Tekanan pada tahap satu naik dua kali menjadi empat kali sepuluh pangkat lima Pascal. Volume pada tahap dua naik menjadi tujuh koma lima Liter. Rasio volume adalah tiga banding dua. Dan rasio P kali V selalu sama dengan rasio suhu mutlak.',
      caraCepat: 'Trik Mister Jo: Suhu naik tiga kali lipat. Karena tekanan sudah naik dua kali, maka volume otomatis naik satu setengah kali menjadi tujuh koma lima Liter!',
      kesimpulan: 'Pernyataan yang benar adalah opsi A, B, C, dan E.',
    },
  },

  // SOAL 9 (BS)
  {
    id: 9,
    groupId: 'dua-keadaan',
    groupTitle: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    type: 'bs',
    title: 'Uji Validasi Hukum Charles pada Piston Bertekanan Konstan',
    stimulus: {
      text: 'Sekelompok siswa SMA melakukan percobaan fisika untuk memvalidasi Hukum Charles menggunakan silinder tegak berpiston bebas tanpa gesekan yang dibebani massa konstan 5,0 kg di atasnya (sehingga tekanan gas dipertahankan konstan pada 1,2 × 10⁵ Pa). Silinder dicelupkan ke dalam penangas air berpengatur suhu. Siswa mencatat volume gas pada berbagai variasi temperatur.',
      table: {
        caption: 'Data Hasil Eksperimen Hukum Charles',
        headers: ['Percobaan', 'Suhu Terukur (°C)', 'Suhu Mutlak (K)', 'Volume Terbaca (mL)'],
        rows: [
          ['1', '0 °C', '273 K', '546 mL'],
          ['2', '50 °C', '323 K', '646 mL'],
          ['3', '100 °C', '373 K', '746 mL'],
        ],
      },
      graphType: 'v-t',
      graphTitle: 'Grafik Garis Lurus Volume terhadap Suhu Termometer',
    },
    questionPrompt: 'Berdasarkan data eksperimen dan teori kinetik gas ideal, nilailah kebenaran dari ketiga pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Setiap kenaikan suhu sebesar 1 °C, volume gas bertambah secara konstan sebesar 2,0 mL.',
        correct: true,
        explanation: 'Dari 0 °C (546 mL) ke 50 °C (646 mL), kenaikan volume ΔV = 100 mL untuk Δt = 50 °C. Maka laju pemuaian ΔV/Δt = 100/50 = 2,0 mL/°C. Dari 50 °C ke 100 °C: ΔV/Δt = (746 - 646)/50 = 2,0 mL/°C. Nilainya konstan 2,0 mL/°C. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Jika grafik volume (V) terhadap suhu Celsius (t) diekstrapolasi ke arah kiri hingga volumenya bernilai nol (V = 0), garis akan memotong sumbu suhu tepat pada nilai t = -273 °C yang merepresentasikan nol mutlak.',
        correct: true,
        explanation: 'Persamaan garis: V = V0 + 2,0 t = 546 + 2,0 t. Saat V = 0 → 0 = 546 + 2,0 t → 2,0 t = -546 → t = -546 / 2 = -273 °C. Ini adalah definisi dasar penemuan skala Kelvin (nol mutlak). Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Volume gas pada suhu 100 °C bernilai tepat dua kali lipat dari volume gas pada suhu 50 °C.',
        correct: false,
        explanation: 'Pada 50 °C, V = 646 mL. Pada 100 °C, V = 746 mL. Nilai 746 mL JELAS BUKAN dua kali lipat dari 646 mL (2 × 646 = 1.292 mL). Kesalahan terjadi jika siswa menyangka volume berbanding lurus dengan suhu Celsius (100 °C = 2 × 50 °C). Hukum Charles mewajibkan suhu Kelvin (373 K vs 323 K, bukan 2×). Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Hukum Charles & Persamaan Garis Pemuaian Gas',
      rumusLatex: 'V(t) = V_0 \\left(1 + \\frac{t}{273}\\right) = V_0 + \\left(\\frac{V_0}{273}\\right) t, \\quad \\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
      rumusPlain: 'V(t) = V0 * (1 + t/273) dan V1/T1 = V2/T2',
      keteranganSimbol: [
        { simbol: 'V(t)', arti: 'Volume pada suhu Celsius t', satuan: 'mL' },
        { simbol: 'V₀', arti: 'Volume pada 0 °C (546 mL)', satuan: 'mL' },
        { simbol: 't', arti: 'Suhu dalam derajat Celsius', satuan: '°C' },
        { simbol: 'T', arti: 'Suhu mutlak Kelvin (t + 273)', satuan: 'K' },
      ],
      kondisiPenggunaan: 'Digunakan saat menguji data eksperimen pemuaian volume gas pada tekanan konstan (isobarik).',
      alasanPemilihan: 'Membuktikan bahwa volume berbanding lurus terhadap suhu mutlak Kelvin, bukan Celsius.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Tekanan dijaga konstan (Isobarik)',
          'Data: (0 °C, 546 mL), (50 °C, 646 mL), (100 °C, 746 mL)',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan.',
        infoPenting: 'Gradien garis V terhadap t adalah konstan 2,0 mL/°C.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Charles dan Penentuan Titik Nol Mutlak (-273 °C).',
        alasan: 'Mendemonstrasikan landasan fisis penemuan skala Kelvin oleh Lord Kelvin.',
      },
      rumusKunci: 'V = V0 (1 + t/273)',
      langkahPenyelesaian: [
        'Pernyataan 1: Gradien pemuaian = (646 - 546) / (50 - 0) = 100 / 50 = 2,0 mL/°C. Dari 50 °C ke 100 °C: (746 - 646) / (100 - 50) = 100 / 50 = 2,0 mL/°C. (BENAR)',
        'Pernyataan 2: Persamaan garis linear V(t) = 546 + 2 t. Ketika V = 0, diperoleh 2 t = -546 → t = -273 °C. Garis ekstrapolasi tepat memotong sumbu horizontal pada -273 °C (nol mutlak Kelvin). (BENAR)',
        'Pernyataan 3: Volume pada 100 °C adalah 746 mL. Dua kali volume pada 50 °C adalah 2 × 646 = 1.292 mL. Rasio 746/646 = 1,15, jauh dari angka 2. (SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 dan 2 terbukti benar dari regresi data eksperimen. Pernyataan 3 salah karena 100 °C bukan berarti suhu Kelvin dua kali lipat.',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Ingat baik-baik: Jika suhu Celsius naik dari 50 °C ke 100 °C, suhu Kelvin hanya naik dari 323 K ke 373 K (hanya naik ~15%), BUKAN naik 100%!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Gradien Garis Lurus V0 / 273',
      hubunganMatematis: 'Gradien m = V0 / 273 = 546 / 273 = 2,0 mL/°C persis!',
      substitusiSingkat: 'Titik potong sumbu t = -V0 / gradien = -546 / 2 = -273 °C langsung tanpa ragu!',
      trikHindariHitungPanjang: 'Angka 546 mL sengaja dipilih pembuat soal karena 546 = 2 × 273. Langsung terlihat jawabannya 2 mL/°C dan -273 °C!',
      caraCekKewajaran: 'Semua gas ideal pada V = 0 pasti memotong sumbu temperatur Celsius pada -273,15 °C.',
      kapanDigunakan: 'Sangat berguna pada soal analisis grafik data praktikum laboratorium.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti tabel data eksperimen Hukum Charles pada silinder bertekanan konstan.',
      soal: 'Nilailah kebenaran ketiga pernyataan berikut.',
      rumusKunci: 'Rumus kuncinya V sama dengan V nol dikali satu ditambah t per 273.',
      pembahasan: 'Pernyataan 1 benar, pertambahan volume konstan 2 mililiter per derajat Celsius. Pernyataan 2 benar, ekstrapolasi garis memotong pada minus 273 derajat Celsius. Pernyataan 3 salah, volume pada 100 derajat Celsius bukan dua kali lipat dari volume pada 50 derajat Celsius.',
      caraCepat: 'Trik Mister Jo: Perhatikan angka 546 mililiter adalah dua kali 273! Gradiennya pasti dua mililiter per derajat dan perpotongannya minus 273 derajat Celsius!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 10 (PG)
  {
    id: 10,
    groupId: 'dua-keadaan',
    groupTitle: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    type: 'pg',
    title: 'Ekspansi Gelembung Udara dari Dasar Danau Vulkanik',
    stimulus: {
      text: 'Seorang penyelam ilmiah melepas sebuah gelembung udara kecil dari dasar danau vulkanik pada kedalaman h = 30 meter di bawah permukaan air. Suhu air di dasar danau yang tenang terukur 7 °C (280 K), dan volume gelembung mula-mula adalah V1 = 2,00 cm³. Gelembung tersebut perlahan melayang naik menuju permukaan danau. Di permukaan danau, air terpapar sinar matahari sehingga suhunya mencapai 27 °C (300 K) dan tekanan udara atmosfer terukur P0 = 1,0 × 10⁵ Pa. Diketahui massa jenis air danau ρ = 1.000 kg/m³ dan percepatan gravitasi g = 10 m/s².',
      table: {
        caption: 'Kondisi Fisis di Dasar dan di Permukaan Danau',
        headers: ['Posisi', 'Kedalaman (h)', 'Tekanan Total Gas (P)', 'Suhu Air (T)', 'Volume Gelembung'],
        rows: [
          ['Dasar Danau (1)', '30 meter', 'P₀ + ρgh', '7 °C = 280 K', '2,00 cm³'],
          ['Permukaan Danau (2)', '0 meter', 'P₀ = 1,0 × 10⁵ Pa', '27 °C = 300 K', 'V₂ (dicari)'],
        ],
      },
      graphType: 'piston-cylinder',
      graphTitle: 'Ilustrasi Kenaikan dan Pembesaran Gelembung Udara',
    },
    questionPrompt: 'Dengan menganggap udara di dalam gelembung berperilaku sebagai gas ideal dan tidak ada molekul udara yang larut ke dalam air selama perjalanan naik, volume gelembung sesaat sebelum memecah di permukaan danau adalah...',
    options: [
      { id: 'A', text: '4,28 cm³' },
      { id: 'B', text: '6,40 cm³' },
      { id: 'C', text: '8,00 cm³' },
      { id: 'D', text: '8,57 cm³' },
      { id: 'E', text: '12,00 cm³' },
    ],
    correctAnswer: 'D',
    rumusKunci: {
      nama: 'Integrasi Tekanan Hidrostatis & Persamaan Dua Keadaan',
      rumusLatex: 'P_1 = P_0 + \\rho g h, \\quad \\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2} \\implies V_2 = V_1 \\cdot \\left(\\frac{P_1}{P_2}\\right) \\cdot \\left(\\frac{T_2}{T_1}\\right)',
      rumusPlain: 'P1 = P0 + rho*g*h dan V2 = V1 * (P1/P2) * (T2/T1)',
      keteranganSimbol: [
        { simbol: 'P₁', arti: 'Tekanan total di dasar danau', satuan: 'Pa' },
        { simbol: 'P₂ = P₀', arti: 'Tekanan atmosfer permukaan', satuan: '1,0 × 10⁵ Pa' },
        { simbol: 'h', arti: 'Kedalaman danau', satuan: '30 m' },
        { simbol: 'T₁, T₂', arti: 'Suhu dasar dan permukaan (Kelvin)', satuan: '280 K dan 300 K' },
        { simbol: 'V₁, V₂', arti: 'Volume gelembung mula-mula dan akhir', satuan: 'cm³' },
      ],
      kondisiPenggunaan: 'Digunakan untuk kasus fluida statis yang digabungkan dengan perubahan termal gas ideal.',
      alasanPemilihan: 'Menuntut kemampuan siswa menghubungkan konsep fluida (P = P0 + ρgh) dengan termodinamika gas.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Kedalaman dasar: h = 30 m',
          'Tekanan atmosfer: P0 = 1,0 × 10⁵ Pa',
          'Massa jenis air: ρ = 1.000 kg/m³, g = 10 m/s²',
          'Suhu dasar: t1 = 7 °C → T1 = 7 + 273 = 280 K',
          'Volume awal: V1 = 2,00 cm³',
          'Suhu permukaan: t2 = 27 °C → T2 = 27 + 273 = 300 K',
          'Tekanan permukaan: P2 = P0 = 1,0 × 10⁵ Pa',
        ],
        ditanyakan: 'Volume gelembung di permukaan (V2).',
        infoPenting: 'Tekanan di dasar adalah penjumlahan tekanan atmosfer ditambah tekanan hidrostatis ρgh.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Tekanan Hidrostatis digabung Persamaan Dua Keadaan Gas Ideal.',
        alasan: 'Gelembung mengalami penurunan tekanan hidrostatik sekaligus peningkatan suhu air.',
      },
      rumusKunci: 'P1 = P0 + ρgh dan V2 = V1 (P1 / P2) (T2 / T1)',
      langkahPenyelesaian: [
        'Langkah 1: Hitung tekanan hidrostatis di dasar: Phid = ρ · g · h = 1.000 × 10 × 30 = 300.000 Pa = 3,0 × 10⁵ Pa',
        'Langkah 2: Hitung tekanan total di dasar P1: P1 = P0 + Phid = 1,0 × 10⁵ + 3,0 × 10⁵ = 4,0 × 10⁵ Pa',
        'Langkah 3: Tentukan rasio tekanan: P1 / P2 = (4,0 × 10⁵) / (1,0 × 10⁵) = 4,0',
        'Langkah 4: Tentukan rasio suhu mutlak: T2 / T1 = 300 K / 280 K = 30 / 28 = 15 / 14 ≈ 1,0714',
        'Langkah 5: Hitung volume akhir gelembung: V2 = V1 × (P1 / P2) × (T2 / T1) = 2,00 cm³ × 4,0 × (15 / 14)',
        'V2 = 8,00 × (15 / 14) = 120 / 14 ≈ 8,571 cm³ ≈ 8,57 cm³',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi D benar karena substitusi menghasilkan 120/14 = 8,57 cm³.',
        opsiLain: 'Opsi C (8,00 cm³) merupakan kesalahan siswa yang mengabaikan perubahan suhu (menganggap isotermal). Opsi B (6,40 cm³) terjadi jika lupa menambahkan tekanan atmosfer pada dasar danau (hanya memakai 3 bar). Opsi A dan E timbul karena salah rasio pembagi.',
      },
      kesimpulan: 'Volume gelembung udara saat mencapai permukaan danau adalah 8,57 cm³.',
      tipsMengerjakan: 'Setiap kedalaman 10 meter air setara dengan penambahan tekanan 1 atm (10⁵ Pa). Pada kedalaman 30 m, tekanannya bertambah 3 atm, sehingga total tekanan di dasar menjadi 1 + 3 = 4 atm!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Cepat 10 Meter Air = 1 atm',
      hubunganMatematis: 'P_dasar = 1 atm + (30 m / 10 m) = 4 atm. Rasio P = 4.',
      substitusiSingkat: 'Rasio T = 300 / 280 = 15/14. Maka V2 = 2 × 4 × (15/14) = 8 × (15/14) = 120/14 = 8,57 cm³!',
      trikHindariHitungPanjang: 'Gunakan aturan cepat kedalaman air: 30 meter = +3 atm. Total tekanan dasar = 4 atm seketika!',
      caraCekKewajaran: 'Tekanan turun 4 kali lipat, sehingga volume setidaknya membesar 4× dari 2 cm³ menjadi 8 cm³. Karena ada tambahan efek pemanasan (280 ke 300 K), volume harus sedikit lebih besar dari 8 cm³. Angka 8,57 cm³ sangat presisi!',
      kapanDigunakan: 'Ampuh untuk semua soal fisika kelautan, penyelaman, atau gelembung danau.',
    },
    audioScript: {
      stimulus: 'Perhatikan gelembung udara yang dilepaskan penyelam dari dasar danau berkedalaman 30 meter menuju permukaan.',
      soal: 'Berapakah volume gelembung udara saat mencapai permukaan air?',
      rumusKunci: 'Rumus kuncinya P satu sama dengan P nol ditambah rho g h, dan V dua sama dengan V satu dikali P satu per P dua dikali T dua per T satu.',
      pembahasan: 'Tekanan di dasar adalah 1 atmosfer ditambah 3 atmosfer hidrostatis sama dengan 4 atmosfer. Rasio tekanan adalah empat. Rasio suhu adalah 300 per 280 atau lima belas per empat belas. Dua dikali empat dikali lima belas per empat belas menghasilkan 8 koma 57 sentimeter kubik.',
      caraCepat: 'Trik Mister Jo: Ingat selalu, setiap 10 meter air menambah tekanan 1 atmosfer! Kedalaman 30 meter berarti 3 atmosfer, ditambah udara luar 1 jadi 4 atmosfer! Kalikan dua dikali empat dikali lima belas per empat belas, langsung dapat 8 koma 57 cm kubik!',
      kesimpulan: 'Jawaban yang benar adalah opsi D, 8,57 sentimeter kubik.',
    },
  },
];
