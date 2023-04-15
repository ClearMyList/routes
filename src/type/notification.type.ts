import { RouteType } from './route.type';

export type NotificationRouteType = RouteType & { get: { pageIndex: number, pageSize: number } };
