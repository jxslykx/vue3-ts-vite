export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('Views/HomePage/index.vue'), // 在vite.config.ts和tsconfig.json配置好路径别名Views
  },
  { path: '/home', redirect: '/' },
]
