export abstract class ApiRoutes {
  static login = '/login';
  static register = '/register';
  static registerFollowUp = '/follow-up/register';
  static allUsers = '/admin/allUsers';
  static allFollowUpData = '/follow-up/admin/all';
  static removeMember = ({ id }: { id: number }) => `/admin/userDelete/${id}`;
  static removeAFollowUpData = ({ id }: { id: number }) => `/follow-up/admin/delete/${id}`;
}
