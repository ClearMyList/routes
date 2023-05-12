import { ReminderDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type ReminderRouteType = RouteType & { get: ReminderListGetRequestType };

export type ReminderListGetRequestType = { laterThan?: Date; beforeThan?: Date };

export type ReminderListGetResponseType = BaseResponseType & { reminders: ReminderDataType[] };
