import { PlazaActivityDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType, BaseRouteType } from './base.type';

export interface PlazaActivityListRouteType extends BaseRouteType {
  get: PlazaActivityListGetRequestType;
}

export interface PlazaActivityListGetRequestType extends BaseRequestType {
  username?: string;
  pageIndex: number;
  pageSize: number;
}

export interface PlazaActivityListGetResponseType extends BaseResponseType {
  activities: PlazaActivityDataType[];
}
