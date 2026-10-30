/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – KELOMPOK 3: GAS BOCOR DAN NONBOCOR (4 SOAL)
 * Q11: PG, Q12: PGK, Q13: BS, Q14: BS
 */

import { Question } from '../types';

export const QUESTIONS_GROUP_3: Question[] = [
  // SOAL 11 (PG)
  {
    id: 11,
    groupId: 'gas-bocor',
    groupTitle: 'Kelompok 3: Gas Bocor dan Nonbocor',
    type: 'pg',
    title: 'Kebocoran Gas Nitrogen pada Tabung Silinder Penyimpanan Baja',
    stimulus: {
      text: 'Sebuah tabung silinder baja bervolume tetap V = 50 Liter digunakan untuk menyimpan gas Nitrogen murni (N₂, gas diatomik, massa molar M = 28 g/mol = 0,028 kg/mol). Pada kondisi awal saat pengiriman dari pabrik, manometer tabung menunjukkan tekanan P1 = 40 atm pada suhu ruang gudang 27 °C (300 K). Akibat kerusakan seal katup saat disimpan di gudang yang suhunya naik menjadi 47 °C (320 K), sebagian gas Nitrogen bocor keluar ke udara bebas. Beberapa hari kemudian, teknisi memeriksa kembali tabung dan mendapati tekanan gas di dalam tabung telah turun menjadi P2 = 25 atm. Diketahui 1 atm = 1,01 × 10⁵ Pa dan R = 8,31 J/(mol·K).',
      table: {
        caption: 'Catatan Tekanan dan Suhu Tabung Sebelum dan Sesudah Kebocoran',
        headers: ['Kondisi', 'Tekanan (P)', 'Suhu (T)', 'Volume Wadah (V)', 'Massa Gas dalam Tabung'],
        rows: [
          ['Awal (Sebelum Bocor)', '40 atm', '27 °C (300 K)', '50 Liter (tetap)', 'm₁'],
          ['Akhir (Setelah Bocor)', '25 atm', '47 °C (320 K)', '50 Liter (tetap)', 'm₂'],
        ],
      },
      graphType: 'leakage-p-t',
      graphTitle: 'Penurunan Jumlah Mol Gas dalam Tabung Akibat Kebocoran',
    },
    questionPrompt: 'Massa gas Nitrogen yang telah bocor dan terlepas keluar dari tabung silinder baja tersebut adalah sekitar...',
    options: [
      { id: 'A', text: '0,42 kg (420 gram)' },
      { id: 'B', text: '0,65 kg (650 gram)' },
      { id: 'C', text: '0,94 kg (940 gram)' },
      { id: 'D', text: '1,32 kg (1.320 gram)' },
      { id: 'E', text: '2,27 kg (2.270 gram)' },
    ],
    correctAnswer: 'C',
    rumusKunci: {
      nama: 'Hukum Gas Ideal Sistem Terbuka / Gas Bocor',
      rumusLatex: '\\Delta n = n_1 - n_2 = \\frac{V}{R} \\left( \\frac{P_1}{T_1} - \\frac{P_2}{T_2} \\right), \\quad \\Delta m = \\Delta n \\cdot M',
      rumusPlain: 'Delta n = (V / R) * (P1/T1 - P2/T2) dan Delta m = Delta n * M',
      keteranganSimbol: [
        { simbol: 'Δn', arti: 'Jumlah mol gas yang keluar wadah', satuan: 'mol' },
        { simbol: 'Δm', arti: 'Massa gas yang bocor keluar', satuan: 'kg' },
        { simbol: 'V', arti: 'Volume tabung baja (tetap)', satuan: '50 × 10⁻³ m³ = 0,05 m³' },
        { simbol: 'M', arti: 'Massa molar Nitrogen (28 g/mol)', satuan: '0,028 kg/mol' },
        { simbol: 'P₁, P₂', arti: 'Tekanan awal dan akhir (Pa)', satuan: '40 × 1,01×10⁵ Pa dan 25 × 1,01×10⁵ Pa' },
        { simbol: 'T₁, T₂', arti: 'Suhu awal dan akhir (Kelvin)', satuan: '300 K dan 320 K' },
      ],
      kondisiPenggunaan: 'Wajib digunakan ketika jumlah partikel atau mol gas tidak kekal akibat kebocoran wadah.',
      alasanPemilihan: 'Persamaan dua keadaan standar P1V1/T1 = P2V2/T2 TIDAK DAPAT digunakan karena jumlah mol gas n berkurang.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'V = 50 L = 0,05 m³ (tetap)',
          'P1 = 40 atm = 40 × 1,01 × 10⁵ Pa = 4,04 × 10⁶ Pa',
          'T1 = 27 °C = 300 K',
          'P2 = 25 atm = 25 × 1,01 × 10⁵ Pa = 2,525 × 10⁶ Pa',
          'T2 = 47 °C = 320 K',
          'M = 28 g/mol = 0,028 kg/mol, R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Massa gas yang keluar (Δm).',
        infoPenting: 'Tabung kaku bervolume konstan tetapi mol berubah karena kebocoran.',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Gas Ideal pada Sistem Terbuka Mengalami Kebocoran Massa.',
        alasan: 'Perubahan mol dihitung dari selisih n1 awal dan n2 akhir.',
      },
      rumusKunci: 'Δm = M · (V / R) · (P1/T1 - P2/T2)',
      langkahPenyelesaian: [
        'Langkah 1: Hitung n1 mula-mula: n1 = (P1 · V) / (R · T1)',
        'n1 = (4,04 × 10⁶ Pa × 0,05 m³) / (8,31 × 300 K) = 202.000 / 2.493 ≈ 81,027 mol',
        'Langkah 2: Hitung n2 sisa dalam tabung: n2 = (P2 · V) / (R · T2)',
        'n2 = (2,525 × 10⁶ Pa × 0,05 m³) / (8,31 × 320 K) = 126.250 / 2.659,2 ≈ 47,477 mol',
        'Langkah 3: Hitung selisih mol yang bocor keluar: Δn = n1 - n2 = 81,027 - 47,477 = 33,550 mol',
        'Langkah 4: Hitung massa gas yang bocor: Δm = Δn × M = 33,550 mol × 0,028 kg/mol ≈ 0,9394 kg ≈ 0,94 kg (atau 940 gram)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Opsi C benar karena selisih mol 33,55 dikalikan 0,028 kg/mol menghasilkan 0,94 kg.',
        opsiLain: 'Opsi B (0,65 kg) timbul jika siswa lupa memperhitungkan kenaikan suhu menjadi 320 K (menganggap suhu tetap 300 K). Opsi E (2,27 kg) adalah total massa awal gas mula-mula di dalam tabung, bukan massa yang bocor! Opsi A dan D berasal dari kekeliruan aritmatika.',
      },
      kesimpulan: 'Massa gas Nitrogen yang bocor keluar tabung adalah 0,94 kg (940 gram).',
      tipsMengerjakan: 'Jangan pernah menggunakan rumus P1V1/T1 = P2V2/T2 pada kasus gas bocor! Selalu cari mol awal n1 dan mol akhir n2, lalu kurangkan: Δn = n1 - n2.',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Faktorisasi Rasio P/T',
      hubunganMatematis: 'Δm = M · (V / R) · (P1/T1 - P2/T2).',
      substitusiSingkat: 'P1/T1 = 40/300 = 0,1333 atm/K. P2/T2 = 25/320 = 0,0781 atm/K. Selisih = 0,0552 atm/K. Konversi ke SI: 0,0552 × 1,01×10⁵ × 0,05 / 8,31 = 33,5 mol. Kalikan 28 g = 938 gram ≈ 0,94 kg!',
      trikHindariHitungPanjang: 'Hitung selisih nilai P/T terlebih dahulu sebelum mengalikan dengan volume dan konstanta!',
      caraCekKewajaran: 'Tekanan turun drastis dari 40 ke 25 atm padahal suhu naik. Penurunan ini setara dengan kehilangan sekitar 40% massa gas. Massa awal ~2,27 kg × 41% ≈ 0,93 kg. Sangat cocok!',
      kapanDigunakan: 'Wajib digunakan pada setiap persoalan tabung gas bocor dengan variasi suhu.',
    },
    audioScript: {
      stimulus: 'Perhatikan tabung silinder Nitrogen bervolume 50 Liter yang mengalami kebocoran kran saat suhunya naik dari 27 ke 47 derajat Celsius.',
      soal: 'Berapakah massa gas Nitrogen yang telah bocor keluar dari tabung?',
      rumusKunci: 'Rumus kuncinya delta n sama dengan V per R dikali tanda kurung P satu per T satu dikurang P dua per T dua, lalu kalikan massa molar.',
      pembahasan: 'Mol awal dalam tabung adalah 81 mol, dan mol akhir yang tersisa adalah 47 koma 5 mol. Selisih mol yang bocor adalah 33 koma 55 mol. Dikalikan massa molar 0,028 kilogram per mol, kita peroleh massa yang bocor sebesar 0,94 kilogram atau 940 gram.',
      caraCepat: 'Trik Mister Jo: Pada gas bocor, jangan gunakan P1V1 per T1 sama dengan P2V2 per T2! Selalu cari selisih rasio P satu per T satu dikurang P dua per T dua! Kurang dari satu menit langsung ketemu jawabannya!',
      kesimpulan: 'Jawaban yang tepat adalah opsi C, 0,94 kilogram.',
    },
  },

  // SOAL 12 (PGK)
  {
    id: 12,
    groupId: 'gas-bocor',
    groupTitle: 'Kelompok 3: Gas Bocor dan Nonbocor',
    type: 'pgk',
    title: 'Pelepasan Gas Terkendali pada Ruang Dekompresi Kapsul Selam',
    stimulus: {
      text: 'Sebuah ruang dekompresi kapsul selam bervolume kaku V = 2,0 m³ diisi gas Argon (gas monoatomik Ar, massa molar M = 40 g/mol = 0,040 kg/mol). Mula-mula ruang berada pada tekanan P1 = 6,0 × 10⁵ Pa dan suhu T1 = 300 K. Untuk menyesuaikan tekanan fisiologis penyelam sebelum keluar kapsul, katup pembuangan dibuka perlahan sehingga sebagian gas Argon terbuang keluar. Sistem pengatur suhu bekerja aktif menjaga suhu di dalam ruang dekompresi tetap konstan pada 300 K selama proses pembuangan gas berlangsung (proses isotermal). Pembuangan dihentikan saat sensor tekanan menunjukkan P2 = 4,0 × 10⁵ Pa. Diketahui R = 8,31 J/(mol·K) dan bilangan Avogadro NA = 6,02 × 10²³ partikel/mol.',
      table: {
        caption: 'Kondisi Ruang Dekompresi Isotermal',
        headers: ['Parameter', 'Kondisi Awal (1)', 'Kondisi Akhir (2)', 'Perubahan'],
        rows: [
          ['Tekanan (P)', '6,0 × 10⁵ Pa', '4,0 × 10⁵ Pa', 'Turun 2,0 × 10⁵ Pa'],
          ['Suhu (T)', '300 K (tetap)', '300 K (tetap)', 'Konstan (Isotermal)'],
          ['Volume Ruang (V)', '2,0 m³', '2,0 m³', 'Kaku (tetap)'],
          ['Massa Gas dalam Ruang', 'm₁', 'm₂', 'Berkurang karena terbuang'],
        ],
      },
      graphType: 'leakage-p-t',
      graphTitle: 'Grafik Penurunan Tekanan terhadap Massa Gas Tersisa',
    },
    questionPrompt: 'Manakah dari pernyataan-pernyataan berikut yang bernilai BENAR mengenai proses pelepasan gas Argon tersebut? (Pilihlah SEMUA pernyataan yang benar)',
    options: [
      { id: 'A', text: 'Persentase jumlah partikel gas Argon yang terbuang keluar ruang dekompresi adalah tepat sebesar 33,3% (atau 1/3 bagian) dari jumlah partikel mula-mula.' },
      { id: 'B', text: 'Perbandingan massa gas Argon yang tersisa di dalam ruang terhadap massa gas Argon mula-mula adalah m2 : m1 = 2 : 3.' },
      { id: 'C', text: 'Massa jenis gas Argon di dalam ruang dekompresi setelah katup ditutup berkurang menjadi 2/3 dari massa jenis awalnya.' },
      { id: 'D', text: 'Kecepatan efektif (v_rms) molekul gas Argon di dalam ruang dekompresi berkurang setelah gas terbuang keluar karena tekanannya menurun.' },
      { id: 'E', text: 'Massa gas Argon yang telah dilepaskan keluar dari ruang dekompresi adalah sekitar 6,42 kg.' },
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    rumusKunci: {
      nama: 'Hubungan Mol, Tekanan, dan Kecepatan Efektif pada Gas Bocor Isotermal',
      rumusLatex: '\\frac{n_2}{n_1} = \\frac{P_2}{P_1}, \\quad \\frac{\\Delta n}{n_1} = \\frac{P_1 - P_2}{P_1}, \\quad v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}}',
      rumusPlain: 'n2/n1 = P2/P1 dan v_rms hanya tergantung pada T dan M',
      keteranganSimbol: [
        { simbol: 'n₁, n₂', arti: 'Mol gas awal dan akhir', satuan: 'mol' },
        { simbol: 'P₁, P₂', arti: 'Tekanan awal dan akhir', satuan: 'Pa' },
        { simbol: 'm₁, m₂', arti: 'Massa gas awal dan akhir', satuan: 'kg' },
        { simbol: 'v_rms', arti: 'Kecepatan efektif molekul', satuan: 'm/s' },
      ],
      kondisiPenggunaan: 'Digunakan saat wadah bervolume kaku mengalami kebocoran pada suhu konstan (isotermal).',
      alasanPemilihan: 'Pada kondisi volume dan suhu tetap, jumlah mol n berbanding lurus secara linier dengan tekanan P.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'V = 2,0 m³ (tetap)',
          'T = 300 K (konstan)',
          'P1 = 6,0 × 10⁵ Pa, P2 = 4,0 × 10⁵ Pa',
          'Gas Argon: M = 40 g/mol = 0,040 kg/mol',
          'R = 8,31 J/(mol·K)',
        ],
        ditanyakan: 'Evaluasi kebenaran opsi A, B, C, D, E.',
        infoPenting: 'Suhu dijaga konstan pada 300 K oleh pendingin!',
      },
      identifikasiKonsep: {
        konsep: 'Hukum Gas Ideal pada Tabung Bocor Isotermal dan Ketergantungan v_rms.',
        alasan: 'Perubahan massa gas dalam volume konstan mengubah kerapatan namun tidak mengubah v_rms jika suhu tetap.',
      },
      rumusKunci: 'n = PV/(RT), Δn = (P1 - P2)V/(RT), v_rms = √(3RT/M)',
      langkahPenyelesaian: [
        '1. Rasio Partikel dan Mol: Karena V dan T konstan, n sebanding dengan P. n2/n1 = P2/P1 = (4,0 × 10⁵)/(6,0 × 10⁵) = 4/6 = 2/3. Mol yang keluar Δn / n1 = (6 - 4)/6 = 2/6 = 1/3 (33,3%). (Pernyataan A BENAR)',
        '2. Rasio Massa Tersisa: m2 / m1 = (n2 × M) / (n1 × M) = n2 / n1 = 2/3. (Pernyataan B BENAR)',
        '3. Massa Jenis: ρ = m / V. Karena V tetap, ρ2 / ρ1 = m2 / m1 = 2/3. (Pernyataan C BENAR)',
        '4. Kecepatan Efektif (v_rms): Rumus v_rms = √(3RT/M). Perhatikan bahwa v_rms HANYA bergantung pada suhu mutlak T dan massa molar M! Karena suhu dijaga tepat 300 K dan gas tetap Argon, v_rms sama sekali TIDAK BERUBAH. Pernyataan D yang menyatakan v_rms berkurang adalah SALAH.',
        '5. Hitung Massa Gas yang Keluar: Δn = ((P1 - P2) · V) / (R · T) = (2,0 × 10⁵ Pa × 2,0 m³) / (8,31 × 300) = 400.000 / 2.493 ≈ 160,45 mol. Massa Δm = Δn × M = 160,45 mol × 0,040 kg/mol ≈ 6,418 kg ≈ 6,42 kg. (Pernyataan E BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan A, B, C, dan E benar berdasarkan hukum termodinamika. Fraksi partikel keluar 1/3 (33,3%), massa tersisa 2/3, densitas 2/3, dan massa yang keluar 6,42 kg.',
        opsiLain: 'Pernyataan D salah karena kecepatan efektif molekul gas ideal hanya bergantung pada suhu T dan massa molar M, bukan pada tekanan P!',
      },
      kesimpulan: 'Pernyataan yang bernilai benar adalah A, B, C, dan E.',
      tipsMengerjakan: 'Hati-hati dengan jebakan klasik: Tekanan turun bukan berarti partikel melambat! Jika suhu tidak berubah, kecepatan acak molekul (v_rms) tetap sama persis!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Rasio Langsung ΔP / P1',
      hubunganMatematis: 'Pada V dan T konstan: Fraksi gas keluar = ΔP / P1 = 2 / 6 = 1/3.',
      substitusiSingkat: 'Fraksi sisa = 4/6 = 2/3. Seketika opsi A, B, dan C tervalidasi!',
      trikHindariHitungPanjang: 'Untuk v_rms, langsung ingat mantra Mister Jo: "v_rms cuma kenal T dan M, tekanan tak ada urusan!"',
      caraCekKewajaran: '400.000 / 2.500 = 160 mol. 160 × 0,04 kg = 6,4 kg. Sangat presisi dengan opsi E!',
      kapanDigunakan: 'Sangat cocok untuk soal pengurangan tekanan isotermal di ruang bertekanan.',
    },
    audioScript: {
      stimulus: 'Mari kita analisis ruang dekompresi kapsul selam bervolume 2 meter kubik yang mengalami penurunan tekanan secara isotermal pada suhu 300 Kelvin.',
      soal: 'Manakah dari pernyataan berikut yang bernilai benar? Ini adalah soal pilihan ganda kompleks.',
      rumusKunci: 'Rumus kuncinya n sebanding dengan P ketika volume dan suhu konstan, dan kecepatan efektif v r m s sama dengan akar dari tiga R T per M.',
      pembahasan: 'Fraksi partikel yang keluar adalah sepertiga bagian atau 33,3 persen. Massa tersisa adalah dua per tiga, dan kerapatannya berkurang menjadi dua per tiga. Massa gas yang keluar adalah 6,42 kilogram. Namun kecepatan efektif molekul tidak berubah sama sekali karena suhu dipertahankan tetap 300 Kelvin.',
      caraCepat: 'Trik Mister Jo: Selama suhu tetap konstan, kecepatan efektif molekul TIDAK AKAN PERNAH BERUBAH! Coret opsi D yang mengatakan kecepatan berkurang, dan langsung pilih A, B, C, dan E!',
      kesimpulan: 'Pernyataan yang benar adalah opsi A, B, C, dan E.',
    },
  },

  // SOAL 13 (BS)
  {
    id: 13,
    groupId: 'gas-bocor',
    groupTitle: 'Kelompok 3: Gas Bocor dan Nonbocor',
    type: 'bs',
    title: 'Aktivasi Katup Pelepas Tekanan Darurat Tabung CO2 Pemadam',
    stimulus: {
      text: 'Di sebuah pabrik kimia, sebuah tabung pemadam api baja berkapasitas V = 10 Liter berisi gas Karbon Dioksida (CO₂, massa molar M = 44 g/mol) pada tekanan awal P1 = 50 atm dan suhu 27 °C (300 K). Saat terjadi insiden kebakaran di dekat tabung, suhu tabung terpapar panas hingga melonjak menjadi 127 °C (400 K). Tabung dilengkapi katup pelepas tekanan darurat (pressure relief valve) yang otomatis membuka ketika tekanan mencapai batas kritis 60 atm untuk mencegah ledakan tabung. Katup tersebut membuang sejumlah gas ke udara hingga tekanan di dalam tabung turun dan stabil di batas 60 atm pada suhu 127 °C.',
      table: {
        caption: 'Kondisi Termal Tabung CO₂ Sebelum dan Sesudah Katup Terbuka',
        headers: ['Kondisi', 'Suhu Tabung (T)', 'Tekanan Gas (P)', 'Status Katup'],
        rows: [
          ['Kondisi Awal (1)', '27 °C = 300 K', '50 atm', 'Tertutup Rapat'],
          ['Sebelum Katup Membuka', 'Panas meningkat', 'Naik hingga 60 atm', 'Mulai Terbuka'],
          ['Kondisi Akhir (2)', '127 °C = 400 K', '60 atm (maksimal)', 'Telah Membuang Gas'],
        ],
      },
      graphType: 'leakage-p-t',
      graphTitle: 'Dinamika Tekanan Tabung Menghadapi Paparan Panas',
    },
    questionPrompt: 'Berdasarkan hukum termodinamika gas ideal, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Jika katup pengaman tidak terbuka (tabung tertutup sempurna tanpa kebocoran sama sekali), pemanasan tabung dari 27 °C ke 127 °C seharusnya memicu kenaikan tekanan gas hingga mencapai 66,7 atm.',
        correct: true,
        explanation: 'Jika n konstan dan V konstan (isokhorik): P_teoritis = P1 × (T2 / T1) = 50 atm × (400 / 300) = 50 × (4/3) = 66,67 atm ≈ 66,7 atm. Karena 66,7 atm > 60 atm, maka katup pengaman memang pasti terbuka. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Rasio jumlah mol gas CO₂ yang tersisa di dalam tabung setelah katup bekerja terhadap jumlah mol gas mula-mula adalah n2 : n1 = 9 : 10.',
        correct: true,
        explanation: 'n1 = P1·V / (R·T1) dan n2 = P2·V / (R·T2). Rasio n2 / n1 = (P2 / P1) × (T1 / T2) = (60 / 50) × (300 / 400) = (6/5) × (3/4) = 18 / 20 = 9 / 10 = 0,90. Artinya tersisa 90% gas di dalam tabung. Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Persentase massa gas Karbon Dioksida yang terbuang keluar tabung akibat pelepasan darurat tersebut adalah sebesar 25%.',
        correct: false,
        explanation: 'Dari rasio n2 / n1 = 9/10 (tersisa 90%), maka fraksi gas yang keluar adalah Δn / n1 = 1 - 9/10 = 1/10 = 10%, BUKAN 25%! Siswa terkecoh mengurangkan angka tekanan atau suhu secara salah. Pernyataan SALAH.',
      },
    ],
    correctAnswer: [true, true, false],
    rumusKunci: {
      nama: 'Analisis Katup Batas Tekanan & Fraksi Pelepasan Gas',
      rumusLatex: 'P_{\\text{tanpa bocor}} = P_1 \\left(\\frac{T_2}{T_1}\\right), \\quad \\frac{n_2}{n_1} = \\left(\\frac{P_2}{P_1}\\right) \\cdot \\left(\\frac{T_1}{T_2}\\right), \\quad \\text{Fraksi keluar} = 1 - \\frac{n_2}{n_1}',
      rumusPlain: 'n2/n1 = (P2/P1) * (T1/T2)',
      keteranganSimbol: [
        { simbol: 'P₁, P₂', arti: 'Tekanan awal (50 atm) dan batas katup (60 atm)', satuan: 'atm' },
        { simbol: 'T₁, T₂', arti: 'Suhu awal (300 K) dan suhu kebakaran (400 K)', satuan: 'Kelvin' },
        { simbol: 'n₁, n₂', arti: 'Mol gas mula-mula dan sisa dalam tabung', satuan: 'mol' },
      ],
      kondisiPenggunaan: 'Digunakan untuk tabung berpengaman dengan tekanan dibatasi nilai ambang maksimum.',
      alasanPemilihan: 'Membedakan kondisi teoretis jika tanpa kebocoran dengan kondisi nyata saat katup pelepas beroperasi.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'V = 10 L (tetap)',
          'P1 = 50 atm, T1 = 27 °C = 300 K',
          'Suhu akhir: T2 = 127 °C = 400 K',
          'Batas tekanan katup: P2 = 60 atm',
        ],
        ditanyakan: 'Status Benar/Salah ketiga pernyataan.',
        infoPenting: 'Jika tekanan tanpa bocor melebihi 60 atm, maka gas bocor keluar sehingga n2 < n1.',
      },
      identifikasiKonsep: {
        konsep: 'Termodinamika Gas Bocor Terkontrol oleh Katup Ambang Batas.',
        alasan: 'Menggabungkan uji kondisi isokhorik dengan perhitungan selisih massa pada sistem terbuka.',
      },
      rumusKunci: 'P_isokhorik = P1 (T2/T1) dan n2/n1 = (P2/P1) (T1/T2)',
      langkahPenyelesaian: [
        '1. Pernyataan 1: Jika tidak ada gas yang keluar (n tetap), berlaku isokhorik P/T = konstan. P = P1 × (T2/T1) = 50 atm × (400 / 300) = 50 × (4/3) = 200 / 3 = 66,67 atm ≈ 66,7 atm. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2: Kondisi nyata tekanan dibatasi pada P2 = 60 atm pada T2 = 400 K. Rasio mol tersisa n2 / n1 = (P2 · V / R T2) / (P1 · V / R T1) = (P2 / P1) × (T1 / T2) = (60 / 50) × (300 / 400) = (6/5) × (3/4) = 18 / 20 = 9 / 10. (Pernyataan 2 BENAR)',
        '3. Pernyataan 3: Persentase gas yang terbuang = (n1 - n2) / n1 × 100% = (1 - 9/10) × 100% = 1/10 × 100% = 10%. Klaim pernyataan yang menyebutkan 25% adalah keliru. (Pernyataan 3 SALAH)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Pernyataan 1 Benar (tekanan tanpa bocor 66,7 atm), Pernyataan 2 Benar (rasio sisa 9 : 10), Pernyataan 3 Salah (gas yang terbuang 10%, bukan 25%).',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Salah].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      tipsMengerjakan: 'Rasio mol sisa dalam tabung kaku selalu sama dengan (P akhir / P awal) dikali (T awal / T akhir). Kalikan kedua pecahan tersebut dengan cepat!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Trik Cepat Rasio Silang (60/50) × (3/4)',
      hubunganMatematis: 'n2 / n1 = (60/50) × (300/400) = 1,2 × 0,75 = 0,90.',
      substitusiSingkat: 'Gas tersisa = 90% (9/10). Gas yang terbuang keluar = 100% - 90% = 10%!',
      trikHindariHitungPanjang: 'Coret angka nol: (6/5) × (3/4) = 18/20 = 9/10 = 0,9. Sisanya 0,1 alias 10%!',
      caraCekKewajaran: 'Tekanan hanya dibiarkan naik sedikit (dari 50 ke 60, naik 20%), sedangkan suhu naik 33,3%. Maka gas yang perlu dibuang keluar hanya sedikit (sekitar 10%).',
      kapanDigunakan: 'Sangat cocok untuk soal tabung bertekanan dengan pressure relief valve.',
    },
    audioScript: {
      stimulus: 'Simak fenomena tabung pemadam api CO2 yang terpapar panas kebakaran hingga katup pengaman 60 atmosfer terbuka.',
      soal: 'Evaluasilah apakah ketiga pernyataan berikut bernilai Benar atau Salah.',
      rumusKunci: 'Rumus kuncinya n dua per n satu sama dengan P dua per P satu dikali T satu per T dua.',
      pembahasan: 'Pernyataan 1 benar, jika tanpa bocor tekanannya melonjak sampai 66,7 atmosfer. Pernyataan 2 benar, rasio mol tersisa adalah 9 banding 10 atau 90 persen. Pernyataan 3 salah, gas yang terbuang adalah 10 persen, bukan 25 persen.',
      caraCepat: 'Trik Mister Jo: Cukup kalikan 60 per 50 dengan 300 per 400. Hasilnya 0,9 atau 90 persen! Artinya yang keluar cuma 10 persen!',
      kesimpulan: 'Jawaban yang tepat: Pernyataan 1 Benar, Pernyataan 2 Benar, Pernyataan 3 Salah.',
    },
  },

  // SOAL 14 (BS)
  {
    id: 14,
    groupId: 'gas-bocor',
    groupTitle: 'Kelompok 3: Gas Bocor dan Nonbocor',
    type: 'bs',
    title: 'Analisis Komparatif Bejana Terbuka vs Bejana Tertutup Rapat',
    stimulus: {
      text: 'Di laboratorium kimia fisik, dua buah labu kaca identik berkapasitas V = 1,0 Liter mula-mula berisi udara pada suhu 27 °C (300 K) dan tekanan atmosfer normal 1,0 atm. Labu I disumbat rapat kedap udara (sistem nonbocor tertutup), sedangkan Labu II dibiarkan terbuka ujung lehernya terhubung bebas dengan atmosfer udara luar (sistem terbuka). Kedua labu kaca kemudian dipanaskan secara bersamaan di dalam penangas minyak dari suhu 27 °C hingga mencapai suhu akhir 127 °C (400 K). Pemuaian termal kaca labu diabaikan.',
      table: {
        caption: 'Karakteristik Kedua Labu Setelah Dipanaskan ke 127 °C (400 K)',
        headers: ['Labu Kaca', 'Sistem Wadah', 'Tekanan Akhir (P)', 'Jumlah Mol Gas (n)', 'Suhu Akhir (T)'],
        rows: [
          ['Labu I', 'Tertutup Rapat (Nonbocor)', 'P₁_akhir (berubah)', 'Tetap n₀', '127 °C = 400 K'],
          ['Labu II', 'Terbuka ke Udara Bebas', '1,0 atm (tetap)', 'n₂_akhir (meluap keluar)', '127 °C = 400 K'],
        ],
      },
      graphType: 'two-tanks',
      graphTitle: 'Perbandingan Perilaku Gas pada Bejana Tertutup vs Bejana Terbuka',
    },
    questionPrompt: 'Berdasarkan prinsip teori kinetik gas ideal, nilailah kebenaran dari masing-masing pernyataan berikut:',
    statements: [
      {
        id: 1,
        text: 'Tekanan gas di dalam Labu I (tertutup rapat) setelah dipanaskan menjadi 1,33 atm.',
        correct: true,
        explanation: 'Pada Labu I (isokhorik, n tetap): P_akhir = P_awal × (T_akhir / T_awal) = 1,0 atm × (400 K / 300 K) = 4/3 atm ≈ 1,33 atm. Pernyataan BENAR.',
      },
      {
        id: 2,
        text: 'Tekanan gas di dalam Labu II (terbuka) tetap sama dengan tekanan atmosfer luar yaitu 1,0 atm, tetapi sebagian udara memuai dan meluap keluar dari labu.',
        correct: true,
        explanation: 'Karena terbuka ke atmosfer luar, tekanan di dalam Labu II selalu seimbang dengan tekanan udara luar (P = 1,0 atm). Udara memuai akibat kenaikan suhu sehingga sebagian molekul terdorong keluar. Pernyataan BENAR.',
      },
      {
        id: 3,
        text: 'Fraksi massa udara yang meluap keluar dari Labu II ke atmosfer adalah tepat 25% (1/4 bagian) dari massa udara mula-mula di dalam labu tersebut.',
        correct: true,
        explanation: 'Pada Labu II (P tetap, V tetap): n tersisa n_akhir = n0 × (T_awal / T_akhir) = n0 × (300 / 400) = 3/4 n0 (tersisa 75%). Maka fraksi massa udara yang tumpah/meluap keluar adalah Δn = n0 - 3/4 n0 = 1/4 n0 = 25%. Pernyataan BENAR.',
      },
    ],
    correctAnswer: [true, true, true],
    rumusKunci: {
      nama: 'Hukum Bejana Terbuka (P dan V tetap, n berubah)',
      rumusLatex: 'P \\cdot V = n \\cdot R \\cdot T \\implies n_1 T_1 = n_2 T_2 \\implies \\frac{n_2}{n_1} = \\frac{T_1}{T_2}',
      rumusPlain: 'n1 * T1 = n2 * T2, maka n2/n1 = T1/T2 dan Fraksi Tumpah = 1 - T1/T2',
      keteranganSimbol: [
        { simbol: 'n₁, n₂', arti: 'Mol gas mula-mula dan sisa dalam bejana terbuka', satuan: 'mol' },
        { simbol: 'T₁, T₂', arti: 'Suhu awal dan akhir (Kelvin)', satuan: '300 K dan 400 K' },
        { simbol: 'Δn / n₁', arti: 'Fraksi gas yang meluap keluar wadah', satuan: 'tanpa satuan (%)' },
      ],
      kondisiPenggunaan: 'Khusus digunakan untuk bejana terbuka di mana tekanan gas selalu konstan sama dengan tekanan udara luar.',
      alasanPemilihan: 'Konsep bejana terbuka adalah salah satu soal jebakan paling sering keluar dalam TKA/UTBK.',
    },
    pembahasan: {
      memahamiSoal: {
        diketahui: [
          'Labu I: Tertutup rapat, V = 1 L, n tetap, T1 = 300 K, T2 = 400 K, P1 = 1 atm',
          'Labu II: Terbuka bebas ke udara luar, P tetap = 1 atm, V = 1 L, T1 = 300 K, T2 = 400 K',
        ],
        ditanyakan: 'Status Benar/Salah ketiga pernyataan.',
        infoPenting: 'Bejana terbuka berarti P konstan (sama dengan udara luar) dan V wadah konstan, sehingga n1·T1 = n2·T2.',
      },
      identifikasiKonsep: {
        konsep: 'Perbedaan Mendasar Sistem Tertutup (Isokhorik) dan Bejana Terbuka (Isobarik-Isokhorik dengan n berubah).',
        alasan: 'Mempertegas logika gas ideal bahwa pada wadah terbuka yang dipanaskan, mol gas berkurang sebanding terbalik dengan suhu mutlak.',
      },
      rumusKunci: 'Labu I: P2 = P1 (T2/T1). Labu II: n2 = n1 (T1/T2)',
      langkahPenyelesaian: [
        '1. Pernyataan 1 (Labu I Tertutup): n dan V konstan. P2 = P1 × (T2 / T1) = 1,0 atm × (400 / 300) = 4/3 atm ≈ 1,33 atm. (Pernyataan 1 BENAR)',
        '2. Pernyataan 2 (Labu II Terbuka): Ujung terbuka menjaga tekanan gas selalu seimbang dengan udara luar (P = 1,0 atm). Pemanasan menyebabkan udara memuai keluar. (Pernyataan 2 BENAR)',
        '3. Pernyataan 3 (Fraksi Gas Tumpah pada Labu II): P dan V tetap. Karena P·V = n·R·T konstan, maka n sebanding terbalik dengan T. n2 / n1 = T1 / T2 = 300 K / 400 K = 3/4 = 0,75 (tersisa 75%). Gas yang keluar = 1 - 3/4 = 1/4 = 25%. (Pernyataan 3 BENAR)',
      ],
      analisisJawaban: {
        mengapaBenar: 'Ketiga pernyataan 1, 2, dan 3 terbukti BENAR secara ilmiah dan matematis tanpa ambigu.',
        opsiLain: 'Kunci Benar-Salah yang tepat adalah [Benar, Benar, Benar].',
      },
      kesimpulan: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: BENAR.',
      tipsMengerjakan: 'Mantra bejana terbuka: "Pada bejana terbuka yang dipanaskan, n dikali T bernilai konstan (n1·T1 = n2·T2)". Sisa gas di dalam labu = T_awal / T_akhir. Gas yang tumpah = (T_akhir - T_awal) / T_akhir!',
    },
    caraCepatMisterJo: {
      judulTrik: 'Mantra Mister Jo: n1 · T1 = n2 · T2',
      hubunganMatematis: 'Fraksi gas yang tumpah keluar wadah terbuka = (T2 - T1) / T2.',
      substitusiSingkat: 'Fraksi tumpah = (400 - 300) / 400 = 100 / 400 = 1/4 = 25%!',
      trikHindariHitungPanjang: 'Cukup selisihkan suhu Kelvin lalu bagi dengan suhu Kelvin akhir! (400 - 300) / 400 = 25% seketika!',
      caraCekKewajaran: 'Suhu naik dari 300 ke 400 K (naik 1/3 dari suhu awal). Gas memuai menjadi 4/3 volume labu. Ruang labu hanya mampu menampung 3/4 bagian, maka 1/4 bagian (25%) pasti tumpah keluar. Sangat logis!',
      kapanDigunakan: 'Gunakan rumus ini untuk SEMUA soal bejana terbuka yang dipanaskan!',
    },
    audioScript: {
      stimulus: 'Mari kita bandingkan dua bejana identik: Bejana pertama ditutup rapat dan Bejana kedua dibiarkan terbuka ke udara luar saat dipanaskan dari 27 ke 127 derajat Celsius.',
      soal: 'Evaluasilah apakah ketiga pernyataan berikut bernilai Benar atau Salah.',
      rumusKunci: 'Rumus kuncinya untuk bejana terbuka adalah n satu kali T satu sama dengan n dua kali T dua.',
      pembahasan: 'Pernyataan 1 benar, tekanan bejana tertutup naik menjadi 1,33 atmosfer. Pernyataan 2 benar, tekanan bejana terbuka tetap 1 atmosfer dan sebagian gas meluap. Pernyataan 3 benar, fraksi gas yang tumpah keluar adalah 25 persen.',
      caraCepat: 'Trik Mister Jo: Untuk bejana terbuka, rumus cepat gas yang tumpah adalah T akhir dikurang T awal dibagi T akhir! 400 dikurang 300 dibagi 400, langsung dapat 25 persen hanya dalam dua detik!',
      kesimpulan: 'Jawaban yang tepat adalah ketiganya BENAR!',
    },
  },
];
