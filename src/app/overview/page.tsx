'use client';

import React from 'react';
import Link from 'next/link';

export default function Overview() {
  const roadmapData = [
    {
      phase: '阶段一：技术纵深突破',
      period: '底层系统 + AI原理 + 工程架构',
      icon: '🔬',
      color: 'from-blue-500 to-cyan-500',
      description: '建立扎实的AI Agent开发基础，掌握核心技术栈',
      skills: [
        {
          category: 'Python编程精通',
          items: ['基础语法、OOP、API调用', 'JSON处理、数据库交互', 'Web框架基础（Flask, FastAPI）']
        },
        {
          category: '数学与统计基础',
          items: ['线性代数：向量、矩阵、特征值', '微积分：导数、链式法则', '概率统计：贝叶斯思维、假设检验']
        },
        {
          category: '机器学习核心概念',
          items: ['监督学习：分类、回归', '无监督学习：聚类、降维', '神经网络、深度学习、强化学习']
        },
        {
          category: '数据处理与分析',
          items: ['数据清洗、缺失值处理', 'Pandas、NumPy数据操作', 'SQL大规模数据管理']
        },
        {
          category: '版本控制',
          items: ['Git基础操作', 'GitHub协作工作流', '开源项目贡献流程']
        }
      ],
      projects: [
        '线性回归预测房价',
        '支持向量机分类鸢尾花',
        'K-means聚类客户分群',
        '电商数据分析仪表板',
        '时间序列预测销售趋势'
      ],
      resources: [
        'Python官方文档和教程',
        'Deeplearning.ai基础课程',
        'DataCamp机器学习路径',
        'Coursera机器学习（吴恩达）'
      ]
    },
    {
      phase: '阶段二：系统化创新',
      period: '自主设计AI系统 + Agent平台 + SaaS',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500',
      description: '深入Agent架构，构建复杂的AI Agent系统',
      skills: [
        {
          category: 'Agentic架构理解',
          items: ['记忆系统：短期/长期记忆', '规划器：任务分解和策略', '执行器：动作执行和反馈']
        },
        {
          category: 'LLM核心技术',
          items: ['Transformer架构、注意力机制', 'Tokenization、Embeddings', '提示工程、指令微调']
        },
        {
          category: 'AI Agent框架应用',
          items: ['LangChain链式调用', 'AutoGen多Agent协作', 'CrewAI团队协作系统']
        },
        {
          category: '函数调用',
          items: ['LLM与外部工具连接', '自然语言到API转换', '参数验证和错误处理']
        },
        {
          category: '向量数据库与RAG',
          items: ['Pinecone、FAISS、Weaviate', 'RAG架构设计和实现', '文档分块和向量化']
        },
        {
          category: '多Agent协作策略',
          items: ['顺序、并行Agent架构', 'Agent间通信协议', '冲突解决和协调机制']
        },
        {
          category: '系统设计与部署',
          items: ['模块化设计原则', '可扩展性架构', '生产环境监控和优化']
        }
      ],
      projects: [
        '智能邮件助手Agent',
        '市场调研Agent',
        '内容复用Agent',
        '代码开发Agent',
        '股票市场预测系统',
        '多语言语音识别',
        '本地LLM应用部署'
      ],
      resources: [
        'Agentic AI Developer™认证课程',
        'LangChain官方文档和教程',
        'AutoGen多Agent协作指南',
        'Transformer架构详解',
        'RAG系统设计指南'
      ]
    },
    {
      phase: '阶段三：技术品牌与影响力',
      period: '开源 + 博客 + 课程 + 产品',
      icon: '🌟',
      color: 'from-orange-500 to-red-500',
      description: '超越个人能力提升，将影响力扩展到更广阔的社区和行业',
      skills: [
        {
          category: '沟通与协作',
          items: ['技术概念通俗化表达', '跨部门沟通技巧', '团队协作和项目管理']
        },
        {
          category: '技术写作与分享',
          items: ['技术博客写作技巧', '技术文章结构设计', '知识分享平台运营']
        },
        {
          category: '产品思维',
          items: ['用户需求分析和挖掘', '产品定位和市场分析', '商业模式设计']
        },
        {
          category: '社区参与',
          items: ['开源项目贡献', '技术社区活跃参与', '行业影响力建设']
        }
      ],
      projects: [
        'Open Interpreter项目贡献',
        'OWL框架改进和优化',
        '智能客服Agent SaaS',
        '内容创作助手平台',
        'AI Agent开发实战课程',
        '技术博客系列文章',
        '技术大会主题演讲'
      ],
      resources: [
        '技术博客写作指南',
        '产品经理实战课程',
        '开源项目维护指南',
        '技术社区运营策略',
        '个人品牌塑造'
      ]
    }
  ];

  const futureTrends = [
    {
      title: '更强的自主性',
      description: '复杂任务处理能力，24/7自主企业',
      icon: '🤖',
      details: [
        '到2030年代，AI Agent有望变得无处不在',
        '能够管理整个业务功能',
        '催生"24/7自主企业"',
        '更高级的上下文推理能力',
        '更强的边缘情况处理能力'
      ]
    },
    {
      title: '多Agent协同',
      description: '蜂群智能，动态协调策略',
      icon: '🐝',
      details: [
        'Agent集体智能的突破',
        '物流、医疗、制造、金融领域应用',
        'Agent集群精密协调',
        '动态调整策略',
        '提升系统弹性和自愈能力'
      ]
    },
    {
      title: 'AI工具编排',
      description: '中央枢纽，管理AI生态系统',
      icon: '🔧',
      details: [
        'AI Agent作为编排层',
        '管理和协调各种专业化AI系统',
        '贯穿整个软件开发生命周期',
        '连接不同AI能力和外部世界',
        '成为"中央枢纽"'
      ]
    },
    {
      title: '强化治理',
      description: '伦理安全，负责任AI开发',
      icon: '🛡️',
      details: [
        '更强大的防护措施',
        '审计追踪能力',
        '粒度访问控制',
        '更智能的风险管理策略',
        '符合法规和道德标准'
      ]
    }
  ];

  const actionAdvice = [
    {
      category: '技能构建',
      items: [
        '持续深化AI/LLM基础',
        '精通Agent框架与工具',
        '强化工程实践',
        '关注安全与伦理',
        '培养软技能'
      ]
    },
    {
      category: '项目实践',
      items: [
        '从实际问题出发',
        '从小处着手，迭代构建',
        '积极参与开源',
        '选择真实世界痛点'
      ]
    },
    {
      category: '技术输出',
      items: [
        '分享知识',
        '社区交流',
        '构建个人品牌',
        '持续技术输出'
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
              详细概览
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              AI Agent 技术奥德赛完整路线图
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              从技术纵深突破到系统化创新，再到影响力构建的完整成长路径
            </p>
          </div>
        </div>
      </section>

      {/* 路线图总览 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              三阶段成长路线图
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              循序渐进，螺旋上升的AI Agent开发者成长路径
            </p>
          </div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
                {/* 阶段标题 */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-white text-2xl mr-4`}>
                    {phase.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {phase.phase}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {phase.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  {phase.description}
                </p>

                {/* 技能矩阵 */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      核心技能
                    </h4>
                    <div className="space-y-4">
                      {phase.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                          <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                            {skill.category}
                          </h5>
                          <ul className="space-y-1">
                            {skill.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                      实战项目
                    </h4>
                    <div className="space-y-2">
                      {phase.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 mt-6">
                      学习资源
                    </h4>
                    <div className="space-y-2">
                      {phase.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{resource}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 导航链接 */}
                <div className="text-center">
                  <Link 
                    href={`/phase${index + 1}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all"
                  >
                    查看详细内容 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 未来趋势 */}
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
            {futureTrends.map((trend, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <div className="text-3xl mb-3">{trend.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{trend.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{trend.description}</p>
                <div className="space-y-2">
                  {trend.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 行动建议 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              开发者行动建议
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              面对AI Agent浪潮，如何积极调整策略，构建核心竞争力
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {actionAdvice.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{item}</span>
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