import { AuthUserDataType, UserRoleType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface SignInRouteType extends BaseRouteType {
  post: SignInRequestType;
}

export interface SignInRequestType extends BaseRequestType {
  email: string;
  encryptedPassword: string;
  reCaptchaToken: string;
}

export interface SignInResponseType extends BaseResponseType {
  user?: AuthUserDataType;
}

export interface SignUpRouteType extends BaseRouteType {
  post: SignUpRequestType;
}

export interface SignUpRequestType extends BaseRequestType {
  username: string;
  email: string;
  encryptedPassword: string;
  reCaptchaToken: string;
  role?: UserRoleType;
}

export interface SignUpResponseType extends BaseResponseType {
  user?: AuthUserDataType;
}

export interface EmailVerificationRouteType extends BaseRouteType {
  post: EmailVerificationPostRequestType;
}

export interface EmailVerificationPostRequestType extends BaseRequestType {
  email: string;
  verificationCode: string;
}

export interface EmailVerificationResponseType extends BaseResponseType {
  verified: boolean;
}
