import CommonLayout from '../layout/index';
import Login from '../views/login';
import Table from '../views/table';
import Form from '../views/form';
import NotFoundPage from '../views/errorPage/404';
import IndexPage from '../views/index';

const routes = [
  { path: '/404', component: NotFoundPage, hidden: true },
  {
    path: '/login',
    name: 'login',
    component: Login,
    hidden: true,
  },
  {
    path: '/',
    component: CommonLayout,
    redirect: '/index',
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: '首页',
        meta: { auth: true },
        component: IndexPage,
      },
    ],
  },
  {
    path: '/table',
    redirect: '/table/index',
    component: CommonLayout,
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: '表格',
        meta: { auth: true },
        component: Table,
      },
    ],
  },
  {
    path: '/form',
    redirect: '/form/index',
    component: CommonLayout,
    noDropdown: true,
    children: [
      {
        path: 'index',
        name: '表单',
        meta: { auth: true },
        component: Form,
      },
    ],
  },
  { path: '*', redirect: '/404', hidden: true },
];

export default routes;
