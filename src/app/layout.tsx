import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'AI Agent 技术奥德赛',
  description: '面对AI Agent浪潮，普通开发者的成长跃迁指南 | 三阶段系统化成长路径',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
} 