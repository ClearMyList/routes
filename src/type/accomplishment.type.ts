import { RouteType } from './route.type';

export type AccomplishmentRouteType = RouteType & { get: AccomplishmentGetRequestType };

export type AccomplishmentGetRequestType = { username: string; year?: number };
