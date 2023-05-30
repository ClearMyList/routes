import { TextTagDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';

export type TextTagRouteType = RouteType & { get: TextTagGetRequestType };

export type TextTagGetRequestType = { text: string | string[] };

export type TextTagGetResponseType = { textTags?: TextTagDataType[] };
