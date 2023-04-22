import { QuotaDataType } from '@clearmylist/data-types';
import { RouteType } from './route.type';

export type QuotaRouteType = RouteType & {
  get: { username: string };
  post: { username: string; quota: QuotaDataType };
};
