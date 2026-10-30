/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 7: KECEPATAN EFEKTIF GAS IDEAL (4 SOAL)
 * Q27: PGK, Q28: PG, Q29: BS, Q30: PGK
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_7: Question[] = [
  // SOAL 27 (PGK)
  {
    id: 27,
    groupId: 'kecepatan-efektif',
    groupTitle: 'Kelompok 7: Kecepatan Efektif Gas Ideal',
    type: 'pgk',
    title: 'Perbandingan Kecepatan RMS Gas Hidrogen dan Oksigen',
    stimulus: {
      text: 'Dalam riset propulsi roket luar angkasa, dua ruang pembakaran terpisah menyimpan gas pada kondisi termal ekstrem:\n• Ruang 1: Berisi gas Hidrogen murni (H₂, massa molar M1 = 2,0 g/mol = 2,0 × 10⁻³ kg/mol) pada suhu kamar T1 = 300 K (27 °C).\n• Ruang 2: Berisi gas Oksigen murni (O₂, massa molar M2 = 32,0 g/mol = 32,0 × 10⁻³ kg/mol) pada suhu pemanasan tanur T2 = 1.200 K (927 °C).\nKedua gas diperlakukan sebagai gas ideal dengan konstanta gas universal R = 8,31 J/(mol·K). Peneliti mengukur kelajuan akar rata-rata kuadrat (root-mean-square speed / v_rms) molekul pada kedua ruang pembakaran.',
      table: {
        caption: 'Karakteristik Molekuler Ruang Pembakaran 1 dan 2',
        headers: ['Ruang Uji', 'Gas', 'Massa Molar (kg/mol)', 'Suhu Mutlak (T)', 'Rasio T / M'],
        rows: [
          ['Ruang 1', 'Hidrogen (H₂)', '2,0 × 10⁻³ kg/mol', '300 K', '150.000 K·mol/kg'],
          ['Ruang 2', 'Oksigen (O₂)', '32,0 × 10⁻³ kg/mol', '1.200 K', '37.500 K·mol/kg'],
        ],
      },
      graphType: 'vrms-t',
      graphTitle: 'Distribusi Maxwell-Boltzmann dan Kecepatan Efektif RMS',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait kelajuan efektif molekul kedua gas tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Perbandingan kelajuan efektif molekul gas Hidrogen terhadap gas Oksigen adalah v_rms(H2) : v_rms(O2) = 2 : 1.' },
      { id: 'B', text: 'Meskipun suhunya 4 kali lebih dingin (300 K vs 1.200 K), molekul gas Hidrogen bergerak dengan kelajuan efektif dua kali lebih cepat dibanding molekul gas Oksigen.' },
      { id: 'C', text: 'Kelajuan efektif molekul gas Hidrogen pada suhu 300 K adalah sekitar 1.934 m/s.' },
      { id: 'D', text: 'Kelajuan efektif molekul gas Oksigen pada suhu 1.200 K adalah sekitar 967 m/s.' },
      { id: 'E', text: 'Jika massa molar tidak dikonversikan ke satuan kg/mol saat perhitungan SI, hasil numerik v_rms yang diperoleh akan tepat sama tanpa pengaruh faktor pengali.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    rumusKunci: {
      nama: 'Kecepatan Efektif Molekul Gas Ideal (Root Mean Square / RMS)',
      rumusLatex: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}, \\quad \\frac{v_{\\text{rms},1}}{v_{\\text{rms},2}} = \\sqrt{\\frac{T_1 / M_1}{T_2 / M_2}} = \\sqrt{\\left(\\frac{T_1}{T_2}\\right) \\cdot \\left(\\frac{M_2}{M_1}\\right)}',
      rumusPlain: 'v_rms = sqrt(3*R*T / M) dan v1/v2 = sqrt((T1/T2) * (M2/M1))',
      keteranganSimbol: [
        { simbol: 'v_rms', arti: 'Kecepatan akar kuadrat rata-rata', satuan: 'm/s' },
        { simbol: 'R', arti: 'Konstanta gas universal', satuan: '8,31 J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak gas', satuan: 'Kelvin (K)' },
        { simbol: 'M', arti: 'Massa molar molekul gas (WAJIB kg/mol)', satuan: 'kg/mol' },
      ],
      kondisiPenggunaan: 'Digunakan untuk mencari kelajuan rata-rata kuadrat partikel gas ideal pada temperatur dan massa molar tertentu.',
      alasanPemilihan: 'Menunjukkan interaksi antara faktor suhu (sebanding √T) dan faktor massa partikel (sebanding terbalik 1/√M).',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Hidrogen: M1 = 2,0 g/mol = 2,0 × 10⁻³ kg/mol, T1 = 300 K',
          'Oksigen: M2 = 32,0 g/mol = 32,0 × 10⁻³ kg/mol, T2 = 1.200 K',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Evaluasi kebenaran seluruh pilihan opsi A, B, C, D, E.',
        infoPenting: 'Massa molar g/mol HARUS dikonversi ke kg/mol agar menghasilkan satuan SI meter per sekon (m/s).',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Kecepatan Efektif Molekul Gas Maxwell-Boltzmann.',
        alasan: 'Kecepatan molekul sebanding dengan √(T/M).',
      },
      rumusKunci: 'v_rms = √(3RT / M)',
      langkahPenyelesaian: [
        '1. Rasio Kelajuan: v1 / v2 = √[(T1 / T2) × (M2 / M1)] = √[(300 / 1200) × (32 / 2)] = √[(1/4) × 16] = √[4] = 2. Jadi v_rms(H2) : v_rms(O2) = 2 : 1. (Pernyataan A dan B BENAR)',
        '2. Hitung Nilai v_rms(H2): v1 = √[(3 × 8,31 × 300) / (2 × 10⁻³)] = √[7.479 / 0,002] = √[3.739.500] ≈ 1.933,78 m/s ≈ 1.934 m/s. (Pernyataan C BENAR)',
        '3. Hitung Nilai v_rms(O2): Karena rasionya 2 : 1, maka v2 = v1 / 2 = 1.934 / 2 = 967 m/s. (Pernyataan D BENAR)',
        '4. Analisis Pernyataan E: Jika M dibiarkan dalam gram/mol (misalnya 2 dan 32), hasil di dalam akar akan lebih kecil dengan faktor 1.000, sehingga v_rms yang dihitung akan salah sebesar faktor √1.000 ≈ 31,62 kali lipat! Klaim bahwa hasilnya tetap sama adalah keliru besar. (Pernyataan E SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan D benar secara kuantitatif. Rasio tepat 2 : 1, dan laju 1.934 m/s dan 967 m/s terbukti presisi.',
        opsiLain: 'Pernyataan E salah karena satuan massa molar kg/mol adalah syarat mutlak dalam analisis dimensi SI.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
      tipsMengerjakan: 'Trik cepat rasio: (T1 / T2) = 1/4, (M2 / M1) = 32 / 2 = 16. Kalikan: (1/4) × 16 = 4. Akar dari 4 adalah 2! Rasio kelajuannya adalah 2 : 1 seketika!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Rasio Cepat Akar 4 = 2',
      hubunganMatematis: 'Rasio v = √[(rasio T) × (kebalikan rasio M)].',
      substitusiSingkat: 'Rasio T = 300/1200 = 1/4. Kebalikan M = 32/2 = 16. Nilai dalam akar = 1/4 × 16 = 4. Akar 4 = 2!',
      trikHindariHitungPanjang: 'Tak perlu menghitung angka ribuan m/s untuk mencari perbandingan. Rasio 2 : 1 didapat dalam 5 detik!',
      caraCekKewajaran: 'Massa Oksigen 16 kali lebih berat dibanding Hidrogen. Untuk mengimbangi selisih massa 16 kali, suhu Oksigen harus dinaikkan 16 kali. Karena suhunya baru naik 4 kali, maka molekul Hidrogen tetap menang cepat 2 kali lipat!',
      kapanDigunakan: 'Sangat cocok untuk soal perbandingan dua gas pada suhu berbeda.',
    },
    audioScript: {
      stimulus: 'Mari cermati perbandingan kelajuan efektif gas Hidrogen pada suhu 300 Kelvin dan gas Oksigen pada suhu 1.200 Kelvin.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya v r m s sama dengan akar dari tiga R T per M besar.',
      pembahasan: 'Perbandingan kecepatan Hidrogen terhadap Oksigen adalah 2 banding 1. Kecepatan Hidrogen sekitar 1.934 meter per sekon dan Oksigen 967 meter per sekon. Hidrogen bergerak dua kali lebih cepat karena massanya yang 16 kali lebih ringan mengungguli efek suhu.',
      caraCepat: 'Trik Mister Jo: Suhu seperempat dikali massa 16 kali sama dengan 4! Akar dari 4 adalah 2! Kecepatan Hidrogen langsung ketahuan dua kali lipat lebih cepat hanya dalam hitungan detik!',
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
    },
  },

  // SOAL 28 (PG)
  {
    id: 28,
    groupId: 'kecepatan-efektif',
    groupTitle: 'Kelompok 7: Kecepatan Efektif Gas Ideal',
    type: 'pg',
    title: 'Kecepatan Efektif Gas Helium pada Korona Atmosfer Bintang',
    stimulus: {
      text: 'Dalam observasi astrofisika spektroskopi bintang kelas G (seperti Matahari kita), atmosfer terluar fotosfer memiliki temperatur efektif permukaan sekitar T = 6.000 K. Gas penyusun utama atmosfer tersebut adalah gas Helium (He, gas mulia monoatomik, massa molar M = 4,0 g/mol = 4,0 × 10⁻³ kg/mol). Pada suhu setinggi 6.000 K, atom-atom Helium bertumbukan secara acak dengan laju termal yang sangat tinggi. Diketahui konstanta gas universal R = 8,31 J/(mol·K).',
      table: {
        caption: 'Karakteristik Fisik Atmosfer Bintang Fotosfer',
        headers: ['Parameter Fisis', 'Nilai Terukur', 'Satuan SI'],
        rows: [
          ['Suhu Efektif Permukaan (T)', '6.000 K', 'Kelvin (K)'],
          ['Massa Molar Helium (M)', '4,0 g/mol', '0,004 kg/mol'],
          ['Tetapan Gas Universal (R)', '8,31 J/(mol·K)', 'J/(mol·K)'],
        ],
      },
      graphType: 'vrms-t',
      graphTitle: 'Kecepatan Efektif Termal pada Temperatur Ekstrem Bintang',
    },
    questionPrompt: 'Kecepatan efektif (root mean square / v_rms) dari atom gas Helium pada atmosfer bintang tersebut adalah sekitar...',
    options: [
      { id: 'A', text: '3,53 km/s (3.530 m/s)' },
      { id: 'B', text: '4,32 km/s (4.320 m/s)' },
      { id: 'C', text: '6,12 km/s (6.115 m/s)' },
      { id: 'D', text: '8,65 km/s (8.650 m/s)' },
      { id: 'E', text: '12,24 km/s (12.240 m/s)' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Persamaan Kecepatan RMS Gas Ideal Berdasarkan Massa Molar',
      rumusLatex: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}',
      rumusPlain: 'v_rms = sqrt(3 * R * T / M)',
      keteranganSimbol: [
        { simbol: 'v_rms', arti: 'Kecepatan akar kuadrat rata-rata', satuan: 'm/s' },
        { simbol: 'R', arti: 'Konstanta gas umum (8,31)', satuan: 'J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak atmosfer bintang', satuan: '6.000 K' },
        { simbol: 'M', arti: 'Massa molar Helium (4 × 10⁻³)', satuan: 'kg/mol' },
      ],
      kondisiPenggunaan: 'Digunakan untuk menghitung kecepatan termal representatif partikel gas pada sembarang suhu mutlak.',
      alasanPemilihan: 'Menunjukkan pentingnya konversi massa molar ke satuan kilogram per mol (kg/mol).',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'T = 6.000 K',
          'Helium: M = 4,0 g/mol = 4,0 × 10⁻³ kg/mol',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Kecepatan efektif v_rms dalam km/s atau m/s.',
        infoPenting: 'Massa molar M harus dikalikan 10⁻³ menjadi kg/mol agar satuan keluar dalam m/s.',
      },
      identifikasiKonsep: {
        konsep: 'Kelajuan Efektif Molekul Gas Maxwell-Boltzmann pada Temperatur Tinggi.',
        alasan: 'Hubungan langsung antara energi kinetik translasi (3/2 kT) dan 1/2 m v².',
      },
      rumusKunci: 'v_rms = √(3RT / M)',
      langkahPenyelesaian: [
        'Langkah 1: Substitusikan besaran ke dalam rumus:',
        'v_rms = √[(3 × 8,31 J/(mol·K) × 6.000 K) / (4,0 × 10⁻³ kg/mol)]',
        'Langkah 2: Sederhanakan perkalian pembilang: 3 × 6.000 = 18.000',
        '18.000 × 8,31 = 149.580 J/mol',
        'Langkah 3: Bagi dengan massa molar: 149.580 / (4,0 × 10⁻³) = 149.580 × 250 = 37.395.000 m²/s²',
        'Langkah 4: Tarik akar kuadrat: v_rms = √(37.395.000) ≈ 6.115,14 m/s ≈ 6.115 m/s = 6,12 km/s',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C benar karena √(37.395.000) ≈ 6.115 m/s = 6,12 km/s.',
        opsiLain: 'Opsi B (4,32 km/s) terjadi jika memakai faktor 2/2 RT bukan 3/2 RT. Opsi D (8,65 km/s) terjadi jika mengira M = 2 g/mol. Opsi A (3,53 km/s) terjadi jika memakai rumus kecepatan suara (akar gamma RT/M).',
      },
      kesimpulan: 'Kecepatan efektif atom gas Helium pada atmosfer bintang adalah 6,12 km/s (6.115 m/s).',
      tipsMengerjakan: 'Penyederhanaan cepat: 18.000 / 4 = 4.500. Lalu 4.500 × 1.000 = 4,5 × 10⁶. Kalikan 8,31: 4,5 × 8,31 ≈ 37,4 × 10⁶. Akar dari 37,4 adalah sekitar 6,11. Dikalikan √10⁶ = 10³ menghasilkan 6.110 m/s = 6,11 km/s!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Akar 37,4 × 10⁶',
      hubunganMatematis: 'v_rms = √[(3 × 6000 / 0,004) × 8,31] = √[4,5 × 10⁶ × 8,31].',
      substitusiSingkat: '4,5 × 8,31 ≈ 37,4. √37,4 ≈ 6,12. Kalikan 10³ m/s = 6,12 km/s!',
      trikHindariHitungPanjang: 'Pisahkan bilangan kelipatan 10⁶ ke luar tanda akar menjadi 10³! Sisa akar √37,4 sangat dekat dengan √36 = 6!',
      caraCekKewajaran: 'Karena √36 = 6, maka √37,4 pasti sedikit di atas 6 (yaitu 6,12). Langsung pilih 6,12 km/s!',
      kapanDigunakan: 'Sangat efektif saat menghadapi angka dalam akar jutaan.',
    },
    audioScript: {
      stimulus: 'Perhatikan gas Helium pada lapisan atmosfer bintang yang bersuhu 6.000 Kelvin.',
      soal: 'Berapakah kecepatan efektif atom gas Helium tersebut?',
      rumusKunci: 'Rumus kuncinya v r m s sama dengan akar dari tiga R T per M besar.',
      pembahasan: 'Tiga dikali 8,31 dikali 6.000 dibagi 0,004 kilogram per mol menghasilkan 37 juta 395 ribu. Akar kuadratnya adalah 6.115 meter per sekon atau 6,12 kilometer per sekon.',
      caraCepat: 'Trik Mister Jo: Sederhanakan angka dalam akar menjadi 37 koma 4 kali sepuluh pangkat 6! Karena akar 36 adalah 6, maka akar 37 koma 4 pasti sekitar 6 koma 12! Langsung pilih 6,12 km per detik tanpa ragu!',
      kesimpulan: 'Jawaban yang benar adalah opsi C, 6,12 kilometer per sekon.',
    },
  },

  // SOAL 29 (BS)
  {
    id: 29,
    groupId: 'kecepatan-efektif',
    groupTitle: 'Kelompok 7: Kecepatan Efektif Gas Ideal',
    type: 'bs',
    title: 'Evaluasi Proporsionalitas Matematis Kecepatan Efektif Gas',
    stimulus: {
      text: 'Seorang pengajar fisika memberikan serangkaian skenario variasi termodinamika pada gas ideal tertutup di dalam ruang laboratorium untuk menguji pemahaman siswa mengenai perilaku kecepatan efektif (v_rms) terhadap temperatur mutlak, tekanan, dan massa molar partikel.',
      table: {
        caption: 'Hubungan Fisis Kecepatan Efektif terhadap Berbagai Variabel',
        headers: ['Variasi Kondisi', 'Persamaan Acuan', 'Prediksi Efek pada v_rms'],
        rows: [
          ['Suhu mutlak T dinaikkan 4 kali', 'v_rms sebanding √T', 'Berlipat √4 = 2 kali'],
          ['Tekanan P dilipatgandakan pada V tetap', 'P sebanding T (Isokhorik)', 'T naik 2x → v_rms naik √2 kali'],
          ['Massa molar M lebih besar', 'v_rms sebanding 1/√M', 'Partikel berat bergerak lebih lambat'],
        ],
      },
      graphType: 'vrms-t',
      graphTitle: 'Kurva Ketergantungan v_rms terhadap Akar Suhu Mutlak',
    },
    questionPrompt: 'Nilailah kebenaran dari masing-masing pernyataan berikut berdasarkan hukum teori kinetik gas:',
    statements: [
      {
        id: 1,
        text: 'Jika suhu mutlak suatu gas ideal dinaikkan menjadi 4 kali lipat dari nilai semula, maka kecepatan efektif (v_rms) partikel-partikel gas tersebut berlipat ganda tepat 2 kali lipat dari kecepatan awalnya.',
        correct: true,
        explanation: 'Karena v_rms sebanding dengan √T, jika T2 = 4 T1, maka v_rms2 = √(4) × v_rms1 = 2 × v_rms1 (berlipat tepat 2 kali lipat). Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Jika tekanan gas di dalam wadah kaku bervolume tetap (isokhorik) dilipatgandakan menjadi 2 kali lipat dengan cara dipanaskan, maka kecepatan efektif partikel gasnya juga berlipat ganda tepat 2 kali lipat.',
        correct: false,
        explanation: 'Pada volume tetap (isokhorik), P berbanding lurus dengan T mutlak (P ~ T). Jika P naik 2 kali lipat, maka T juga naik 2 kali lipat (T2 = 2 T1). Karena v_rms sebanding dengan √T, maka kelajuan v_rms hanya meningkat sebesar √2 ≈ 1,414 kali lipat, BUKAN 2 kali lipat! Siswa terkecoh mengira v_rms sebanding linier dengan P. Pernyataan SALAH.',
      },
      {
        id: 3,
        text: 'Pada suhu mutlak yang sama, kelajuan efektif molekul gas ideal berbanding terbalik dengan akar kuadrat massa molarnya (v_rms ~ 1/√M).',
        correct: true,
        explanation: 'Dari persamaan v_rms = √(3RT/M), terlihat jelas bahwa jika T konstan, v_rms berbanding terbalik secara proporsional dengan √M. Gas dengan molekul lebih berat bergerak dengan kelajuan rata-rata yang lebih lambat. Pernyataan BENAR.',
      },
    ],
    correctAnswer: [true, false, true],
    rumusKunci: {
      nama: 'Hukum Proporsionalitas Kecepatan Efektif RMS',
      rumusLatex: 'v_{\\text{rms}} \\propto \\sqrt{\\frac{T}{M}}, \\quad v_{\\text{rms}} \\propto \\sqrt{\\frac{P}{\\rho}}',
      rumusPlain: 'v_rms sebanding dengan sqrt(T/M)',
      keteranganSimbol: [
        { simbol: 'v_rms', arti: 'Kecepatan akar rata-rata kuadrat', satuan: 'm/s' },
        { simbol: 'T', arti: 'Suhu mutlak', satuan: 'Kelvin' },
        { simbol: 'M', arti: 'Massa molar', satuan: 'kg/mol' },
        { simbol: 'P', arti: 'Tekanan gas', satuan: 'Pa' },
      ],
      kondisiPenggunaan: 'Digunakan saat menguji relasi fisis ketergantungan variabel kecepatan mikro gas ideal.',
      alasanPemilihan: 'Menekankan pentingnya fungsi akar kuadrat (√) dalam setiap perubahan kecepatan molekul.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Rumus dasar: v_rms = √(3RT/M)',
          'Skenario 1: T2 = 4 T1',
          'Skenario 2: P2 = 2 P1 pada V tetap (isokhorik)',
          'Skenario 3: Hubungan terhadap massa molar M',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan.',
        infoPenting: 'Semua relasi kecepatan melibatkan tanda AKAR kuadrat!',
      },
      identifikasiKonsep: {
        konsep: 'Analisis Proporsionalitas Teori Kinetik Gas Kecepatan RMS.',
        alasan: 'Membedakan perubahan linier variabel makroskopis dengan respons kuadratis mikroskopis.',
      },
      rumusKunci: 'v_rms = √(3RT/M)',
      langkahPenyelesaian: [
        '1. Pernyataan 1: v2 / v1 = √(T2 / T1) = √(4 / 1) = 2. Jadi v_rms berlipat 2 kali lipat. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Pada proses isokhorik (V tetap), P/T = konstan → T sebanding dengan P. Jika P naik 2x, maka T naik 2x. Maka v2 / v1 = √(T2 / T1) = √2 ≈ 1,414 kali. Pernyataan yang mengklaim berlipat 2 kali lipat adalah keliru. (Pernyataan 2 SALAH)',
        '3. Pernyataan 3: Persamaan v_rms = √(3RT/M) secara eksplisit menempatkan M di bawah penyebut di dalam akar, sehingga v_rms ~ 1/√M. (Pernyataan 3 BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 Benar (akar 4 = 2), Pernyataan 2 Salah (seharusnya naik √2 kali, bukan 2 kali), Pernyataan 3 Benar (relasi 1/√M).',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Salah, Benar].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      tipsMengerjakan: 'Mantra kecepatan gas: "Kecepatan selalu memakai AKAR!" Jika suhu naik 9x, kelajuan naik 3x. Jika tekanan pada volume tetap naik 2x, kelajuan naik √2 kali, bukan 2x!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Mantra Sakti "Ada Akarnya!"',
      hubunganMatematis: 'v_rms sebanding dengan √T. Pada volume tetap, T sebanding P, jadi v_rms sebanding √P.',
      substitusiSingkat: 'P naik 2x ⟹ v_rms naik √2 ≈ 1,41x (bukan 2x!).',
      trikHindariHitungPanjang: 'Ingat: Jika variabel naik k kali, kecepatannya hanya naik √k kali!',
      caraCekKewajaran: 'Energi kinetik sebanding dengan v kuadrat. Jika kelajuan naik 2x, energinya naik 4x (memerlukan kenaikan suhu dan tekanan 4x lipat).',
      kapanDigunakan: 'Sangat sering dijumpai pada soal-soal jebakan SBMPTN/UTBK.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti hubungan matematis kecepatan efektif molekul gas terhadap perubahan suhu mutlak, tekanan, dan massa molar.',
      soal: 'Nilailah kebenaran dari masing-masing pernyataan berikut.',
      rumusKunci: 'Rumus kuncinya kecepatan efektif v r m s sebanding dengan akar dari T dibagi M.',
      pembahasan: 'Pernyataan 1 benar, jika suhu mutlak naik 4 kali maka kecepatan naik akar 4 yaitu 2 kali. Pernyataan 2 salah, pada volume tetap tekanan naik 2 kali berarti suhu naik 2 kali, sehingga kecepatan hanya naik akar 2 kali atau 1,41 kali, bukan 2 kali. Pernyataan 3 benar, kecepatan efektif berbanding terbalik dengan akar massa molar.',
      caraCepat: 'Trik Mister Jo: Ingat mantra sakti, kecepatan molekul gas selalu ada akarnya! Tekanan naik 2 kali, kecepatannya naik akar 2 kali! Jangan terkecoh!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Salah, Pernyataan 3 Benar.',
    },
  },

  // SOAL 30 (PGK)
  {
    id: 30,
    groupId: 'kecepatan-efektif',
    groupTitle: 'Kelompok 7: Kecepatan Efektif Gas Ideal',
    type: 'pgk',
    title: 'Kecepatan Efektif Gas Berdasarkan Tekanan dan Massa Jenis',
    stimulus: {
      text: 'Di stasiun meteorologi bandara, sensor presisi mengukur parameter atmosfer udara di dekat permukaan landasan pacu pada kondisi standar (STP, 0 °C = 273 K). Tekanan atmosfer terukur P = 1,01 × 10⁵ Pa dan massa jenis udara kering terukur ρ = 1,29 kg/m³. Komposisi udara diasumsikan didominasi oleh gas diatomik (faktor Laplace γ = Cp/Cv = 1,40). Menurut teori kinetik gas ideal, tekanan makroskopis P timbul akibat tumbukan molekul-molekul gas pada dinding dengan relasi P = 1/3 ρ (v_rms)², yang menghasilkan bentuk ekuivalen kelajuan efektif v_rms = √(3P / ρ).',
      table: {
        caption: 'Data Parameter Fisika Udara di Permukaan Landasan',
        headers: ['Besaran Fisis', 'Simbol', 'Nilai Terukur', 'Satuan SI'],
        rows: [
          ['Tekanan Udara', 'P', '1,01 × 10⁵ Pa', 'N/m²'],
          ['Massa Jenis Udara', 'ρ', '1,29 kg/m³', 'kg/m³'],
          ['Konstanta Laplace Udara', 'γ', '1,40 (7/5)', 'tanpa satuan'],
        ],
      },
      graphType: 'vrms-t',
      graphTitle: 'Relasi Kecepatan Efektif terhadap Tekanan dan Densitas Gas',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait kelajuan mikroskopis molekul udara tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Kecepatan efektif (v_rms) molekul udara pada kondisi tersebut adalah sekitar 485 m/s.' },
      { id: 'B', text: 'Cepat rambat gelombang bunyi di udara pada kondisi tersebut adalah sekitar 331 m/s (dihitung dari rumus Laplace v_bunyi = √(γP / ρ)).' },
      { id: 'C', text: 'Kecepatan efektif molekul udara (v_rms) lebih cepat dibanding cepat rambat gelombang bunyi di udara dengan rasio v_rms / v_bunyi = √(3 / γ) ≈ 1,46.' },
      { id: 'D', text: 'Jika tekanan udara dinaikkan menjadi 2 kali lipat sedangkan massa jenisnya dijaga tetap tidak berubah, kelajuan efektif molekulnya meningkat menjadi √2 kali kelajuan semula.' },
      { id: 'E', text: 'Molekul udara bergerak dengan kecepatan translasi yang seragam di mana seluruh molekul memiliki kecepatan yang persis sama dengan nilai v_rms.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    rumusKunci: {
      nama: 'Kecepatan Efektif Berdasarkan Tekanan dan Massa Jenis',
      rumusLatex: 'v_{\\text{rms}} = \\sqrt{\\frac{3P}{\\rho}}, \\quad v_{\\text{bunyi}} = \\sqrt{\\frac{\\gamma P}{\\rho}}, \\quad \\frac{v_{\\text{rms}}}{v_{\\text{bunyi}}} = \\sqrt{\\frac{3}{\\gamma}}',
      rumusPlain: 'v_rms = sqrt(3*P / rho) dan v_bunyi = sqrt(gamma*P / rho)',
      keteranganSimbol: [
        { simbol: 'v_rms', arti: 'Kecepatan efektif molekul', satuan: 'm/s' },
        { simbol: 'P', arti: 'Tekanan gas', satuan: '1,01 × 10⁵ Pa' },
        { simbol: 'ρ', arti: 'Massa jenis gas', satuan: '1,29 kg/m³' },
        { simbol: 'v_bunyi', arti: 'Cepat rambat bunyi Laplace', satuan: 'm/s' },
        { simbol: 'γ', arti: 'Tetapan Laplace (Cp / Cv)', satuan: '1,40' },
      ],
      kondisiPenggunaan: 'Digunakan ketika besaran makroskopis yang diketahui adalah tekanan (P) dan massa jenis (ρ).',
      alasanPemilihan: 'Menghubungkan teori kinetik gas dengan fenomena akustik fisika gelombang suara.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'P = 1,01 × 10⁵ Pa',
          'ρ = 1,29 kg/m³',
          'γ = 1,40',
        ],
        ditanyakan: 'Evaluasi kebenaran opsi A, B, C, D, E.',
        infoPenting: 'v_rms adalah nilai statistik akar rata-rata kuadrat, bukan kecepatan tunggal seluruh molekul!',
      },
      identifikasiKonsep: {
        konsep: 'Teori Kinetik Gas Hubungan P-ρ dan Komparasi dengan Cepat Rambat Bunyi Laplace.',
        alasan: 'Gelombang bunyi merambat melalui tumbukan berantai antarmolekul gas.',
      },
      rumusKunci: 'v_rms = √(3P/ρ) dan v_bunyi = √(γP/ρ)',
      langkahPenyelesaian: [
        '1. Hitung v_rms: v_rms = √[(3 × 1,01 × 10⁵ Pa) / 1,29 kg/m³] = √[303.000 / 1,29] = √[234.883,7] ≈ 484,65 m/s ≈ 485 m/s. (Pernyataan A BENAR)',
        '2. Hitung Cepat Rambat Bunyi: v_bunyi = √[(1,40 × 1,01 × 10⁵ Pa) / 1,29 kg/m³] = √[141.400 / 1,29] = √[109.612,4] ≈ 331,08 m/s ≈ 331 m/s. (Pernyataan B BENAR)',
        '3. Rasio v_rms terhadap v_bunyi: v_rms / v_bunyi = √(3 / γ) = √(3 / 1,40) = √(2,1428) ≈ 1,464. (Pernyataan C BENAR)',
        '4. Hubungan Proporsionalitas: v_rms = √(3P/ρ). Jika P menjadi 2P dan ρ tetap, maka v_rms baru = √(2) × v_rms lama. (Pernyataan D BENAR)',
        '5. Analisis Pernyataan E: Menurut distribusi kelajuan Maxwell-Boltzmann, kelajuan molekul gas tersebar secara acak dalam suatu spektrum kontinu dari yang sangat lambat hingga sangat cepat. Nilai v_rms hanyalah representasi statistik rata-rata kuadratis, bukan berarti semua molekul memiliki kecepatan yang seragam sama persis. (Pernyataan E SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan D benar secara numerik dan fisis. v_rms ≈ 485 m/s, v_bunyi ≈ 331 m/s, rasio √(3/1,4) ≈ 1,46, dan kenaikan √2 saat P berlipat dua.',
        opsiLain: 'Pernyataan E salah karena molekul gas memiliki distribusi kecepatan Maxwell-Boltzmann yang bervariasi, tidak seragam.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
      tipsMengerjakan: 'Pahami mengapa bunyi merambat lebih lambat daripada molekulnya: Gelombang bunyi merambat lewat tumbukan estafet antarmolekul, sehingga laju rambat bunyi (v_bunyi = √(γP/ρ)) selalu sedikit lebih lambat dari laju gerak molekul itu sendiri (v_rms = √(3P/ρ)). Rasio keduanya selalu √(3/γ)!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Rasio √(3 / 1,4) = 1,46',
      hubunganMatematis: 'v_rms = 1,46 × v_bunyi.',
      substitusiSingkat: 'Jika v_bunyi di udara standar dihafal = 331 m/s, maka v_rms = 1,46 × 331 ≈ 485 m/s seketika!',
      trikHindariHitungPanjang: 'Cukup gunakan pengali 1,46 terhadap cepat rambat bunyi!',
      caraCekKewajaran: '485 / 331 = 1,465. Sangat cocok dengan √(3/1,4) = √2,14 = 1,463.',
      kapanDigunakan: 'Sangat sering berguna pada soal perpaduan gelombang bunyi dan teori kinetik gas.',
    },
    audioScript: {
      stimulus: 'Perhatikan kondisi udara di landasan pacu dengan tekanan 1,01 kali 10 pangkat 5 Pascal dan massa jenis 1,29 kilogram per meter kubik.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal penutup pilihan ganda kompleks nomor 30.',
      rumusKunci: 'Rumus kuncinya v r m s sama dengan akar dari tiga P per rho, dan cepat rambat bunyi sama dengan akar dari gamma P per rho.',
      pembahasan: 'Kecepatan efektif molekul udara adalah sekitar 485 meter per sekon, sedangkan cepat rambat bunyi adalah 331 meter per sekon. Kecepatan molekul lebih cepat dibanding rambatan bunyi dengan rasio akar 3 per gamma atau sekitar 1,46. Dan kecepatan partikel mengikuti kurva distribusi Maxwell, bukan bernilai seragam sama semua.',
      caraCepat: 'Trik Mister Jo: Cukup kalikan cepat rambat bunyi 331 dengan faktor satu koma empat enam! Tiga ratus tiga puluh satu dikali 1,46 langsung ketemu 485 meter per sekon dalam sekejap!',
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D. Selamat, kamu telah menuntaskan seluruh 30 soal Teori Kinetik Gas bersama Mister Jo!',
    },
  },
];
