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
import { TextTagRouteType } from './type/tag.type';
import {
  TaskAttachmentDownloadRouteType,
  TaskAttachmentRouteType,
  TaskCompleteRouteType,
  TaskCountRouteType,
  TaskForkRouteType,
  TaskLikeRouteType,
  TaskProgressRouteType,
  TaskRouteType,
  TaskStatisticsRouteType,
  TaskTimelineRouteType,
  TaskVersionValidationRouteType
} from './type/task.type';
import { TemplateAppliedUserRouteType, TemplateApplyRouteType, TemplateRouteType } from './type/template.type';
import {
  UserAvatarRouteType,
  UserDeactivateRouteType,
  UserFollowerRouteType,
  UserFollowingRouteType,
  UserFriendListGetRouteType,
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

  static User: UserRouteType = {
    path: '/users',
    get: { username: '' },
    post: { user: { username: '', nickname: '' } }
  };
  static UserProfile: UserProfileRouteType = {
    path: '/users/profiles',
    get: { username: '' },
    post: { userProfile: { id: '', userId: '' } }
  };
  static UserPreference: UserPreferenceRouteType = {
    path: '/users/preferences',
    get: { username: '' },
    post: {
      userPreference: {
        id: '',
        theme: 'dark'
      }
    }
  };
  static UserAvatar: UserAvatarRouteType = {
    path: '/users/avatars',
    post: { username: '' },
    deletion: { username: '' }
  };
  static UserDeactivate: UserDeactivateRouteType = { path: '/users/deactivate', post: { username: '' } };
  static UserPassword: UserPasswordRouteType = {
    path: '/users/change-password',
    put: { username: '', currentEncryptedPassword: '', newEncryptedPassword: '' }
  };
  static UserFollower: UserFollowerRouteType = {
    path: '/users/followers',
    get: { username: '' },
    post: { username: '', followerUsername: '' },
    deletion: { username: '', followerUsername: '' }
  };
  static UserFollowing: UserFollowingRouteType = {
    path: '/users/followings',
    get: { username: '' }
  };
  static UserFriends: UserFriendListGetRouteType = {
    path: '/users/friends',
    get: { username: '' }
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

  static Task: TaskRouteType = {
    path: '/tasks',
    get: { pageIndex: 0, pageSize: 30 },
    post: {
      task: {
        subject: '',
        creatorId: '',
        assigneeId: '',
        visibility: 'private'
      }
    },
    deletion: { id: '' }
  };
  static TaskComplete: TaskCompleteRouteType = { path: '/tasks/complete', post: { task: { id: '', subject: '' } } };
  static TaskAttachment: TaskAttachmentRouteType = {
    path: '/tasks/attachments',
    get: {},
    post: { taskId: '' },
    deletion: { attachmentId: '', storageFilename: '' }
  };
  static TaskAttachmentDownload: TaskAttachmentDownloadRouteType = {
    path: '/tasks/attachments/download',
    get: { storageFilename: '' }
  };
  static TaskLike: TaskLikeRouteType = {
    path: '/tasks/likes',
    get: { taskIds: [] },
    post: { userId: '', taskId: '', liked: false }
  };
  static TaskFork: TaskForkRouteType = {
    path: '/tasks/forks',
    get: { taskIds: [] },
    post: { task: { subject: '', creatorId: '', assigneeId: '', visibility: 'private' } }
  };
  static TaskTimeline: TaskTimelineRouteType = { path: '/tasks/timelines', get: { username: '' } };
  static TaskProgress: TaskProgressRouteType = {
    path: '/tasks/progress',
    get: { afterDate: { year: 1970, month: 0, date: 1 }, beforeDate: { year: 1970, month: 0, date: 1 } }
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
  static TaskCount: TaskCountRouteType = { path: '/tasks/count', get: { username: '', category: 'plan' } };

  static Template: TemplateRouteType = {
    path: '/templates',
    get: { pageIndex: 0, pageSize: 30 },
    post: { template: { authorId: '', subject: '' } },
    deletion: { id: '' }
  };
  static TemplateApply: TemplateApplyRouteType = {
    path: '/templates/apply',
    post: { templateId: '', firstDate: { year: 1970, month: 0, date: 0 } }
  };
  static TemplateAppliedUser: TemplateAppliedUserRouteType = {
    path: '/templates/applied-users',
    get: { templateIds: [] }
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

  static TextTag: TextTagRouteType = { path: '/text-tags', get: { text: '' } };
}
