'use client';

import React from 'react';
import Link from 'next/link';

export default function Phase2() {
  const coreSkills = [
    {
      title: 'Agentic架构理解',
      description: '深入理解AI Agent的核心组件和工作原理',
      details: [
        '记忆系统：短期工作记忆、长期持久记忆',
        '规划器：任务分解和策略制定',
        '执行器：动作执行和结果反馈',
        '工具使用：外部API和工具集成',
        '向量数据库：知识存储和检索'
      ],
      icon: '🏗️'
    },
    {
      title: '大型语言模型（LLM）',
      description: '掌握LLM的核心概念和应用技术',
      details: [
        'Transformer架构：注意力机制和位置编码',
        'Tokenization：文本分词和编码',
        '嵌入（Embeddings）：向量表示和语义理解',
        '上下文窗口：长文本处理策略',
        '提示工程（Prompt Engineering）',
        '指令微调（Instruction Tuning）'
      ],
      icon: '🤖'
    },
    {
      title: 'AI Agent框架应用',
      description: '熟练使用主流框架构建模块化Agent应用',
      details: [
        'LangChain：链式调用和工具集成',
        'AutoGen：多Agent协作框架',
        'CrewAI：团队协作Agent系统',
        'LangGraph：复杂工作流编排',
        'LlamaIndex：知识库和RAG应用'
      ],
      icon: '🔧'
    },
    {
      title: '函数调用（Function Calling）',
      description: '实现LLM与外部工具和API的可靠连接',
      details: [
        '函数调用原理和机制',
        '自然语言到API调用转换',
        '参数验证和错误处理',
        '工具注册和管理',
        '安全性和权限控制'
      ],
      icon: '🔗'
    },
    {
      title: '向量数据库与RAG',
      description: '构建知识检索和增强生成系统',
      details: [
        '向量数据库：Pinecone, FAISS, Weaviate',
        'RAG架构设计和实现',
        '文档分块和向量化',
        '相似度搜索和排序',
        '知识库更新和维护'
      ],
      icon: '📚'
    },
    {
      title: '多Agent协作策略',
      description: '设计和编排多个Agent协同工作',
      details: [
        '顺序Agent架构',
        '并行Agent处理',
        '分层Agent组织',
        'Agent间通信协议',
        '冲突解决和协调机制'
      ],
      icon: '👥'
    },
    {
      title: '系统设计与部署',
      description: '构建生产级的AI Agent系统',
      details: [
        '模块化设计原则',
        '可扩展性架构',
        '错误处理和容错',
        '可观测性和监控',
        '云平台部署和优化'
      ],
      icon: '🚀'
    }
  ];

  const advancedProjects = [
    {
      title: '智能邮件助手',
      description: '多步骤的邮件处理Agent',
      features: [
        '邮件内容分析和分类',
        '自动回复生成',
        '日程安排和提醒',
        '邮件优先级排序',
        '多语言支持'
      ]
    },
    {
      title: '市场调研Agent',
      description: '自动化市场分析和报告生成',
      features: [
        '竞品信息收集',
        '市场趋势分析',
        '数据可视化生成',
        '报告自动撰写',
        '实时监控和预警'
      ]
    },
    {
      title: '内容复用Agent',
      description: '跨平台内容自动转换',
      features: [
        '博客转LinkedIn帖子',
        '长文转推文系列',
        '内容风格适配',
        '多平台发布',
        '效果数据追踪'
      ]
    },
    {
      title: '代码开发Agent',
      description: '智能代码审查和生成',
      features: [
        '代码质量检查',
        'Bug检测和修复建议',
        '代码重构优化',
        '文档自动生成',
        '测试用例生成'
      ]
    }
  ];

  const advancedAIProjects = [
    {
      title: '股票市场预测系统',
      description: '使用TimeGPT进行时间序列预测',
      features: [
        '多因子模型分析',
        '技术指标计算',
        '风险评估模型',
        '投资组合优化',
        '实时预测更新'
      ]
    },
    {
      title: '多语言语音识别',
      description: '构建自动语音识别模型',
      features: [
        '多语言模型训练',
        '实时语音转文字',
        '说话人识别',
        '情感分析',
        '噪音抑制'
      ]
    },
    {
      title: '本地LLM应用',
      description: '微调Llama 3.2并本地部署',
      features: [
        '模型微调训练',
        '本地推理优化',
        '私有化部署',
        '性能监控',
        '成本控制'
      ]
    }
  ];

  const learningResources = [
    {
      category: 'Agentic AI开发',
      resources: [
        'Agentic AI Developer™认证课程',
        'LangChain官方文档和教程',
        'AutoGen多Agent协作指南',
        'CrewAI团队协作实践'
      ]
    },
    {
      category: 'LLM技术',
      resources: [
        'Transformer架构详解',
        '提示工程最佳实践',
        'RAG系统设计指南',
        '函数调用实现教程'
      ]
    },
    {
      category: '系统架构',
      resources: [
        'AI Agent系统设计模式',
        '向量数据库选型指南',
        '云原生AI应用部署',
        '生产环境监控实践'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              阶段二：系统化创新
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              自主设计AI系统 + Agent平台 + SaaS
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              深入Agent架构，构建复杂的AI Agent系统，实现从理论到实践的跨越
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
              掌握这些高级技能，构建复杂的AI Agent系统
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
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
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

      {/* 多步骤Agent项目 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              多步骤Agent项目
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              构建能够解决复杂问题的智能Agent系统
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advancedProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 高级AI项目 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              高级AI项目
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              探索前沿AI技术，构建创新应用
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedAIProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 学习资源 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              学习资源
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              深入学习AI Agent开发的高级技能
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
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
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
              href="/phase1"
              className="bg-gray-100 dark:bg-slate-700 rounded-lg px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              ← 上一阶段：技术纵深突破
            </Link>
            <Link 
              href="/phase3"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-6 py-3 hover:from-orange-600 hover:to-red-600 transition-all"
            >
              下一阶段：技术品牌与影响力 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 