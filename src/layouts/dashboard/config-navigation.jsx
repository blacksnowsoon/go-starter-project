import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('diagram'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not-found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
  {
    title: 'settings',
    children: [
      {
        title: 'basic-info',
        path: '/basic-info',
        icon: icon('ic_setting')
      },
      {
        title: 'vars-and-const',
        path: '/vars',
        icon: icon('')
      }
    ]
  }
];

export default navConfig;
