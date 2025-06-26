'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  const phases = [
    {
      id: 'phase1',
      title: 'Phase 1: 基础夯实期',
      period: '2025 Q1-Q2',
      description: '建立扎实的技术基础，掌握核心开发技能',
      skills: ['JavaScript/TypeScript', 'React/Vue', 'Node.js', '数据库基础'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phase2', 
      title: 'Phase 2: 技能跃迁期',
      period: '2025 Q3-Q4',
      description: '深入专业领域，提升架构设计和系统思维',
      skills: ['微服务架构', '云原生技术', 'DevOps', '性能优化'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'phase3',
      title: 'Phase 3: 影响力建设期', 
      period: '2026-2027',
      description: '建立技术影响力，成为行业专家和思想领袖',
      skills: ['技术布道', '开源贡献', '团队领导', '产品思维'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Dev Odyssey
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              2025-2027 开发者成长路线图
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              从技术新手到行业专家的完整跃迁计划
            </p>
            
            {/* 核心公式 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                核心理念
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                Coding = Engineering Skills × System Thinking × Learning Speed × Content Leverage
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 成长路线总览 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              成长路线总览
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              三个阶段，循序渐进，实现技术能力的质的飞跃
            </p>
          </div>

          {/* 阶段卡片 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
              <Link 
                key={phase.id}
                href={`/${phase.id}`}
                className="group block"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-slate-700">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white font-bold text-xl mb-6`}>
                    {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {phase.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {phase.description}
                  </p>
                  <div className="space-y-2">
                    {phase.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* 快速导航 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/study-plan" className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-medium text-gray-900 dark:text-white">学习计划</div>
            </Link>
            <Link href="/output" className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-medium text-gray-900 dark:text-white">输出路径</div>
            </Link>
            <Link href="/mindset" className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
              <div className="text-2xl mb-2">🧠</div>
              <div className="font-medium text-gray-900 dark:text-white">成长思维</div>
            </Link>
            <Link href="/overview" className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-slate-700">
              <div className="text-2xl mb-2">📊</div>
              <div className="font-medium text-gray-900 dark:text-white">详细概览</div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 