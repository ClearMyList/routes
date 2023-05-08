import { TemplateDataType, TemplateTagDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TemplateRouteType = RouteType & {
  get: { pageIndex: number; pageSize: number };
  post: TemplatePostRequestType;
};

export type TemplatePostRequestType = { template: TemplateDataType };

export type TemplatePostResponseType = BaseResponseType & { template: TemplateDataType };

export type TemplateTagListRouteType = RouteType & { get: TemplateTagListGetRequestType };

export type TemplateTagListGetRequestType = { templateIds: string[] };

export type TemplateTagListGetResponseType = BaseResponseType & { tags?: TemplateTagDataType[] };
