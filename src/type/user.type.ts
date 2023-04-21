import { RouteType } from './route.type';

export type UserRouteType = RouteType & { get: { username: string } } & {
  post: { username: string; nickname?: string };
};

export type UserProfileRouteType = RouteType & { get: { username: string } } & {
  post: {
    id?: string;
    userId: string;
    location?: string;
    occupation?: string;
    about?: string;
    twitterUsername?: string;
    facebookUsername?: string;
    linkedInUsername?: string;
    instagramUsername?: string;
    website?: string;
  };
};

export type UserAvatarRouteType = RouteType & { [key in 'get' | 'delete']: { username: string } };
