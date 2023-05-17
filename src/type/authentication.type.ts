import { AuthUserDataType, UserDataType, UserRoleType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type SignInRouteType = RouteType & { post: SignInRequestType };

export type SignInRequestType = { [key in 'email' | 'encryptedPassword' | 'reCaptchaToken']: string };

export type SignInResponseType = BaseResponseType & {
  user?: AuthUserDataType;
};

export type SignUpRouteType = RouteType & { post: SignUpRequestType };

export type SignUpRequestType = {
  username: string;
  email: string;
  encryptedPassword: string;
  reCaptchaToken: string;
  role?: UserRoleType;
};

export type SignUpResponseType = BaseResponseType & {
  user?: AuthUserDataType;
};

export type EmailVerificationRouteType = RouteType & { post: EmailVerificationPostRequestType };

export type EmailVerificationPostRequestType = { email: string; verificationCode: string };

export type EmailVerificationResponseType = BaseResponseType & { verified: boolean };
