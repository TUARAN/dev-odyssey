'use client';

import React from 'react';

export default function StudyPlan() {
  const studyPlan = [
    {
      year: '2025',
      quarters: [
        {
          quarter: 'Q1',
          title: '基础技能夯实',
          focus: '建立扎实的编程基础',
          topics: [
            'JavaScript 核心概念与 ES6+',
            'TypeScript 类型系统',
            'React 基础与 Hooks',
            'Node.js 与 Express',
            '数据库基础 (SQL + NoSQL)',
            'Git 版本控制'
          ],
          projects: ['个人博客系统', 'Todo 应用', 'API 开发练习'],
          timeAllocation: {
            '理论学习': '40%',
            '实践项目': '40%',
            '代码审查': '20%'
          }
        },
        {
          quarter: 'Q2',
          title: '前端工程化',
          focus: '提升前端开发效率与质量',
          topics: [
            '前端工程化工具链',
            'Webpack/Vite 构建工具',
            'CSS 预处理器与框架',
            '状态管理 (Redux/Zustand)',
            '测试驱动开发',
            '性能优化基础'
          ],
          projects: ['电商网站前端', '组件库开发', '性能优化实践'],
          timeAllocation: {
            '工具学习': '30%',
            '项目实践': '50%',
            '性能调优': '20%'
          }
        },
        {
          quarter: 'Q3',
          title: '后端架构设计',
          focus: '深入后端开发与系统设计',
          topics: [
            '微服务架构设计',
            'Docker 容器化',
            'Kubernetes 编排',
            '消息队列 (RabbitMQ/Kafka)',
            '缓存策略 (Redis)',
            'API 设计原则'
          ],
          projects: ['微服务电商系统', '分布式缓存', '消息队列应用'],
          timeAllocation: {
            '架构学习': '35%',
            '系统设计': '45%',
            '运维实践': '20%'
          }
        },
        {
          quarter: 'Q4',
          title: '云原生与 DevOps',
          focus: '掌握云原生技术与自动化运维',
          topics: [
            '云原生架构',
            'CI/CD 流水线',
            '监控与日志系统',
            '安全最佳实践',
            '自动化测试',
            '基础设施即代码'
          ],
          projects: ['云原生应用部署', '自动化流水线', '监控告警系统'],
          timeAllocation: {
            '云平台学习': '30%',
            'DevOps 实践': '50%',
            '安全加固': '20%'
          }
        }
      ]
    },
    {
      year: '2026',
      quarters: [
        {
          quarter: 'Q1',
          title: '高级架构模式',
          focus: '掌握企业级架构设计',
          topics: [
            'DDD 领域驱动设计',
            'CQRS 命令查询分离',
            '事件驱动架构',
            '分布式事务',
            '服务网格 (Istio)',
            '可观测性设计'
          ],
          projects: ['DDD 电商平台', '事件溯源系统', '分布式事务处理'],
          timeAllocation: {
            '架构模式': '40%',
            '复杂系统设计': '40%',
            '最佳实践': '20%'
          }
        },
        {
          quarter: 'Q2',
          title: 'AI 与机器学习',
          focus: '集成 AI 能力到应用开发',
          topics: [
            '机器学习基础',
            '深度学习框架',
            '自然语言处理',
            '计算机视觉',
            'AI 服务集成',
            '模型部署与优化'
          ],
          projects: ['智能推荐系统', 'NLP 应用', 'AI 辅助开发工具'],
          timeAllocation: {
            'AI 理论学习': '35%',
            'AI 应用开发': '45%',
            '模型优化': '20%'
          }
        },
        {
          quarter: 'Q3',
          title: '技术领导力',
          focus: '培养技术管理与团队协作能力',
          topics: [
            '技术团队管理',
            '代码审查最佳实践',
            '技术决策制定',
            '技术债务管理',
            '敏捷开发实践',
            '技术招聘与培养'
          ],
          projects: ['开源项目维护', '技术分享系列', '团队流程优化'],
          timeAllocation: {
            '管理技能': '30%',
            '团队协作': '40%',
            '知识分享': '30%'
          }
        },
        {
          quarter: 'Q4',
          title: '产品思维与商业',
          focus: '从技术视角理解产品与商业',
          topics: [
            '产品思维培养',
            '用户研究方法',
            '数据分析与洞察',
            '商业模式理解',
            '技术商业化',
            '创业思维'
          ],
          projects: ['产品原型设计', '数据分析报告', '技术商业化方案'],
          timeAllocation: {
            '产品学习': '35%',
            '数据分析': '35%',
            '商业实践': '30%'
          }
        }
      ]
    },
    {
      year: '2027',
      quarters: [
        {
          quarter: 'Q1-Q2',
          title: '技术影响力建设',
          focus: '建立个人技术品牌与影响力',
          topics: [
            '技术写作与分享',
            '开源项目贡献',
            '技术会议演讲',
            '技术社区建设',
            '技术布道',
            '行业标准制定'
          ],
          projects: ['技术博客系列', '开源项目维护', '技术大会演讲'],
          timeAllocation: {
            '内容创作': '40%',
            '社区建设': '35%',
            '影响力扩展': '25%'
          }
        },
        {
          quarter: 'Q3-Q4',
          title: '未来技术探索',
          focus: '探索前沿技术与创新方向',
          topics: [
            'Web3 与区块链',
            '量子计算基础',
            '边缘计算',
            '元宇宙技术',
            '可持续技术',
            '技术趋势分析'
          ],
          projects: ['Web3 应用开发', '前沿技术研究', '创新项目孵化'],
          timeAllocation: {
            '前沿技术': '50%',
            '创新实践': '30%',
            '趋势研究': '20%'
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            学习计划
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            2025-2027 按季度划分的详细学习路线图，从基础技能到技术影响力的完整成长路径
          </p>
        </div>

        {/* Study Plan Timeline */}
        <div className="space-y-16">
          {studyPlan.map((yearData, yearIndex) => (
            <div key={yearData.year} className="relative">
              {/* Year Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {yearData.year}
                </h2>
              </div>

              {/* Quarters Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {yearData.quarters.map((quarter, quarterIndex) => (
                  <div
                    key={quarter.quarter}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
                  >
                    {/* Quarter Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {quarter.quarter}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {quarter.title}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {quarter.focus}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        学习主题
                      </h4>
                      <div className="space-y-2">
                        {quarter.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        实践项目
                      </h4>
                      <div className="space-y-2">
                        {quarter.projects.map((project, projectIndex) => (
                          <div key={projectIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            <span className="text-sm text-gray-600 dark:text-gray-300">{project}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Allocation */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        时间分配
                      </h4>
                      <div className="space-y-2">
                        {Object.entries(quarter.timeAllocation).map(([category, percentage]) => (
                          <div key={category} className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-300">{category}</span>
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                              {percentage}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Rhythm */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            每周学习节奏
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <div className="grid md:grid-cols-7 gap-4">
              {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => (
                <div key={day} className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white mb-2">{day}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {index < 5 ? '理论学习 + 实践' : index === 5 ? '项目实践' : '总结复盘'}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {index < 5 ? '4-6小时' : index === 5 ? '6-8小时' : '2-3小时'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 