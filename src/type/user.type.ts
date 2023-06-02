import { UserDataType, UserPreferenceDataType, UserProfileDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface UserRouteType extends BaseRouteType {
  get: UserGetRequestType;
  post: UserPostRequestType;
}

export interface UserGetRequestType extends BaseRequestType {
  username: string;
}

export interface UserGetResponseType extends BaseResponseType {
  user?: UserDataType;
}

export interface UserPostRequestType extends BaseRequestType {
  user: UserDataType;
}

export interface UserPostResponseType extends BaseResponseType {
  user?: UserDataType;
}

export interface UserProfileRouteType extends BaseRouteType {
  get: UserProfileGetRequestType;
  post: UserProfilePostRequestType;
}

export interface UserProfileGetRequestType extends BaseRequestType {
  username: string;
}

export interface UserProfileGetResponseType extends BaseResponseType {
  userProfile?: UserProfileDataType;
}

export interface UserProfilePostRequestType extends BaseRequestType {
  userProfile: UserProfileDataType;
}

export interface UserProfilePostResponseType extends BaseResponseType {
  userProfile: UserProfileDataType;
}

export interface UserAvatarRouteType extends BaseRouteType {
  post: UserAvatarPostRequestType;
  deletion: UserAvatarDeletionRequestType;
}

export interface UserAvatarPostRequestType extends BaseRequestType {
  username: string;
}

export interface UserAvatarPostResponseType extends BaseResponseType {
  avatarUrl: string;
}

export interface UserAvatarDeletionRequestType extends BaseRequestType {
  username: string;
}

export interface UserAvatarDeletionResponseType extends BaseResponseType {}

export interface UserPreferenceRouteType extends BaseRouteType {
  get: UserPreferenceGetRequestType;
  post: UserPreferencePostRequestType;
}

export interface UserPreferenceGetRequestType extends BaseRequestType {
  username: string;
}

export interface UserPreferenceGetResponseType extends BaseResponseType {
  userPreference?: UserPreferenceDataType;
}

export interface UserPreferencePostRequestType extends BaseRequestType {
  userPreference: UserPreferenceDataType;
}

export interface UserPreferencePostResponseType extends BaseResponseType {
  userPreference: UserPreferenceDataType;
}

export interface UserDeactivateRouteType extends BaseRouteType {
  post: UserDeactivatePostRequestType;
}

export interface UserDeactivatePostRequestType extends BaseRequestType {
  username: string;
}

export interface UserDeactivatePostResponseType extends BaseResponseType {
  deactivated: boolean;
}

export interface UserPasswordRouteType extends BaseRouteType {
  put: UserPasswordPutRequestType;
}

export interface UserPasswordPutRequestType extends BaseRequestType {
  username: string;
  currentEncryptedPassword: string;
  newEncryptedPassword: string;
}

export interface UserPasswordPutResponseType extends BaseResponseType {}
