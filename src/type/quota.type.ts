import { QuotaDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface QuotaRouteType extends BaseRouteType {
  get: QuotaGetRequestType;
  post: QuotaPostRequestType;
}

export interface QuotaGetRequestType extends BaseRequestType {
  username: string;
}

export interface QuotaGetResponseType extends BaseResponseType {
  quota?: QuotaDataType;
}

export interface QuotaPostRequestType extends BaseRequestType {
  username: string;
  quota: QuotaDataType;
}

export interface QuotaPostResponseType extends BaseResponseType {
  quota: QuotaDataType;
}
