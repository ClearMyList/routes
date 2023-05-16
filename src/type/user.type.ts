import { UserPreferenceDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
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

export type UserPreferenceRouteType = RouteType & {
  get: UserPreferenceGetRequestType;
  post: UserPreferencePostRequestType;
};

export type UserPreferenceGetRequestType = { username: string };

export type UserPreferenceGetResponseType = BaseResponseType & { userPreference: UserPreferenceDataType };

export type UserPreferencePostRequestType = { userPreference: UserPreferenceDataType };

export type UserPreferencePostResponseType = BaseResponseType & { userPreference: UserPreferenceDataType };
