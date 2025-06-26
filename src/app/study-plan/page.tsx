'use client';

import React from 'react';
import Link from 'next/link';

export default function StudyPlan() {
  const studyPlan = [
    {
      year: '2025',
      quarters: [
        {
          quarter: 'Q1',
          title: 'Python编程基础',
          focus: '建立扎实的Python编程基础',
          topics: [
            'Python基础语法与数据结构',
            '面向对象编程（OOP）',
            '函数式编程概念',
            '异常处理与调试',
            '模块与包管理',
            '虚拟环境管理'
          ],
          projects: ['命令行工具开发', '数据处理脚本', 'Web爬虫'],
          timeAllocation: {
            '理论学习': '40%',
            '实践项目': '40%',
            '代码审查': '20%'
          }
        },
        {
          quarter: 'Q2',
          title: '数学与统计基础',
          focus: '掌握AI开发必需的数学基础',
          topics: [
            '线性代数：向量、矩阵运算',
            '微积分：导数、链式法则',
            '概率统计：贝叶斯思维',
            '优化算法：梯度下降',
            '数值计算基础',
            '统计推断方法'
          ],
          projects: ['数学计算库使用', '统计数据分析', '优化算法实现'],
          timeAllocation: {
            '数学学习': '50%',
            '编程实践': '30%',
            '项目应用': '20%'
          }
        },
        {
          quarter: 'Q3',
          title: '机器学习基础',
          focus: '深入理解机器学习核心概念',
          topics: [
            '监督学习：分类与回归',
            '无监督学习：聚类与降维',
            '模型评估与选择',
            '特征工程',
            '过拟合与正则化',
            '交叉验证'
          ],
          projects: ['房价预测模型', '客户分群分析', '推荐系统基础'],
          timeAllocation: {
            '理论学习': '35%',
            '算法实现': '45%',
            '项目实践': '20%'
          }
        },
        {
          quarter: 'Q4',
          title: '深度学习入门',
          focus: '掌握神经网络和深度学习',
          topics: [
            '神经网络基础',
            '反向传播算法',
            '卷积神经网络（CNN）',
            '循环神经网络（RNN）',
            '深度学习框架（PyTorch/TensorFlow）',
            '模型训练技巧'
          ],
          projects: ['图像分类模型', '文本分类系统', '时间序列预测'],
          timeAllocation: {
            '理论学习': '30%',
            '框架学习': '40%',
            '项目实践': '30%'
          }
        }
      ]
    },
    {
      year: '2026',
      quarters: [
        {
          quarter: 'Q1',
          title: 'LLM核心技术',
          focus: '深入理解大型语言模型',
          topics: [
            'Transformer架构详解',
            '注意力机制与多头注意力',
            'Tokenization与编码',
            'Embeddings与向量表示',
            '上下文窗口管理',
            '提示工程（Prompt Engineering）'
          ],
          projects: ['简单LLM应用', '提示工程实验', '文本生成系统'],
          timeAllocation: {
            '架构学习': '40%',
            'API实践': '40%',
            '项目开发': '20%'
          }
        },
        {
          quarter: 'Q2',
          title: 'AI Agent框架',
          focus: '掌握主流Agent开发框架',
          topics: [
            'LangChain基础与链式调用',
            'AutoGen多Agent协作',
            'CrewAI团队协作系统',
            'LangGraph工作流编排',
            'LlamaIndex知识库',
            '函数调用（Function Calling）'
          ],
          projects: ['智能助手Agent', '多Agent协作系统', '知识问答系统'],
          timeAllocation: {
            '框架学习': '35%',
            '项目实践': '45%',
            '优化调试': '20%'
          }
        },
        {
          quarter: 'Q3',
          title: 'RAG与向量数据库',
          focus: '构建知识检索和增强系统',
          topics: [
            '向量数据库原理',
            'Pinecone、FAISS、Weaviate使用',
            'RAG架构设计',
            '文档分块策略',
            '相似度搜索算法',
            '知识库更新机制'
          ],
          projects: ['企业知识库系统', '智能客服RAG', '文档检索系统'],
          timeAllocation: {
            '理论学习': '30%',
            '数据库实践': '40%',
            '系统集成': '30%'
          }
        },
        {
          quarter: 'Q4',
          title: '多Agent系统设计',
          focus: '设计和构建复杂的多Agent系统',
          topics: [
            '多Agent架构模式',
            'Agent间通信协议',
            '任务分解与分配',
            '冲突解决机制',
            '系统监控与调试',
            '性能优化策略'
          ],
          projects: ['智能工作流系统', '多Agent协作平台', '复杂任务处理系统'],
          timeAllocation: {
            '架构设计': '35%',
            '系统开发': '45%',
            '测试优化': '20%'
          }
        }
      ]
    },
    {
      year: '2027',
      quarters: [
        {
          quarter: 'Q1',
          title: '生产级系统部署',
          focus: '构建和部署生产级AI Agent系统',
          topics: [
            '系统架构设计',
            '微服务与容器化',
            '云平台部署（AWS/Azure/GCP）',
            '监控与日志系统',
            '安全与隐私保护',
            '性能优化与扩展'
          ],
          projects: ['SaaS平台开发', '企业级Agent系统', '云原生应用'],
          timeAllocation: {
            '架构设计': '30%',
            '系统开发': '50%',
            '部署运维': '20%'
          }
        },
        {
          quarter: 'Q2',
          title: '开源贡献与社区',
          focus: '参与开源项目，建立技术影响力',
          topics: [
            '开源项目贡献流程',
            '代码审查与协作',
            '技术文档编写',
            '社区建设与维护',
            '技术分享与演讲',
            '开源项目维护'
          ],
          projects: ['开源项目贡献', '技术博客系列', '社区活动组织'],
          timeAllocation: {
            '开源贡献': '40%',
            '内容创作': '35%',
            '社区建设': '25%'
          }
        },
        {
          quarter: 'Q3',
          title: '产品思维与商业化',
          focus: '将技术转化为商业价值',
          topics: [
            '产品思维培养',
            '用户需求分析',
            '商业模式设计',
            '市场分析与定位',
            '技术商业化策略',
            '创业思维与方法'
          ],
          projects: ['AI产品原型', '商业计划书', 'MVP开发'],
          timeAllocation: {
            '产品学习': '35%',
            '市场研究': '35%',
            '产品开发': '30%'
          }
        },
        {
          quarter: 'Q4',
          title: '技术领导力与影响力',
          focus: '建立技术领导力和行业影响力',
          topics: [
            '技术团队管理',
            '技术决策制定',
            '技术布道与传播',
            '行业标准参与',
            '技术投资与咨询',
            '人才培养与指导'
          ],
          projects: ['技术团队建设', '行业报告编写', '技术大会组织'],
          timeAllocation: {
            '管理实践': '30%',
            '影响力建设': '40%',
            '知识输出': '30%'
          }
        }
      ]
    }
  ];

  const learningResources = [
    {
      category: '在线课程',
      resources: [
        'Deeplearning.ai - AI/ML基础课程',
        'Coursera - 机器学习（吴恩达）',
        'DataCamp - Python数据科学路径',
        'Fast.ai - 深度学习实战',
        'LangChain官方教程'
      ]
    },
    {
      category: '书籍推荐',
      resources: [
        '《Python编程：从入门到实践》',
        '《统计学习方法》（李航）',
        '《深度学习》（花书）',
        '《Transformers for Natural Language Processing》',
        '《Building LLM Applications》'
      ]
    },
    {
      category: '实践平台',
      resources: [
        'Kaggle - 数据科学竞赛',
        'Hugging Face - 模型和数据集',
        'GitHub - 开源项目贡献',
        'Colab - 免费GPU训练',
        'Streamlit - 快速应用部署'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              学习计划
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              AI Agent 技术奥德赛详细学习路径
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              2025-2027年，从Python基础到AI Agent专家的完整学习计划
            </p>
          </div>
        </div>
      </section>

      {/* 学习计划 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {studyPlan.map((year, yearIndex) => (
              <div key={yearIndex} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  {year.year} 年学习计划
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {year.quarters.map((quarter, quarterIndex) => (
                    <div key={quarterIndex} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-lg mb-2">
                          {quarter.quarter}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {quarter.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {quarter.focus}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">学习主题</h4>
                          <ul className="space-y-1">
                            {quarter.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">实践项目</h4>
                          <ul className="space-y-1">
                            {quarter.projects.map((project, projectIndex) => (
                              <li key={projectIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">时间分配</h4>
                          <div className="space-y-1">
                            {Object.entries(quarter.timeAllocation).map(([key, value], allocationIndex) => (
                              <div key={allocationIndex} className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">{key}</span>
                                <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                              </div>
                            ))}
                          </div>
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

      {/* 学习资源 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              推荐学习资源
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