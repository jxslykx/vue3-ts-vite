import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export async function routerBeforeEachFunc(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
  // 路由进入前的操作
  next()
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function routerAfterEachFunc(to: RouteLocationNormalized, from: RouteLocationNormalized) {
  // 路由进入后的操作
}
