import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  ChevronRight,
  CloudCog,
  Cpu,
  Database,
  Gauge,
  Globe2,
  Handshake,
  Headset,
  Layers3,
  Network,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Workflow
} from 'lucide-react';

export const navItems = [
  { label: '首页', href: '#home' },
  { label: '产品与解决方案', href: '#solutions' },
  { label: '技术创新', href: '#technology' },
  { label: '关于企业', href: '#enterprise' },
  { label: '联系我们', href: '#contact' }
];

export const technologyItems = [
  {
    title: 'AI 算法工程',
    label: 'Applied Intelligence',
    text: '围绕视觉识别、预测分析和自主决策构建可落地的行业模型。',
    value: '38%'
  },
  {
    title: '边缘计算架构',
    label: 'Edge Computing',
    text: '将低延迟计算能力部署到现场设备，减少云端依赖并提升实时响应。',
    value: '8ms'
  },
  {
    title: '数字孪生系统',
    label: 'Digital Twin',
    text: '连接设备、数据和业务流程，为复杂场景提供可观测、可推演的运营视图。',
    value: '24/7'
  }
];

export const solutionCards = [
  {
    id: 'smart-hardware',
    title: '智能硬件',
    kicker: 'Edge Intelligence',
    summary: '高性能、低功耗的智能终端设备与模组',
    icon: Cpu,
    visual: 'chip',
    accent: '#3f7cff',
    details: {
      title: '面向产业现场的下一代智能硬件',
      subtitle: '从感知、计算到安全连接，构建可量产、可维护、可扩展的硬件底座。',
      metrics: [
        ['12 TOPS', '边缘算力'],
        ['-20~70C', '工业温域'],
        ['99.95%', '稳定运行'],
        ['8ms', '端侧响应']
      ],
      features: [
        { title: '边缘 AI 模组', text: '支持视觉检测、设备预测维护、数据预处理和本地推理。', icon: BrainCircuit },
        { title: '工业级连接', text: '兼容 5G、Wi-Fi 7、BLE Mesh 与主流现场总线协议。', icon: RadioTower },
        { title: '安全芯片架构', text: '硬件级密钥存储、启动校验和 OTA 签名校验。', icon: ShieldCheck },
        { title: '开放 SDK', text: '提供设备管理、模型部署、日志追踪和远程诊断能力。', icon: Workflow }
      ],
      scenario: ['智慧工厂产线', '能源设备监测', '楼宇自动化', '车路协同终端']
    }
  },
  {
    id: 'software-platform',
    title: '软件平台',
    kicker: 'Digital OS',
    summary: '稳定可靠的企业级软件平台与工具链',
    icon: Layers3,
    visual: 'platform',
    accent: '#6aa8ff',
    details: {
      title: '构建企业级数字化运营平台',
      subtitle: '以统一数据底座、低代码工具链和开放 API，帮助企业快速搭建稳定、安全、可扩展的业务系统。',
      metrics: [
        ['99.99%', '平台可用性'],
        ['300+', '开放接口'],
        ['40%', '交付提效'],
        ['7x24', '运行监控']
      ],
      features: [
        { title: '统一数据中台', text: '整合业务、设备与用户数据，形成可分析、可治理的数据资产。', icon: Database },
        { title: '低代码编排', text: '通过流程、表单和看板配置，缩短业务应用搭建周期。', icon: Workflow },
        { title: '权限与审计', text: '支持角色权限、操作审计、访问策略和企业级合规管理。', icon: ShieldCheck },
        { title: '开放集成体系', text: '连接 ERP、MES、CRM 与第三方服务，减少系统孤岛。', icon: Network }
      ],
      scenario: ['企业运营门户', '生产管理系统', '数据分析驾驶舱', '跨系统流程协同']
    }
  },
  {
    id: 'cloud-service',
    title: '云服务',
    kicker: 'Cloud Native',
    summary: '安全、弹性、可扩展的云计算与数据服务',
    icon: CloudCog,
    visual: 'cloud',
    accent: '#4d8dff',
    details: {
      title: '安全弹性的云原生服务体系',
      subtitle: '覆盖计算、存储、网络、数据与安全能力，为企业提供稳定可扩展的云端基础设施。',
      metrics: [
        ['60s', '弹性扩容'],
        ['3AZ', '高可用架构'],
        ['PB级', '数据存储'],
        ['99.9%', '服务 SLA']
      ],
      features: [
        { title: '弹性计算资源', text: '按需分配计算、容器和任务资源，灵活应对业务峰值。', icon: CloudCog },
        { title: '数据备份恢复', text: '提供多副本备份、容灾切换和关键数据恢复策略。', icon: Database },
        { title: '云端安全防护', text: '内置访问控制、链路加密、攻击防护和安全基线巡检。', icon: ShieldCheck },
        { title: '全球网络加速', text: '通过智能路由和边缘节点提升跨区域访问体验。', icon: Globe2 }
      ],
      scenario: ['混合云部署', '数据湖与分析', '业务系统上云', '全球化服务交付']
    }
  }
];

export const stats = [
  ['2012年', '公司成立'],
  ['1000+', '全球员工'],
  ['50+', '业务覆盖国家'],
  ['2000+', '服务客户']
];

export const news = [
  {
    title: 'NovaTech 发布新一代智能物联网平台',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '与全球合作伙伴共建 AI 生态新未来',
    date: '2026-05-08',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: '助力智慧城市数字化转型',
    date: '2026-04-28',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80'
  }
];

export const partners = ['HUAWEI', 'aws', 'Microsoft', 'NVIDIA', 'intel', 'SAP', 'Tencent 腾讯'];

export const footerColumns = [
  ['产品与解决方案', '智能硬件', '软件平台', '云服务', '人工智能', '行业解决方案'],
  ['技术创新', '研发实力', '技术成果', '专利与标准', '创新实验室'],
  ['关于我们', '公司简介', '发展历程', '企业文化', '管理团队', '社会责任'],
  ['支持与服务', '帮助中心', '文档中心', '服务支持', '合作伙伴', '下载中心']
];

export const IconMap = {
  ArrowRight,
  Bot,
  Building2,
  ChevronRight,
  Database,
  Gauge,
  Globe2,
  Handshake,
  Headset,
  Network,
  Sparkles
};
