'use client';

import React from 'react';
import Link from 'next/link';

export default function Phase1() {
  const coreSkills = [
    {
      title: 'Python编程精通',
      description: 'AI Agent开发的首选语言，掌握基础语法、OOP、API调用、JSON处理、数据库交互和Web框架',
      details: [
        'Python基础：数据类型、循环、函数',
        '面向对象编程（OOP）',
        'API调用和自动化脚本编写',
        'JSON处理和数据序列化',
        '数据库交互（SQLite, PostgreSQL）',
        'Web框架基础（Flask, FastAPI）'
      ],
      icon: '🐍'
    },
    {
      title: '数学与统计基础',
      description: '理解AI模型工作原理和优化算法的关键基础',
      details: [
        '线性代数：向量、矩阵、特征值',
        '微积分：导数、链式法则',
        '概率统计：贝叶斯思维、假设检验',
        '优化算法：梯度下降、随机梯度下降'
      ],
      icon: '📊'
    },
    {
      title: '机器学习与AI核心概念',
      description: '深入理解各种学习范式，为Agent开发奠定理论基础',
      details: [
        '监督学习：分类、回归',
        '无监督学习：聚类、降维',
        '神经网络：前馈网络、反向传播',
        '深度学习：CNN、RNN、Transformer',
        '强化学习：Q-learning、策略梯度'
      ],
      icon: '🧠'
    },
    {
      title: '数据处理与分析',
      description: '掌握数据清洗、转换和分析的核心技能',
      details: [
        '数据清洗：缺失值处理、异常值检测',
        '数据一致性调整和格式转换',
        'Pandas：数据操作和分析',
        'NumPy：数值计算和数组操作',
        'SQL：大规模数据管理和查询'
      ],
      icon: '📈'
    },
    {
      title: '版本控制',
      description: '团队协作和开源项目管理的基础工具',
      details: [
        'Git基础：提交、分支、合并',
        'GitHub/GitLab使用',
        '协作工作流：Pull Request、Code Review',
        '开源项目贡献流程'
      ],
      icon: '📝'
    }
  ];

  const practicalProjects = [
    {
      title: '基础机器学习项目',
      description: '从简单算法开始，逐步理解原理',
      projects: [
        '线性回归预测房价',
        '支持向量机分类鸢尾花',
        'K-means聚类客户分群',
        '决策树预测用户行为'
      ]
    },
    {
      title: '数据分析与可视化',
      description: '提升数据处理和展示能力',
      projects: [
        '电商数据分析仪表板',
        '股票价格趋势分析',
        '社交媒体情感分析',
        '用户行为路径分析'
      ]
    },
    {
      title: '解决实际问题的AI应用',
      description: '避免玩具项目，关注真实价值',
      projects: [
        '时间序列预测销售趋势',
        '图像异常检测系统',
        '文本分类和情感分析',
        '推荐系统开发'
      ]
    }
  ];

  const learningResources = [
    {
      category: 'Python编程',
      resources: [
        'Python官方文档和教程',
        'Real Python在线课程',
        'Python编程认证课程',
        'LeetCode Python练习'
      ]
    },
    {
      category: '数学与统计',
      resources: [
        '3Blue1Brown线性代数视频',
        'Khan Academy微积分课程',
        '统计学习方法（李航）',
        '概率论与数理统计'
      ]
    },
    {
      category: '机器学习',
      resources: [
        'Deeplearning.ai基础课程',
        'DataCamp机器学习路径',
        'Coursera机器学习（吴恩达）',
        'edX AI/ML专业课程'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
              <span className="text-3xl">🔬</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
              阶段一：技术纵深突破
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              底层系统 + AI原理 + 工程架构
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              建立扎实的AI Agent开发基础，掌握核心技术栈，为后续的系统化创新奠定坚实基础
            </p>
          </div>
        </div>
      </section>

      {/* 核心技能 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              核心技术技能
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              掌握这些基础技能，为AI Agent开发打下坚实基础
            </p>
          </div>

          <div className="space-y-8">
            {coreSkills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {skill.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {skill.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 实战项目 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              实战项目
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              从基础到进阶，逐步构建实际应用能力
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {practicalProjects.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习资源 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              学习资源
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              精选优质学习资源，加速技能提升
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningResources.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.resources.map((resource, resourceIndex) => (
                    <div key={resourceIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{resource}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 导航 */}
      <section className="py-12 border-t border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="bg-gray-100 dark:bg-slate-700 rounded-lg px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              ← 返回首页
            </Link>
            <Link 
              href="/phase2"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg px-6 py-3 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              下一阶段：系统化创新 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 