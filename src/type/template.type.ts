import { TemplateDataType, TemplateFolderDataType, TemplateTagDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TemplateRouteType = RouteType & {
  get: TemplateListGetRequestType;
  post: TemplatePostRequestType;
  deletion: TemplateDeleteRequestType;
};

export type TemplateListGetRequestType = { pageIndex: number; pageSize: number; folder?: TemplateFolderDataType };

export type TemplateListGetResponseType = BaseResponseType & { templates: TemplateDataType[] };

export type TemplatePostRequestType = { template: TemplateDataType };

export type TemplatePostResponseType = BaseResponseType & { template: TemplateDataType };

export type TemplateTagListRouteType = RouteType & { get: TemplateTagListGetRequestType };

export type TemplateTagListGetRequestType = { templateIds: string[] };

export type TemplateTagListGetResponseType = BaseResponseType & { tags?: TemplateTagDataType[] };

export type TemplateDeleteRequestType = { id: string };

export type TemplateDeleteResponseType = BaseResponseType;
