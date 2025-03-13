import type { Route } from './+types/dms';
import GenerateReport from './dms/GenerateReport';
import DmsLayout from './dms/layout/DmsLayout';
import Members from './dms/Members';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'FOLS DMS' }, { name: 'description', content: 'FOLS DMS Home Page' }];
}

export default function GenerateReportPage() {
  return <DmsLayout children={<GenerateReport />} />;
}
