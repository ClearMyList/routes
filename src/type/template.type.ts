import { DateDataType, TaskDataType, TemplateDataType, TemplateFolderType } from '@clearmylist/data-types';
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
  folder?: TemplateFolderType;
  id?: string | string[];
};

export type TemplateGetResponseType = BaseResponseType & { templates: TemplateDataType[] };

export type TemplateGetByIdRequestType = { id: string };

export type TemplateGetByIdResponseType = BaseResponseType & { template?: TemplateDataType };

export type TemplatePostRequestType = { template: TemplateDataType };

export type TemplatePostResponseType = BaseResponseType & { template: TemplateDataType };

export type TemplateDeleteRequestType = { id: string };

export type TemplateDeleteResponseType = BaseResponseType;

export type TemplateApplyRouteType = RouteType & { post: TemplateApplyPostRequestType };

export type TemplateApplyPostRequestType = {
  templateId: string;
  firstDate: DateDataType;
};

export type TemplateApplyPostResponseType = BaseResponseType & { tasks?: TaskDataType[] };

export type TemplateAppliedUserRouteType = RouteType & { get: TemplateAppliedUserGetRequestType };

export type TemplateAppliedUserGetRequestType = { templateIds: string[] };

export type TemplateAppliedUserGetResponseType = BaseResponseType & {
  templateUsers?: { templateId?: string; users?: string[] }[];
};
