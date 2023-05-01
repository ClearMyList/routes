import { NotificationDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';
import { BaseResponseType } from './base.type';

export type NotificationRouteType = RouteType & { get: NotificationGetRequestType };

export type NotificationGetRequestType = { subscriberId: string; pageIndex: number; pageSize: number };

export type NotificationGetResponseType = BaseResponseType & { notifications: NotificationDataType[] };
