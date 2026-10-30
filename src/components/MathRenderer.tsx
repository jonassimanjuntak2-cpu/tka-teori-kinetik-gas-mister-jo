/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * FISIKA JENIUS – RENDERER RUMUS MATEMATIKA KONTEN & KATEX
 * Pengajar: Mister Jo
 */

import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  math: string;
  displayMode?: boolean;
  className?: string;
  fallbackText?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math,
  displayMode = false,
  className = '',
  fallbackText,
}) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode,
        throwOnError: false,
        strict: false,
      });
    } catch (e) {
      console.warn('KaTeX render fallback:', e);
      return null;
    }
  }, [math, displayMode]);

  if (!html) {
    return (
      <span className={`font-mono text-red-900 bg-red-50 px-2 py-0.5 rounded ${className}`}>
        {fallbackText || math}
      </span>
    );
  }

  return (
    <span
      className={`katex-wrapper inline-block ${displayMode ? 'w-full my-2 overflow-x-auto py-1 text-center' : ''} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
