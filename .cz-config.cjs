module.exports = {
  // 可选类型
  types: [
    {
      value: 'feat',
      name: 'feat: 新特性',
    },
    {
      value: 'fix',
      name: 'fix: 修复Bug',
    },
    {
      value: 'docs',
      name: 'docs: 文档/注释调整',
    },
    {
      value: 'style',
      name: 'style: 代码格式(不影响代码逻辑)',
    },
    {
      value: 'refactor',
      name: 'refactor: 重构看着不爽的代码 (没有新特性，也没改bug)',
    },
    {
      value: 'perf',
      name: 'perf: 性能优化',
    },
    {
      value: 'test',
      name: 'test: 测试',
    },
    {
      value: 'chore',
      name: 'chore: 构建或脚手架工具的调整',
    },
    {
      value: 'revert',
      name: 'revert: 代码回退',
    },
    {
      value: 'build',
      name: 'build: 打包配置的调整',
    },
  ],

  // 步骤提示
  messages: {
    type: '提交类型：',
    customScope: '变动的范围(可选)',
    subject: '简要描述',
    body: '详细描述',
    footer: '要关闭的issus(可选)',
    confirmCommit: '确认要使用以上信息提交？(y/n)',
  },
  // 允许自定义变动范围
  allowCustomScopes: false,
  // 跳过一些问题（基于项目需要做调整，比如我们不太需要把变动范围放进提交描述里，且只需要简述就行）
  skipQuestions: ['scope', 'body', 'footer'],
  // 默认长度72
  subjectLimit: 72,
}
