/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – HEADER NAVBAR MERAH PUTIH
 * Pengajar: Mister Jo
 */

import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  Map,
  FileSpreadsheet,
  PlayCircle,
  CheckCircle2,
  BarChart3,
  Settings,
  Menu,
  X,
  Sparkles,
  Trophy,
} from 'lucide-react';

export type NavView =
  | 'home'
  | 'guide'
  | 'map'
  | 'formulas'
  | 'quiz'
  | 'review'
  | 'stats'
  | 'settings';

interface NavbarProps {
  currentView: NavView;
  onNavigate: (view: NavView) => void;
  answeredCount: number;
  totalScore100: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  answeredCount,
  totalScore100,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home' as NavView, label: 'Beranda', icon: Home },
    { id: 'guide' as NavView, label: 'Petunjuk', icon: BookOpen },
    { id: 'map' as NavView, label: 'Peta Materi', icon: Map },
    { id: 'formulas' as NavView, label: 'Bank Rumus', icon: FileSpreadsheet },
    { id: 'quiz' as NavView, label: 'Mulai Latihan', icon: PlayCircle, badge: `${answeredCount}/30` },
    { id: 'review' as NavView, label: 'Pembahasan', icon: CheckCircle2 },
    { id: 'stats' as NavView, label: 'Statistik', icon: BarChart3 },
    { id: 'settings' as NavView, label: 'Pengaturan', icon: Settings },
  ];

  const handleSelectNav = (view: NavView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-rose-900 to-red-950 text-white shadow-xl border-b-2 border-red-500/30 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identitas Pengajar */}
          <button
            onClick={() => handleSelectNav('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Kembali ke Beranda Fisika Jenius"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-red-600 to-amber-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <span className="text-2xl select-none">⚛️</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  FISIKA <span className="text-red-400 font-serif italic">JENIUS</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-700/80 text-amber-200 border border-red-500/50">
                  <Sparkles className="w-3 h-3" />
                  Mister Jo
                </span>
              </div>
              <p className="text-xs text-rose-200/90 font-medium tracking-wide">
                Teori Kinetik Gas • 30 Soal HOTS
              </p>
            </div>
          </button>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5" aria-label="Menu Utama">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-red-900 shadow-md font-bold'
                      : 'text-rose-100 hover:bg-red-800/60 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-red-700' : 'text-rose-300'}`} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive
                          ? 'bg-red-900 text-white'
                          : 'bg-red-950/80 text-amber-300 border border-red-600/50'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Skor & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Badge Skor Akumulasi */}
            <div
              onClick={() => handleSelectNav('stats')}
              className="flex items-center gap-2 bg-slate-950/60 border border-amber-500/40 px-3 py-1.5 rounded-2xl cursor-pointer hover:bg-slate-950/80 transition-colors shadow-inner"
              title="Lihat Statistik Nilai"
              role="button"
              tabIndex={0}
              aria-label="Skor Latihan Anda"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <div className="flex flex-col text-right">
                <span className="text-[10px] uppercase font-bold text-slate-400 leading-none">
                  Skor
                </span>
                <span className="text-sm font-extrabold text-amber-300 font-mono leading-tight">
                  {totalScore100}
                </span>
              </div>
            </div>

            {/* Tombol Hamburger Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-red-800 hover:bg-red-700 text-white transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-red-950 border-t border-red-800/80 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-red-600 text-white font-bold'
                    : 'text-rose-100 hover:bg-red-900/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-rose-300" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-900 text-amber-300 font-mono">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
