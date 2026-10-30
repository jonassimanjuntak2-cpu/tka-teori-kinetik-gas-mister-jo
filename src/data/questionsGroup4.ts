/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 4: ENERGI KINETIK GAS IDEAL (4 SOAL)
 * Q15: PGK, Q16: PG, Q17: BS, Q18: PGK
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_4: Question[] = [
  // SOAL 15 (PGK)
  {
    id: 15,
    groupId: 'energi-kinetik',
    groupTitle: 'Kelompok 4: Energi Kinetik Gas Ideal',
    type: 'pgk',
    title: 'Analisis Energi Kinetik Translasi Rata-rata Molekul Gas',
    stimulus: {
      text: 'Dalam teori kinetik gas klasik Maxwell-Boltzmann, temperatur mutlak (T) dipahami secara mikroskopis sebagai ukuran langsung dari energi kinetik translasi rata-rata partikel penyusun gas. Seorang peneliti fisika mengamati sampel gas di dalam ruang vakum kriogenik yang dihangatkan secara bertahap dari suhu kamar 27 °C (300 K) hingga mencapai suhu tungku pembakaran 327 °C (600 K). Sampel terdiri dari campuran gas mulia Helium (He, gas monoatomik, M = 4 g/mol) dan Oksigen (O₂, gas diatomik, M = 32 g/mol) yang berada dalam kesetimbangan termal sempurna. Diketahui konstanta Boltzmann k = 1,38 × 10⁻²³ J/K.',
      table: {
        caption: 'Karakteristik Termal Gas pada Dua Suhu Pengujian',
        headers: ['Kondisi', 'Suhu Celsius (t)', 'Suhu Mutlak (T)', 'Faktor Pengali Suhu Mutlak'],
        rows: [
          ['Kondisi Awal (1)', '27 °C', '300 K', '1,0 × T₀'],
          ['Kondisi Akhir (2)', '327 °C', '600 K', '2,0 × T₀ (Dua kali lipat)'],
        ],
      },
      graphType: 'ek-t',
      graphTitle: 'Grafik Hubungan Energi Kinetik Rata-rata Terhadap Suhu Mutlak',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR mengenai energi kinetik partikel gas tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Energi kinetik translasi rata-rata satu molekul gas pada suhu 27 °C adalah tepat sebesar 6,21 × 10⁻²¹ Joule.' },
      { id: 'B', text: 'Ketika suhu gas dinaikkan dari 27 °C menjadi 327 °C, energi kinetik translasi rata-rata molekul berlipat ganda tepat 2 kali lipat menjadi 12,42 × 10⁻²¹ Joule.' },
      { id: 'C', text: 'Pada suhu yang sama (misalnya 27 °C), energi kinetik translasi rata-rata satu molekul Helium bernilai tepat sama dengan energi kinetik translasi rata-rata satu molekul Oksigen, meskipun massa molekul Oksigen 8 kali lebih berat.' },
      { id: 'D', text: 'Energi kinetik translasi rata-rata molekul gas ideal berbanding lurus dengan kuadrat suhu mutlak (Ek ~ T²).' },
      { id: 'E', text: 'Jika suhu gas dalam skala Celsius dinaikkan menjadi dua kali lipat dari 27 °C menjadi 54 °C, energi kinetik rata-rata partikel gas tersebut juga berlipat dua.' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    rumusKunci: {
      nama: 'Energi Kinetik Translasi Rata-rata Partikel Gas Ideal',
      rumusLatex: '\\bar{E}_k = \\frac{3}{2} k T, \\quad \\frac{\\bar{E}_{k2}}{\\bar{E}_{k1}} = \\frac{T_2}{T_1}',
      rumusPlain: 'Ek_rata = (3/2) * k * T',
      keteranganSimbol: [
        { simbol: 'Ek_rata', arti: 'Energi kinetik translasi rata-rata per molekul', satuan: 'Joule (J)' },
        { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: '1,38 × 10⁻²³ J/K' },
        { simbol: 'T', arti: 'Suhu mutlak gas', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan untuk menentukan energi kinetik translasi rata-rata satu partikel gas ideal pada sembarang temperatur T.',
      alasanPemilihan: 'Menunjukkan prinsip dasar fisika termal bahwa temperatur adalah manifestasi langsung dari energi kinetik partikel.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'T1 = 27 °C = 300 K',
          'T2 = 327 °C = 600 K',
          'k = 1,38 × 10⁻²³ J/K',
          'Gas Helium (M=4) dan Oksigen (M=32) dalam kesetimbangan termal',
        ],
        ditanyakan: 'Evaluasi kebenaran opsi A, B, C, D, E.',
        infoPenting: 'Energi kinetik translasi rata-rata per partikel HANYA bergantung pada suhu mutlak T dan tidak bergantung pada massa molekul ataupun jenis gas!',
      },
      identifikasiKonsep: {
        konsep: 'Teori Kinetik Translasi Molekul Gas Ideal.',
        alasan: 'Hubungan fundamental Ek = (3/2) kT membuktikan sifat mikroskopis temperatur.',
      },
      rumusKunci: 'Ek = (3/2) kT',
      langkahPenyelesaian: [
        '1. Pernyataan A: Ek1 = (3/2) × (1,38 × 10⁻²³ J/K) × 300 K = 1,5 × 4,14 × 10⁻²¹ = 6,21 × 10⁻²¹ J. (Pernyataan A BENAR)',
        '2. Pernyataan B: T2 = 327 + 273 = 600 K. Rasio T2 / T1 = 600 / 300 = 2. Karena Ek sebanding linier dengan T, maka Ek2 = 2 × Ek1 = 2 × 6,21 × 10⁻²¹ = 12,42 × 10⁻²¹ J (berlipat dua tepat). (Pernyataan B BENAR)',
        '3. Pernyataan C: Rumus Ek = (3/2) kT tidak memuat variabel massa partikel (m). Pada suhu T yang sama, baik molekul Helium maupun Oksigen memiliki energi kinetik translasi rata-rata yang sama persis (meskipun laju geraknya berbeda karena massanya berbeda). (Pernyataan C BENAR)',
        '4. Pernyataan D: Ek berbanding lurus secara linier dengan T pangkat satu (Ek ~ T), bukan T kuadrat. (Pernyataan D SALAH)',
        '5. Pernyataan E: Suhu 27 °C = 300 K, sedangkan 54 °C = 54 + 273 = 327 K. Rasio energi kinetiknya adalah 327 / 300 = 1,09 (hanya naik 9%, bukan naik 100% atau dua kali lipat!). Menggandakan skala Celsius tidak menggandakan energi kinetik partikel. (Pernyataan E SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, dan C benar secara fisis dan matematis. Nilai 6,21 × 10⁻²¹ J pada 300 K, naik 2x lipat pada 600 K, dan independen terhadap massa partikel.',
        opsiLain: 'Pernyataan D salah karena relasinya linier (~T). Pernyataan E salah karena skala yang proporsional dengan energi kinetik adalah Kelvin, bukan Celsius.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, dan C.',
      tipsMengerjakan: 'Kunci emas Teori Kinetik Gas: "Di dalam ruangan yang sama dengan suhu yang sama, semua jenis molekul gas—apakah molekul ringan seperti Hidrogen atau molekul raksasa seperti Uranium Heksafluorida—memiliki ENERGI KINETIK TRANSLASI RATA-RATA YANG PERSIS SAMA!"',
    },
    caraCepatMisterJo: {
      judulTrik: 'Mantra Emas Suhu Mutlak',
      hubunganMatematis: 'Ek = 1,5 × k × T. Nilai 1,5 × 1,38 = 2,07 × 10⁻²³.',
      substitusiSingkat: 'Untuk T = 300 K: Ek = 2,07 × 300 × 10⁻²³ = 621 × 10⁻²³ = 6,21 × 10⁻²¹ J seketika!',
      trikHindariHitungPanjang: 'Hafalkan faktor pengali 2,07 × 10⁻²³! Cukup kalikan 2,07 dengan suhu T.',
      caraCekKewajaran: 'Suhu mutlak 300 K ke 600 K berlipat dua kali, maka energi kinetik mutlak berlipat dua kali.',
      kapanDigunakan: 'Dapat digunakan pada setiap soal yang menanyakan energi kinetik per partikel gas ideal.',
    },
    audioScript: {
      stimulus: 'Perhatikan konsep dasar energi kinetik translasi rata-rata partikel gas pada suhu 27 dan 327 derajat Celsius.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya energi kinetik rata-rata sama dengan tiga per dua k kali T.',
      pembahasan: 'Pernyataan A benar, energi kinetik pada suhu 27 Celsius adalah 6,21 kali 10 pangkat minus 21 Joule. Pernyataan B benar, saat suhu mutlak naik dari 300 ke 600 Kelvin energi kinetik berlipat dua. Pernyataan C benar, energi kinetik molekul hanya bergantung pada suhu dan tidak dipengaruhi massa molekul.',
      caraCepat: 'Trik Mister Jo: Ingat mantra emas, satu koma lima dikali k adalah dua koma nol tujuh kali sepuluh pangkat minus dua puluh tiga. Kalikan saja 300, langsung dapat 6,21 kali sepuluh pangkat minus dua puluh satu Joule dalam hitungan detik!',
      kesimpulan: 'Pernyataan yang benar adalah A, B, dan C.',
    },
  },

  // SOAL 16 (PG)
  {
    id: 16,
    groupId: 'energi-kinetik',
    groupTitle: 'Kelompok 4: Energi Kinetik Gas Ideal',
    type: 'pg',
    title: 'Energi Kinetik Total Gas Plasma pada Bejana Reaktor Fusi',
    stimulus: {
      text: 'Di fasilitas eksperimen reaktor fusi magnetik (Tokamak), sebuah ruang vakum isolasi diisi gas Helium murni (gas monoatomik He, massa molar M = 4 g/mol) sebanyak n = 4,0 mol. Sistem pemanas gelombang mikro frekuensi radio menaikkan energi termal gas hingga suhunya mencapai kesetimbangan pada t = 727 °C (setara dengan T = 1.000 K). Gas diasumsikan berperilaku sebagai gas ideal sebelum mengalami ionisasi penuh, dengan konstanta gas universal R = 8,31 J/(mol·K) dan bilangan Avogadro NA = 6,02 × 10²³ partikel/mol.',
      table: {
        caption: 'Parameter Termal Gas Helium dalam Ruang Vakum',
        headers: ['Parameter Fisis', 'Besaran Terukur', 'Keterangan'],
        rows: [
          ['Jumlah Zat (n)', '4,0 mol', 'n = m / M'],
          ['Suhu Celsius (t)', '727 °C', 'Suhu mutlak T = 1.000 K'],
          ['Konstanta Gas Universal (R)', '8,31 J/(mol·K)', 'R = NA · k'],
          ['Tipe Gas', 'Helium (Monoatomik)', 'Derajat translasi f = 3'],
        ],
      },
      graphType: 'kinetic-particles',
      graphTitle: 'Gerak Acak Partikel Gas Bersuhu 1.000 K dalam Ruang Vakum',
    },
    questionPrompt: 'Energi kinetik translasi TOTAL dari seluruh partikel gas Helium yang berada di dalam bejana reaktor tersebut adalah...',
    options: [
      { id: 'A', text: '16,62 kJ (16.620 Joule)' },
      { id: 'B', text: '24,93 kJ (24.930 Joule)' },
      { id: 'C', text: '33,24 kJ (33.240 Joule)' },
      { id: 'D', text: '49,86 kJ (49.860 Joule)' },
      { id: 'E', text: '74,79 kJ (74.790 Joule)' },
    ],
    correctAnswer: 'D',
    rumusKunci: {
      nama: 'Energi Kinetik Translasi Total Seluruh Partikel Gas',
      rumusLatex: 'E_{k,\\text{total}} = N \\cdot \\bar{E}_k = N \\cdot \\left(\\frac{3}{2} k T\\right) = \\frac{3}{2} n \\cdot R \\cdot T',
      rumusPlain: 'Ek_total = (3/2) * n * R * T',
      keteranganSimbol: [
        { simbol: 'Ek,total', arti: 'Energi kinetik translasi total seluruh gas', satuan: 'Joule (J)' },
        { simbol: 'n', arti: 'Jumlah mol gas', satuan: '4,0 mol' },
        { simbol: 'R', arti: 'Konstanta gas universal', satuan: '8,31 J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak (727 + 273)', satuan: '1.000 K' },
      ],
      kondisiPenggunaan: 'Digunakan untuk mencari total akumulasi energi kinetik translasi dari N molekul gas.',
      alasanPemilihan: 'Menggabungkan jumlah partikel N = n · NA dengan energi rata-rata partikel (3/2 kT) sehingga NA · k bertransformasi menjadi konstanta R.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 4,0 mol',
          't = 727 °C → T = 727 + 273 = 1.000 K',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Energi kinetik total (Ek,total) dalam Joule atau kJ.',
        infoPenting: 'Hubungan N · k = n · R menyederhanakan perhitungan tanpa perlu melibatkan eksponen 10²³.',
      },
      identifikasiKonsep: {
        konsep: 'Energi Kinetik Translasi Total Gas Ideal Makroskopis.',
        alasan: 'Energi kinetik total berbanding lurus dengan jumlah mol dan suhu mutlak.',
      },
      rumusKunci: 'Ek,total = (3/2) · n · R · T',
      langkahPenyelesaian: [
        'Langkah 1: Konversi suhu Celsius ke Kelvin: T = 727 + 273 = 1.000 K',
        'Langkah 2: Masukkan nilai ke rumus: Ek,total = (3/2) × n × R × T',
        'Ek,total = 1,5 × 4,0 mol × 8,31 J/(mol·K) × 1.000 K',
        'Ek,total = 6,0 × 8.310 J',
        'Ek,total = 49.860 Joule = 49,86 kJ',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi D benar karena 1,5 × 4 × 8,31 × 1000 = 49.860 J = 49,86 kJ.',
        opsiLain: 'Opsi B (24,93 kJ) terjadi jika siswa lupa mengalikan dengan faktor 2 (atau mengira n = 2). Opsi C (33,24 kJ) terjadi jika tidak menyertakan faktor 3/2 (hanya menghitung nRT). Opsi A (16,62 kJ) adalah kesalahan 1/3 nRT.',
      },
      kesimpulan: 'Energi kinetik translasi total gas Helium di dalam bejana adalah 49,86 kJ.',
      tipsMengerjakan: 'Perhatikan bahwa N·k = n·R. Jangan buang waktu menghitung jumlah partikel N lalu mengalikan dengan k! Langsung gunakan (3/2) · n · R · T.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Pengali Angka Bulat 6 × 8.310',
      hubunganMatematis: 'Ek,total = (3/2 × 4) × (8,31 × 1000) = 6 × 8.310.',
      substitusiSingkat: '6 × 8.000 = 48.000. 6 × 310 = 1.860. 48.000 + 1.860 = 49.860 J = 49,86 kJ!',
      trikHindariHitungPanjang: 'Suhu 1.000 K menggeser koma pada 8,31 menjadi 8.310. Cukup kalikan 6 × 8.310!',
      caraCekKewajaran: '1 mol gas pada 1.000 K memiliki energi kinetik 1,5 × 8.310 ≈ 12,46 kJ. Untuk 4 mol: 4 × 12,46 kJ ≈ 49,8 kJ. Sangat pas!',
      kapanDigunakan: 'Sangat cocok untuk setiap soal energi kinetik total dengan mol n dan konstanta R.',
    },
    audioScript: {
      stimulus: 'Mari cermati gas Helium sebanyak 4 mol pada bejana reaktor bersuhu 727 derajat Celsius atau seribu Kelvin.',
      soal: 'Berapakah energi kinetik translasi total seluruh molekul gas Helium tersebut?',
      rumusKunci: 'Rumus kuncinya energi kinetik total sama dengan tiga per dua dikali n kali R kali T.',
      pembahasan: 'Suhu mutlaknya adalah 1.000 Kelvin. Tiga per dua dikali 4 mol adalah 6. Enam dikali 8,31 dikali 1.000 menghasilkan 49.860 Joule atau 49,86 kiloJoule.',
      caraCepat: 'Trik Mister Jo: Jangan repot mencari jumlah partikel N! Cukup kalikan 6 dengan 8.310. Dalam sekejap ketemu 49,86 kiloJoule!',
      kesimpulan: 'Jawaban yang tepat adalah opsi D, 49,86 kiloJoule.',
    },
  },

  // SOAL 17 (BS)
  {
    id: 17,
    groupId: 'energi-kinetik',
    groupTitle: 'Kelompok 4: Energi Kinetik Gas Ideal',
    type: 'bs',
    title: 'Evaluasi Mikroskopis Partikel Gas Ringan (He) vs Gas Berat (Kr)',
    stimulus: {
      text: 'Dua buah wadah identik A dan B dihubungkan oleh dinding konduktor termal sehingga keduanya berada dalam kesetimbangan termal pada suhu yang sama, yaitu T = 300 K. Wadah A berisi 1,0 mol gas Helium (He, gas monoatomik ringan, M = 4 g/mol), sedangkan wadah B berisi 1,0 mol gas Kripton (Kr, gas monoatomik berat, M = 84 g/mol). Kedua gas dianggap berperilaku sebagai gas ideal. Diketahui k = 1,38 × 10⁻²³ J/K dan NA = 6,02 × 10²³ partikel/mol.',
      table: {
        caption: 'Data Komparasi Molekuler Wadah A dan Wadah B',
        headers: ['Wadah', 'Gas', 'Massa Molar (M)', 'Jumlah Mol (n)', 'Suhu (T)'],
        rows: [
          ['Wadah A', 'Helium (He)', '4 g/mol', '1,0 mol', '300 K'],
          ['Wadah B', 'Kripton (Kr)', '84 g/mol (21× lebih berat)', '1,0 mol', '300 K'],
        ],
      },
      graphType: 'kinetic-particles',
      graphTitle: 'Perbandingan Kecepatan dan Energi Dua Jenis Partikel Gas',
    },
    questionPrompt: 'Berdasarkan teori kinetik gas ideal, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Energi kinetik translasi rata-rata satu molekul gas Helium di wadah A bernilai tepat sama dengan energi kinetik translasi rata-rata satu molekul gas Kripton di wadah B.',
        correct: true,
        explanation: 'Energi kinetik rata-rata molekul adalah Ek = (3/2) kT. Karena TA = TB = 300 K, maka Ek(He) = Ek(Kr) = 6,21 × 10⁻²¹ J. Nilai ini tidak dipengaruhi oleh massa molar partikel. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Energi kinetik translasi total seluruh gas di dalam wadah A sama besar dengan energi kinetik translasi total seluruh gas di dalam wadah B.',
        correct: true,
        explanation: 'Ek,total = (3/2) nRT. Karena nA = nB = 1,0 mol dan TA = TB = 300 K, maka Ek,total(A) = Ek,total(B) = (3/2) × 1,0 × 8,31 × 300 ≈ 3.739,5 Joule. Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Karena energi kinetiknya sama, besar momentum translasi rata-rata molekul Helium sama dengan besar momentum translasi rata-rata molekul Kripton.',
        correct: false,
        explanation: 'Hubungan momentum (p) dan energi kinetik adalah Ek = p² / (2m) → p = √(2 m Ek). Karena massa molekul Kripton m_Kr jauh lebih besar daripada m_He (84 vs 4, yaitu 21 kali lipat), maka momentum molekul Kripton adalah √(21) ≈ 4,58 kali lebih besar daripada momentum molekul Helium! Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Hubungan Energi Kinetik, Suhu, dan Momentum Partikel',
      rumusLatex: '\\bar{E}_k = \\frac{3}{2} k T, \\quad E_{k,\\text{total}} = \\frac{3}{2} n R T, \\quad p = \\sqrt{2 m \\bar{E}_k}',
      rumusPlain: 'Ek = 3/2 kT dan p = sqrt(2 * m * Ek)',
      keteranganSimbol: [
        { simbol: 'Ek', arti: 'Energi kinetik translasi rata-rata', satuan: 'Joule' },
        { simbol: 'm', arti: 'Massa satu molekul gas', satuan: 'kg' },
        { simbol: 'p', arti: 'Besar momentum molekul', satuan: 'kg·m/s' },
      ],
      kondisiPenggunaan: 'Digunakan saat menguji pemahaman mendalam antara besaran skalar energi kinetik dan besaran vektor momentum partikel.',
      alasanPemilihan: 'Menguji jebakan logika umum yang sering mengira partikel dengan energi kinetik sama pasti memiliki momentum yang sama.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Wadah A: He (M = 4 g/mol), n = 1,0 mol, T = 300 K',
          'Wadah B: Kr (M = 84 g/mol), n = 1,0 mol, T = 300 K',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan.',
        infoPenting: 'Suhu sama dan mol sama, tetapi massa atom berbeda 21 kali lipat.',
      },
      identifikasiKonsep: {
        konsep: 'Teori Ekuipartisi Termal dan Relasi De Broglie / Dinamika Partikel.',
        alasan: 'Membandingkan energi kinetik (fungsi T saja) dan momentum partikel (fungsi m dan T).',
      },
      rumusKunci: 'Ek = (3/2) kT dan p = √(2m Ek)',
      langkahPenyelesaian: [
        '1. Pernyataan 1: Ek = (3/2) kT. Karena T identik (300 K), maka Ek rata-rata per molekul He dan Kr bernilai tepat sama. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Ek,total = n × NA × Ek = (3/2) n R T. Karena n = 1 mol dan T = 300 K pada kedua wadah, energi kinetik total keduanya sama persis yaitu ~3.740 Joule. (Pernyataan 2 BENAR)',
        '3. Pernyataan 3: Momentum partikel p = m · v. Karena Ek = 1/2 m v² = p² / (2m), maka p = √(2 m Ek). Karena Ek sama, p sebanding dengan √m. Rasio p_Kr / p_He = √(m_Kr / m_He) = √(84 / 4) = √21 ≈ 4,58. Partikel Kripton yang lebih lambat namun jauh lebih masif memiliki momentum rata-rata lebih dari 4,5 kali lebih besar dibanding Helium. (Pernyataan 3 SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 dan 2 benar sesuai hukum gas ideal. Pernyataan 3 salah karena momentum sebanding dengan akar massa.',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Pahami pasangan rumus: Jika Ek sama, maka kelajuan v sebanding dengan 1/√m (partikel ringan bergerak lebih cepat), namun momentum p sebanding dengan √m (partikel berat memiliki momentum tumbukan lebih besar).',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Ingat Relasi p = √(2m·Ek)',
      hubunganMatematis: 'p sebanding dengan √m jika Ek konstan.',
      substitusiSingkat: 'Massa Kr = 21 × He → p_Kr = √21 × p_He ≈ 4,58 p_He. Jelas momentum tidak sama!',
      trikHindariHitungPanjang: 'Cukup ingat p = √(2m·Ek). Karena massa berbeda, momentum PASTI berbeda!',
      caraCekKewajaran: 'Truk dan sepeda motor dengan energi kinetik sama: truk melaju pelan tapi bermassa raksasa sehingga momentumnya jauh lebih mengerikan dibanding sepeda motor.',
      kapanDigunakan: 'Sangat berguna pada soal konsep penalaran HOTS mikroskopis gas.',
    },
    audioScript: {
      stimulus: 'Mari bandingkan gas Helium dan gas Kripton yang berada pada suhu yang sama 300 Kelvin.',
      soal: 'Evaluasilah apakah ketiga pernyataan berikut bernilai Benar atau Salah.',
      rumusKunci: 'Rumus kuncinya energi kinetik rata-rata sama dengan tiga per dua k T, dan momentum sama dengan akar dari dua m dikali energi kinetik.',
      pembahasan: 'Pernyataan 1 benar, energi kinetik rata-rata kedua gas sama besar karena suhunya sama. Pernyataan 2 benar, energi kinetik totalnya juga sama karena jumlah molnya sama. Pernyataan 3 salah, momentum molekul Kripton lebih besar karena massanya 21 kali lebih berat.',
      caraCepat: 'Trik Mister Jo: Energi kinetik cuma peduli suhu, tapi momentum bergantung pada massa partikel! Karena massa Kripton jauh lebih berat, momentumnya pasti lebih besar!',
      kesimpulan: 'Jawaban yang benar: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 18 (PGK)
  {
    id: 18,
    groupId: 'energi-kinetik',
    groupTitle: 'Kelompok 4: Energi Kinetik Gas Ideal',
    type: 'pgk',
    title: 'Interpretasi Gradien Grafik Energi Kinetik terhadap Suhu Mutlak',
    stimulus: {
      text: 'Dalam publikasi jurnal fisika termal, disajikan grafik eksperimen energi kinetik translasi rata-rata per molekul (Ek dalam satuan 10⁻²¹ Joule) terhadap suhu mutlak gas (T dalam satuan Kelvin). Grafik tersebut berupa garis lurus linier yang berpangkal pada koordinat titik (0 K, 0 J). Peneliti menguji berbagai variasi gas monoatomik dan diatomik untuk mengamati apakah terdapat deviasi dari konstanta fundamental Boltzmann k = 1,38 × 10⁻²³ J/K.',
      table: {
        caption: 'Data Titik Koordinat Garis Linier Grafik Ek vs T',
        headers: ['Suhu Mutlak T (K)', 'Energi Kinetik Translasi Ek (× 10⁻²¹ J)', 'Rasio Ek / T (× 10⁻²³ J/K)'],
        rows: [
          ['100 K', '2,07 × 10⁻²¹ J', '2,07 × 10⁻²³ J/K'],
          ['200 K', '4,14 × 10⁻²¹ J', '2,07 × 10⁻²³ J/K'],
          ['300 K', '6,21 × 10⁻²¹ J', '2,07 × 10⁻²³ J/K'],
          ['400 K', '8,28 × 10⁻²¹ J', '2,07 × 10⁻²³ J/K'],
        ],
      },
      graphType: 'ek-t',
      graphTitle: 'Kurva Linier Energi Kinetik Translasi terhadap Temperatur Kelvin',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait analisis grafik dan hukum fisika yang mendasarinya? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Kemiringan atau gradien garis lurus pada grafik Ek terhadap T tersebut bernilai konstan sebesar 2,07 × 10⁻²³ J/K.' },
      { id: 'B', text: 'Gradien grafik tersebut secara teoritis merepresentasikan nilai matematis dari 3/2 dikalikan konstanta Boltzmann (3/2 k).' },
      { id: 'C', text: 'Pada suhu T = 0 Kelvin (nol mutlak), energi kinetik translasi molekul gas ideal bernilai nol sesuai model gas ideal klasik.' },
      { id: 'D', text: 'Jika gas di dalam eksperimen diganti dari gas monoatomik Helium menjadi gas diatomik Oksigen, gradien garis energi kinetik translasi rata-rata ini akan berubah menjadi lebih curam.' },
      { id: 'E', text: 'Berdasarkan gradien grafik tersebut, nilai konstanta Boltzmann k yang terhitung dari data adalah tepat 1,38 × 10⁻²³ J/K.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    rumusKunci: {
      nama: 'Persamaan Linear Energi Kinetik Translasi & Gradien Garis',
      rumusLatex: '\\bar{E}_k(T) = m_{\\text{gradien}} \\cdot T, \\quad m_{\\text{gradien}} = \\frac{3}{2} k \\implies k = \\frac{2}{3} m_{\\text{gradien}}',
      rumusPlain: 'Ek = (3/2 * k) * T, gradien = 3/2 * k',
      keteranganSimbol: [
        { simbol: 'Ek', arti: 'Energi kinetik translasi rata-rata', satuan: 'Joule' },
        { simbol: 'm_gradien', arti: 'Kemiringan grafik ΔEk / ΔT', satuan: 'J/K' },
        { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: 'J/K' },
      ],
      kondisiPenggunaan: 'Digunakan saat mengolah data grafik regresi linier termodinamika gas.',
      alasanPemilihan: 'Menunjukkan bagaimana konstanta fundamental k dapat ditentukan dari kemiringan kurva eksperimen.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Data: (100 K, 2,07×10⁻²¹ J), (200 K, 4,14×10⁻²¹ J), (300 K, 6,21×10⁻²¹ J), (400 K, 8,28×10⁻²¹ J)',
          'Grafik melalui (0,0)',
        ],
        ditanyakan: 'Evaluasi kebenaran seluruh opsi A, B, C, D, E.',
        infoPenting: 'Perhatikan kata kunci: "energi kinetik translasi rata-rata", bukan energi dalam total!',
      },
      identifikasiKonsep: {
        konsep: 'Analisis Kemiringan Kurva Ek-T dan Konstanta Boltzmann.',
        alasan: 'Hubungan linier Ek = (3/2 k) · T adalah bentuk y = m x.',
      },
      rumusKunci: 'm_gradien = ΔEk / ΔT = 3/2 k',
      langkahPenyelesaian: [
        '1. Gradien Garis: m = ΔEk / ΔT = (8,28 - 2,07) × 10⁻²¹ / (400 - 100) = 6,21 × 10⁻²¹ / 300 = 0,0207 × 10⁻²¹ = 2,07 × 10⁻²³ J/K. (Pernyataan A BENAR)',
        '2. Makna Fisis Gradien: Persamaan garis adalah Ek = (3/2 k) T. Maka gradien m = 3/2 k. (Pernyataan B BENAR)',
        '3. Nol Mutlak: Pada T = 0 K, Ek = (3/2 k)(0) = 0 Joule. Gerak translasi molekul berhenti total pada model gas ideal klasik. (Pernyataan C BENAR)',
        '4. Periksa Opsi D: Energi kinetik TRANSLASI rata-rata memiliki 3 derajat kebebasan untuk SEMUA jenis gas ideal (monoatomik, diatomik, maupun poliatomik). Oleh karena itu gradien Ek_translasi vs T SELALU 3/2 k dan TIDAK BERUBAH jika gas diganti Oksigen! (Pernyataan D SALAH)',
        '5. Nilai k dari Gradien: k = (2/3) × m_gradien = (2/3) × (2,07 × 10⁻²³ J/K) = 2 × 0,69 × 10⁻²³ = 1,38 × 10⁻²³ J/K. Persis cocok! (Pernyataan E BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan E benar terbukti secara matematis dan analitis. Gradien 2,07 × 10⁻²³, mewakili 3/2 k, memotong di 0, dan menghasilkan k = 1,38 × 10⁻²³.',
        opsiLain: 'Pernyataan D salah karena energi kinetik translasi selalu melibatkan 3 arah (x, y, z) bagi semua molekul, sehingga kurvanya tidak berubah.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
      tipsMengerjakan: 'Jangan tertukar antara "energi kinetik translasi" (selalu 3/2 kT untuk gas apa saja) dengan "energi dalam" (U = f/2 nRT yang bergantung jenis gas).',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Gradien 2,07 dan Faktor 2/3',
      hubunganMatematis: 'Gradien = 3/2 k = 1,5 × 1,38 = 2,07 × 10⁻²³.',
      substitusiSingkat: 'k = 2/3 × 2,07 = 1,38. Sangat mudah dan langsung tervalidasi!',
      trikHindariHitungPanjang: 'Cukup bagi 6,21 dengan 3 didapat 2,07. Lalu 2,07 dibagi 1,5 didapat 1,38!',
      caraCekKewajaran: 'Garis lurus melalui (0,0) membuktikan proporsionalitas langsung.',
      kapanDigunakan: 'Sangat ampuh untuk soal-soal penalaran grafik UTBK SNBT.',
    },
    audioScript: {
      stimulus: 'Perhatikan grafik energi kinetik translasi rata-rata terhadap suhu mutlak Kelvin berikut ini.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya energi kinetik translasi rata-rata sama dengan tiga per dua k dikali T, sehingga gradiennya adalah tiga per dua k.',
      pembahasan: 'Gradien grafik bernilai 2,07 kali sepuluh pangkat minus 23 Joule per Kelvin. Gradien ini merepresentasikan tiga per dua k, dan pada nol Kelvin energinya nol. Dari gradien ini, nilai konstanta Boltzmann terbukti tepat 1,38 kali 10 pangkat minus 23.',
      caraCepat: 'Trik Mister Jo: Energi kinetik translasi selalu tiga per dua k untuk semua gas! Jadi kurvanya tidak akan berubah lebih curam meskipun gas diganti oksigen!',
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
    },
  },
];
