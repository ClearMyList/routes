import {
  DateDataType,
  TaskDataType,
  TaskVisibilityType,
  TemplateDataType,
  TemplateFolderType
} from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType } from './base.type';
import { BaseRouteType } from './base.type';

export interface TemplateRouteType extends BaseRouteType {
  get: TemplateGetRequestType;
  post: TemplatePostRequestType;
  deletion: TemplateDeleteRequestType;
}

export interface TemplateGetRequestType extends BaseRequestType {
  pageIndex: number;
  pageSize: number;
  folder?: TemplateFolderType;
  id?: string | string[];
}

export interface TemplateGetResponseType extends BaseResponseType {
  templates: TemplateDataType[];
}

export interface TemplateGetByIdRequestType extends BaseRequestType {
  id: string;
}

export interface TemplateGetByIdResponseType extends BaseResponseType {
  template?: TemplateDataType;
}

export interface TemplatePostRequestType extends BaseRequestType {
  template: TemplateDataType;
}

export interface TemplatePostResponseType extends BaseResponseType {
  template: TemplateDataType;
}

export interface TemplateDeleteRequestType extends BaseRequestType {
  id: string;
}

export interface TemplateDeleteResponseType extends BaseResponseType {}

export interface TemplateApplyRouteType extends BaseRouteType {
  post: TemplateApplyPostRequestType;
}

export interface TemplateApplyPostRequestType extends BaseRequestType {
  templateId: string;
  firstDate: DateDataType;
  visibility?: TaskVisibilityType;
}

export interface TemplateApplyPostResponseType extends BaseResponseType {
  tasks?: TaskDataType[];
}

export interface TemplateAppliedUserRouteType extends BaseRouteType {
  get: TemplateAppliedUserGetRequestType;
}

export interface TemplateAppliedUserGetRequestType extends BaseRequestType {
  templateIds: string[];
}

export interface TemplateAppliedUserGetResponseType extends BaseResponseType {
  templateUsers?: { templateId?: string; users?: string[] }[];
}
