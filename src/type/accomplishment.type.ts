import { AccomplishmentDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type AccomplishmentRouteType = RouteType & { get: AccomplishmentGetRequestType };

export type AccomplishmentGetRequestType = { username: string; year?: number };

export type AccomplishmentGetResponseType = BaseResponseType & { accomplishment: AccomplishmentDataType };
