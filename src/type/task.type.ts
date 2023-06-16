import {
  DateDataType,
  TaskAttachmentDataType,
  TaskCategoryType,
  TaskDataType,
  TaskForkDataType,
  TaskLikeDataType,
  TaskProgressDataType
} from '@clearmylist/data-types';
import { BaseRequestType, BaseResponseType } from './base.type';
import { BaseRouteType } from './base.type';

export interface TaskRouteType extends BaseRouteType {
  get: TaskListGetRequestType;
  post: TaskPostRequestType;
  deletion: TaskDeleteRequestType;
}

export interface TaskListGetRequestType extends BaseRequestType {
  pageIndex: number;
  pageSize: number;
  userId?: string;
  cateogry?: TaskCategoryType;
  query?: string;
}

export interface TaskListGetResponseType extends BaseResponseType {
  tasks: TaskDataType[];
}

export interface TaskPostRequestType extends BaseRequestType {
  task: TaskDataType;
}

export interface TaskPostResponseType extends BaseResponseType {
  task?: TaskDataType;
}

export interface TaskDeleteRequestType extends BaseRequestType {
  id: string;
}

export interface TaskDeleteResponseType extends BaseResponseType {}

export interface TaskCompleteRouteType extends BaseRouteType {
  post: TaskCompleteRequestType;
}

export interface TaskCompleteRequestType extends BaseRequestType {
  task: TaskDataType;
}

export interface TaskCompleteResponseType extends BaseResponseType {
  tasks: TaskDataType[];
}

export interface TaskAttachmentRouteType extends BaseRouteType {
  get: TaskAttachmentGetRequestType;
  post: TaskAttachmentPostRequestType;
  deletion: TaskAttachmentDeleteRequestType;
}

export interface TaskAttachmentGetRequestType extends BaseRequestType {
  taskId?: string;
  storageFilename?: string;
}

export interface TaskAttachmentGetResponseType extends BaseResponseType {
  taskAttachments?: TaskAttachmentDataType[];
}

export interface TaskAttachmentPostRequestType extends BaseRequestType {
  taskId: string;
}

export interface TaskAttachmentPostResponseType extends BaseResponseType {
  taskAttachment?: TaskAttachmentDataType;
}

export interface TaskAttachmentDownloadRouteType extends BaseRouteType {
  get: TaskAttachmentDownloadRequestType;
}

export interface TaskAttachmentDownloadRequestType extends BaseRequestType {
  storageFilename?: string;
}

export interface TaskAttachmentDownloadResponseType extends BaseResponseType {
  taskAttachment?: { [key: string]: any };
}

export interface TaskAttachmentDeleteRequestType extends BaseRequestType {
  attachmentId: string;
  storageFilename: string;
}

export interface TaskAttachmentDeleteResponseType extends BaseResponseType {}

export interface TaskLikeRouteType extends BaseRouteType {
  get: TaskLikeGetRequestType;
  post: TaskLikePostRequestType;
}

export interface TaskLikeGetRequestType extends BaseRequestType {
  taskIds: string[];
}

export interface TaskLikeGetResponseType extends BaseResponseType {
  likes?: TaskLikeDataType[];
}

export interface TaskLikePostRequestType extends BaseRequestType {
  userId: string;
  taskId: string;
  liked: boolean;
}

export interface TaskLikePostResponseType extends BaseResponseType {
  taskLike?: TaskLikeDataType;
}

export interface TaskForkRouteType extends BaseRouteType {
  get: TaskForkGetRequestType;
  post: TaskForkPostRequestType;
}

export interface TaskForkPostRequestType extends BaseRequestType {
  task: TaskDataType;
}

export interface TaskForkPostResponseType extends BaseResponseType {
  task?: TaskDataType;
}

export interface TaskForkGetRequestType extends BaseRequestType {
  taskIds: string[];
}

export interface TaskForkGetResponseType extends BaseResponseType {
  forks?: TaskForkDataType[];
}

export interface TaskTimelineRouteType extends BaseRouteType {
  get: TaskTimelineGetRequestType;
}

export interface TaskTimelineGetRequestType extends BaseRequestType {
  username: string;
}

export interface TaskTimelineGetResponseType extends BaseResponseType {
  timeline: TaskDataType[];
}

export interface TaskProgressRouteType extends BaseRouteType {
  get: TaskProgressGetRequestType;
}

export interface TaskProgressGetRequestType extends BaseRequestType {
  afterDate: DateDataType;
  beforeDate: DateDataType;
}

export interface TaskProgressGetResponseType extends BaseResponseType {
  progress: TaskProgressDataType;
}

export interface TaskStatisticsRouteType extends BaseRouteType {
  get: TaskStatisticsGetRequestType;
}

export interface TaskStatisticsGetRequestType extends BaseRequestType {
  username: string;
  year?: number;
}

export interface TaskStatisticsGetResponseType extends BaseResponseType {
  statistics: { _id: string; completedCount: number }[];
}

export interface TaskVersionValidationRouteType extends BaseRouteType {
  get: TaskVersionValidationGetRequestType;
}

export interface TaskVersionValidationGetRequestType extends BaseRequestType {
  assigneeId: string;
  taskVersions: string;
  category: TaskCategoryType;
}

export interface TaskVersionValidationGetResponseType extends BaseResponseType {
  diffTasks?: TaskDataType[];
}

export interface TaskCountRouteType extends BaseRouteType {
  get: TaskCountGetRequestType;
}

export interface TaskCountGetRequestType extends BaseRequestType {
  username: string;
  category: TaskCategoryType;
}

export interface TaskCountGetResponseType extends BaseResponseType {
  count?: number;
}
