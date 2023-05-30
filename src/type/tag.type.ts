import { TextTagDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';
import { BaseResponseType } from './base.type';

export type TextTagRouteType = RouteType & { get: TextTagGetRequestType };

export type TextTagGetRequestType = { text: string | string[] };

export type TextTagGetResponseType = BaseResponseType & { textTags?: TextTagDataType[] };
