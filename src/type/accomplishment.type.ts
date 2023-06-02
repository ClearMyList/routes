import { AccomplishmentDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface AccomplishmentRouteType extends BaseRouteType {
  get: AccomplishmentGetRequestType;
}

export interface AccomplishmentGetRequestType extends BaseRequestType {
  username: string;
  year?: number;
}

export interface AccomplishmentGetResponseType extends BaseResponseType {
  accomplishment: AccomplishmentDataType;
}
