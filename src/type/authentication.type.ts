import { AuthUserDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type SignInRouteType = RouteType & { post: SignInRequestType };

export type SignInRequestType = { email: string; encryptedPassword: string; reCaptchaToken: string };

export type SignInResponseType = BaseResponseType & {
  user?: AuthUserDataType;
};

export type EmailVerificationRouteType = RouteType & { post: EmailVerificationPostRequestType };

export type EmailVerificationPostRequestType = { email: string; verificationCode: string };

export type EmailVerificationResponseType = BaseResponseType & { verified: boolean };
