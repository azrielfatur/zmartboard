
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },
  {
    path: '/',
    component: () => import('layouts/ZmartLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Dashboard.vue') },
      { path: '/alert', component: () => import('pages/Components/Alert.vue') },
      { path: '/button', component: () => import('pages/Components/Button.vue') },
      { path: '/forms/input', component: () => import('pages/Forms/Input.vue') },
      { path: '/forms/select', component: () => import('pages/Forms/Select.vue') },
      { path: '/forms/radio', component: () => import('pages/Forms/Radio.vue') },
      { path: '/forms/checkbox', component: () => import('pages/Forms/Checkbox.vue') },
      { path: '/forms/form', component: () => import('pages/Forms/Form.vue') },
      { path: '/tables', component: () => import('pages/Tables.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
