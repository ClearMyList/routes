import { RouteType } from './route.type';

export type TemplateRouteType = RouteType & { get: { pageIndex: number, pageSize: number } };
