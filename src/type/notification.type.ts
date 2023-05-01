import { NotificationDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';

export type NotificationRouteType = RouteType & { get: NotificationGetRequestType };

export type NotificationGetRequestType = { userId: string; pageIndex: number; pageSize: number };

export type NotificationGetResponseType = { notifications: NotificationDataType[] };
