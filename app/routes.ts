import {
  type RouteConfig,
  index,
  route,
  layout,
} from '@react-router/dev/routes';

export default [
  index('routes/landing.tsx'),

  route('auth/register', 'routes/auth/register.tsx'),
  route('auth/login', 'routes/auth/login.tsx'),
  route('auth/notify', 'routes/auth/notify.tsx'),
  route('auth/verify-auth', 'routes/auth/verify-auth.tsx'),

  layout('routes/app/layout.tsx', [
    route('app', 'routes/app/dashboard.tsx'),
    route('app/discussions', 'routes/app/discover.tsx'),
    route('app/profile', 'routes/app/profile.tsx'),
  ]),
] satisfies RouteConfig;
