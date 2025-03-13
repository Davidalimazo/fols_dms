import type { Route } from './+types/dms';
import DmsLayout from './dms/layout/DmsLayout';
import Members from './dms/Members';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'FOLS DMS' }, { name: 'description', content: 'FOLS DMS Home Page' }];
}

export default function ManageMembers() {
  return <DmsLayout children={<Members />} />;
}
