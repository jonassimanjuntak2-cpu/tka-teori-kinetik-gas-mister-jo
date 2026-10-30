/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – SISTEM TTS NARATOR MISTER JO
 * Pengajar: Mister Jo
 */

export interface SpeechController {
  speak: (text: string, onEnd?: () => void, onStart?: () => void) => void;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  isSpeaking: () => boolean;
  isPaused: () => boolean;
  setRate: (rate: number) => void;
  getVoices: () => SpeechSynthesisVoice[];
  getIndonesianVoice: () => SpeechSynthesisVoice | null;
}

class MisterJoSpeechEngine implements SpeechController {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private rate: number = 1.0;
  private pitch: number = 1.0;
  private isAvailable: boolean = false;
  private indonesianVoice: SpeechSynthesisVoice | null = null;
  private onEndCallback: (() => void) | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.isAvailable = true;
      this.initVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.initVoices();
      }
    }
  }

  private initVoices(): void {
    if (!this.synth) return;
    const voices = this.synth.getVoices();
    // Cari suara bahasa Indonesia id-ID
    const idVoice = voices.find(
      (v) =>
        v.lang === 'id-ID' ||
        v.lang === 'id_ID' ||
        v.lang.toLowerCase().startsWith('id') ||
        v.name.toLowerCase().includes('indonesia')
    );
    this.indonesianVoice = idVoice || null;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    if (!this.synth) return [];
    return this.synth.getVoices();
  }

  public getIndonesianVoice(): SpeechSynthesisVoice | null {
    if (!this.indonesianVoice) {
      this.initVoices();
    }
    return this.indonesianVoice;
  }

  public setRate(newRate: number): void {
    this.rate = Math.max(0.7, Math.min(1.6, newRate));
  }

  /**
   * Mengubah notasi fisika, matematika, dan LaTeX menjadi pengucapan bahasa Indonesia alami
   */
  public cleanMathText(text: string): string {
    let spoken = text;

    // Bersihkan karakter markdown
    spoken = spoken.replace(/[*_#`~[\]]/g, ' ');

    // Pengucapan rumus kinetik gas ideal umum
    spoken = spoken.replace(/PV\s*=\s*nRT/gi, 'P kali V sama dengan n kali R kali T');
    spoken = spoken.replace(/PV\s*=\s*NkT/gi, 'P kali V sama dengan N partikel kali k kali T');
    spoken = spoken.replace(/P1V1\/T1\s*=\s*P2V2\/T2/gi, 'P satu kali V satu per T satu sama dengan P dua kali V dua per T dua');
    spoken = spoken.replace(/v_?rms/gi, 'kecepatan efektif');
    spoken = spoken.replace(/vrms/gi, 'kecepatan efektif');
    spoken = spoken.replace(/Ek_?rata/gi, 'energi kinetik rata-rata');
    spoken = spoken.replace(/Ek,?total/gi, 'energi kinetik total');
    spoken = spoken.replace(/Delta\s*U/gi, 'delta U');
    spoken = spoken.replace(/\\Delta\s*U/gi, 'delta U');
    spoken = spoken.replace(/\\Delta\s*n/gi, 'delta n');
    spoken = spoken.replace(/\\Delta\s*m/gi, 'delta m');
    spoken = spoken.replace(/\\Delta\s*T/gi, 'delta T');
    spoken = spoken.replace(/\\Delta/gi, 'delta');
    spoken = spoken.replace(/\\rho/gi, 'massa jenis rho');
    spoken = spoken.replace(/rho/gi, 'rho');

    // Satuan dan simbol
    spoken = spoken.replace(/\bO2\b/g, 'oksigen O dua');
    spoken = spoken.replace(/\bN2\b/g, 'nitrogen N dua');
    spoken = spoken.replace(/\bH2\b/g, 'hidrogen H dua');
    spoken = spoken.replace(/\bCO2\b/g, 'karbon dioksida');
    spoken = spoken.replace(/\bHe\b/g, 'helium');
    spoken = spoken.replace(/\bNe\b/g, 'neon');
    spoken = spoken.replace(/\bAr\b/g, 'argon');
    spoken = spoken.replace(/\bKr\b/g, 'kripton');

    spoken = spoken.replace(/m³|m\^3/g, 'meter kubik');
    spoken = spoken.replace(/cm³|cm\^3/g, 'sentimeter kubik');
    spoken = spoken.replace(/Liter|L\b/g, 'liter');
    spoken = spoken.replace(/kJ\b/g, 'kilo Joule');
    spoken = spoken.replace(/J\/(mol·K)|J\/\(mol\.K\)/g, 'Joule per mol Kelvin');
    spoken = spoken.replace(/J\/K/g, 'Joule per Kelvin');
    spoken = spoken.replace(/m\/s/g, 'meter per detik');
    spoken = spoken.replace(/km\/s/g, 'kilometer per detik');
    spoken = spoken.replace(/kg\/mol/g, 'kilogram per mol');
    spoken = spoken.replace(/g\/mol/g, 'gram per mol');
    spoken = spoken.replace(/kg\/m³/g, 'kilogram per meter kubik');
    spoken = spoken.replace(/10⁻²³/g, 'sepuluh pangkat minus dua puluh tiga');
    spoken = spoken.replace(/10⁻²¹/g, 'sepuluh pangkat minus dua puluh satu');
    spoken = spoken.replace(/10⁻³/g, 'sepuluh pangkat minus tiga');
    spoken = spoken.replace(/10⁵/g, 'sepuluh pangkat lima');
    spoken = spoken.replace(/10⁶/g, 'sepuluh pangkat enam');
    spoken = spoken.replace(/10²³/g, 'sepuluh pangkat dua puluh tiga');
    spoken = spoken.replace(/°C/g, 'derajat Celsius');

    // LaTeX tag cleaning
    spoken = spoken.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2');
    spoken = spoken.replace(/\\sqrt\{([^}]+)\}/g, 'akar dari $1');
    spoken = spoken.replace(/\\cdot/g, 'kali');
    spoken = spoken.replace(/\\times/g, 'kali');
    spoken = spoken.replace(/\\approx/g, 'mendekati');
    spoken = spoken.replace(/\\implies/g, 'sehingga didapat');
    spoken = spoken.replace(/\\[a-zA-Z]+/g, ' ');
    spoken = spoken.replace(/[{}]/g, ' ');

    // Spasi ganda
    spoken = spoken.replace(/\s+/g, ' ').trim();

    return spoken;
  }

  public speak(text: string, onEnd?: () => void, onStart?: () => void): void {
    if (!this.synth || !this.isAvailable) {
      if (onEnd) onEnd();
      return;
    }

    // Selalu batalkan suara sebelumnya agar tidak bertumpuk
    this.stop();

    const clean = this.cleanMathText(text);
    if (!clean) {
      if (onEnd) onEnd();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(clean);
    this.currentUtterance = utterance;

    const indVoice = this.getIndonesianVoice();
    if (indVoice) {
      utterance.voice = indVoice;
      utterance.lang = indVoice.lang;
    } else {
      utterance.lang = 'id-ID';
    }

    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      // Abaikan error 'canceled' atau 'interrupted' saat user menekan stop/ganti soal
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('Speech synthesis warning:', e.error);
      }
      this.currentUtterance = null;
      if (onEnd) onEnd();
    };

    try {
      this.synth.speak(utterance);
    } catch (err) {
      console.warn('Gagal memutar audio TTS:', err);
      if (onEnd) onEnd();
    }
  }

  public stop(): void {
    if (this.synth) {
      this.synth.cancel();
      this.currentUtterance = null;
    }
  }

  public pause(): void {
    if (this.synth && this.synth.speaking) {
      this.synth.pause();
    }
  }

  public resume(): void {
    if (this.synth && this.synth.paused) {
      this.synth.resume();
    }
  }

  public isSpeaking(): boolean {
    return !!(this.synth && this.synth.speaking && !this.synth.paused);
  }

  public isPaused(): boolean {
    return !!(this.synth && this.synth.paused);
  }
}

export const speechEngine = new MisterJoSpeechEngine();
