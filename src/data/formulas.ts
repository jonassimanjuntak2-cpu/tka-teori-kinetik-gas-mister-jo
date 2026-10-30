/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – BANK RUMUS TEORI KINETIK GAS
 * Pengajar: Mister Jo
 */

import { FormulaItem, MaterialGroupInfo } from '../types';

export const MATERIAL_GROUPS: MaterialGroupInfo[] = [
  {
    id: 'persamaan-umum',
    number: 1,
    name: 'Kelompok 1: Persamaan Umum Gas Ideal',
    shortName: 'Persamaan Umum',
    description: 'Konsep dasar PV = nRT, konversi suhu mutlak Kelvin, massa molar, densitas gas, dan analisis multi-variabel.',
    totalQuestions: 5,
    iconName: 'Atom',
  },
  {
    id: 'dua-keadaan',
    number: 2,
    name: 'Kelompok 2: Persamaan Dua Keadaan Gas Ideal',
    shortName: 'Dua Keadaan Gas',
    description: 'Hukum Boyle-Gay Lussac (P1V1/T1 = P2V2/T2), proses isobarik, isokhorik, isotermal, dan analisis grafik termodinamika.',
    totalQuestions: 5,
    iconName: 'GitCompare',
  },
  {
    id: 'gas-bocor',
    number: 3,
    name: 'Kelompok 3: Gas Bocor dan Nonbocor',
    shortName: 'Gas Bocor & Tabung',
    description: 'Perubahan mol gas saat katup bocor, massa yang lolos keluar wadah, perubahan tekanan dan kerapatan gas.',
    totalQuestions: 4,
    iconName: 'Wind',
  },
  {
    id: 'energi-kinetik',
    number: 4,
    name: 'Kelompok 4: Energi Kinetik Gas Ideal',
    shortName: 'Energi Kinetik Rata-rata',
    description: 'Energi kinetik translasi molekul rata-rata (Ek = 3/2 kT), pengaruh suhu mutlak, dan energi kinetik total seluruh partikel.',
    totalQuestions: 4,
    iconName: 'Zap',
  },
  {
    id: 'energi-dalam',
    number: 5,
    name: 'Kelompok 5: Energi Dalam Gas Ideal',
    shortName: 'Energi Dalam Gas',
    description: 'Energi dalam sistem gas monoatomik dan diatomik (U = (f/2)nRT), perubahan energi dalam, dan perbandingan jenis gas.',
    totalQuestions: 4,
    iconName: 'Flame',
  },
  {
    id: 'ekuipartisi',
    number: 6,
    name: 'Kelompok 6: Teori Ekuipartisi Energi',
    shortName: 'Ekuipartisi Energi',
    description: 'Teorema ekuipartisi klasik (1/2 kT per derajat kebebasan), mode translasi, rotasi, dan vibrasi terhadap suhu.',
    totalQuestions: 4,
    iconName: 'Layers',
  },
  {
    id: 'kecepatan-efektif',
    number: 7,
    name: 'Kelompok 7: Kecepatan Efektif Gas Ideal',
    shortName: 'Kecepatan Efektif (v_rms)',
    description: 'Kecepatan akar kuadrat rata-rata (v_rms = sqrt(3RT/M)), hubungan massa molar kg/mol, suhu mutlak, dan massa partikel.',
    totalQuestions: 4,
    iconName: 'Gauge',
  },
];

export const FORMULA_BANK: FormulaItem[] = [
  // 1. Persamaan Umum
  {
    id: 'f-pv-nrt',
    groupId: 'persamaan-umum',
    nama: 'Persamaan Keadaan Gas Ideal (Berdasarkan Mol)',
    rumusLatex: 'P \\cdot V = n \\cdot R \\cdot T',
    rumusPlain: 'P * V = n * R * T',
    keteranganSimbol: [
      { simbol: 'P', arti: 'Tekanan gas', satuan: 'Pa atau N/m²' },
      { simbol: 'V', arti: 'Volume wadah gas', satuan: 'm³ (1 L = 10⁻³ m³)' },
      { simbol: 'n', arti: 'Jumlah zat / mol gas', satuan: 'mol' },
      { simbol: 'R', arti: 'Konstanta gas universal', satuan: '8,314 J/(mol·K)' },
      { simbol: 'T', arti: 'Suhu mutlak', satuan: 'Kelvin (T = t°C + 273)' },
    ],
    kondisiPenggunaan: 'Digunakan ketika gas berada dalam satu kondisi tunak dan jumlah mol gas diketahui atau dicari.',
    penjelasanSingkat: 'Persamaan dasar yang menghubungkan keempat variabel makroskopis gas ideal dalam satu kesetimbangan termal.',
    audioText: 'Persamaan umum gas ideal, P kali V sama dengan n kali R kali T. Tekanan dalam Pascal, volume dalam meter kubik, n adalah mol, R konstanta gas 8 koma 314, dan suhu T wajib dalam Kelvin.',
  },
  {
    id: 'f-pv-nkt',
    groupId: 'persamaan-umum',
    nama: 'Persamaan Gas Ideal Berdasarkan Jumlah Partikel',
    rumusLatex: 'P \\cdot V = N \\cdot k \\cdot T',
    rumusPlain: 'P * V = N * k * T',
    keteranganSimbol: [
      { simbol: 'N', arti: 'Jumlah total partikel molekul', satuan: 'partikel' },
      { simbol: 'k', arti: 'Konstanta Boltzmann (R / NA)', satuan: '1,38 × 10⁻²³ J/K' },
      { simbol: 'T', arti: 'Suhu mutlak gas', satuan: 'Kelvin' },
    ],
    kondisiPenggunaan: 'Digunakan jika soal menyajikan atau menanyakan jumlah molekul atau kerapatan partikel gas.',
    penjelasanSingkat: 'Menghubungkan sifat makroskopis (tekanan dan volume) langsung ke jumlah partikel mikroskopis menggunakan konstanta Boltzmann.',
    audioText: 'Persamaan gas ideal berdasarkan partikel: P kali V sama dengan N besar kali k kali T. N adalah jumlah total partikel, dan k adalah konstanta Boltzmann satu koma tiga delapan kali sepuluh pangkat minus dua puluh tiga.',
  },
  {
    id: 'f-densitas-gas',
    groupId: 'persamaan-umum',
    nama: 'Massa Jenis Gas Ideal',
    rumusLatex: '\\rho = \\frac{P \\cdot M}{R \\cdot T}',
    rumusPlain: 'rho = (P * M) / (R * T)',
    keteranganSimbol: [
      { simbol: 'ρ', arti: 'Massa jenis gas', satuan: 'kg/m³' },
      { simbol: 'P', arti: 'Tekanan gas', satuan: 'Pa' },
      { simbol: 'M', arti: 'Massa molar gas', satuan: 'kg/mol' },
      { simbol: 'T', arti: 'Suhu mutlak', satuan: 'K' },
    ],
    kondisiPenggunaan: 'Digunakan saat menghubungkan massa jenis gas dengan tekanan, suhu, atau perbandingan jenis gas.',
    penjelasanSingkat: 'Massa jenis gas ideal berbanding lurus dengan tekanan dan massa molar, serta berbanding terbalik dengan suhu mutlak.',
    audioText: 'Massa jenis gas, rho sama dengan P kali M dibagi R kali T. Semakin tinggi suhu gas, gas semakin memuai dan massa jenisnya mengecil.',
  },

  // 2. Persamaan Dua Keadaan
  {
    id: 'f-boyle-gaylussac',
    groupId: 'dua-keadaan',
    nama: 'Hukum Gabungan Boyle - Gay-Lussac',
    rumusLatex: '\\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2}',
    rumusPlain: '(P1 * V1) / T1 = (P2 * V2) / T2',
    keteranganSimbol: [
      { simbol: 'P₁, P₂', arti: 'Tekanan kondisi awal dan akhir', satuan: 'Pa atau atm' },
      { simbol: 'V₁, V₂', arti: 'Volume kondisi awal dan akhir', satuan: 'm³ atau Liter' },
      { simbol: 'T₁, T₂', arti: 'Suhu mutlak awal dan akhir', satuan: 'Kelvin' },
    ],
    kondisiPenggunaan: 'Wajib digunakan untuk sistem tertutup tanpa kebocoran di mana massa dan mol gas konstan (n tetap).',
    penjelasanSingkat: 'Jika mol gas tetap, nilai PV dibagi T akan selalu konstan selama gas mengalami perubahan wujud keadaan.',
    audioText: 'Hukum dua keadaan gas ideal, P satu kali V satu per T satu sama dengan P dua kali V dua per T dua. Berlaku mutlak jika tidak ada kebocoran partikel.',
  },
  {
    id: 'f-proses-khusus',
    groupId: 'dua-keadaan',
    nama: 'Proses Khusus Gas Ideal (Isotermal, Isobarik, Isokhorik)',
    rumusLatex: '\\text{Isotermal (T tetap): } P_1 V_1 = P_2 V_2 \\quad | \\quad \\text{Isobarik (P tetap): } \\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
    rumusPlain: 'Isotermal: P1*V1 = P2*V2 | Isobarik: V1/T1 = V2/T2 | Isokhorik: P1/T1 = P2/T2',
    keteranganSimbol: [
      { simbol: 'Isotermal', arti: 'Suhu konstan (ΔT = 0)', satuan: 'T1 = T2' },
      { simbol: 'Isobarik', arti: 'Tekanan konstan (ΔP = 0)', satuan: 'P1 = P2' },
      { simbol: 'Isokhorik', arti: 'Volume konstan (ΔV = 0)', satuan: 'V1 = V2' },
    ],
    kondisiPenggunaan: 'Digunakan saat satu parameter fisis dijaga tetap selama perubahan keadaan gas berlangsung.',
    penjelasanSingkat: 'Turunan dari hukum Boyle-Gay Lussac ketika salah satu variabel (T, P, atau V) dipertahankan konstan.',
    audioText: 'Tiga proses termodinamika dasar: isotermal jika suhu tetap, isobarik jika tekanan tetap, dan isokhorik jika volume tabung tetap.',
  },

  // 3. Gas Bocor
  {
    id: 'f-gas-bocor',
    groupId: 'gas-bocor',
    nama: 'Prinsip Massa & Mol Gas Bocor',
    rumusLatex: '\\Delta n = n_1 - n_2 = \\frac{V}{R} \\left( \\frac{P_1}{T_1} - \\frac{P_2}{T_2} \\right)',
    rumusPlain: 'Delta n = n1 - n2 = (V / R) * (P1/T1 - P2/T2)',
    keteranganSimbol: [
      { simbol: 'Δn', arti: 'Jumlah mol gas yang keluar wadah', satuan: 'mol' },
      { simbol: 'Δm', arti: 'Massa gas yang bocor keluar (Δn × M)', satuan: 'kg atau gram' },
      { simbol: 'V', arti: 'Volume tabung kaku (tetap)', satuan: 'm³' },
    ],
    kondisiPenggunaan: 'Digunakan untuk tabung rigid bervolume tetap yang mengalami kebocoran gas disertai perubahan tekanan dan suhu.',
    penjelasanSingkat: 'Ketika gas bocor, jumlah mol awal berkurang menjadi n2. Jangan menggunakan P1V1/T1 = P2V2/T2 secara langsung!',
    audioText: 'Pada gas yang bocor, volume tabung kaku tetap, tetapi mol gas berkurang. Selisih mol gas sama dengan volume per R dikali tanda kurung P satu per T satu dikurang P dua per T dua.',
  },

  // 4. Energi Kinetik
  {
    id: 'f-ek-rata',
    groupId: 'energi-kinetik',
    nama: 'Energi Kinetik Translasi Rata-rata Molekul',
    rumusLatex: '\\bar{E}_k = \\frac{3}{2} k T = \\frac{3}{2} \\left(\\frac{R}{N_A}\\right) T',
    rumusPlain: 'Ek_rata = (3/2) * k * T',
    keteranganSimbol: [
      { simbol: 'Ek', arti: 'Energi kinetik translasi rata-rata per molekul', satuan: 'Joule (J)' },
      { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: '1,38 × 10⁻²³ J/K' },
      { simbol: 'T', arti: 'Suhu mutlak', satuan: 'Kelvin' },
    ],
    kondisiPenggunaan: 'Digunakan untuk menghitung energi kinetik tiap satu molekul gas ideal apapun jenisnya pada suhu T.',
    penjelasanSingkat: 'Energi kinetik rata-rata translasi molekul gas ideal HANYA bergantung pada suhu mutlaknya, tidak bergantung massa atau jenis gas.',
    audioText: 'Energi kinetik rata-rata partikel gas, E k sama dengan tiga per dua k kali T. Ingat, energi kinetik molekul hanya bergantung pada suhu mutlaknya!',
  },
  {
    id: 'f-ek-total',
    groupId: 'energi-kinetik',
    nama: 'Energi Kinetik Total Seluruh Gas',
    rumusLatex: 'E_{k,\\text{total}} = N \\cdot \\bar{E}_k = \\frac{3}{2} n R T',
    rumusPlain: 'Ek_total = N * (3/2 * k * T) = (3/2) * n * R * T',
    keteranganSimbol: [
      { simbol: 'Ek,total', arti: 'Energi kinetik translasi total', satuan: 'Joule' },
      { simbol: 'N', arti: 'Jumlah seluruh partikel dalam wadah', satuan: 'partikel' },
      { simbol: 'n', arti: 'Jumlah mol gas', satuan: 'mol' },
    ],
    kondisiPenggunaan: 'Digunakan saat mencari akumulasi energi kinetik seluruh gas yang berada dalam wadah.',
    penjelasanSingkat: 'Perkalian antara energi kinetik rata-rata satu molekul dengan jumlah seluruh partikel gas dalam ruangan.',
    audioText: 'Energi kinetik total seluruh partikel sama dengan N dikali energi kinetik rata-rata, atau sama dengan tiga per dua kali n kali R kali T.',
  },

  // 5. Energi Dalam
  {
    id: 'f-energi-dalam',
    groupId: 'energi-dalam',
    nama: 'Energi Dalam Gas Ideal',
    rumusLatex: 'U = \\frac{f}{2} n R T = \\frac{f}{2} N k T',
    rumusPlain: 'U = (f/2) * n * R * T = (f/2) * N * k * T',
    keteranganSimbol: [
      { simbol: 'U', arti: 'Energi dalam total gas ideal', satuan: 'Joule' },
      { simbol: 'f', arti: 'Derajat kebebasan molekul gas', satuan: 'tanpa satuan' },
      { simbol: 'n', arti: 'Jumlah mol gas', satuan: 'mol' },
      { simbol: 'ΔU', arti: 'Perubahan energi dalam ((f/2)nR ΔT)', satuan: 'Joule' },
    ],
    kondisiPenggunaan: 'Digunakan saat menghitung energi termal internal yang tersimpan dalam gas ideal berdasarkan derajat kebebasannya.',
    penjelasanSingkat: 'Untuk gas monoatomik (He, Ne, Ar) f = 3. Untuk gas diatomik (O2, N2, H2) f = 3 pada suhu rendah, f = 5 pada suhu kamar/sedang, dan f = 7 pada suhu tinggi.',
    audioText: 'Energi dalam gas, U sama dengan f per dua kali n kali R kali T. f adalah derajat kebebasan molekul gas.',
  },

  // 6. Ekuipartisi Energi
  {
    id: 'f-ekuipartisi',
    groupId: 'ekuipartisi',
    nama: 'Teorema Ekuipartisi Energi Klasik',
    rumusLatex: '\\epsilon_i = \\frac{1}{2} k T \\implies \\bar{E} = f \\cdot \\left(\\frac{1}{2} k T\\right)',
    rumusPlain: 'Energi per derajat kebebasan = 1/2 * k * T',
    keteranganSimbol: [
      { simbol: 'εᵢ', arti: 'Energi rata-rata tiap derajat kebebasan', satuan: 'Joule' },
      { simbol: 'f', arti: 'Jumlah derajat kebebasan aktif', satuan: '3 (translasi), +2 (rotasi), +2 (vibrasi)' },
      { simbol: 'k', arti: 'Konstanta Boltzmann', satuan: '1,38 × 10⁻²³ J/K' },
    ],
    kondisiPenggunaan: 'Digunakan untuk menganalisis pembagian energi kinetik dan potensial mikro pada molekul beratom banyak.',
    penjelasanSingkat: 'Setiap derajat kebebasan yang aktif memberikan kontribusi energi rata-rata persis sebesar seperdua k T pada partikel gas.',
    audioText: 'Menurut teorema ekuipartisi energi, setiap derajat kebebasan yang aktif menyumbangkan energi rata-rata sebesar setengah k T per molekul.',
  },

  // 7. Kecepatan Efektif
  {
    id: 'f-vrms',
    groupId: 'kecepatan-efektif',
    nama: 'Kecepatan Efektif (Root Mean Square / RMS)',
    rumusLatex: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} = \\sqrt{\\frac{3kT}{m}} = \\sqrt{\\frac{3P}{\\rho}}',
    rumusPlain: 'v_rms = sqrt(3*R*T / M) = sqrt(3*k*T / m) = sqrt(3*P / rho)',
    keteranganSimbol: [
      { simbol: 'v_rms', arti: 'Kecepatan akar rata-rata kuadrat molekul', satuan: 'm/s' },
      { simbol: 'M', arti: 'Massa molar gas', satuan: 'kg/mol (bukan g/mol!)' },
      { simbol: 'm', arti: 'Massa satu partikel gas (M / NA)', satuan: 'kg' },
      { simbol: 'ρ', arti: 'Massa jenis gas', satuan: 'kg/m³' },
      { simbol: 'P', arti: 'Tekanan gas', satuan: 'Pa' },
    ],
    kondisiPenggunaan: 'Digunakan untuk menghitung laju kuadratis molekul gas yang mewakili energi kinetik translasi rata-rata.',
    penjelasanSingkat: 'Laju v_rms sebanding dengan akar kuadrat suhu mutlak dan berbanding terbalik dengan akar kuadrat massa molar gas.',
    audioText: 'Kecepatan efektif gas, v r m s sama dengan akar dari tiga kali R kali T dibagi M besar. Pastikan massa molar diubah ke kilogram per mol!',
  },
];
