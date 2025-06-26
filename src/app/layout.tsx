import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Dev Odyssey',
  description: '2025-2027成长路线图 | 开发者成长路径与技术跃迁计划',
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