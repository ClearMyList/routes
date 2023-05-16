import { UserRoleType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type SignInRouteType = RouteType & { post: SignInRequestType };

export type SignInRequestType = { email: string; encryptedPassword: string; reCaptchaToken: string };

export type SignInResponseType = BaseResponseType & {
  user?: {
    id: string;
    username: string;
    token: string;
    email: string;
    nickname?: string;
    role: UserRoleType;
    avatarUrl?: string;
    theme?: 'dark';
    light;
    system;
    createdAt: Date;
  };
};
