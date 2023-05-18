import {
  TaskCategoryDataType,
  TaskDataType,
  TaskForkDataType,
  TaskLikeDataType,
  TaskProgressDataType
} from '@clearmylist/data-types';
import { BaseResponseType } from './base.type';
import { RouteType } from './route.type';

export type TaskRouteType = RouteType & {
  get: TaskListGetRequestType;
  post: TaskPostRequestType;
  deletion: TaskDeleteRequestType;
};

export type TaskListGetRequestType = {
  pageIndex: number;
  pageSize: number;
  userId?: string;
  cateogry?: TaskCategoryDataType;
  query?: string;
};

export type TaskListGetResponseType = BaseResponseType & { tasks: TaskDataType[] };

export type TaskPostRequestType = TaskDataType;

export type TaskPostResponseType = BaseResponseType & { task?: TaskDataType };

export type TaskDeleteRequestType = { id: string };

export type TaskDeleteResponseType = BaseResponseType;

export type TaskCompleteRouteType = RouteType & { post: TaskCompleteRequestType };

export type TaskCompleteRequestType = TaskDataType;

export type TaskCompleteResponseType = BaseResponseType & { tasks: TaskDataType[] };

export type TaskAttachmentRouteType = RouteType & {
  get: TaskAttachmentGetRequestType;
  deletion: TaskAttachmentDeleteRequestType;
};

export type TaskAttachmentGetRequestType = { taskId?: string; storageFilename?: string; isDownload?: boolean };

export type TaskAttachmentDeleteRequestType = { [key in 'attachmentId' | 'storageFilename']: string };

export type TaskAttachmentDeleteResponseType = BaseResponseType;

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

export type TaskTimelineRouteType = RouteType & { get: TaskTimelineGetRequestType };

export type TaskTimelineGetRequestType = { username: string };

export type TaskTimelineGetResponseType = BaseResponseType & { timeline: TaskDataType[] };

export type TaskProgressRouteType = RouteType & { get: TaskProgressGetRequestType };

export type TaskProgressGetRequestType = { [key in 'afterDate' | 'beforeDate']: Date };

export type TaskProgressGetResponseType = BaseResponseType & { progress: TaskProgressDataType };

export type TaskStatisticsRouteType = RouteType & { get: TaskStatisticsGetRequestType };

export type TaskStatisticsGetRequestType = { username: string; year?: number };

export type TaskStatisticsGetResponseType = BaseResponseType & {
  statistics: { _id: string; completedCount: number }[];
};

export type TaskVersionValidationRouteType = RouteType & { get: TaskVersionValidationGetRequestType };

export type TaskVersionValidationGetRequestType = { taskVersions: string; category: TaskCategoryDataType };

export type TaskVersionValidationGetResponseType = BaseResponseType & { diffTasks?: TaskDataType[] };
