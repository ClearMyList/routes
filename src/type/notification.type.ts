import { NotificationDataType, UserDataType, UserProfileDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface NotificationRouteType extends BaseRouteType {
  get: NotificationListGetRequestType;
}

export interface NotificationListGetRequestType extends BaseRequestType {
  subscriberId: string;
  pageIndex: number;
  pageSize: number;
}

export interface NotificationListGetResponseType extends BaseResponseType {
  notifications: (NotificationDataType & { publisher?: UserDataType; publisherProfile?: UserProfileDataType })[];
}

export interface NotificationUnreadCountRouteType extends BaseRouteType {
  get: NotificationUnreadCountGetRequestType;
}

export interface NotificationUnreadCountGetRequestType extends BaseRequestType {
  subscriberId: string;
}

export interface NotificationUnreadCountGetResponseType extends BaseResponseType {
  count: number;
}

export interface NotificationReadNotification extends BaseRouteType {
  post: NotificationReadPostRequestType;
}

export interface NotificationReadPostRequestType extends BaseRequestType {
  notificationId: string;
  subscriberId: string;
  isRead: boolean;
}

export interface NotificationReadPostResponseType extends BaseResponseType {
  notification?: NotificationDataType;
}

export interface NotificationReadAllNotification extends BaseRouteType {
  post: NotificationReadAllPostRequestType;
}

export interface NotificationReadAllPostRequestType extends BaseRequestType {
  subscriberId: string;
  beforeDateTime?: Date;
}

export interface NotificationReadAllPostResponseType extends BaseResponseType {}
