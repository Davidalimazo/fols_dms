import type { Route } from './+types/dms';
import FollowUp from './dms/FollowUp';
import DmsLayout from './dms/layout/DmsLayout';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'FOLS DMS' }, { name: 'description', content: 'FOLS DMS Home Page' }];
}

export default function ManageFollowUp() {
  return <DmsLayout children={<FollowUp />} />;
}
