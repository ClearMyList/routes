import { RouteType } from './route.type';

export type NotificationRouteType = RouteType & { get: { userId: string; pageIndex: number; pageSize: number } };
