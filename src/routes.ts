import { NotificationRouteType } from './type/notification.type';
import { TemplateRouteType } from './type/template.type';
import { UserProfileRouteType, UserRouteType } from './type/user.type';

export class ApiRoute {
  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static UserProfile: UserProfileRouteType = {
    path: '/user/profile',
    get: { username: '' },
    post: { userId: '' }
  };
  static Notification: NotificationRouteType = { path: '/notifications', get: { pageIndex: 0, pageSize: 20 } };
  static Template: TemplateRouteType = { path: '/templates', get: { pageIndex: 0, pageSize: 20 } };
  static TemplateLabel: TemplateRouteType = { path: '/templates/labels', get: { pageIndex: 0, pageSize: 500 } };
}
