export enum ICON_TITLE {
  EDIT_POST = "Edit post",
  ADD_POST = "Add post",
  CHANGE_POST_STATUS = "Change status",
}

export enum BTN_TITLE {
  SAVE = "Save",
  CANCEL = "Cancel",
  CREATE = "Create new",
  EDIT = "Edit",
}

export enum INPUT_LABEL {
  TITLE = "Title",
  STATUS = "Status",
  SHORT_DESCRIPTION = "Short Description",
  TOPIC = "Topic",
  IMAGE = "Image",
  TAGS = "Tags",
  IMAGE_ALT = "Image Alt",
  SEO_TITLE = "Seo Title",
  SEO_DESCRIPTION = "Seo Description",
  URL = "Url",
  ADDTAG = "Add tag",
  SIMILAR_ARTICLES = "Similar Articles",
}

export enum TOPIC_ACTIONS {
  EDIT = "edit topic",
  ADD = "create new topic",
  URL_EDIT = "edit",
  URL_ADD = "add",
  TOPICS = "Topics",
  MEMBERS = "Members",
}
export enum TOPICS_BUTTON {
  MEMBERS = "/members",
}
export enum STATUS_SELECT {
  ALL = "All",
  PUBLISHED = "Published",
  DRAFT = "Draft",
  ARCHIVED = "Archived",
}
export enum STATUS_TYPES_ENUM {
  PUBLISHED = "PUBLISHED",
  DRAFT = "DRAFT",
  ARCHIVED = "ARCHIVED",
}

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://testblog.omisoft.net/"
    : "http://localhost:5050/";

export enum LoadingResultsT {
  IDLE = "idle",
  PENDING = "pending",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export enum Messages {
  errorPassword = "Sorry, failed to change password",
  successPassword = "Password changed successfully",
  errorEditPost = "You cannot change status to Published. Fill please all fields first",
  successEditPost = "Post changed successfully",
  successCreatePost = "Post created successfully",
}

export enum UrlStyles {
  ITEM_HEIGHT = 48,
  ITEM_PADDING_TOP = 8,
}
