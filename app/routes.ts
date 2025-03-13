import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/dms.tsx'),
  route('home', 'routes/home.tsx'),
  route('members', 'routes/members.tsx'),
  route('followup', 'routes/followup.tsx'),
  route('generate-report', 'routes/generate-report.tsx'),
] satisfies RouteConfig;
