import { DateTimeDataType, ReminderDataType } from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType } from './base.type';
import { BaseRouteType } from './base.type';

export interface ReminderRouteType extends BaseRouteType {
  get: ReminderListGetRequestType;
}

export interface ReminderListGetRequestType extends BaseRequestType {
  laterThan?: DateTimeDataType;
  beforeThan?: DateTimeDataType;
}

export interface ReminderListGetResponseType extends BaseResponseType {
  reminders: ReminderDataType[];
}
