import { NotificationDataType, UserDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';
import { BaseResponseType } from './base.type';

export type NotificationRouteType = RouteType & { get: NotificationGetListRequestType };

export type NotificationGetListRequestType = { subscriberId: string; pageIndex: number; pageSize: number };

export type NotificationGetListResponseType = BaseResponseType & {
  notifications: NotificationDataType & { publisher: UserDataType }[];
};

export type NotificationUnreadCountRouteType = RouteType & { get: NotificationUnreadCountGetRequestType };

export type NotificationUnreadCountGetRequestType = { subscriberId: string };

export type NotificationUnreadCountGetResponseType = BaseResponseType & { count: number };
