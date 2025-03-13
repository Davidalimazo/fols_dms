import type { Route } from './+types/dms';
import DmsLandingPage from './dms/DmsLandingPage';
import DmsLayout from './dms/layout/DmsLayout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'FOLS DMS' }, { name: 'description', content: 'FOLS DMS Home Page' }];
}

export default function Dms() {
  return <DmsLayout children={<DmsLandingPage />} />;
}
