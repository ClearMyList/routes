import { TaskDataType, TaskForkDataType, TaskLikeDataType } from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TaskRouteType = RouteType & {
  post: TaskDataType;
};

export type TaskAttachmentRouteType = RouteType & {
  get: TaskAttachmentGetRequestType;
  deletion: TaskAttachmentDeletionRequestType;
};

export type TaskAttachmentGetRequestType = { taskId?: string; storageFilename?: string; isDownload?: boolean };

export type TaskAttachmentDeletionRequestType = { attachmentId: string; storageFilename: string };

export type TaskTagListRouteType = RouteType & { get: TaskTagListGetRequestType };

export type TaskTagListGetRequestType = {
  taskIds: string[];
};

export type TaskTagListGetResponseType = BaseResponseType & {
  tags?: { tag: string; taskIds: string[] }[];
};

export type TaskLikeRouteType = RouteType & { get: TaskLikeGetRequestType; post: TaskLikePostRequestType };

export type TaskLikeGetRequestType = {
  taskIds: string[];
};

export type TaskLikeGetResponseType = BaseResponseType & {
  likes?: TaskLikeDataType[];
};

export type TaskLikePostRequestType = { userId: string; taskId: string; liked: boolean };

export type TaskLikePostResponseType = BaseResponseType & { taskLike?: TaskLikeDataType };

export type TaskForkRouteType = RouteType & { get: TaskForkGetRequestType; post: TaskForkPostRequestType };

export type TaskForkPostRequestType = TaskDataType;

export type TaskForkPostResponseType = BaseResponseType & { task?: TaskDataType };

export type TaskForkGetRequestType = {
  taskIds: string[];
};

export type TaskForkGetResponseType = BaseResponseType & {
  forks?: TaskForkDataType[];
};
