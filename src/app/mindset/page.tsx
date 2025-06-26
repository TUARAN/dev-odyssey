'use client';

import React from 'react';

export default function Mindset() {
  const coreFormula = {
    title: 'Dev Odyssey 核心理念',
    formula: 'Coding = Engineering Skills × System Thinking × Learning Speed × Content Leverage',
    components: [
      {
        name: 'Engineering Skills',
        description: '工程技能',
        details: [
          '扎实的编程基础',
          '架构设计能力',
          '代码质量意识',
          '技术选型能力'
        ],
        icon: '⚙️'
      },
      {
        name: 'System Thinking',
        description: '系统思维',
        details: [
          '整体性思考',
          '复杂性管理',
          '因果关系分析',
          '长期规划能力'
        ],
        icon: '🧠'
      },
      {
        name: 'Learning Speed',
        description: '学习速度',
        details: [
          '快速知识获取',
          '技能迁移能力',
          '持续学习习惯',
          '知识体系构建'
        ],
        icon: '🚀'
      },
      {
        name: 'Content Leverage',
        description: '内容杠杆',
        details: [
          '知识输出能力',
          '影响力建设',
          '价值创造',
          '网络效应'
        ],
        icon: '📈'
      }
    ]
  };

  const growthMindsets = [
    {
      title: '终身学习思维',
      description: '技术发展日新月异，保持持续学习的心态',
      principles: [
        '拥抱变化，适应新技术',
        '建立学习反馈循环',
        '跨领域知识整合',
        '保持好奇心与探索欲'
      ],
      practices: [
        '每日技术阅读',
        '定期技能评估',
        '参与技术社区',
        '尝试新技术项目'
      ]
    },
    {
      title: '系统思维模式',
      description: '从整体角度思考问题，理解系统间的相互关系',
      principles: [
        '关注整体而非局部',
        '理解因果关系',
        '考虑长期影响',
        '平衡多个目标'
      ],
      practices: [
        '绘制系统架构图',
        '分析技术债务',
        '评估技术决策影响',
        '制定长期技术规划'
      ]
    },
    {
      title: '价值创造思维',
      description: '关注技术如何创造实际价值，而非仅仅追求技术本身',
      principles: [
        '以用户价值为导向',
        '关注商业影响',
        '优化资源利用',
        '创造可持续价值'
      ],
      practices: [
        '用户需求分析',
        'ROI 评估',
        '性能优化',
        '成本效益分析'
      ]
    },
    {
      title: '协作共赢思维',
      description: '在团队中发挥最大价值，通过协作实现共赢',
      principles: [
        '主动分享知识',
        '支持团队成长',
        '建设性反馈',
        '共同承担责任'
      ],
      practices: [
        '代码审查',
        '技术分享',
        '文档编写',
        '新人指导'
      ]
    }
  ];

  const dailyHabits = [
    {
      category: '学习习惯',
      habits: [
        { name: '技术阅读', time: '30分钟', frequency: '每日' },
        { name: '代码练习', time: '1小时', frequency: '每日' },
        { name: '知识整理', time: '20分钟', frequency: '每日' },
        { name: '技能评估', time: '1小时', frequency: '每周' }
      ]
    },
    {
      category: '输出习惯',
      habits: [
        { name: '技术写作', time: '1小时', frequency: '每周3次' },
        { name: '开源贡献', time: '2小时', frequency: '每周' },
        { name: '技术分享', time: '30分钟', frequency: '每周' },
        { name: '社区互动', time: '30分钟', frequency: '每日' }
      ]
    },
    {
      category: '反思习惯',
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
      title: '复利效应',
      description: '持续的小进步会产生巨大的长期影响',
      example: '每天学习1小时，一年后技能水平显著提升'
    },
    {
      title: '刻意练习',
      description: '有针对性的练习比盲目练习更有效',
      example: '专注于薄弱环节，制定专项训练计划'
    },
    {
      title: '知识连接',
      description: '将新知识与已有知识建立连接',
      example: '用类比和比喻理解复杂概念'
    },
    {
      title: '输出倒逼输入',
      description: '通过输出促进更深入的学习',
      example: '写技术文章时发现知识盲点'
    },
    {
      title: '环境塑造',
      description: '选择有利于成长的环境和伙伴',
      example: '加入技术社区，与优秀开发者交流'
    },
    {
      title: '长期主义',
      description: '关注长期价值而非短期收益',
      example: '投资基础技能而非追逐热门技术'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            成长思维
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            构建可持续的技术成长思维模式，实现长期价值创造
          </p>
        </div>

        {/* Core Formula */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {coreFormula.title}
            </h2>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <p className="text-2xl font-bold mb-6">
                {coreFormula.formula}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFormula.components.map((component, index) => (
              <div key={index} className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
                <div className="text-3xl mb-4">{component.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {component.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {component.description}
                </p>
                <div className="space-y-2">
                  {component.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Mindsets */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            核心思维模式
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {growthMindsets.map((mindset, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {mindset.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {mindset.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    核心原则
                  </h4>
                  <div className="space-y-2">
                    {mindset.principles.map((principle, principleIndex) => (
                      <div key={principleIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    实践方法
                  </h4>
                  <div className="space-y-2">
                    {mindset.practices.map((practice, practiceIndex) => (
                      <div key={practiceIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{practice}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Habits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            日常习惯养成
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {dailyHabits.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.habits.map((habit, habitIndex) => (
                    <div key={habitIndex} className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {habit.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {habit.time} | {habit.frequency}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Principles */}
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            成功原则
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successPrinciples.map((principle, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {principle.description}
                </p>
                <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">示例：</span>
                    {principle.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mindset Quote */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              成长思维的核心
            </h3>
            <p className="text-xl mb-6">
              "技术能力决定下限，思维模式决定上限"
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-bold mb-2">持续学习</div>
                <div>保持好奇心，拥抱变化</div>
              </div>
              <div>
                <div className="font-bold mb-2">系统思考</div>
                <div>从整体角度解决问题</div>
              </div>
              <div>
                <div className="font-bold mb-2">价值创造</div>
                <div>关注实际价值而非技术本身</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 