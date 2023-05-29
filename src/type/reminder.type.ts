import { DateTimeDataType, ReminderDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type ReminderRouteType = RouteType & { get: ReminderListGetRequestType };

export type ReminderListGetRequestType = { laterThan?: DateTimeDataType; beforeThan?: DateTimeDataType };

export type ReminderListGetResponseType = BaseResponseType & { reminders: ReminderDataType[] };
