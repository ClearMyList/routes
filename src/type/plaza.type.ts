import { PlazaActivityDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';
import { BaseResponseType } from './base.type';

export type PlazaActivityListRouteType = RouteType & { get: PlazaActivityListGetRequestType };

export type PlazaActivityListGetRequestType = { username?: string; pageIndex: number; pageSize: number };

export type PlazaActivityListGetResponseType = BaseResponseType & { activities: PlazaActivityDataType[] };
