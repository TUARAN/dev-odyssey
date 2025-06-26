'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  const phases = [
    {
      id: 'phase1',
      title: '阶段一：技术纵深突破',
      period: '底层系统 + AI原理 + 工程架构',
      description: '建立扎实的AI Agent开发基础，掌握核心技术栈',
      skills: ['Python编程精通', '数学与统计基础', '机器学习核心概念', '数据处理与分析', '版本控制'],
      color: 'from-blue-500 to-cyan-500',
      icon: '🔬'
    },
    {
      id: 'phase2', 
      title: '阶段二：系统化创新',
      period: '自主设计AI系统 + Agent平台 + SaaS',
      description: '深入Agent架构，构建复杂的AI Agent系统',
      skills: ['Agentic架构理解', 'LLM核心技术', 'AI Agent框架应用', '函数调用', '向量数据库与RAG', '多Agent协作'],
      color: 'from-purple-500 to-pink-500',
      icon: '🚀'
    },
    {
      id: 'phase3',
      title: '阶段三：技术品牌与影响力', 
      period: '开源 + 博客 + 课程 + 产品',
      description: '建立技术影响力，成为AI Agent领域的专家',
      skills: ['沟通与协作', '技术写作与分享', '产品思维', '社区参与'],
      color: 'from-orange-500 to-red-500',
      icon: '🌟'
    }
  ];

  const coreConcepts = [
    {
      title: '技术纵深突破',
      description: 'Python编程 + 数学基础 + ML/AI核心概念',
      icon: '⚡'
    },
    {
      title: '系统化创新', 
      description: 'Agent架构 + LLM技术 + 框架应用',
      icon: '🧠'
    },
    {
      title: '影响力构建',
      description: '开源贡献 + 技术输出 + 产品思维',
      icon: '🎯'
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
              AI Agent 技术奥德赛
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              面对AI Agent浪潮，普通开发者的成长跃迁指南
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              从基础到创新，再到影响力构建的系统化成长旅程
            </p>
            
            {/* 核心公式 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto">
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                核心理念
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                AI Agent Developer = 技术纵深 × 系统创新 × 影响力构建
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心概念 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              三大核心能力
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              循序渐进，螺旋上升的成长路径
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {coreConcepts.map((concept, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                <div className="text-4xl mb-4">{concept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {concept.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成长路线总览 */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              技术奥德赛路线图
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              三个阶段，循序渐进，实现AI Agent开发能力的质的飞跃
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
                    {phase.icon}
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
              <div className="font-medium text-gray-900 dark:text-white">实战项目</div>
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

      {/* 趋势展望 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              AI Agent 未来趋势
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              把握技术发展方向，提前布局未来
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">更强的自主性</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">复杂任务处理能力，24/7自主企业</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="text-3xl mb-3">🐝</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">多Agent协同</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">蜂群智能，动态协调策略</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">AI工具编排</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">中央枢纽，管理AI生态系统</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">强化治理</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">伦理安全，负责任AI开发</p>
            </div>
          </div>
        </div>
      </section>

      {/* 作者信息 */}
      <section className="py-12 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    AI Agent 技术奥德赛
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    开发者成长指南 · AI Agent 专家培养计划
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                面对AI Agent这波汹涌的浪潮，普通开发者如何才能提升能力、参与建设并最终实现职业跃迁？
                这需要一场精心规划的"技术奥德赛"，一个从基础到创新，再到影响力构建的系统化成长旅程。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 