import { AccomplishmentRouteType } from './type/accomplishment.type';
import { EmailVerificationRouteType, SignInRouteType, SignUpRouteType } from './type/authentication.type';
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
  TaskCompleteRouteType,
  TaskForkRouteType,
  TaskLikeRouteType,
  TaskProgressRouteType,
  TaskRouteType,
  TaskStatisticsRouteType,
  TaskTagListRouteType,
  TaskTimelineRouteType,
  TaskVersionValidationRouteType
} from './type/task.type';
import { TemplateApplyRouteType, TemplateRouteType, TemplateTagListRouteType } from './type/template.type';
import {
  UserAvatarRouteType,
  UserDeactivateRouteType,
  UserPasswordRouteType,
  UserPreferenceRouteType,
  UserProfileRouteType,
  UserRouteType
} from './type/user.type';

export class ApiRoute {
  static SignIn: SignInRouteType = { path: '/sign-in', post: { email: '', encryptedPassword: '', reCaptchaToken: '' } };
  static SignUp: SignUpRouteType = {
    path: '/sign-up',
    post: { username: '', email: '', encryptedPassword: '', reCaptchaToken: '' }
  };

  static EmailVerification: EmailVerificationRouteType = {
    path: '/verify-email',
    post: { email: '', verificationCode: '' }
  };

  static User: UserRouteType = { path: '/users', get: { username: '' }, post: { username: '', nickname: '' } };
  static UserProfile: UserProfileRouteType = {
    path: '/users/profiles',
    get: { username: '' },
    post: { id: '', userId: '' }
  };
  static UserPreference: UserPreferenceRouteType = {
    path: '/users/preferences',
    get: { username: '' },
    post: {
      id: '',
      theme: 'dark'
    }
  };
  static UserAvatar: UserAvatarRouteType = { path: '/users/avatars', deletion: { username: '' } };
  static UserDeactivate: UserDeactivateRouteType = { path: '/users/deactivate', post: { username: '' } };
  static UserPassword: UserPasswordRouteType = {
    path: '/users/change-password',
    put: { username: '', currentEncryptedPassword: '', newEncryptedPassword: '' }
  };

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
  static TemplateApply: TemplateApplyRouteType = {
    path: '/templates/apply',
    post: { templateId: '', firstDate: { year: 1970, month: 0, date: 0 } }
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
  static TaskComplete: TaskCompleteRouteType = { path: '/tasks/complete', post: { id: '', subject: '' } };
  static TaskAttachment: TaskAttachmentRouteType = {
    path: '/tasks/attachments',
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
  static TaskProgress: TaskProgressRouteType = {
    path: '/tasks/progress',
    get: { afterDate: new Date(), beforeDate: new Date() }
  };
  static TaskStatistics: TaskStatisticsRouteType = { path: '/tasks/statistics', get: { username: '' } };
  static TaskVersionValidation: TaskVersionValidationRouteType = {
    path: '/tasks/validate-versions',
    get: {
      assigneeId: '',
      taskVersions: '',
      category: 'plan'
    }
  };

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
