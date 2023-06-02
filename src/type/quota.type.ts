import { QuotaDataType } from '@clearmylist/data-types';
import { BaseRouteType } from './base.type';

export interface QuotaRouteType extends BaseRouteType {
  get: { username: string };
  post: { username: string; quota: QuotaDataType };
}
