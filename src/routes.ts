import { NotificationRouteType } from './type/notification.type';
import { PlazaActivityListRouteType } from './type/plaza.type';
import { QuotaRouteType } from './type/quota.type';
import { TaskAttachmentRouteType } from './type/task.type';
import { TemplateRouteType } from './type/template.type';
import { UserAvatarRouteType, UserProfileRouteType, UserRouteType } from './type/user.type';

export class ApiRoute {
  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static UserProfile: UserProfileRouteType = {
    path: '/user/profile',
    get: { username: '' },
    post: { userId: '' }
  };
  static UserAvatar: UserAvatarRouteType = { path: '/user/avatars', get: { username: '' }, delete: { username: '' } };
  static Notification: NotificationRouteType = { path: '/notifications', get: { pageIndex: 0, pageSize: 20 } };
  static Template: TemplateRouteType = { path: '/templates', get: { pageIndex: 0, pageSize: 20 } };
  static TemplateLabel: TemplateRouteType = { path: '/templates/labels', get: { pageIndex: 0, pageSize: 500 } };
  static TaskAttachment: TaskAttachmentRouteType = {
    path: '/task/attachments',
    get: {},
    deletion: { attachmentId: '', storageFilename: '' }
  };
  static Quota: QuotaRouteType = {
    path: '/quotas',
    get: { username: '' },
    post: { username: '', quota: { userId: '' } }
  };
  static Plaza: PlazaActivityListRouteType = {
    path: '/plaza-activities',
    get: { username: '', pageIndex: 0, pageSize: 50 }
  };
}
