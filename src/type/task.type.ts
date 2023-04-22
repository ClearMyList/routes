import { RouteType } from './route.type';

export type TaskAttachmentRouteType = RouteType & {
  get: { taskId?: string; storageFilename?: string; isDownload?: boolean };
  deletion: { attachmentId: string; storageFilename: string };
};
