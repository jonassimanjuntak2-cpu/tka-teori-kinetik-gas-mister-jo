/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 6: TEORI EKUIPARTISI ENERGI (4 SOAL)
 * Q23: PGK, Q24: BS, Q25: PG, Q26: BS
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_6: Question[] = [
  // SOAL 23 (PGK)
  {
    id: 23,
    groupId: 'ekuipartisi',
    groupTitle: 'Kelompok 6: Teori Ekuipartisi Energi',
    type: 'pgk',
    title: 'Transisi Derajat Kebebasan Termal Gas Diatomik Hidrogen',
    stimulus: {
      text: 'Berdasarkan mekanika statistik kuantum dan teori ekuipartisi energi klasik, derajat kebebasan (f) molekul diatomik seperti Hidrogen (H₂) tidak konstan di seluruh temperatur, melainkan teraktivasi secara bertahap seiring kenaikan energi termal kT terhadap celah energi kuantisasi rotasi dan vibrasi. Fisikawan menguji 1,0 mol gas Hidrogen pada tiga rezim suhu yang berbeda:\n1. Rezim Suhu Rendah (T ≈ 50 K): Energi termal hanya cukup untuk mengaktifkan 3 sumbu translasi (f = 3).\n2. Rezim Suhu Kamar / Sedang (T ≈ 300 K): Eksitasi energi mengaktifkan 3 gerak translasi dan 2 mode rotasi sepanjang dua sumbu tegak lurus ikatan (f = 5).\n3. Rezim Suhu Sangat Tinggi (T ≈ 1.500 K): Ikatan kovalen berosilasi aktif sehingga mode vibrasi tereksitasi penuh menyumbang 2 derajat kebebasan tambahan (kinetik dan potensial pegas molekul), menghasilkan f = 7.',
      table: {
        caption: 'Tiga Rezim Temperatur Gas Diatomik Hidrogen',
        headers: ['Rezim Suhu', 'Suhu (T)', 'Derajat Kebebasan Aktif (f)', 'Bentuk Persamaan Energi Dalam'],
        rows: [
          ['Suhu Rendah', 'T ≈ 50 K', 'f = 3 (Translasi)', 'U = (3/2) nRT'],
          ['Suhu Sedang / Kamar', 'T ≈ 300 K', 'f = 5 (Translasi + Rotasi)', 'U = (5/2) nRT'],
          ['Suhu Sangat Tinggi', 'T ≈ 1.500 K', 'f = 7 (Translasi + Rotasi + Vibrasi)', 'U = (7/2) nRT'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Kurva Kenaikan Kapasitas Kalor terhadap Temperatur',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait prinsip pembagian energi ekuipartisi pada gas diatomik tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Pada rezim suhu rendah (sekitar 50 K), gas diatomik Hidrogen berperilaku termal persis seperti gas monoatomik dengan energi rata-rata 3/2 kT per molekul.' },
      { id: 'B', text: 'Pada suhu kamar (sekitar 300 K), kontribusi energi rotasi molekul gas diatomik bernilai tepat sama dengan kT per molekul (atau nRT untuk n mol gas).' },
      { id: 'C', text: 'Pada suhu sangat tinggi (sekitar 1.500 K), kontribusi mode vibrasi menyumbangkan tepat 2 derajat kebebasan tambahan karena melibatkan energi kinetik getaran dan energi potensial elastis ikatan.' },
      { id: 'D', text: 'Pada rezim suhu kamar, rasio energi dalam total terhadap energi kinetik translasi pada gas diatomik adalah tepat 5 : 3.' },
      { id: 'E', text: 'Pada suhu berapapun tingginya, derajat kebebasan rotasi molekul diatomik selalu bernilai 3 karena ruang memiliki 3 dimensi spasial (x, y, z).' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    rumusKunci: {
      nama: 'Teorema Ekuipartisi & Transisi Derajat Kebebasan f',
      rumusLatex: '\\bar{\\epsilon} = \\frac{1}{2} k T \\text{ (per derajat kebebasan)}, \\quad U = \\left(\\frac{f_{\\text{trans}} + f_{\\text{rot}} + f_{\\text{vib}}}{2}\\right) n R T',
      rumusPlain: 'E_per_dof = 1/2 * k * T dan U = (f/2) * n * R * T',
      keteranganSimbol: [
        { simbol: 'f_trans', arti: 'Derajat kebebasan translasi (selalu 3)', satuan: 'x, y, z' },
        { simbol: 'f_rot', arti: 'Derajat kebebasan rotasi (2 untuk diatomik)', satuan: 'sumbu tegak lurus' },
        { simbol: 'f_vib', arti: 'Derajat kebebasan vibrasi (2: 1 Ek + 1 Ep)', satuan: 'pada suhu tinggi' },
        { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: '1,38 × 10⁻²³ J/K' },
      ],
      kondisiPenggunaan: 'Digunakan untuk memahami fenomena kapasitas kalor dan energi dalam bertingkat pada gas molekuler.',
      alasanPemilihan: 'Merupakan materi esensial teori kinetik gas SMA yang menjembatani fisika klasik dan mekanika kuantum.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Gas Hidrogen H₂ (diatomik)',
          'T rendah (~50 K): f = 3 (translasi saja)',
          'T kamar (~300 K): f = 5 (3 translasi + 2 rotasi)',
          'T tinggi (~1500 K): f = 7 (3 translasi + 2 rotasi + 2 vibrasi)',
        ],
        ditanyakan: 'Evaluasi kebenaran opsi A, B, C, D, E.',
        infoPenting: 'Rotasi diatomik hanya memiliki 2 derajat kebebasan karena rotasi sepanjang sumbu antar-inti memiliki momen inersia mendekati nol.',
      },
      identifikasiKonsep: {
        konsep: 'Teori Ekuipartisi Energi dan Transisi Derajat Kebebasan Molekul Gas.',
        alasan: 'Setiap derajat kebebasan aktif menyumbang 1/2 kT per molekul.',
      },
      rumusKunci: 'U = (f/2) nRT dan energi per dof = 1/2 kT',
      langkahPenyelesaian: [
        '1. Pernyataan A: Pada T rendah (50 K), hanya translasi yang aktif (f = 3), sehingga U = (3/2) nRT dan energi rata-rata = 3/2 kT. Perilakunya identik dengan gas monoatomik. (Pernyataan A BENAR)',
        '2. Pernyataan B: Pada 300 K, f_rotasi = 2. Masing-masing derajat kebebasan menyumbang 1/2 kT, sehingga energi rotasi per molekul = 2 × (1/2 kT) = kT (atau nRT per n mol). (Pernyataan B BENAR)',
        '3. Pernyataan C: Osilasi harmonik vibrasi molekul memiliki dua komponen kuadratik dalam fungsi Hamiltonian: energi kinetik getaran (1/2 m v²) dan energi potensial pegas ikatan (1/2 k x²). Oleh karena itu, mode vibrasi menyumbangkan 2 derajat kebebasan aktif. (Pernyataan C BENAR)',
        '4. Pernyataan D: Pada 300 K, U_total = 5/2 nRT, sedangkan energi kinetik translasi selalu E_trans = 3/2 nRT. Rasionya adalah (5/2) / (3/2) = 5 : 3. (Pernyataan D BENAR)',
        '5. Pernyataan E: Molekul diatomik berbentuk linier seperti dumbbell. Momen inersia terhadap sumbu longitudinal yang menghubungkan kedua inti atom sangat kecil (mendekati nol), sehingga derajat kebebasan rotasi diatomik HANYA ADA 2 (bukan 3). (Pernyataan E SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan D benar secara konsep termodinamika ekuipartisi. Pernyataan A mencerminkan pembekuan rotasi kuantum, B dan D menghitung kontribusi energi dengan tepat, C menjelaskan 2 derajat kebebasan vibrasi.',
        opsiLain: 'Pernyataan E salah karena derajat kebebasan rotasi molekul linier diatomik hanya 2, bukan 3.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan D.',
      tipsMengerjakan: 'Hafalkan hierarki gas diatomik: Suhu rendah f = 3 (cuma translasi). Suhu sedang f = 5 (+ 2 rotasi). Suhu tinggi f = 7 (+ 2 vibrasi). Derajat kebebasan rotasi diatomik selalu 2, tidak pernah 3!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Tangga 3 - 5 - 7',
      hubunganMatematis: 'f bertambah dua-dua: 3 (dingin) → 5 (kamar) → 7 (panas ekstrim).',
      substitusiSingkat: 'Rotasi = 2 dof (energi = 2 × 1/2 kT = kT). Vibrasi = 2 dof (energi = 2 × 1/2 kT = kT).',
      trikHindariHitungPanjang: 'Cukup ingat: setiap penambahan mode (rotasi atau vibrasi) selalu menambahkan tepat 2 derajat kebebasan!',
      caraCekKewajaran: 'Translasi 3 arah (x,y,z), rotasi 2 sumbu, vibrasi 2 bentuk energi (kinetik dan potensial). Total = 3 + 2 + 2 = 7.',
      kapanDigunakan: 'Sangat praktis untuk menjawab soal konseptual ekuipartisi TKA Fisika.',
    },
    audioScript: {
      stimulus: 'Perhatikan tiga tahapan derajat kebebasan gas Hidrogen dari suhu rendah 50 Kelvin, suhu kamar 300 Kelvin, hingga suhu tinggi 1.500 Kelvin.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya setiap derajat kebebasan menyumbang setengah k T per molekul, dengan f sama dengan 3, 5, atau 7.',
      pembahasan: 'Pada suhu rendah f sama dengan 3 seperti gas monoatomik. Pada suhu kamar rotasi menyumbang tepat k T. Pada suhu tinggi vibrasi menyumbang 2 derajat kebebasan dari energi kinetik dan potensial. Rasio energi total terhadap translasi adalah 5 banding 3. Namun derajat rotasi diatomik selalu bernilai 2, bukan 3.',
      caraCepat: 'Trik Mister Jo: Ingat tangga sakti 3, 5, 7! Dingin 3, kamar 5, panas 7! Penambahan rotasi dan vibrasi masing-masing selalu menambah 2 derajat kebebasan!',
      kesimpulan: 'Pernyataan yang benar adalah opsi A, B, C, dan D.',
    },
  },

  // SOAL 24 (BS)
  {
    id: 24,
    groupId: 'ekuipartisi',
    groupTitle: 'Kelompok 6: Teori Ekuipartisi Energi',
    type: 'bs',
    title: 'Aksioma Teorema Ekuipartisi Energi Klasik Maxwell-Boltzmann',
    stimulus: {
      text: 'Teorema ekuipartisi energi menyatakan bahwa dalam kesetimbangan termal pada suhu mutlak T, setiap bentuk energi mikroskopis yang bergantung secara kuadratik terhadap variabel koordinat spasial atau momentum menyerap porsi energi rata-rata yang sama. Siswa diminta mengevaluasi tiga dalil turunan dari teorema ini pada gas ideal.',
      table: {
        caption: 'Bentuk Bentuk Energi Kuadratik dan Nilai Rata-ratanya',
        headers: ['Bentuk Gerak Mikroskopis', 'Persamaan Energi Mekanik', 'Nilai Rata-rata Ekuipartisi'],
        rows: [
          ['Translasi per Sumbu', '1/2 m vx²', '1/2 k T'],
          ['Rotasi per Sumbu', '1/2 I ω²', '1/2 k T'],
          ['Vibrasi (Getaran Ikatan)', '1/2 μ v² + 1/2 k_spring x²', '1/2 kT + 1/2 kT = kT'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Distribusi Energi Ekuipartisi per Derajat Kebebasan',
    },
    questionPrompt: 'Berdasarkan teori ekuipartisi energi, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Menurut teorema ekuipartisi energi, setiap satu derajat kebebasan kuadratik yang aktif menyumbang energi rata-rata sebesar 1/2 k T per molekul (atau 1/2 R T per mol).',
        correct: true,
        explanation: 'Ini adalah bunyi persis teorema ekuipartisi energi Maxwell-Boltzmann. Untuk f derajat kebebasan aktif, energi rata-rata satu molekul adalah f × (1/2 kT) dan energi dalam n mol gas adalah f × (1/2 nRT). Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Pada suhu kamar, gas mulia monoatomik seperti Helium memiliki energi rotasi yang terukur sama besar dengan energi translasinya.',
        correct: false,
        explanation: 'Atom gas monoatomik diperlakukan sebagai titik materi bermassa dengan jari-jari atomik yang sangat kecil (~10⁻¹⁵ m terhadap inti). Akibatnya momen inersianya I ≈ 0, sehingga energi rotasinya tidak pernah tereksitasi pada suhu wajar. Gas monoatomik HANYA memiliki gerak translasi (f = 3, tanpa rotasi). Pernyataan SALAH.',
      },
      {
        id: 3,
        text: 'Setiap mode vibrasi molekul gas ideal menyumbangkan 2 derajat kebebasan (1 dari energi kinetik vibrasi dan 1 dari energi potensial elastis pegas molekul), sehingga menyumbangkan tepat k T per molekul saat aktif.',
        correct: true,
        explanation: 'Osilasi harmonik 1 dimensi memiliki energi E = 1/2 m v² + 1/2 k_pegas x². Kedua suku bersifat kuadratik terhadap v dan x, sehingga masing-masing suku memperoleh 1/2 kT. Total energi rata-rata per molekul untuk satu mode vibrasi adalah 1/2 kT + 1/2 kT = kT (setara dengan 2 derajat kebebasan). Pernyataan BENAR.',
      },
    ],
    correctAnswer: [true, false, true],
    rumusKunci: {
      nama: 'Teorema Ekuipartisi Energi Klasik',
      rumusLatex: '\\langle \\epsilon_i \\rangle = \\frac{1}{2} k T, \\quad \\bar{E} = \\sum_{i=1}^f \\langle \\epsilon_i \\rangle = f \\left(\\frac{1}{2} k T\\right)',
      rumusPlain: 'Energi rata-rata per derajat kebebasan = 1/2 * k * T',
      keteranganSimbol: [
        { simbol: '⟨εᵢ⟩', arti: 'Energi rata-rata satu suku kuadratik', satuan: 'Joule' },
        { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: '1,38 × 10⁻²³ J/K' },
        { simbol: 'T', arti: 'Suhu mutlak sistem', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat menghitung alokasi energi mikroskopis partikel menurut hukum Boltzmann.',
      alasanPemilihan: 'Menjadi dasar pemikiran mengapa kapasitas kalor molar gas berbeda-beda berdasarkan geometri molekul.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Teorema ekuipartisi energi Maxwell-Boltzmann',
          'Suku kuadratik: translasi (1/2 m v²), rotasi (1/2 I ω²), vibrasi (1/2 m v² + 1/2 k x²)',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan.',
        infoPenting: 'Vibrasi memiliki dua suku kuadratik (kinetik dan potensial), sedangkan translasi dan rotasi hanya satu suku kuadratik per sumbu.',
      },
      identifikasiKonsep: {
        konsep: 'Teorema Ekuipartisi Energi Klasik dan Derajat Kebebasan Molekuler.',
        alasan: 'Membedakan derajat kebebasan monoatomik vs molekul diatomik/poliatomik.',
      },
      rumusKunci: '⟨ε⟩ = 1/2 kT per derajat kebebasan',
      langkahPenyelesaian: [
        '1. Pernyataan 1: Teorema ekuipartisi klasik menyatakan bahwa setiap derajat kebebasan kuadratik dalam fungsi energi rata-rata menyumbangkan 1/2 kT per partikel. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Gas monoatomik adalah partikel titik dengan jari-jari sangat kecil. Momen inersia terhadap pusat massanya mendekati nol. Menurut mekanika kuantum, celah energi untuk eksitasi rotasi atom tunggal sangat besar (~ribuan eV) dan mustahil aktif pada suhu kamar. Gas monoatomik tidak memiliki energi rotasi. (Pernyataan 2 SALAH)',
        '3. Pernyataan 3: Satu mode vibrasi linier memiliki dua variabel kuadratik: momentum getaran p dan simpangan elastis x (E = p²/(2μ) + 1/2 k x²). Maka kontribusinya adalah 1/2 kT + 1/2 kT = kT, setara dengan 2 derajat kebebasan f = 2. (Pernyataan 3 BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 Benar (prinsip ekuipartisi 1/2 kT), Pernyataan 2 Salah (monoatomik tidak berotasi), Pernyataan 3 Benar (vibrasi bernilai kT).',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Salah, Benar].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      tipsMengerjakan: 'Ingat trik ini: Gerak translasi = 1/2 kT per sumbu (total 3 sumbu = 3/2 kT). Gerak rotasi = 1/2 kT per sumbu (total 2 sumbu = kT). Gerak vibrasi = 1/2 kT kinetik + 1/2 kT potensial = kT!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Cepat Komponen Kuadratik',
      hubunganMatematis: 'Setiap suku berpangkat 2 (kuadrat) dalam energi menyumbang 1/2 kT.',
      substitusiSingkat: 'Translasi: vx² + vy² + vz² (3 suku → 3/2 kT). Rotasi: ωx² + ωy² (2 suku → 2/2 kT). Vibrasi: v² + x² (2 suku → 2/2 kT)!',
      trikHindariHitungPanjang: 'Cukup hitung berapa banyak variabel kuadratnya!',
      caraCekKewajaran: 'Atom titik bulat seperti bola kelereng tidak punya orientasi rotasi, jadi monoatomik mustahil punya rotasi.',
      kapanDigunakan: 'Sangat sering diuji pada soal seleksi TKA dan OSN Fisika.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti asas dasar teorema ekuipartisi energi klasik menurut Maxwell dan Boltzmann.',
      soal: 'Nilailah kebenaran dari masing-masing pernyataan berikut.',
      rumusKunci: 'Rumus kuncinya setiap derajat kebebasan kuadratik menyumbangkan setengah k T per molekul.',
      pembahasan: 'Pernyataan 1 benar, setiap derajat kebebasan menyumbang setengah k T. Pernyataan 2 salah, gas monoatomik tidak memiliki energi rotasi karena momen inersianya mendekati nol. Pernyataan 3 benar, mode vibrasi menyumbang dua derajat kebebasan yaitu energi kinetik dan energi potensial elastis sebesar k T.',
      caraCepat: 'Trik Mister Jo: Hitung saja berapa banyak variabel kuadratnya! Translasi ada 3, rotasi ada 2, dan vibrasi ada 2 suku yaitu kecepatan kuadrat dan simpangan kuadrat!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Salah, Pernyataan 3 Benar.',
    },
  },

  // SOAL 25 (PG)
  {
    id: 25,
    groupId: 'ekuipartisi',
    groupTitle: 'Kelompok 6: Teori Ekuipartisi Energi',
    type: 'pg',
    title: 'Energi Dalam Gas Diatomik Nitrogen pada Suhu Tinggi 1.200 K',
    stimulus: {
      text: 'Dalam proses nitridasi baja pada industri manufaktur presisi, sebuah tanur pembakaran suhu tinggi beroperasi pada temperatur stabil T = 1.200 K (setara 927 °C). Di dalam tanur tersebut dialirkan n = 0,50 mol gas Nitrogen murni (N₂, gas diatomik). Pada temperatur setinggi 1.200 K ini, energi termal telah melampaui ambang batas eksitasi vibrasi molekul sehingga seluruh mode translasi (3 derajat), rotasi (2 derajat), dan vibrasi (2 derajat) telah aktif secara penuh (derajat kebebasan total f = 7). Gas dianggap gas ideal dengan tetapan R = 8,31 J/(mol·K).',
      table: {
        caption: 'Spesifikasi Gas Nitrogen dalam Tanur Suhu Tinggi',
        headers: ['Variabel', 'Nilai Terukur', 'Keterangan Fisis'],
        rows: [
          ['Jumlah Mol (n)', '0,50 mol', 'Gas Nitrogen N₂'],
          ['Suhu Mutlak (T)', '1.200 K (927 °C)', 'Rezim suhu tinggi'],
          ['Derajat Kebebasan (f)', 'f = 7', '3 Translasi + 2 Rotasi + 2 Vibrasi'],
          ['Tetapan Gas Umum (R)', '8,31 J/(mol·K)', 'Universal gas constant'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Aktivasi Penuh Vibrasi Molekuler pada 1.200 Kelvin',
    },
    questionPrompt: 'Berdasarkan teori ekuipartisi energi, energi dalam total (U) yang dimiliki oleh gas Nitrogen di dalam tanur tersebut adalah...',
    options: [
      { id: 'A', text: '7,48 kJ (7.479 Joule)' },
      { id: 'B', text: '12,47 kJ (12.465 Joule)' },
      { id: 'C', text: '14,96 kJ (14.958 Joule)' },
      { id: 'D', text: '17,45 kJ (17.451 Joule)' },
      { id: 'E', text: '24,93 kJ (24.930 Joule)' },
    ],
    correctAnswer: 'D',
    rumusKunci: {
      nama: 'Energi Dalam Gas Diatomik Suhu Tinggi (f = 7)',
      rumusLatex: 'U = \\frac{f}{2} n R T = \\frac{7}{2} n R T',
      rumusPlain: 'U = (7/2) * n * R * T',
      keteranganSimbol: [
        { simbol: 'U', arti: 'Energi dalam total gas', satuan: 'Joule (J)' },
        { simbol: 'f', arti: 'Derajat kebebasan suhu tinggi (f = 7)', satuan: 'tanpa satuan' },
        { simbol: 'n', arti: 'Jumlah mol gas', satuan: '0,50 mol' },
        { simbol: 'R', arti: 'Tetapan gas universal', satuan: '8,31 J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak', satuan: '1.200 K' },
      ],
      kondisiPenggunaan: 'Digunakan saat gas diatomik berada pada rezim suhu tinggi (T > 1.000 K) di mana osilasi ikatan vibrasi telah aktif penuh.',
      alasanPemilihan: 'Menguji ketelitian siswa dalam memilih f = 7 (bukan f = 5 atau f = 3) berdasarkan data temperatur stimulus.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 0,50 mol gas diatomik Nitrogen (N₂)',
          'T = 1.200 K (suhu tinggi > 1.000 K)',
          'f = 7 (3 translasi + 2 rotasi + 2 vibrasi aktif)',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Energi dalam total U dalam satuan kJ.',
        infoPenting: 'Suhu 1.200 K adalah rezim suhu tinggi, sehingga derajat kebebasan f = 7!',
      },
      identifikasiKonsep: {
        konsep: 'Teori Ekuipartisi Energi pada Gas Diatomik Suhu Tinggi (Eksitasi Penuh Vibrasi).',
        alasan: 'Energi dalam harus memperhitungkan seluruh derajat kebebasan yang aktif.',
      },
      rumusKunci: 'U = (7/2) n R T',
      langkahPenyelesaian: [
        'Langkah 1: Identifikasi f = 7 karena T = 1.200 K (suhu tinggi)',
        'Langkah 2: Substitusikan ke rumus: U = (7/2) × n × R × T',
        'U = 3,5 × 0,50 mol × 8,31 J/(mol·K) × 1.200 K',
        '3,5 × 0,50 = 1,75 (atau 7/4)',
        '1,75 × 1.200 = 2.100',
        'U = 2.100 × 8,31 J = 17.451 Joule = 17,451 kJ ≈ 17,45 kJ',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi D benar karena 2.100 × 8,31 = 17.451 J = 17,45 kJ.',
        opsiLain: 'Opsi B (12,47 kJ) terjadi jika siswa keliru memakai f = 5 (suhu kamar: 5/2 × 0,5 × 8,31 × 1200 = 12.465 J). Opsi A (7,48 kJ) terjadi jika memakai f = 3 (monoatomik). Opsi C dan E akibat salah memasukkan angka.',
      },
      kesimpulan: 'Energi dalam gas Nitrogen pada suhu 1.200 K adalah 17,45 kJ (17.451 Joule).',
      tipsMengerjakan: 'Perhatikan angka perkalian cerdas: 1,75 × 1.200 = 2.100! Lalu 2.100 × 8,31 = 21 × 831 = 17.451 Joule.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Pecahan (7/4) × 1.200 = 2.100',
      hubunganMatematis: '(7/2) × 0,5 = 7/4. Kalikan dengan 1.200: (7/4) × 1.200 = 7 × 300 = 2.100!',
      substitusiSingkat: 'U = 2.100 × 8,31 ≈ 2,1 × 8,31 kJ = 17,45 kJ!',
      trikHindariHitungPanjang: 'Coret angka 1.200 dengan penyebut 4 menghasilkan 300! Lalu 300 × 7 = 2.100. Kalikan dengan 8,31 langsung dapat 17,45 kJ!',
      caraCekKewajaran: '2.100 × 8 = 16.800. Nilai sedikit di atas 16.800 adalah 17.451 J. Sangat presisi!',
      kapanDigunakan: 'Sangat cocok untuk gas diatomik bersuhu tinggi dengan mol pecahan 0,5.',
    },
    audioScript: {
      stimulus: 'Mari kita kaji gas Nitrogen sebanyak 0,5 mol di dalam tanur pembakaran baja bersuhu tinggi 1.200 Kelvin.',
      soal: 'Berapakah energi dalam total gas Nitrogen tersebut?',
      rumusKunci: 'Rumus kuncinya U sama dengan tujuh per dua dikali n kali R kali T, karena pada 1.200 Kelvin mode vibrasi aktif sehingga f sama dengan 7.',
      pembahasan: 'Tujuh per dua dikali 0,5 mol adalah tujuh per empat. Dikalikan 1.200 Kelvin menghasilkan 2.100. Dua ribu seratus dikali 8,31 menghasilkan 17.451 Joule atau 17,45 kiloJoule.',
      caraCepat: 'Trik Mister Jo: Pada suhu tinggi di atas 1.000 Kelvin, f wajib bernilai 7! Coret 1.200 dengan penyebut 4 dapat 300, kalikan 7 dapat 2.100! Dua ribu seratus dikali 8,31 langsung ketemu 17,45 kiloJoule dalam tiga detik!',
      kesimpulan: 'Jawaban yang tepat adalah opsi D, 17,45 kiloJoule.',
    },
  },

  // SOAL 26 (BS)
  {
    id: 26,
    groupId: 'ekuipartisi',
    groupTitle: 'Kelompok 6: Teori Ekuipartisi Energi',
    type: 'bs',
    title: 'Evaluasi Geometri Molekul dan Pembagian Derajat Kebebasan',
    stimulus: {
      text: 'Seorang asisten praktikum fisika dasar mendemonstrasikan hubungan antara struktur geometri molekul gas dengan jumlah derajat kebebasan mekanik bebasnya. Ia membandingkan tiga sampel gas berbeda pada suhu kamar (T = 300 K):\n1. Sampel I: Gas Argon (Ar, monoatomik, partikel titik tunggal).\n2. Sampel II: Gas Oksigen (O₂, diatomik linier).\n3. Sampel III: Gas Karbon Dioksida (CO₂, triatomik linier O=C=O).',
      table: {
        caption: 'Geometri dan Derajat Kebebasan Translasi & Rotasi pada Suhu Kamar',
        headers: ['Molekul Gas', 'Bentuk Geometri', 'Derajat Translasi', 'Derajat Rotasi', 'Derajat Total f (300 K)'],
        rows: [
          ['Argon (Ar)', 'Titik Tunggal', '3 (x, y, z)', '0 (abaikan)', 'f = 3'],
          ['Oksigen (O₂)', 'Linier Diatomik', '3 (x, y, z)', '2 (tegak lurus)', 'f = 5'],
          ['Karbon Dioksida (CO₂)', 'Linier Triatomik', '3 (x, y, z)', '2 (tegak lurus)', 'f = 5 (pada 300 K)'],
        ],
      },
      graphType: 'dof-heat',
      graphTitle: 'Komparasi Derajat Kebebasan Tiga Geometri Molekul',
    },
    questionPrompt: 'Berdasarkan hukum ekuipartisi dan mekanika klasik, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Molekul gas Argon hanya memiliki 3 derajat kebebasan translasi (f = 3) pada suhu kamar karena simetri bola atomik titik membuat momen inersianya terhadap sembarang sumbu rotasi sangat kecil.',
        correct: true,
        explanation: 'Gas monoatomik seperti Argon berbentuk simetri bola atomik titik. Momen inersia terhadap pusat massa sangat kecil (mendekati nol), sehingga derajat kebebasan rotasinya tidak aktif pada suhu biasa dan f murni 3 (translasi saja). Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Molekul Karbon Dioksida (CO₂) yang berbentuk linier (O=C=O) memiliki 3 derajat kebebasan rotasi pada suhu kamar.',
        correct: false,
        explanation: 'Karena molekul CO₂ berbentuk LINIER (segaris O=C=O), momen inersia rotasi sepanjang sumbu ikatan antaratom bernilai mendekati nol. Molekul linier HANYA memiliki 2 derajat kebebasan rotasi independen (tegak lurus sumbu ikatan), BUKAN 3! Tiga derajat rotasi hanya dimiliki oleh molekul NON-LINIER (seperti H₂O atau NH₃). Pernyataan SALAH.',
      },
      {
        id: 3,
        text: 'Pada suhu kamar 300 K, energi rata-rata satu molekul Oksigen adalah 5/2 k T, yang terdiri dari 3/2 k T energi kinetik translasi dan k T energi rotasi.',
        correct: true,
        explanation: 'Pada 300 K, f = 5 (3 translasi + 2 rotasi). Sesuai teorema ekuipartisi, translasi = 3 × (1/2 kT) = 3/2 kT, dan rotasi = 2 × (1/2 kT) = kT. Total energi rata-rata per molekul = 3/2 kT + kT = 5/2 kT. Pernyataan BENAR.',
      },
    ],
    correctAnswer: [true, false, true],
    rumusKunci: {
      nama: 'Derajat Kebebasan Berdasarkan Geometri Molekul',
      rumusLatex: 'f_{\\text{linier}} = 3_{\\text{trans}} + 2_{\\text{rot}} = 5, \\quad f_{\\text{non-linier}} = 3_{\\text{trans}} + 3_{\\text{rot}} = 6',
      rumusPlain: 'f_linier = 3 + 2 = 5, f_nonlinier = 3 + 3 = 6',
      keteranganSimbol: [
        { simbol: 'f_trans', arti: 'Derajat translasi ruang (selalu 3)', satuan: 'x, y, z' },
        { simbol: 'f_rot', arti: 'Derajat rotasi (2 untuk linier, 3 untuk non-linier)', satuan: 'sumbu independen' },
      ],
      kondisiPenggunaan: 'Digunakan saat mengklasifikasikan molekul gas poliatomik berdasarkan simetri spasialnya.',
      alasanPemilihan: 'Menekankan perbedaan mendasar antara geometri linier (CO2) dan non-linier (H2O).',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Argon: monoatomik (f = 3)',
          'Oksigen: diatomik linier (f = 5)',
          'CO₂: triatomik linier O=C=O (f = 5 pada suhu kamar)',
        ],
        ditanyakan: 'Status Benar/Salah untuk ketiga pernyataan.',
        infoPenting: 'Semua molekul linier hanya memiliki 2 derajat kebebasan rotasi!',
      },
      identifikasiKonsep: {
        konsep: 'Geometri Molekul Linier vs Non-Linier dalam Penentuan Derajat Kebebasan.',
        alasan: 'Simetri molekuler menentukan momen inersia rotasi.',
      },
      rumusKunci: 'f = f_trans + f_rot',
      langkahPenyelesaian: [
        '1. Pernyataan 1: Atom monoatomik (Ar) adalah partikel titik dengan I ≈ 0, sehingga f_rot = 0 dan f = f_trans = 3. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Molekul CO₂ memiliki ikatan O=C=O dengan sudut 180° (linier). Untuk molekul segaris, rotasi sepanjang sumbu molekul tidak menghasilkan momen inersia yang bermakna. Hanya ada 2 sumbu rotasi yang tegak lurus sumbu molekul. Jadi f_rot = 2, BUKAN 3. (Pernyataan 2 SALAH)',
        '3. Pernyataan 3: Oksigen pada 300 K memiliki f = 5. Energi rata-rata per molekul = (3/2 kT) translasi + (2/2 kT) rotasi = 5/2 kT. (Pernyataan 3 BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 Benar (Ar monoatomik f=3), Pernyataan 2 Salah (CO2 linier memiliki 2 rotasi, bukan 3), Pernyataan 3 Benar (energi total 5/2 kT).',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Salah, Benar].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      tipsMengerjakan: 'Hati-hati dengan CO₂! Walaupun memiliki 3 atom (triatomik), bentuknya SEPARUH GARIS LURUS (linier), sehingga jumlah derajat rotasinya tetap 2, persis seperti gas diatomik!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Linier Pasti Rotasi = 2',
      hubunganMatematis: 'Semua molekul linier lurus (seperti O2, N2, CO2, C2H2) SELALU f_rot = 2.',
      substitusiSingkat: 'Hanya molekul bengkok (seperti H2O, SO2, CH4) yang memiliki f_rot = 3!',
      trikHindariHitungPanjang: 'Cek bentuk molekulnya! Jika lurus, coret angka 3 pada rotasi!',
      caraCekKewajaran: 'Bayangkan pensil diputar sepanjang batangnya (momen inersia tipis sekali) vs diputar baling-baling (momen inersia besar).',
      kapanDigunakan: 'Sangat sering mengecoh siswa pada soal penalaran HOTS TKA Fisika.',
    },
    audioScript: {
      stimulus: 'Perhatikan perbandingan derajat kebebasan antara Argon, Oksigen, dan gas Karbon Dioksida.',
      soal: 'Nilailah kebenaran dari masing-masing pernyataan berikut.',
      rumusKunci: 'Rumus kuncinya molekul linier selalu memiliki 2 derajat kebebasan rotasi.',
      pembahasan: 'Pernyataan 1 benar, Argon monoatomik hanya memiliki 3 derajat kebebasan translasi. Pernyataan 2 salah, Karbon Dioksida berbentuk linier lurus sehingga hanya memiliki 2 derajat kebebasan rotasi, bukan 3. Pernyataan 3 benar, energi rata-rata Oksigen pada suhu kamar adalah lima per dua k T.',
      caraCepat: 'Trik Mister Jo: Jangan tertipu jumlah atom! Karbon dioksida itu bentuknya garis lurus, jadi derajat rotasinya tetap dua, sama persis seperti oksigen!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Salah, Pernyataan 3 Benar.',
    },
  },
];
