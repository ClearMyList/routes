import { RouteType } from './route.type';

export type UserRouteType = RouteType & { get: { username: string } } & {
  post: { username: string; nickname?: string };
};
