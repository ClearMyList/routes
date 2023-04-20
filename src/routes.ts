import { NotificationRouteType } from './type/notification.type';
import { TaskAttachmentType } from './type/task.type';
import { TemplateRouteType } from './type/template.type';
import { UserAvatarRouteType, UserProfileRouteType, UserRouteType } from './type/user.type';

export class ApiRoute {
  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static UserProfile: UserProfileRouteType = {
    path: '/user/profile',
    get: { username: '' },
    post: { userId: '' }
  };
  static UserAvatar: UserAvatarRouteType = { path: '/user/avatars', get: { username: '' }, delete: { username: '' } }
  static Notification: NotificationRouteType = { path: '/notifications', get: { pageIndex: 0, pageSize: 20 } };
  static Template: TemplateRouteType = { path: '/templates', get: { pageIndex: 0, pageSize: 20 } };
  static TemplateLabel: TemplateRouteType = { path: '/templates/labels', get: { pageIndex: 0, pageSize: 500 } };
  static TaskAttachment: TaskAttachmentType = { path: '/task/attachments', get: {} }
}
