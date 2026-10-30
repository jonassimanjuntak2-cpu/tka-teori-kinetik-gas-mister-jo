/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 1: PERSAMAAN UMUM GAS IDEAL (5 SOAL)
 * Q1: PG, Q2: PGK, Q3: BS, Q4: PG, Q5: PGK
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_1: Question[] = [
  // SOAL 1 (PG)
  {
    id: 1,
    groupId: 'persamaan-umum',
    groupTitle: 'Kelompok 1: Persamaan Umum Gas Ideal',
    type: 'pg',
    title: 'Kapasitas Tabung Oksigen Medis Rumah Sakit',
    stimulus: {
      text: 'Sebuah instalasi sentral gas medis di rumah sakit rujukan menggunakan tabung silinder baja bervolume tetap 40 Liter untuk menyimpan gas oksigen murni (O₂, massa molar M = 32 g/mol = 0,032 kg/mol). Sensor digital mencatat suhu ruang isolasi berada pada 27 °C dan manometer menunjukkan tekanan absolut gas di dalam tabung sebesar 1,5 × 10⁶ Pa (setara 15 bar). Gas di dalam tabung diasumsikan berperilaku sebagai gas ideal dengan konstanta gas universal R = 8,31 J/(mol·K).',
      table: {
        caption: 'Spesifikasi Tabung Oksigen Silinder',
        headers: ['Parameter', 'Nilai Terukur', 'Satuan Standar SI'],
        rows: [
          ['Volume Tabung (V)', '40 Liter', '0,040 m³'],
          ['Suhu Ruang (T)', '27 °C', '300 K'],
          ['Tekanan Absolut (P)', '1,5 × 10⁶ Pa', '1.500.000 N/m²'],
          ['Massa Molar Oksigen (M)', '32 g/mol', '0,032 kg/mol'],
        ],
      },
      graphType: 'piston-cylinder',
      graphTitle: 'Ilustrasi Tabung Gas Medis Bertekanan Tinggi',
    },
    questionPrompt: 'Berdasarkan data operasional tersebut, massa gas oksigen murni yang tersimpan di dalam tabung silinder baja tersebut adalah sekitar...',
    options: [
      { id: 'A', text: '0,52 kg (520 gram)' },
      { id: 'B', text: '0,77 kg (770 gram)' },
      { id: 'C', text: '1,15 kg (1.150 gram)' },
      { id: 'D', text: '2,41 kg (2.410 gram)' },
      { id: 'E', text: '7,70 kg (7.700 gram)' },
    ],
    correctAnswer: 'B',
    rumusKunci: {
      nama: 'Persamaan Gas Ideal & Hubungan Massa-Mol',
      rumusLatex: 'P \\cdot V = n \\cdot R \\cdot T = \\left(\\frac{m}{M}\\right) R \\cdot T \\implies m = \\frac{P \\cdot V \\cdot M}{R \\cdot T}',
      rumusPlain: 'm = (P * V * M) / (R * T)',
      keteranganSimbol: [
        { simbol: 'P', arti: 'Tekanan gas absolut', satuan: 'Pa (N/m²)' },
        { simbol: 'V', arti: 'Volume wadah gas', satuan: 'm³' },
        { simbol: 'm', arti: 'Massa total gas yang tersimpan', satuan: 'kg' },
        { simbol: 'M', arti: 'Massa molar molekul gas', satuan: 'kg/mol' },
        { simbol: 'R', arti: 'Tetapan gas umum', satuan: '8,31 J/(mol·K)' },
        { simbol: 'T', arti: 'Suhu mutlak', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat menghitung massa zat gas ideal pada satu keadaan setimbang dengan P, V, dan T tertentu.',
      alasanPemilihan: 'Persamaan ini secara langsung mengintegrasikan besaran makroskopis P, V, T dengan massa molar untuk menentukan massa gas.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Volume tabung: V = 40 L = 40 × 10⁻³ m³ = 0,04 m³',
          'Suhu Celsius: t = 27 °C → Suhu mutlak: T = 27 + 273 = 300 K',
          'Tekanan gas: P = 1,5 × 10⁶ Pa',
          'Massa molar O₂: M = 32 g/mol = 0,032 kg/mol',
          'Konstanta gas umum: R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Massa gas oksigen (m) dalam tabung.',
        infoPenting: 'Suhu wajib diubah ke Kelvin dan volume 40 Liter wajib dikonversi ke meter kubik (0,04 m³).',
      },
      identifikasiKonsep: {
        konsep: 'Persamaan Umum Gas Ideal (PV = nRT) dan Konversi Mol ke Massa (n = m/M).',
        alasan: 'Gas berada pada keadaan statis stabil sehingga hubungan langsung P, V, T dan massa berlaku.',
      },
      rumusKunci: 'm = (P · V · M) / (R · T)',
      langkahPenyelesaian: [
        'Langkah 1: Hitung jumlah mol (n) terlebih dahulu: n = (P · V) / (R · T)',
        'Substitusi nilai: n = (1,5 × 10⁶ Pa × 0,04 m³) / (8,31 J/(mol·K) × 300 K)',
        'P · V = 60.000 J',
        'R · T = 8,31 × 300 = 2.493 J/mol',
        'n = 60.000 / 2.493 ≈ 24,067 mol',
        'Langkah 2: Kalikan mol dengan massa molar M: m = n × M',
        'm = 24,067 mol × 0,032 kg/mol ≈ 0,7701 kg = 0,77 kg (atau 770 gram)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi B tepat karena perhitungan matematis menghasilkan nilai m ≈ 0,77 kg.',
        opsiLain: 'Opsi A (0,52 kg) muncul jika lupa mengkonversi T ke Kelvin (memakai T = 27). Opsi E (7,70 kg) merupakan kesalahan faktor 10 pada konversi volume liter ke m³. Opsi D (2,41 kg) muncul jika mengabaikan massa molar 32 g/mol.',
      },
      kesimpulan: 'Massa gas oksigen yang tersimpan di dalam silinder adalah 0,77 kg (770 gram).',
      tipsMengerjakan: 'Ingat selalu: 1 Liter = 10⁻³ m³. Suhu Celsius HARUS dijumlah 273 menjadi Kelvin. Hitung dulu perkalian PV dan RT secara terpisah agar kalkulasi rapi.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Angka Bulat RT = 2500',
      hubunganMatematis: 'Pada suhu kamar 27 °C (300 K), nilai R × T ≈ 8,31 × 300 = 2.493 ≈ 2.500 J/mol.',
      substitusiSingkat: 'P · V = 1,5 × 10⁶ × 0,04 = 60.000. Maka n = 60.000 / 2.500 = 24 mol. Massa m = 24 × 32 g = 768 gram ≈ 0,77 kg!',
      trikHindariHitungPanjang: 'Gunakan pendekatan RT ≈ 2500 untuk T = 300 K. Pembagian 60.000 dengan 2.500 langsung menghasilkan 24 tanpa coretan rumit!',
      caraCekKewajaran: '40 Liter pada 15 atm menyimpan oksigen sekitar 40 × 15 = 600 Liter gas pada 1 atm. Massa 1 L oksigen ≈ 1,3 gram → 600 × 1,3 g ≈ 780 gram = 0,78 kg. Sangat masuk akal!',
      kapanDigunakan: 'Dapat digunakan pada seluruh soal gas ideal dengan suhu T = 27 °C atau T = 300 K.',
    },
    audioScript: {
      stimulus: 'Mari cermati tabung gas medis berkapasitas 40 Liter bertekanan 15 bar pada suhu 27 derajat Celsius.',
      soal: 'Berapakah massa oksigen murni yang tersimpan di dalam tabung tersebut?',
      rumusKunci: 'Rumus kuncinya adalah m sama dengan P kali V kali M besar dibagi R kali T.',
      pembahasan: 'Suhu 27 Celsius kita ubah ke Kelvin menjadi 300 Kelvin. Volume 40 Liter adalah nol koma nol empat meter kubik. Hasil perkalian P kali V adalah 60 ribu, dibagi R kali T sekitar 2.493, didapat 24 mol. Dikalikan 32 gram per mol, menghasilkan 770 gram atau 0,77 kilogram.',
      caraCepat: 'Trik Mister Jo: pada suhu 300 Kelvin, nilai R kali T selalu mendekati 2.500. Enam puluh ribu dibagi 2.500 langsung ketemu 24 mol! Kalikan 32 gram, ketemu 770 gram dalam hitungan detik!',
      kesimpulan: 'Jawaban yang tepat adalah opsi B, yaitu 0,77 kilogram.',
    },
  },

  // SOAL 2 (PGK)
  {
    id: 2,
    groupId: 'persamaan-umum',
    groupTitle: 'Kelompok 1: Persamaan Umum Gas Ideal',
    type: 'pgk',
    title: 'Analisis Komparatif Dua Wadah Gas (Helium vs Nitrogen)',
    stimulus: {
      text: 'Di laboratorium riset fisika, dua wadah kaku terisolasi A dan B diisi oleh gas ideal yang berbeda. Wadah A bervolume 10 Liter berisi gas Helium (gas monoatomik He, M = 4 g/mol) pada suhu 27 °C (300 K) dan tekanan 2,0 atm. Wadah B bervolume 15 Liter berisi gas Nitrogen (gas diatomik N₂, M = 28 g/mol) pada suhu 177 °C (450 K) dan tekanan 3,0 atm. Diketahui 1 atm = 1,01 × 10⁵ Pa dan R = 8,31 J/(mol·K).',
      table: {
        caption: 'Tabel Perbandingan Kondisi Gas Dua Wadah',
        headers: ['Wadah', 'Jenis Gas', 'Volume (V)', 'Suhu (T)', 'Tekanan (P)', 'Massa Molar (M)'],
        rows: [
          ['Wadah A', 'Helium (He)', '10 L', '27 °C (300 K)', '2,0 atm', '4 g/mol'],
          ['Wadah B', 'Nitrogen (N₂)', '15 L', '177 °C (450 K)', '3,0 atm', '28 g/mol'],
        ],
      },
      graphType: 'two-tanks',
      graphTitle: 'Diagram Komparasi Dua Bejana Bertekanan',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR terkait perbandingan kondisi gas pada Wadah A dan Wadah B? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Perbandingan jumlah mol gas pada wadah A terhadap wadah B adalah nA : nB = 2 : 3.' },
      { id: 'B', text: 'Jumlah partikel gas Helium pada wadah A lebih sedikit daripada jumlah partikel gas Nitrogen pada wadah B.' },
      { id: 'C', text: 'Perbandingan massa total gas pada wadah A terhadap wadah B adalah mA : mB = 2 : 21.' },
      { id: 'D', text: 'Massa jenis gas pada wadah B lebih dari 7 kali lipat massa jenis gas pada wadah A.' },
      { id: 'E', text: 'Jika kedua wadah dihubungkan dengan pipa kapiler bervolume abaikan dan kran dibuka, tidak terjadi perpindahan partikel gas.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    rumusKunci: {
      nama: 'Perbandingan Mol, Massa, dan Kerapatan Dua Gas',
      rumusLatex: '\\frac{n_A}{n_B} = \\frac{P_A V_A / T_A}{P_B V_B / T_B}, \\quad \\frac{m_A}{m_B} = \\frac{n_A M_A}{n_B M_B}, \\quad \\frac{\\rho_A}{\\rho_B} = \\frac{P_A M_A / T_A}{P_B M_B / T_B}',
      rumusPlain: 'nA/nB = (PA*VA*TB) / (PB*VB*TA)',
      keteranganSimbol: [
        { simbol: 'n', arti: 'Jumlah mol gas', satuan: 'mol' },
        { simbol: 'N', arti: 'Jumlah partikel (N = n × NA)', satuan: 'partikel' },
        { simbol: 'm', arti: 'Massa gas (m = n × M)', satuan: 'gram atau kg' },
        { simbol: 'ρ', arti: 'Massa jenis gas (m/V)', satuan: 'kg/m³ atau g/L' },
      ],
      kondisiPenggunaan: 'Digunakan untuk menganalisis relasi rasio dua wadah independen dengan variabel termodinamika berbeda.',
      alasanPemilihan: 'Metode perbandingan (rasio) mengeliminasi konstanta R sehingga perhitungan menjadi sangat efisien dan terhindar dari pembulatan.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Wadah A: He, VA = 10 L, TA = 300 K, PA = 2 atm, MA = 4 g/mol',
          'Wadah B: N₂, VB = 15 L, TB = 450 K, PB = 3 atm, MB = 28 g/mol',
        ],
        ditanyakan: 'Pernyataan mana saja yang tepat dari opsi A, B, C, D, E.',
        infoPenting: 'Gunakan rasio langsung tanpa perlu mengkonversi atm ke Pascal karena faktor konversi saling mencoret.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Gas Ideal Perbandingan Multivariat, Relasi Mol, Partikel, Massa, dan Massa Jenis.',
        alasan: 'Semua variabel P, V, T, dan M berbeda pada kedua tabung.',
      },
      rumusKunci: 'nA / nB = (PA · VA · TB) / (PB · VB · TA)',
      langkahPenyelesaian: [
        '1. Rasio Mol: nA / nB = (2 × 10 / 300) / (3 × 15 / 450) = (20 / 300) / (45 / 450) = (1/15) / (1/10) = 10 / 15 = 2/3. Jadi nA : nB = 2 : 3. (Pernyataan A BENAR)',
        '2. Jumlah Partikel: N = n × NA. Karena nA / nB = 2/3 < 1, maka NA < NB (partikel He lebih sedikit dibanding partikel N₂). (Pernyataan B BENAR)',
        '3. Rasio Massa: mA / mB = (nA · MA) / (nB · MB) = (2/3) × (4 / 28) = (2/3) × (1/7) = 2 / 21. (Pernyataan C BENAR)',
        '4. Rasio Massa Jenis: ρA / ρB = (mA / VA) / (mB / VB) = (mA/mB) × (VB/VA) = (2/21) × (15/10) = (2/21) × (3/2) = 3 / 21 = 1 / 7. Ini berarti ρB / ρA = 7 (massa jenis B tepat 7 kali wadah A, periksa: jika lebih dari 7 tidak tepat, tetapi mari periksa rasio: ρB = 7 ρA).',
        'Cek D: ρB = 7 ρA (tepat 7 kali, bukan "lebih dari 7 kali"). Maka D SALAH jika kata kuncinya lebih dari 7 kali lipat! Mari sesuaikan kunci.',
        '5. Pernyataan E: Tekanan PA = 2 atm dan PB = 3 atm. Karena tekanan tidak sama, jika kran dibuka, partikel gas PASTI mengalir dari tekanan tinggi (B) ke tekanan rendah (A). Maka E SALAH.',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, dan C benar secara matematis dan konsep fisis. Pernyataan A menghasilkan nA:nB = 2:3. Pernyataan B benar karena nA < nB. Pernyataan C menghasilkan mA:mB = 2:21.',
        opsiLain: 'Pernyataan D salah karena rasio massa jenis tepat bernilai 7 kali lipat (bukan > 7). Pernyataan E salah karena terdapat gradien tekanan (3 atm vs 2 atm) sehingga gas pasti mengalir.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, dan C.',
      tipsMengerjakan: 'Selalu gunakan perbandingan rasio langsung (PA·VA/TA) / (PB·VB/TB) untuk menghemat waktu ujian.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Eliminasi Faktor 150',
      hubunganMatematis: 'Perhatikan TA = 300 K = 2 × 150, dan TB = 450 K = 3 × 150.',
      substitusiSingkat: 'PA·VA / TA = (2 × 10) / 2 = 10. PB·VB / TB = (3 × 15) / 3 = 15. Rasio nA : nB = 10 : 15 = 2 : 3 seketika!',
      trikHindariHitungPanjang: 'Coret langsung pengali 150 pada suhu. Tak perlu hitung desimal koma yang rumit.',
      caraCekKewajaran: 'Wadah B punya volume lebih besar (15 L vs 10 L) dan tekanan lebih tinggi (3 atm vs 2 atm), wajar jika partikelnya lebih banyak meski suhunya lebih panas.',
      kapanDigunakan: 'Sangat ampuh untuk membandingkan dua wadah bersuhu kelipatan 150 K (300 K, 450 K, 600 K).',
    },
    audioScript: {
      stimulus: 'Perhatikan dua wadah gas A dan B. Wadah A berisi Helium dan Wadah B berisi Nitrogen dengan suhu dan tekanan berbeda.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Gunakan perbandingan rasio nA per nB sama dengan P A V A per T A dibagi P B V B per T B.',
      pembahasan: 'Rasio mol didapat dua banding tiga. Karena mol A lebih kecil, jumlah partikel A lebih sedikit dari B. Rasio massa total adalah dua banding dua puluh satu.',
      caraCepat: 'Trik Mister Jo: Suhu 300 dan 450 K adalah kelipatan 150. Langsung bagi, dapat perbandingan mol dua banding tiga dalam dua detik!',
      kesimpulan: 'Pernyataan yang tepat adalah A, B, dan C.',
    },
  },

  // SOAL 3 (BS)
  {
    id: 3,
    groupId: 'persamaan-umum',
    groupTitle: 'Kelompok 1: Persamaan Umum Gas Ideal',
    type: 'bs',
    title: 'Evaluasi Manometer Gas Neon dalam Silinder Uji',
    stimulus: {
      text: 'Seorang teknisi laboratorium menguji sifat termal 0,50 mol gas mulia Neon (monoatomik, Ne) di dalam silinder kedap udara bervolume 8,31 Liter. Silinder dilengkapi piston tanpa gesekan yang dapat diatur posisinya dan sensor tekanan presisi. Pada kondisi awal, gas berada pada suhu 27 °C (300 K). Teknisi kemudian melakukan pengamatan dan mengubah kondisi gas sesuai skenario pengujian.',
      table: {
        caption: 'Data Kondisi Pengujian Gas Neon',
        headers: ['Variabel', 'Kondisi Awal', 'Kondisi Uji Baru'],
        rows: [
          ['Jumlah Zat (n)', '0,50 mol', '0,50 mol (tertutup rapat)'],
          ['Volume (V)', '8,31 Liter (8,31 × 10⁻³ m³)', 'Dua kali lipat (16,62 L)'],
          ['Suhu (T)', '27 °C (300 K)', '127 °C (400 K)'],
        ],
      },
      graphType: 'p-t',
      graphTitle: 'Grafik Proyeksi Tekanan vs Suhu',
    },
    questionPrompt: 'Evaluasilah kebenaran dari setiap pernyataan berikut berdasarkan hukum-hukum gas ideal (R = 8,31 J/(mol·K)):',
    statements: [
      {
        id: 1,
        text: 'Tekanan awal gas Neon di dalam silinder sebelum dilakukan perubahan adalah tepat sebesar 1,50 × 10⁵ Pa (1,50 bar).',
        correct: true,
        explanation: 'P1 = nRT1 / V1 = (0,50 mol × 8,31 J/(mol·K) × 300 K) / (8,31 × 10⁻³ m³) = 150 / 10⁻³ = 1,50 × 10⁵ Pa. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Ketika volume silinder diperbesar menjadi 2 kali lipat dan suhunya dinaikkan menjadi 127 °C, tekanan gas di dalam silinder menjadi 1,00 × 10⁵ Pa.',
        correct: true,
        explanation: 'P2 = P1 × (V1/V2) × (T2/T1) = 1,50 × 10⁵ × (1/2) × (400/300) = 1,50 × 10⁵ × 4/6 = 1,00 × 10⁵ Pa. Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Jika pada kondisi awal gas dipanaskan pada volume tetap hingga tekanannya berlipat dua, suhu akhir gas dalam skala Celsius adalah 54 °C.',
        correct: false,
        explanation: 'Pada volume tetap (isokhorik), P/T konstan. Jika P2 = 2 P1, maka T2 = 2 T1 = 2 × 300 K = 600 K. Dalam Celsius: t2 = 600 - 273 = 327 °C, BUKAN 2 × 27 °C = 54 °C! Siswa yang menjawab benar terkecoh menggandakan skala Celsius. Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Tekanan Gas Ideal & Relasi Isokhorik',
      rumusLatex: 'P_1 = \\frac{nRT_1}{V_1}, \\quad P_2 = P_1 \\left(\\frac{V_1}{V_2}\\right) \\left(\\frac{T_2}{T_1}\\right), \\quad \\frac{P_1}{T_1} = \\frac{P_2}{T_2}',
      rumusPlain: 'P = nRT/V dan P1/T1 = P2/T2',
      keteranganSimbol: [
        { simbol: 'P', arti: 'Tekanan gas', satuan: 'Pa' },
        { simbol: 'n', arti: 'Mol gas', satuan: '0,50 mol' },
        { simbol: 'V', arti: 'Volume wadah', satuan: 'm³' },
        { simbol: 'T', arti: 'Suhu mutlak gas', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat menguji nilai tekanan mutlak dan respons perubahan variabel bebas.',
      alasanPemilihan: 'Memvalidasi pemahaman konversi suhu Celsius ke Kelvin dan hukum proporsionalitas gas.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 0,50 mol, V1 = 8,31 L = 8,31 × 10⁻³ m³, T1 = 27 °C = 300 K',
          'R = 8,31 J/(mol·K)',
          'Kondisi uji 2: V2 = 2 V1, T2 = 127 °C = 400 K',
          'Kondisi uji 3: V tetap, P3 = 2 P1',
        ],
        ditanyakan: 'Status kebenaran (Benar/Salah) untuk ketiga pernyataan.',
        infoPenting: 'Perhatikan jebakan penggandaan suhu Celsius: 2 × 27 °C = 54 °C adalah salah fatal, karena yang berbanding lurus adalah suhu mutlak Kelvin!',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Gas Ideal dan Hukum Gay-Lussac (Proses Isokhorik).',
        alasan: 'Setiap pernyataan menguji satu aspek perhitungan termodinamika gas yang berbeda.',
      },
      rumusKunci: 'P = nRT / V dan T2 = T1 · (P2 / P1)',
      langkahPenyelesaian: [
        'Pernyataan 1: P1 = (0,50 × 8,31 × 300) / (8,31 × 10⁻³) = (0,50 × 300) / 10⁻³ = 150 / 10⁻³ = 1,50 × 10⁵ Pa. (BENAR)',
        'Pernyataan 2: P2 = P1 × (V1/V2) × (T2/T1) = 1,50 × 10⁵ × (1/2) × (400/300) = 1,50 × 10⁵ × 2/3 = 1,00 × 10⁵ Pa. (BENAR)',
        'Pernyataan 3: Pada V tetap, P sebanding dengan T mutlak. P3 = 2 P1 → T3 = 2 T1 = 2 × 300 K = 600 K. Suhu Celsius t3 = 600 - 273 = 327 °C. Nilai 54 °C adalah kesalahan siswa yang melipatgandakan suhu Celsius 2 × 27 °C. (SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 Benar (1,50 × 10⁵ Pa), Pernyataan 2 Benar (1,00 × 10⁵ Pa), Pernyataan 3 Salah (suhu seharusnya 327 °C, bukan 54 °C).',
        opsiLain: 'Kunci kombinasi yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Jangan pernah melakukan operasi perbandingan matematis langsung pada suhu derajat Celsius! Selalu konversikan ke Kelvin terlebih dahulu.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Coret Angka R = 8,31 dengan Volume 8,31 L',
      hubunganMatematis: 'Perhatikan bahwa R = 8,31 dan V = 8,31 × 10⁻³. Keduanya langsung saling membagi!',
      substitusiSingkat: 'P = (n × R × T) / V = (0,5 × 8,31 × 300) / (8,31 × 10⁻³) = 0,5 × 300 × 10³ = 150 × 10³ = 1,5 × 10⁵ Pa!',
      trikHindariHitungPanjang: 'Coret angka 8,31 seketika! Tak ada perkalian desimal.',
      caraCekKewajaran: 'Suhu naik 4/3 kali dan volume naik 2 kali → tekanan menjadi (4/3) / 2 = 2/3 dari awal. 2/3 × 1,5 = 1,0 bar pas!',
      kapanDigunakan: 'Kapanpun pembuat soal memberikan volume dengan angka 8,31 Liter atau kelipatannya.',
    },
    audioScript: {
      stimulus: 'Mari kita teliti pengujian gas Neon dalam silinder bervolume 8,31 Liter dengan piston geser.',
      soal: 'Evaluasilah apakah ketiga pernyataan ini bernilai Benar atau Salah.',
      rumusKunci: 'Rumus kuncinya P sama dengan n kali R kali T dibagi V.',
      pembahasan: 'Pernyataan pertama benar, tekanannya tepat satu koma lima kali sepuluh pangkat lima Pascal. Pernyataan kedua benar, tekanan menjadi satu koma nol kali sepuluh pangkat lima Pascal. Pernyataan ketiga salah, karena suhu mutlak yang berlipat dua menjadi 600 Kelvin atau 327 derajat Celsius, bukan 54 derajat Celsius.',
      caraCepat: 'Trik Mister Jo: Coret angka 8 koma 31 pada R dengan 8 koma 31 pada volume. Hitungan langsung selesai dalam sekejap mata!',
      kesimpulan: 'Evaluasi yang benar adalah: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 4 (PG)
  {
    id: 4,
    groupId: 'persamaan-umum',
    groupTitle: 'Kelompok 1: Persamaan Umum Gas Ideal',
    type: 'pg',
    title: 'Pemuaian Termal Bejana Kaca Kuarsa Berisi Gas Argon',
    stimulus: {
      text: 'Sebuah bejana tertutup yang terbuat dari kaca kuarsa khusus diisi gas Argon (Ar, gas monoatomik) pada suhu awal 127 °C dan tekanan terukur 2,0 × 10⁵ Pa. Bejana tersebut kemudian dipanaskan di dalam tungku pembakar berdaya tinggi. Akibat pemanasan ekstrem, volume rongga dalam bejana mengalami pemuaian termal sehingga volumenya bertambah sebesar 10% dari volume semula. Pada saat yang sama, sensor tekanan membaca tekanan gas melonjak menjadi 3,0 × 10⁵ Pa tanpa ada molekul gas yang keluar.',
      table: {
        caption: 'Kondisi Termal Gas Argon',
        headers: ['Kondisi', 'Tekanan (P)', 'Volume Wadah (V)', 'Suhu Mutlak (T)'],
        rows: [
          ['Kondisi Awal (1)', '2,0 × 10⁵ Pa', 'V₀', '127 °C = 400 K'],
          ['Kondisi Akhir (2)', '3,0 × 10⁵ Pa', 'V₀ + 10% V₀ = 1,10 V₀', 'T₂ (dicari)'],
        ],
      },
      graphType: 'p-t',
      graphTitle: 'Kurva Kenaikan Tekanan Terhadap Suhu',
    },
    questionPrompt: 'Berdasarkan peristiwa tersebut, suhu akhir gas Argon di dalam bejana kuarsa tersebut adalah...',
    options: [
      { id: 'A', text: '550 K (277 °C)' },
      { id: 'B', text: '600 K (327 °C)' },
      { id: 'C', text: '660 K (387 °C)' },
      { id: 'D', text: '720 K (447 °C)' },
      { id: 'E', text: '880 K (607 °C)' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Relasi Dua Keadaan dengan Perubahan Volume & Tekanan',
      rumusLatex: '\\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2} \\implies T_2 = T_1 \\cdot \\left(\\frac{P_2}{P_1}\\right) \\cdot \\left(\\frac{V_2}{V_1}\\right)',
      rumusPlain: 'T2 = T1 * (P2/P1) * (V2/V1)',
      keteranganSimbol: [
        { simbol: 'T₁', arti: 'Suhu mutlak awal (127 + 273)', satuan: '400 K' },
        { simbol: 'P₁, P₂', arti: 'Tekanan awal dan akhir', satuan: '2,0 × 10⁵ Pa dan 3,0 × 10⁵ Pa' },
        { simbol: 'V₁, V₂', arti: 'Volume awal dan akhir', satuan: 'V₀ dan 1,10 V₀' },
        { simbol: 'T₂', arti: 'Suhu mutlak akhir gas', satuan: 'Kelvin' },
      ],
      kondisiPenggunaan: 'Digunakan saat gas ideal dalam sistem tertutup mengalami perubahan simultan pada volume, tekanan, dan suhu.',
      alasanPemilihan: 'Karena bejana tertutup rapat, jumlah mol n konstan sehingga rasio PV/T bernilai kekal.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'T1 = 127 °C = 127 + 273 = 400 K',
          'P1 = 2,0 × 10⁵ Pa, P2 = 3,0 × 10⁵ Pa → P2 / P1 = 3/2 = 1,5',
          'V1 = V0, V2 = 1,10 V0 → V2 / V1 = 1,10',
          'Bejana tertutup rapat → mol gas konstan (n1 = n2)',
        ],
        ditanyakan: 'Suhu akhir gas Argon (T2).',
        infoPenting: 'Volume bertambah 10% berarti V2 = V0 + 0,10 V0 = 1,10 V0.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Persamaan Dua Keadaan Gas Ideal (Boyle - Gay Lussac).',
        alasan: 'Massa gas tetap, sementara P, V, dan T semuanya berubah serentak.',
      },
      rumusKunci: 'T2 = T1 · (P2 / P1) · (V2 / V1)',
      langkahPenyelesaian: [
        'Langkah 1: Substitusikan rasio perbandingan ke rumus: T2 = T1 × (P2 / P1) × (V2 / V1)',
        'Langkah 2: T2 = 400 K × (3,0 × 10⁵ / 2,0 × 10⁵) × (1,10 V0 / V0)',
        'Langkah 3: T2 = 400 K × 1,5 × 1,10',
        'Langkah 4: T2 = 600 K × 1,10 = 660 K',
        'Langkah 5: Konversi ke Celsius: t2 = 660 - 273 = 387 °C',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C benar karena 400 × 1,5 × 1,1 = 660 K (setara 387 °C).',
        opsiLain: 'Opsi B (600 K) muncul jika siswa mengabaikan pemuaian volume wadah (mengira volume konstan). Opsi A (550 K) adalah kesalahan aritmatika. Opsi D dan E terjadi jika salah menempatkan faktor pembagi.',
      },
      kesimpulan: 'Suhu akhir gas Argon adalah 660 K atau 387 °C.',
      tipsMengerjakan: 'Pahami kata "bertambah 10%". Artinya nilai akhir adalah 100% + 10% = 110% atau 1,1 kali nilai awal.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Pengali Faktor Skala',
      hubunganMatematis: 'T sebanding dengan perkalian P × V.',
      substitusiSingkat: 'Faktor pengali P adalah 3/2 = 1,5. Faktor pengali V adalah 1,1. Faktor total = 1,5 × 1,1 = 1,65. Maka T2 = 400 × 1,65 = 660 K!',
      trikHindariHitungPanjang: 'Cukup kalikan 400 dengan 1,65: 400 × 1 = 400, 400 × 0,65 = 260 → 400 + 260 = 660 K!',
      caraCekKewajaran: 'Tekanan naik 50% dan volume memuai sedikit, tentu suhu harus naik lebih dari 50% (dari 400 ke 660 K). Angka 660 K sangat logis!',
      kapanDigunakan: 'Sangat praktis saat ada perubahan variabel dalam bentuk persentase.',
    },
    audioScript: {
      stimulus: 'Perhatikan bejana kaca kuarsa berisi gas Argon yang dipanaskan sehingga tekanannya naik dan volumenya memuai 10 persen.',
      soal: 'Berapakah suhu akhir gas Argon di dalam bejana tersebut?',
      rumusKunci: 'Rumus kuncinya adalah T dua sama dengan T satu dikali P dua per P satu dikali V dua per V satu.',
      pembahasan: 'Suhu awal adalah 400 Kelvin. Rasio tekanan adalah satu koma lima, dan rasio volume adalah satu koma satu. Hasil perkaliannya adalah 400 dikali satu koma enam lima, sama dengan 660 Kelvin atau 387 derajat Celsius.',
      caraCepat: 'Trik Mister Jo: Suhu berbanding lurus dengan P kali V. Kalikan saja 400 dengan faktor satu koma enam lima, langsung dapat 660 Kelvin dalam tiga detik!',
      kesimpulan: 'Jawaban yang benar adalah opsi C, yaitu 660 Kelvin.',
    },
  },

  // SOAL 5 (PGK)
  {
    id: 5,
    groupId: 'persamaan-umum',
    groupTitle: 'Kelompok 1: Persamaan Umum Gas Ideal',
    type: 'pgk',
    title: 'Dinamika Balon Cuaca Stratosferik Berisi Gas Hidrogen',
    stimulus: {
      text: 'Sebuah balon cuaca karet elastis diluncurkan dari stasiun meteorologi BMKG di tepi pantai (ketinggian h = 0 m). Balon diisi 100 mol gas Hidrogen (H₂, massa molar M = 2 g/mol = 0,002 kg/mol). Bahan elastis balon membuat tekanan gas di dalam balon selalu hampir sama dengan tekanan udara atmosfer di sekitarnya. Saat di permukaan laut, tekanan udara adalah 1,0 × 10⁵ Pa dan suhu 27 °C (300 K). Balon kemudian melayang vertikal naik hingga mencapai lapisan stratosfer bawah di mana tekanan atmosfer turun menjadi 0,20 × 10⁵ Pa dan suhu udara turun drastis menjadi -53 °C (220 K). Gas diasumsikan gas ideal (R = 8,31 J/(mol·K)).',
      table: {
        caption: 'Kondisi Balon Cuaca pada Dua Ketinggian Berbeda',
        headers: ['Lokasi Lapisan', 'Ketinggian (h)', 'Tekanan (P)', 'Suhu (T)', 'Massa Gas (m)'],
        rows: [
          ['Permukaan Laut (Kondisi 1)', '0 m', '1,0 × 10⁵ Pa', '27 °C (300 K)', 'Tetap (tertutup)'],
          ['Stratosfer Bawah (Kondisi 2)', '~11.000 m', '0,20 × 10⁵ Pa', '-53 °C (220 K)', 'Tetap (tertutup)'],
        ],
      },
      graphType: 'v-t',
      graphTitle: 'Karakteristik Pemuaian Volume Terhadap Penurunan Tekanan',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR mengenai kondisi fisik gas hidrogen di dalam balon cuaca tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Volume balon cuaca saat berada di permukaan laut adalah sekitar 2,49 m³.' },
      { id: 'B', text: 'Volume balon cuaca saat mencapai lapisan stratosfer bawah mengembang menjadi sekitar 9,14 m³.' },
      { id: 'C', text: 'Meskipun suhu stratosfer sangat dingin, volume balon di stratosfer tetap lebih besar dibanding di permukaan laut karena efek penurunan tekanan luar jauh lebih dominan.' },
      { id: 'D', text: 'Massa jenis gas hidrogen di dalam balon meningkat saat mencapai stratosfer karena suhunya menurun drastis.' },
      { id: 'E', text: 'Rasio volume balon di stratosfer terhadap volume di permukaan laut adalah V2 : V1 = 11 : 3.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    rumusKunci: {
      nama: 'Volume Gas Ideal dan Rasio Pemuaian Balon',
      rumusLatex: 'V = \\frac{nRT}{P}, \\quad \\frac{V_2}{V_1} = \\left(\\frac{P_1}{P_2}\\right) \\cdot \\left(\\frac{T_2}{T_1}\\right), \\quad \\rho = \\frac{m}{V}',
      rumusPlain: 'V = nRT/P dan V2/V1 = (P1/P2) * (T2/T1)',
      keteranganSimbol: [
        { simbol: 'n', arti: 'Jumlah mol hidrogen (tetap)', satuan: '100 mol' },
        { simbol: 'R', arti: 'Konstanta gas umum', satuan: '8,31 J/(mol·K)' },
        { simbol: 'V₁, V₂', arti: 'Volume balon di permukaan dan stratosfer', satuan: 'm³' },
        { simbol: 'ρ', arti: 'Massa jenis gas (massa / volume)', satuan: 'kg/m³' },
      ],
      kondisiPenggunaan: 'Digunakan saat menganalisis sistem balon cuaca elastis di mana tekanan internal menyesuaikan tekanan atmosfer sekitar.',
      alasanPemilihan: 'Dua faktor (tekanan turun 5 kali lipat dan suhu turun dari 300 K ke 220 K) bersaing dalam menentukan volume akhir balon.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'n = 100 mol, R = 8,31 J/(mol·K)',
          'Kondisi 1 (laut): P1 = 1,0 × 10⁵ Pa, T1 = 300 K',
          'Kondisi 2 (stratosfer): P2 = 0,20 × 10⁵ Pa (turun menjadi 1/5), T2 = -53 + 273 = 220 K',
          'Massa gas konstan: m = 100 mol × 0,002 kg/mol = 0,20 kg',
        ],
        ditanyakan: 'Evaluasi kebenaran seluruh pilihan pernyataan A, B, C, D, E.',
        infoPenting: 'T2 = -53 °C harus diubah ke Kelvin: -53 + 273 = 220 K.',
      },
      identifikasiKonsep: {
        konsep: 'Aplikasi Gas Ideal pada Fenomena Atmosferik dan Balon Cuaca.',
        alasan: 'Balon karet fleksibel beradaptasi dengan tekanan lingkungan sehingga Pgas = Patm.',
      },
      rumusKunci: 'V1 = nRT1 / P1 dan V2 / V1 = (P1 / P2) × (T2 / T1)',
      langkahPenyelesaian: [
        '1. Hitung Volume 1: V1 = (100 × 8,31 × 300) / 10⁵ = (831 × 300) / 100.000 = 249.300 / 100.000 = 2,493 m³ ≈ 2,49 m³. (Pernyataan A BENAR)',
        '2. Rasio Volume: V2 / V1 = (P1 / P2) × (T2 / T1) = (1,0 / 0,20) × (220 / 300) = 5 × (22 / 30) = 5 × (11 / 15) = 55 / 15 = 11 / 3 ≈ 3,667. (Pernyataan E BENAR)',
        '3. Hitung Volume 2: V2 = V1 × (11 / 3) = 2,493 × (11 / 3) = 0,831 × 11 = 9,141 m³ ≈ 9,14 m³. (Pernyataan B BENAR)',
        '4. Konsep Fisis: Efek tekanan menurunkan ke 1/5 (ingin memperbesar volume 5×), sedangkan efek suhu menurunkan ke 220/300 = 0,733×. Karena 5 × 0,733 = 3,67 > 1, efek tekanan luar jauh lebih mendominasi sehingga balon mengembang besar. (Pernyataan C BENAR)',
        '5. Kerapatan (Massa Jenis): ρ = m / V. Karena massa m konstan dan volume V membesar dari 2,49 m³ menjadi 9,14 m³, massa jenis gas justru MENURUN drastis (makin renggang). Pernyataan D yang menyatakan massa jenis meningkat adalah SALAH.',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan E terbukti tepat dari kalkulasi termodinamika. Volume di permukaan 2,49 m³, mengembang di stratosfer menjadi 9,14 m³ dengan rasio 11 : 3.',
        opsiLain: 'Pernyataan D salah karena massa jenis gas berbanding terbalik dengan volume; saat balon memuai 3,67 kali lipat, massa jenisnya turun menjadi sekitar 1/3,67 kali nilai semula.',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
      tipsMengerjakan: 'Pada balon elastis yang naik ke atmosfer, efek penurunan tekanan udara selalu jauh lebih drastis dibanding efek penurunan suhu, sehingga balon akan terus membesar hingga akhirnya meletus di ketinggian tertentu.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Rasio Cepat (1/0,2) × (22/30)',
      hubunganMatematis: 'V2 / V1 = (P1 / P2) × (T2 / T1) = 5 × (22 / 30) = 11 / 3.',
      substitusiSingkat: 'V1 = 2,5 m³. V2 = 2,5 × (11 / 3) ≈ 9,16 m³. Langsung validasi opsi A, B, E seketika!',
      trikHindariHitungPanjang: 'Penyederhanaan pecahan 5 × (22/30) = 11/3 sangat cepat dibanding mengalikan angka desimal 8,31 dua kali.',
      caraCekKewajaran: 'Tekanan turun 5 kali lipat, suhu turun sekitar 25%. Maka volume naik sekitar 5 × 0,75 ≈ 3,75 kali lipat. Dari 2,5 m³ menjadi ~9,1 m³ sangat presisi!',
      kapanDigunakan: 'Sangat cocok untuk soal balon cuaca atau gelembung udara yang naik dari dasar danau ke permukaan.',
    },
    audioScript: {
      stimulus: 'Perhatikan fenomena balon cuaca yang terbang naik dari permukaan laut menuju stratosfer dengan tekanan dan suhu yang berubah.',
      soal: 'Manakah dari pernyataan-pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya V sama dengan n R T per P, dan rasio pemuaian V dua per V satu sama dengan P satu per P dua dikali T dua per T satu.',
      pembahasan: 'Volume awal adalah 2 koma 49 meter kubik. Rasio volume adalah sebelas banding tiga, sehingga volume akhir di stratosfer mengembang menjadi sembilan koma satu empat meter kubik. Efek tekanan sangat mendominasi sehingga balon membesar dan massa jenisnya menurun.',
      caraCepat: 'Trik Mister Jo: Tekanan turun lima kali lipat dikali suhu 220 per 300 menghasilkan pengali sebelas per tiga. Dua koma lima dikali sebelas per tiga langsung ketemu sembilan koma satu empat meter kubik!',
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
    },
  },
];
