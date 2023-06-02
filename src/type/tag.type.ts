import { TextTagDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseRouteType } from './base.type';
import { BaseResponseType } from './base.type';

export interface TextTagRouteType extends BaseRouteType {
  get: TextTagGetRequestType;
}

export interface TextTagGetRequestType extends BaseRequestType {
  text: string | string[];
}

export interface TextTagGetResponseType extends BaseResponseType {
  textTags?: TextTagDataType[];
}
