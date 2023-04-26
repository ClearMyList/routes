import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TaskAttachmentRouteType = RouteType & {
  get: TaskAttachmentGetRequestType;
  deletion: TaskAttachmentDeletionRequestType;
};

export type TaskAttachmentGetRequestType = { taskId?: string; storageFilename?: string; isDownload?: boolean };

export type TaskAttachmentDeletionRequestType = { attachmentId: string; storageFilename: string };

export type TaskTagRouteType = RouteType & { get: TaskTagGetRequestType };

export type TaskTagGetRequestType = {
  taskIds: string[];
};

export type TaskTagGetResponseType = BaseResponseType & {
  tags?: { tag: string; taskIds: string[] }[];
};
