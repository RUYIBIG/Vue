export default [
  {
    path: '/home',
    component: () => import('@/views/home/Index.vue'),
    children: [
      {
        path: 'detail',
        component: () => import('@/views/home/Detail.vue'),
        meta: {
          title: '详情',
        },
      },
    ],
  },
];
