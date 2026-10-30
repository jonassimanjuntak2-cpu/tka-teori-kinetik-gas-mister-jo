/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – ILUSTRASI & GRAFIK ILMIAH PRESISI (SVG)
 * Pengajar: Mister Jo
 */

import React from 'react';

interface ScientificGraphProps {
  type: string;
  title?: string;
  details?: Record<string, any>;
  className?: string;
}

export const ScientificGraph: React.FC<ScientificGraphProps> = ({
  type,
  title,
  className = '',
}) => {
  return (
    <div className={`my-4 p-4 bg-slate-900 text-slate-100 rounded-2xl border border-slate-700 shadow-inner overflow-hidden ${className}`}>
      {title && (
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
          <span className="text-xs uppercase tracking-wider font-semibold text-red-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Ilustrasi Fisis Ilmiah
          </span>
          <span className="text-xs font-mono text-slate-400">{title}</span>
        </div>
      )}

      <div className="flex justify-center items-center">
        {type === 'pv-cycle' && (
          <svg viewBox="0 0 420 260" className="w-full max-w-md h-auto" aria-label="Diagram Siklus Termodinamika P-V">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#e2e8f0" />
              </marker>
              <marker id="red-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 8 5 L 0 9 z" fill="#ef4444" />
              </marker>
            </defs>
            {/* Grid */}
            <line x1="60" y1="20" x2="60" y2="220" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
            <line x1="50" y1="210" x2="390" y2="210" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="35" y="25" fill="#f87171" fontSize="13" fontWeight="bold">P (10⁵ Pa)</text>
            <text x="345" y="235" fill="#f87171" fontSize="13" fontWeight="bold">V (Liter)</text>

            {/* Skala Sumbu P */}
            <line x1="55" y1="90" x2="65" y2="90" stroke="#94a3b8" />
            <text x="35" y="94" fill="#cbd5e1" fontSize="11" fontFamily="monospace">2,0</text>
            <line x1="55" y1="150" x2="65" y2="150" stroke="#94a3b8" />
            <text x="35" y="154" fill="#cbd5e1" fontSize="11" fontFamily="monospace">1,0</text>

            {/* Skala Sumbu V */}
            <line x1="140" y1="205" x2="140" y2="215" stroke="#94a3b8" />
            <text x="132" y="230" fill="#cbd5e1" fontSize="11" fontFamily="monospace">2,0</text>
            <line x1="300" y1="205" x2="300" y2="215" stroke="#94a3b8" />
            <text x="292" y="230" fill="#cbd5e1" fontSize="11" fontFamily="monospace">6,0</text>

            {/* Garis Bantu Putus-putus */}
            <line x1="60" y1="90" x2="300" y2="90" stroke="#334155" strokeDasharray="4" />
            <line x1="60" y1="150" x2="300" y2="150" stroke="#334155" strokeDasharray="4" />
            <line x1="140" y1="90" x2="140" y2="210" stroke="#334155" strokeDasharray="4" />
            <line x1="300" y1="90" x2="300" y2="210" stroke="#334155" strokeDasharray="4" />

            {/* Area Siklus */}
            <polygon points="140,90 300,90 300,150" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="2.5" />

            {/* Panah Arah Siklus */}
            <line x1="140" y1="90" x2="230" y2="90" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#red-arrow)" />
            <line x1="300" y1="90" x2="300" y2="125" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#red-arrow)" />
            <line x1="300" y1="150" x2="210" y2="116" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#red-arrow)" />

            {/* Titik Sudut */}
            <circle cx="140" cy="90" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="120" y="80" fill="#facc15" fontSize="13" fontWeight="bold">A (300 K)</text>

            <circle cx="300" cy="90" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="310" y="85" fill="#facc15" fontSize="13" fontWeight="bold">B (TB)</text>

            <circle cx="300" cy="150" r="5" fill="#facc15" stroke="#ffffff" strokeWidth="1.5" />
            <text x="310" y="160" fill="#facc15" fontSize="13" fontWeight="bold">C (TC)</text>
          </svg>
        )}

        {type === 'piston-cylinder' && (
          <svg viewBox="0 0 380 230" className="w-full max-w-sm h-auto" aria-label="Ilustrasi Silinder Berpiston">
            {/* Silinder Badan */}
            <rect x="70" y="40" width="240" height="150" rx="8" fill="#1e293b" stroke="#64748b" strokeWidth="3" />

            {/* Ruang Gas */}
            <rect x="73" y="100" width="234" height="88" fill="rgba(56, 189, 248, 0.1)" />

            {/* Piston Bergerak */}
            <rect x="72" y="82" width="236" height="20" rx="3" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
            {/* Batang Piston */}
            <rect x="180" y="20" width="20" height="65" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
            <circle cx="190" cy="20" r="10" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />

            {/* Manometer Sensor Tekanan */}
            <rect x="270" y="25" width="25" height="15" fill="#475569" rx="2" />
            <circle cx="282" cy="18" r="14" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
            <line x1="282" y1="18" x2="289" y2="12" stroke="#ef4444" strokeWidth="2" />
            <text x="273" y="2" fill="#38bdf8" fontSize="10" fontWeight="bold">P-Sensor</text>

            {/* Molekul Gas Acak */}
            {[
              [100, 130], [130, 160], [160, 120], [190, 170], [220, 130],
              [250, 150], [280, 120], [120, 175], [175, 145], [235, 170]
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="4" fill="#38bdf8" />
                <line x1={cx} y1={cy} x2={cx + (i % 2 === 0 ? 8 : -8)} y2={cy + (i % 3 === 0 ? 6 : -6)} stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="1 1" />
              </g>
            ))}

            <text x="145" y="215" fill="#94a3b8" fontSize="12" fontWeight="500">Gas Ideal Terkurung</text>
          </svg>
        )}

        {type === 'two-tanks' && (
          <svg viewBox="0 0 420 220" className="w-full max-w-md h-auto" aria-label="Dua Wadah Gas Berbeda">
            {/* Wadah A */}
            <rect x="40" y="50" width="130" height="130" rx="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="80" y="80" fill="#38bdf8" fontSize="14" fontWeight="bold">Wadah A</text>
            <text x="55" y="105" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Gas: Helium (He)</text>
            <text x="55" y="125" fill="#e2e8f0" fontSize="11" fontFamily="monospace">VA = 10 L</text>
            <text x="55" y="145" fill="#e2e8f0" fontSize="11" fontFamily="monospace">PA = 2,0 atm</text>
            <text x="55" y="165" fill="#e2e8f0" fontSize="11" fontFamily="monospace">TA = 300 K</text>

            {/* Wadah B */}
            <rect x="250" y="35" width="140" height="150" rx="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2.5" />
            <text x="290" y="65" fill="#ef4444" fontSize="14" fontWeight="bold">Wadah B</text>
            <text x="265" y="90" fill="#e2e8f0" fontSize="11" fontFamily="monospace">Gas: Nitrogen (N₂)</text>
            <text x="265" y="110" fill="#e2e8f0" fontSize="11" fontFamily="monospace">VB = 15 L</text>
            <text x="265" y="130" fill="#e2e8f0" fontSize="11" fontFamily="monospace">PB = 3,0 atm</text>
            <text x="265" y="150" fill="#e2e8f0" fontSize="11" fontFamily="monospace">TB = 450 K</text>

            {/* Pipa Penghubung dan Katup */}
            <line x1="170" y1="115" x2="250" y2="115" stroke="#64748b" strokeWidth="8" />
            <polygon points="205,105 215,115 205,125" fill="#facc15" />
            <polygon points="215,105 205,115 215,125" fill="#facc15" />
            <text x="185" y="95" fill="#facc15" fontSize="11" fontWeight="bold">Kran</text>
          </svg>
        )}

        {type === 'leakage-p-t' && (
          <svg viewBox="0 0 380 210" className="w-full max-w-sm h-auto" aria-label="Kebocoran Gas Tabung">
            {/* Silinder Baja */}
            <rect x="80" y="45" width="200" height="120" rx="30" fill="#1e293b" stroke="#94a3b8" strokeWidth="3" />
            {/* Moncong Kran */}
            <rect x="280" y="95" width="30" height="20" fill="#475569" />
            {/* Katup Putar */}
            <rect x="290" y="70" width="10" height="25" fill="#ef4444" />
            <line x1="280" y1="70" x2="310" y2="70" stroke="#ef4444" strokeWidth="4" />

            {/* Aliran Gas Bocor */}
            <path d="M 310 105 Q 340 95 365 75" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M 310 105 Q 345 105 375 110" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <path d="M 310 105 Q 340 120 365 140" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="315" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">Gas Keluar</text>

            {/* Manometer Indikator */}
            <circle cx="140" cy="45" r="22" fill="#0f172a" stroke="#facc15" strokeWidth="2" />
            <line x1="140" y1="45" x2="152" y2="35" stroke="#ef4444" strokeWidth="2" />
            <text x="122" y="16" fill="#facc15" fontSize="10" fontWeight="bold">Pressure Drop</text>

            <text x="105" y="115" fill="#cbd5e1" fontSize="12" fontWeight="bold">Tabung Rigid (V Tetap)</text>
            <text x="110" y="135" fill="#f87171" fontSize="11">Mol gas berkurang (Δn)</text>
          </svg>
        )}

        {type === 'dof-heat' && (
          <svg viewBox="0 0 400 200" className="w-full max-w-md h-auto" aria-label="Derajat Kebebasan Molekul">
            {/* Monoatomik */}
            <g transform="translate(60, 40)">
              <circle cx="40" cy="50" r="18" fill="#38bdf8" stroke="#ffffff" strokeWidth="2" />
              {/* Sumbu translasi */}
              <line x1="10" y1="50" x2="70" y2="50" stroke="#facc15" strokeWidth="1.5" />
              <line x1="40" y1="20" x2="40" y2="80" stroke="#facc15" strokeWidth="1.5" />
              <text x="0" y="105" fill="#38bdf8" fontSize="12" fontWeight="bold">Monoatomik (He)</text>
              <text x="15" y="125" fill="#94a3b8" fontSize="11">f = 3 (Translasi)</text>
            </g>

            {/* Diatomik Dumbbell */}
            <g transform="translate(240, 40)">
              <circle cx="30" cy="50" r="16" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <rect x="42" y="46" width="24" height="8" fill="#94a3b8" />
              <circle cx="78" cy="50" r="16" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              {/* Rotasi busur */}
              <path d="M 40 25 A 25 15 0 0 1 68 25" fill="none" stroke="#facc15" strokeWidth="2" strokeDasharray="3 2" />
              <text x="5" y="105" fill="#ef4444" fontSize="12" fontWeight="bold">Diatomik (O₂ / N₂)</text>
              <text x="5" y="125" fill="#94a3b8" fontSize="11">f = 5 (3 trans + 2 rot)</text>
              <text x="5" y="142" fill="#fbbf24" fontSize="10">f = 7 (suhu &gt; 1.000 K)</text>
            </g>
          </svg>
        )}

        {type === 'ek-t' && (
          <svg viewBox="0 0 400 230" className="w-full max-w-md h-auto" aria-label="Grafik Ek Terhadap Suhu Mutlak">
            <line x1="60" y1="20" x2="60" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="180" x2="380" y2="180" stroke="#64748b" strokeWidth="2" />
            <text x="25" y="25" fill="#38bdf8" fontSize="12" fontWeight="bold">Ek (Joule)</text>
            <text x="330" y="205" fill="#facc15" fontSize="12" fontWeight="bold">T (Kelvin)</text>

            {/* Garis Linear Ek = 3/2 kT */}
            <line x1="60" y1="180" x2="360" y2="40" stroke="#ef4444" strokeWidth="3" />
            <circle cx="60" cy="180" r="5" fill="#facc15" />
            <text x="45" y="198" fill="#cbd5e1" fontSize="11">0 K</text>

            <circle cx="160" cy="133" r="4" fill="#38bdf8" />
            <line x1="160" y1="133" x2="160" y2="180" stroke="#475569" strokeDasharray="3" />
            <text x="145" y="200" fill="#cbd5e1" fontSize="10">100 K</text>

            <circle cx="260" cy="86" r="4" fill="#38bdf8" />
            <line x1="260" y1="86" x2="260" y2="180" stroke="#475569" strokeDasharray="3" />
            <text x="245" y="200" fill="#cbd5e1" fontSize="10">300 K</text>

            <text x="220" y="55" fill="#f87171" fontSize="12" fontWeight="bold">Gradien m = 3/2 k</text>
          </svg>
        )}

        {type === 'vrms-t' && (
          <svg viewBox="0 0 400 230" className="w-full max-w-md h-auto" aria-label="Kurva Kecepatan RMS terhadap Suhu">
            <line x1="60" y1="20" x2="60" y2="190" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="180" x2="380" y2="180" stroke="#64748b" strokeWidth="2" />
            <text x="25" y="25" fill="#38bdf8" fontSize="12" fontWeight="bold">v_rms (m/s)</text>
            <text x="330" y="205" fill="#facc15" fontSize="12" fontWeight="bold">T (Kelvin)</text>

            {/* Kurva Parabolik Akar T: y = 180 - c * sqrt(x) */}
            <path d="M 60 180 Q 160 100 360 50" fill="none" stroke="#38bdf8" strokeWidth="3" />
            <text x="200" y="70" fill="#38bdf8" fontSize="12" fontWeight="bold">v_rms sebanding √T</text>
            <text x="180" y="95" fill="#94a3b8" fontSize="11">Gas ringan kurva lebih curam</text>
          </svg>
        )}

        {type === 'kinetic-particles' && (
          <svg viewBox="0 0 380 200" className="w-full max-w-sm h-auto" aria-label="Molekul Bergerak Acak">
            <rect x="40" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#475569" strokeWidth="2" />
            {[
              [80, 50, 18, -12, '#38bdf8'],
              [140, 80, -15, 20, '#f87171'],
              [200, 60, 22, 10, '#38bdf8'],
              [260, 100, -10, -20, '#fbbf24'],
              [110, 140, 16, -14, '#38bdf8'],
              [180, 130, -20, -10, '#f87171'],
              [270, 150, 15, 12, '#38bdf8'],
            ].map(([cx, cy, vx, vy, color], i) => (
              <g key={i}>
                <circle cx={Number(cx)} cy={Number(cy)} r="6" fill={String(color)} />
                <line
                  x1={Number(cx)}
                  y1={Number(cy)}
                  x2={Number(cx) + Number(vx)}
                  y2={Number(cy) + Number(vy)}
                  stroke={String(color)}
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </g>
            ))}
            <text x="100" y="195" fill="#94a3b8" fontSize="11">Tumbukan Lenting Sempurna Molekul</text>
          </svg>
        )}

        {type === 'p-t' && (
          <svg viewBox="0 0 380 210" className="w-full max-w-sm h-auto" aria-label="Grafik P terhadap T">
            <line x1="60" y1="20" x2="60" y2="180" stroke="#64748b" strokeWidth="2" />
            <line x1="50" y1="170" x2="360" y2="170" stroke="#64748b" strokeWidth="2" />
            <text x="25" y="25" fill="#38bdf8" fontSize="12" fontWeight="bold">P (Pa)</text>
            <text x="320" y="195" fill="#facc15" fontSize="12" fontWeight="bold">T (K)</text>
            <line x1="60" y1="170" x2="330" y2="40" stroke="#fbbf24" strokeWidth="2.5" />
            <circle cx="60" cy="170" r="4" fill="#fbbf24" />
            <text x="140" y="80" fill="#fbbf24" fontSize="12" fontWeight="bold">Garis Isokhorik (V Konstan)</text>
          </svg>
        )}

        {type === 'v-t' && (
          <svg viewBox="0 0 400 210" className="w-full max-w-sm h-auto" aria-label="Grafik V terhadap Suhu">
            <line x1="120" y1="20" x2="120" y2="180" stroke="#64748b" strokeWidth="2" />
            <line x1="30" y1="170" x2="380" y2="170" stroke="#64748b" strokeWidth="2" />
            <text x="80" y="25" fill="#38bdf8" fontSize="12" fontWeight="bold">V (mL)</text>
            <text x="340" y="195" fill="#facc15" fontSize="12" fontWeight="bold">t (°C)</text>

            {/* Titik Nol Celsius */}
            <line x1="120" y1="165" x2="120" y2="175" stroke="#94a3b8" />
            <text x="115" y="190" fill="#cbd5e1" fontSize="11">0°C</text>

            {/* Garis Ekstrapolasi Putus-putus ke Nol Mutlak */}
            <line x1="40" y1="170" x2="120" y2="120" stroke="#94a3b8" strokeDasharray="3 3" strokeWidth="2" />
            <circle cx="40" cy="170" r="5" fill="#ef4444" />
            <text x="15" y="160" fill="#f87171" fontSize="11" fontWeight="bold">-273°C</text>

            {/* Garis Utama Eksperimen */}
            <line x1="120" y1="120" x2="340" y2="40" stroke="#38bdf8" strokeWidth="3" />
            <circle cx="120" cy="120" r="4" fill="#38bdf8" />
            <text x="130" y="125" fill="#cbd5e1" fontSize="10">V₀ (546 mL)</text>

            <text x="180" y="60" fill="#38bdf8" fontSize="11" fontWeight="bold">Hukum Charles (P Konstan)</text>
          </svg>
        )}
      </div>
    </div>
  );
};
