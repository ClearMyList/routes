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

export type UserAvatarRouteType = RouteType & { deletion: UserAvatarDeletionRequestType };

export type UserAvatarPostResponseType = BaseResponseType & { avatarUrl: string };

export type UserAvatarDeletionRequestType = { username: string };

export type UserAvatarDeletionResponseType = BaseResponseType;

export type UserPreferenceRouteType = RouteType & {
  get: UserPreferenceGetRequestType;
  post: UserPreferencePostRequestType;
};

export type UserPreferenceGetRequestType = { username: string };

export type UserPreferenceGetResponseType = BaseResponseType & { userPreference?: UserPreferenceDataType };

export type UserPreferencePostRequestType = UserPreferenceDataType;

export type UserPreferencePostResponseType = BaseResponseType & { userPreference: UserPreferenceDataType };

export type UserDeactivateRouteType = RouteType & { post: UserDeactivatePostRequestType };

export type UserDeactivatePostRequestType = { username: string };

export type UserDeactivatePostResponseType = BaseResponseType & { deactivated: boolean };

export type UserPasswordRouteType = RouteType & { put: UserPasswordPutRequestType };

export type UserPasswordPutRequestType = {
  username: string;
  currentEncryptedPassword: string;
  newEncryptedPassword: string;
};

export type UserPasswordPutResponseType = BaseResponseType;
