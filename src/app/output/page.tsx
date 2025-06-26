'use client';

import React from 'react';
import Link from 'next/link';

export default function Output() {
  const projectCategories = [
    {
      id: 'basic-ml',
      title: '基础机器学习项目',
      icon: '🔬',
      description: '从简单算法开始，逐步理解原理',
      projects: [
        {
          name: '线性回归预测房价',
          description: '使用线性回归模型预测房价',
          tech: ['Python', 'scikit-learn', 'pandas', 'matplotlib'],
          difficulty: '初级',
          timeline: '2-3周'
        },
        {
          name: '支持向量机分类鸢尾花',
          description: '使用SVM进行多分类问题',
          tech: ['Python', 'scikit-learn', 'numpy', 'seaborn'],
          difficulty: '初级',
          timeline: '1-2周'
        },
        {
          name: 'K-means聚类客户分群',
          description: '客户行为分析和分群',
          tech: ['Python', 'scikit-learn', 'pandas', 'plotly'],
          difficulty: '初级',
          timeline: '2-3周'
        },
        {
          name: '决策树预测用户行为',
          description: '用户行为预测和决策分析',
          tech: ['Python', 'scikit-learn', 'pandas', 'graphviz'],
          difficulty: '初级',
          timeline: '2-3周'
        }
      ]
    },
    {
      id: 'data-analysis',
      title: '数据分析与可视化',
      icon: '📊',
      description: '提升数据处理和展示能力',
      projects: [
        {
          name: '电商数据分析仪表板',
          description: '构建交互式数据分析仪表板',
          tech: ['Python', 'Streamlit', 'pandas', 'plotly'],
          difficulty: '中级',
          timeline: '3-4周'
        },
        {
          name: '股票价格趋势分析',
          description: '股票数据分析和趋势预测',
          tech: ['Python', 'yfinance', 'pandas', 'matplotlib'],
          difficulty: '中级',
          timeline: '3-4周'
        },
        {
          name: '社交媒体情感分析',
          description: '文本情感分析和可视化',
          tech: ['Python', 'NLTK', 'TextBlob', 'wordcloud'],
          difficulty: '中级',
          timeline: '4-5周'
        },
        {
          name: '用户行为路径分析',
          description: '用户行为分析和路径优化',
          tech: ['Python', 'pandas', 'networkx', 'plotly'],
          difficulty: '中级',
          timeline: '4-5周'
        }
      ]
    },
    {
      id: 'ai-applications',
      title: 'AI应用开发',
      icon: '🤖',
      description: '构建实用的AI应用系统',
      projects: [
        {
          name: '智能邮件助手',
          description: '多步骤的邮件处理Agent',
          tech: ['Python', 'LangChain', 'OpenAI API', 'FastAPI'],
          difficulty: '高级',
          timeline: '6-8周'
        },
        {
          name: '市场调研Agent',
          description: '自动化市场分析和报告生成',
          tech: ['Python', 'AutoGen', 'web scraping', 'pandas'],
          difficulty: '高级',
          timeline: '8-10周'
        },
        {
          name: '内容复用Agent',
          description: '跨平台内容自动转换',
          tech: ['Python', 'CrewAI', 'social media APIs', 'NLP'],
          difficulty: '高级',
          timeline: '6-8周'
        },
        {
          name: '代码开发Agent',
          description: '智能代码审查和生成',
          tech: ['Python', 'LangChain', 'GitHub API', 'code analysis'],
          difficulty: '高级',
          timeline: '8-10周'
        }
      ]
    },
    {
      id: 'advanced-ai',
      title: '高级AI项目',
      icon: '🚀',
      description: '探索前沿AI技术应用',
      projects: [
        {
          name: '股票市场预测系统',
          description: '使用TimeGPT进行时间序列预测',
          tech: ['Python', 'TimeGPT', 'pandas', 'streamlit'],
          difficulty: '高级',
          timeline: '8-10周'
        },
        {
          name: '多语言语音识别',
          description: '构建自动语音识别模型',
          tech: ['Python', 'whisper', 'torch', 'gradio'],
          difficulty: '高级',
          timeline: '10-12周'
        },
        {
          name: '本地LLM应用部署',
          description: '微调Llama 3.2并本地部署',
          tech: ['Python', 'llama.cpp', 'transformers', 'docker'],
          difficulty: '专家',
          timeline: '12-16周'
        },
        {
          name: '企业知识库RAG系统',
          description: '构建企业级知识检索系统',
          tech: ['Python', 'Pinecone', 'LangChain', 'FastAPI'],
          difficulty: '专家',
          timeline: '10-12周'
        }
      ]
    }
  ];

  const projectResources = {
    title: '项目开发资源',
    description: '加速项目开发的工具和平台',
    resources: [
      {
        category: '开发环境',
        items: [
          'Jupyter Notebook / Google Colab',
          'VS Code / PyCharm',
          'Docker 容器化',
          'Git 版本控制'
        ]
      },
      {
        category: '数据平台',
        items: [
          'Kaggle 数据集',
          'Hugging Face 模型库',
          'UCI 机器学习仓库',
          'Google Dataset Search'
        ]
      },
      {
        category: '部署平台',
        items: [
          'Streamlit Cloud',
          'Hugging Face Spaces',
          'Heroku / Railway',
          'AWS / GCP / Azure'
        ]
      },
      {
        category: '监控工具',
        items: [
          'MLflow 实验跟踪',
          'Weights & Biases',
          'TensorBoard',
          'Grafana 监控'
        ]
      }
    ]
  };

  const projectTimeline = {
    title: '项目开发时间线',
    description: '从项目构思到部署的完整流程',
    phases: [
      {
        phase: '项目规划',
        duration: '1-2周',
        activities: [
          '需求分析和定义',
          '技术选型和架构设计',
          '数据收集和预处理',
          '项目计划制定'
        ]
      },
      {
        phase: '核心开发',
        duration: '4-8周',
        activities: [
          '模型开发和训练',
          '系统集成和测试',
          '性能优化和调优',
          '文档编写'
        ]
      },
      {
        phase: '部署上线',
        duration: '1-2周',
        activities: [
          '环境配置和部署',
          '监控和日志设置',
          '用户测试和反馈',
          '性能监控'
        ]
      },
      {
        phase: '迭代优化',
        duration: '持续',
        activities: [
          '用户反馈收集',
          '功能迭代开发',
          '性能持续优化',
          '社区维护'
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              实战项目
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              AI Agent 技术奥德赛实战项目库
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              从基础机器学习到高级AI Agent系统，完整的项目开发指南
            </p>
          </div>
        </div>
      </section>

      {/* 项目分类 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projectCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {project.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.difficulty === '初级' ? 'bg-green-100 text-green-800' :
                          project.difficulty === '中级' ? 'bg-yellow-100 text-yellow-800' :
                          project.difficulty === '高级' ? 'bg-orange-100 text-orange-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {project.difficulty}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {project.description}
                      </p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">技术栈</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                              <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            预计时间：{project.timeline}
                          </span>
                          <button className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded text-sm hover:from-blue-600 hover:to-purple-600 transition-all">
                            开始项目
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 开发资源 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {projectResources.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {projectResources.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {projectResources.resources.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 开发时间线 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {projectTimeline.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {projectTimeline.description}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {projectTimeline.phases.map((phase, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg mb-2">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {phase.phase}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    {phase.duration}
                  </p>
                </div>

                <div className="space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{activity}</span>
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
          <div className="text-center">
            <Link 
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              返回首页
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 