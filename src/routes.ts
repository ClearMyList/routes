import { NotificationRouteType } from './type/notification.type';
import { UserRouteType } from './type/user.type';

export class ApiRoute {
  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static Notification: NotificationRouteType = { path: '/notifications', get: { pageIndex: 0, pageSize: 20 } };
}

