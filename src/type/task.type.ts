import { RouteType } from './route.type';

export type TaskAttachmentType = RouteType & {
  get: { taskId?: string; storageFilename?: string; isDownload?: boolean };
  deletion: { attachmentId: string; storageFilename: string };
};
