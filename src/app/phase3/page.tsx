'use client';

import React from 'react';
import Link from 'next/link';

export default function Phase3() {
  const coreSkills = [
    {
      title: '沟通与协作',
      description: '作为开发者，不仅要掌握技术，还要能清晰地向非技术人员解释复杂的AI概念',
      details: [
        '技术概念通俗化表达',
        '跨部门沟通技巧',
        '团队协作和项目管理',
        '客户需求理解和转化',
        '技术方案演示和说服'
      ],
      icon: '💬'
    },
    {
      title: '技术写作与分享',
      description: '撰写高质量的技术博客、文章，分享学习经验和项目实践',
      details: [
        '技术博客写作技巧',
        '技术文章结构设计',
        '代码示例和案例分析',
        '技术趋势解读和预测',
        '知识分享平台运营'
      ],
      icon: '✍️'
    },
    {
      title: '产品思维',
      description: '从用户需求出发，思考如何将AI Agent技术转化为有价值的产品',
      details: [
        '用户需求分析和挖掘',
        '产品定位和市场分析',
        'MVP设计和快速验证',
        '用户体验优化',
        '商业模式设计'
      ],
      icon: '🎯'
    },
    {
      title: '社区参与',
      description: '积极参与AI社区讨论，贡献代码，回答问题，建立专业声誉',
      details: [
        '开源项目贡献',
        '技术社区活跃参与',
        '技术会议和研讨会',
        '导师和指导他人',
        '行业影响力建设'
      ],
      icon: '🌐'
    }
  ];

  const practicalProjects = [
    {
      title: '开源贡献',
      description: '积极参与AI Agent开源项目，提升社区声誉',
      projects: [
        'Open Interpreter项目贡献',
        'OWL框架改进和优化',
        'Open WebUI MCP插件开发',
        'LangChain生态系统贡献',
        '文档改进和翻译'
      ]
    },
    {
      title: '个人产品/SaaS',
      description: '开发并发布自己的AI Agent驱动的SaaS工具',
      projects: [
        '智能客服Agent SaaS',
        '内容创作助手平台',
        '数据分析Agent工具',
        '代码审查AI助手',
        '个人知识管理Agent'
      ]
    },
    {
      title: '知识输出',
      description: '将学习和实践经验整理成在线课程和技术讲座',
      projects: [
        'AI Agent开发实战课程',
        '技术博客系列文章',
        'YouTube技术频道',
        '技术播客节目',
        '线下技术分享会'
      ]
    }
  ];

  const influenceBuilding = [
    {
      title: '技术布道',
      description: '成为AI Agent技术的传播者和推广者',
      activities: [
        '技术大会主题演讲',
        '企业内部分享和培训',
        '行业报告和技术白皮书',
        '媒体采访和专家观点',
        '技术书籍编写'
      ]
    },
    {
      title: '行业影响力',
      description: '在AI Agent领域建立专业权威',
      activities: [
        '技术标准制定参与',
        '行业组织成员和领导',
        '技术评审和专家咨询',
        '创业公司技术顾问',
        '投资机构技术评估'
      ]
    },
    {
      title: '人才培养',
      description: '培养下一代AI Agent开发者',
      activities: [
        '大学客座讲师',
        '在线教育平台导师',
        '企业技术培训师',
        '开源项目维护者',
        '技术社区领袖'
      ]
    }
  ];

  const learningResources = [
    {
      category: '技术写作',
      resources: [
        '技术博客写作指南',
        'Medium、掘金等平台运营',
        '技术文档编写规范',
        '内容营销策略',
        'SEO优化技巧'
      ]
    },
    {
      category: '产品思维',
      resources: [
        '产品经理实战课程',
        '用户研究方法论',
        '商业模式画布',
        '精益创业方法论',
        '用户体验设计'
      ]
    },
    {
      category: '社区建设',
      resources: [
        '开源项目维护指南',
        '技术社区运营策略',
        '会议演讲技巧',
        '网络影响力建设',
        '个人品牌塑造'
      ]
    }
  ];

  const successMetrics = [
    {
      metric: '技术影响力',
      indicators: [
        'GitHub Star数 > 1000',
        '技术文章阅读量 > 10万',
        '技术大会演讲次数 > 10次',
        '被引用和推荐次数 > 100次'
      ]
    },
    {
      metric: '商业价值',
      indicators: [
        'SaaS产品月收入 > $10K',
        '技术咨询收入 > $50K/年',
        '课程和培训收入 > $20K/年',
        '投资和合作机会 > 5个'
      ]
    },
    {
      metric: '行业地位',
      indicators: [
        '技术专家认证',
        '行业组织成员身份',
        '媒体采访和报道',
        '技术标准制定参与'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-6">
              <span className="text-3xl">🌟</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
              阶段三：技术品牌与影响力
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              开源 + 博客 + 课程 + 产品
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              超越个人能力的提升，将影响力扩展到更广阔的社区和行业，成为趋势的创造者
            </p>
          </div>
        </div>
      </section>

      {/* 核心技能 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              核心软技能
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              技术之外，建立影响力的关键能力
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
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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
              从技术输出到商业价值，全方位建立影响力
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

      {/* 影响力建设 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              影响力建设路径
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              从技术专家到行业领袖的成长路径
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {influenceBuilding.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {category.description}
                </p>
                <div className="space-y-2">
                  {category.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成功指标 */}
      <section className="py-16 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              成功指标
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              衡量影响力建设效果的关键指标
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {metric.metric}
                </h3>
                <div className="space-y-3">
                  {metric.indicators.map((indicator, indicatorIndex) => (
                    <div key={indicatorIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{indicator}</span>
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
              提升软技能，建立个人品牌
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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
              href="/phase2"
              className="bg-gray-100 dark:bg-slate-700 rounded-lg px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors"
            >
              ← 上一阶段：系统化创新
            </Link>
            <Link 
              href="/"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg px-6 py-3 hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              返回首页 →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 