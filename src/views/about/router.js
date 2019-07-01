export default [
  {
    path: '/about',
    component: () => import('@/views/about/Index.vue'),
    children: [
      {
        path: 'detail',
        component: () => import('@/views/about/Detail.vue'),
        meta: {
          title: '详情',
        },
      },
    ],
  },
];
