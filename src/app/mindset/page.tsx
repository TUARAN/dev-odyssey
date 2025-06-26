'use client';

import React from 'react';
import Link from 'next/link';

export default function Mindset() {
  const coreFormula = {
    title: 'AI Agent 技术奥德赛核心理念',
    formula: 'AI Agent Developer = 技术纵深 × 系统创新 × 影响力构建',
    components: [
      {
        name: '技术纵深',
        description: 'Technical Depth',
        details: [
          'Python编程精通',
          '数学与统计基础',
          '机器学习核心概念',
          '数据处理与分析能力'
        ],
        icon: '🔬'
      },
      {
        name: '系统创新',
        description: 'System Innovation',
        details: [
          'Agentic架构理解',
          'LLM核心技术掌握',
          'AI Agent框架应用',
          '多Agent协作策略'
        ],
        icon: '🚀'
      },
      {
        name: '影响力构建',
        description: 'Influence Building',
        details: [
          '开源项目贡献',
          '技术写作与分享',
          '产品思维培养',
          '社区参与建设'
        ],
        icon: '🌟'
      }
    ]
  };

  const growthMindsets = [
    {
      title: 'AI Agent 思维模式',
      description: '从传统编程思维转向AI Agent开发思维',
      principles: [
        '理解AI Agent的自主性和智能性',
        '掌握Agent与环境的交互模式',
        '学会设计多Agent协作系统',
        '关注AI伦理和安全问题'
      ],
      practices: [
        '构建简单的Agent原型',
        '学习主流Agent框架',
        '参与开源Agent项目',
        '关注AI Agent前沿发展'
      ]
    },
    {
      title: '持续学习思维',
      description: 'AI技术发展迅速，保持持续学习的心态',
      principles: [
        '拥抱AI技术变革',
        '建立学习反馈循环',
        '跨领域知识整合',
        '保持技术敏感度'
      ],
      practices: [
        '每日AI技术阅读',
        '定期技能评估',
        '参与AI社区讨论',
        '尝试新技术项目'
      ]
    },
    {
      title: '系统化创新思维',
      description: '从整体角度设计AI Agent系统',
      principles: [
        '关注系统整体架构',
        '理解Agent间交互',
        '考虑长期可扩展性',
        '平衡性能与成本'
      ],
      practices: [
        '绘制Agent系统架构图',
        '分析系统瓶颈',
        '评估技术选型影响',
        '制定系统演进规划'
      ]
    },
    {
      title: '价值创造思维',
      description: '关注AI Agent如何创造实际商业价值',
      principles: [
        '以用户需求为导向',
        '关注商业应用场景',
        '优化资源利用效率',
        '创造可持续价值'
      ],
      practices: [
        '用户需求深度分析',
        'ROI 评估和优化',
        '性能监控和调优',
        '成本效益分析'
      ]
    }
  ];

  const dailyHabits = [
    {
      category: 'AI学习习惯',
      habits: [
        { name: 'AI技术阅读', time: '30分钟', frequency: '每日' },
        { name: 'Agent项目实践', time: '1小时', frequency: '每日' },
        { name: '知识整理', time: '20分钟', frequency: '每日' },
        { name: '技能评估', time: '1小时', frequency: '每周' }
      ]
    },
    {
      category: '技术输出习惯',
      habits: [
        { name: 'AI技术写作', time: '1小时', frequency: '每周3次' },
        { name: '开源Agent项目贡献', time: '2小时', frequency: '每周' },
        { name: '技术分享', time: '30分钟', frequency: '每周' },
        { name: 'AI社区互动', time: '30分钟', frequency: '每日' }
      ]
    },
    {
      category: '反思优化习惯',
      habits: [
        { name: '日总结', time: '10分钟', frequency: '每日' },
        { name: '周复盘', time: '1小时', frequency: '每周' },
        { name: '月规划', time: '2小时', frequency: '每月' },
        { name: '季度评估', time: '4小时', frequency: '每季度' }
      ]
    }
  ];

  const successPrinciples = [
    {
      title: 'AI技术复利',
      description: '持续学习AI技术会产生指数级增长',
      example: '每天学习AI技术1小时，一年后成为AI Agent专家'
    },
    {
      title: '项目驱动学习',
      description: '通过实际项目学习比理论学习更有效',
      example: '构建真实的Agent应用，在实践中掌握技术'
    },
    {
      title: '知识体系构建',
      description: '将AI知识与传统技术知识建立连接',
      example: '理解AI Agent如何与传统软件系统集成'
    },
    {
      title: '输出倒逼输入',
      description: '通过技术输出促进更深入的AI学习',
      example: '写AI技术文章时发现知识盲点'
    },
    {
      title: 'AI社区参与',
      description: '选择活跃的AI社区和优秀的AI开发者',
      example: '加入AI Agent开源项目，与专家交流'
    },
    {
      title: '长期技术投资',
      description: '关注AI Agent的长期发展趋势',
      example: '投资基础AI技能而非追逐短期热点'
    }
  ];

  const aiAgentTrends = [
    {
      title: '更强的自主性',
      description: 'AI Agent将具备更强的自主决策能力',
      impact: '需要掌握Agent自主性设计模式'
    },
    {
      title: '多Agent协作',
      description: '多个Agent协同工作将成为常态',
      impact: '需要学习多Agent系统架构设计'
    },
    {
      title: 'AI工具编排',
      description: 'Agent将成为AI工具的编排层',
      impact: '需要掌握工具集成和编排技术'
    },
    {
      title: '强化治理',
      description: 'AI安全和伦理将成为重要关注点',
      impact: '需要学习AI安全和治理最佳实践'
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
              成长思维
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              AI Agent 技术奥德赛成长思维模式
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              构建可持续的AI Agent开发思维，实现长期价值创造
            </p>
          </div>
        </div>
      </section>

      {/* Core Formula */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {coreFormula.title}
              </h2>
              <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {coreFormula.formula}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {coreFormula.components.map((component, index) => (
                <div key={index} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{component.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {component.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {component.description}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {component.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Growth Mindsets */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              核心成长思维
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              构建AI Agent开发者的思维模式
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {growthMindsets.map((mindset, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {mindset.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {mindset.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">核心原则</h4>
                    <div className="space-y-1">
                      {mindset.principles.map((principle, principleIndex) => (
                        <div key={principleIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{principle}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">实践方法</h4>
                    <div className="space-y-1">
                      {mindset.practices.map((practice, practiceIndex) => (
                        <div key={practiceIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{practice}</span>
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

      {/* Daily Habits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              每日习惯养成
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              建立可持续的AI Agent学习习惯
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dailyHabits.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.habits.map((habit, habitIndex) => (
                    <div key={habitIndex} className="bg-gray-50 dark:bg-slate-700 rounded-lg p-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">{habit.name}</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">{habit.time}</span>
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{habit.frequency}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Principles */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              成功原则
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              AI Agent开发者成长的关键原则
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {successPrinciples.map((principle, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {principle.description}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 italic">
                  {principle.example}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Trends */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              AI Agent 发展趋势
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              把握技术发展方向，提前布局未来
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiAgentTrends.map((trend, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {trend.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {trend.description}
                </p>
                <p className="text-xs text-orange-600 dark:text-orange-400">
                  {trend.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
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