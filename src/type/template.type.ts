import { TaskDataType, TemplateDataType, TemplateFolderDataType, TemplateTagDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TemplateRouteType = RouteType & {
  get: TemplateGetRequestType;
  post: TemplatePostRequestType;
  deletion: TemplateDeleteRequestType;
};

export type TemplateGetRequestType = {
  pageIndex: number;
  pageSize: number;
  folder?: TemplateFolderDataType;
  id?: string | string[];
};

export type TemplateGetResponseType = BaseResponseType & { templates: TemplateDataType[] };

export type TemplateGetByIdRequestType = { id: string };

export type TemplateGetByIdResponseType = BaseResponseType & { template?: TemplateDataType };

export type TemplatePostRequestType = { template: TemplateDataType };

export type TemplatePostResponseType = BaseResponseType & { template: TemplateDataType };

export type TemplateTagListRouteType = RouteType & { get: TemplateTagListGetRequestType };

export type TemplateTagListGetRequestType = { templateIds: string[] };

export type TemplateTagListGetResponseType = BaseResponseType & { tags?: TemplateTagDataType[] };

export type TemplateDeleteRequestType = { id: string };

export type TemplateDeleteResponseType = BaseResponseType;

export type TemplateApplyRouteType = RouteType & { post: TemplateApplyPostRequestType };

export type TemplateApplyPostRequestType = {
  templateId: string;
  firstDate: { year: number; month: number; day: number };
};

export type TemplateApplyPostResponseType = BaseResponseType & { tasks?: TaskDataType[] };
