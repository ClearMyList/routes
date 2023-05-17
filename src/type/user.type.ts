import { UserPreferenceDataType, UserProfileDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type UserRouteType = RouteType & { get: { username: string } } & {
  post: { username: string; nickname?: string };
};

export type UserProfileRouteType = RouteType & {
  get: UserProfileGetRequestType;
  post: UserProfilePostRequestType;
};

export type UserProfileGetRequestType = { username: string };

export type UserProfileGetResponseType = BaseResponseType & { userProfile?: UserProfileDataType };

export type UserProfilePostRequestType = UserProfileDataType;

export type UserProfilePostResponseType = BaseResponseType & { userProfile: UserProfileDataType };

export type UserAvatarRouteType = RouteType & { [key in 'get' | 'delete']: { username: string } };

export type UserPreferenceRouteType = RouteType & {
  get: UserPreferenceGetRequestType;
  post: UserPreferencePostRequestType;
};

export type UserPreferenceGetRequestType = { username: string };

export type UserPreferenceGetResponseType = BaseResponseType & { userPreference?: UserPreferenceDataType };

export type UserPreferencePostRequestType = UserPreferenceDataType;

export type UserPreferencePostResponseType = BaseResponseType & { userPreference: UserPreferenceDataType };
