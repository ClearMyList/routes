import { AccomplishmentRouteType } from './type/accomplishment.type';
import { SignInRouteType } from './type/authentication.type';
import {
  NotificationReadAllNotification,
  NotificationReadNotification,
  NotificationRouteType,
  NotificationUnreadCountRouteType
} from './type/notification.type';
import { PlazaActivityListRouteType } from './type/plaza.type';
import { QuotaRouteType } from './type/quota.type';
import { ReminderRouteType } from './type/reminder.type';
import {
  TaskAttachmentRouteType,
  TaskForkRouteType,
  TaskLikeRouteType,
  TaskRouteType,
  TaskTagListRouteType,
  TaskTimelineRouteType
} from './type/task.type';
import { TemplateRouteType, TemplateTagListRouteType } from './type/template.type';
import { UserAvatarRouteType, UserProfileRouteType, UserRouteType } from './type/user.type';

export class ApiRoute {
  static SignIn: SignInRouteType = { path: '/sign-in', post: { email: '', encryptedPassword: '', reCaptchaToken: '' } };

  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static UserProfile: UserProfileRouteType = {
    path: '/user/profile',
    get: { username: '' },
    post: { userId: '' }
  };
  static UserAvatar: UserAvatarRouteType = { path: '/user/avatars', get: { username: '' }, delete: { username: '' } };

  static Accomplishment: AccomplishmentRouteType = {
    path: '/accomplishments',
    get: { username: '' }
  };

  static Notification: NotificationRouteType = {
    path: '/notifications',
    get: { subscriberId: '', pageIndex: 0, pageSize: 30 }
  };
  static NotificationUnreadCount: NotificationUnreadCountRouteType = {
    path: '/notifications/unread-count',
    get: { subscriberId: '' }
  };
  static NotificationRead: NotificationReadNotification = {
    path: '/notifications/read',
    post: { notificationId: '', subscriberId: '', isRead: false }
  };
  static NotificationReadAll: NotificationReadAllNotification = {
    path: '/notifications/read-all',
    post: { subscriberId: '' }
  };

  static Template: TemplateRouteType = {
    path: '/templates',
    get: { pageIndex: 0, pageSize: 30 },
    post: { template: { authorId: '', subject: '' } },
    deletion: { id: '' }
  };
  static TemplateTag: TemplateTagListRouteType = {
    path: '/templates/tags',
    get: { templateIds: [] }
  };

  static Task: TaskRouteType = {
    path: '/tasks',
    get: { pageIndex: 0, pageSize: 30 },
    post: {
      subject: '',
      creatorId: '',
      assigneeId: '',
      visibility: 'private'
    },
    deletion: { id: '' }
  };
  static TaskAttachment: TaskAttachmentRouteType = {
    path: '/task/attachments',
    get: {},
    deletion: { attachmentId: '', storageFilename: '' }
  };
  static TaskTag: TaskTagListRouteType = { path: '/tasks/tags', get: { taskIds: [] } };
  static TaskLike: TaskLikeRouteType = {
    path: '/tasks/likes',
    get: { taskIds: [] },
    post: { userId: '', taskId: '', liked: false }
  };
  static TaskFork: TaskForkRouteType = {
    path: '/tasks/forks',
    get: { taskIds: [] },
    post: { subject: '', creatorId: '', assigneeId: '', visibility: 'private' }
  };
  static TaskTimeline: TaskTimelineRouteType = { path: '/tasks/timelines', get: { username: '' } };

  static Reminder: ReminderRouteType = { path: '/reminders', get: {} };

  static Quota: QuotaRouteType = {
    path: '/quotas',
    get: { username: '' },
    post: { username: '', quota: { userId: '' } }
  };

  static PlazaActivity: PlazaActivityListRouteType = {
    path: '/plaza-activities',
    get: { username: '', pageIndex: 0, pageSize: 30 }
  };
}
