import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// 去中心化
const router = new Router({
  routes: ((r) => {
    const routes = [];
    // eslint-disable-next-line
    r.keys().map((key) => {
      const routers = r(key).default;
      routers.filter(item => routes.push(item));
    });
    return routes;
  })(require.context('./views/', true, /router\.js$/)),
});

// 全局钩子函数
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
