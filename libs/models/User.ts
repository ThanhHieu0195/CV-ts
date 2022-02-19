import { IconType } from "../constants";

export interface IUser {
  name: string;
  position: string;
  avt: string;
  basicInfos: IBasicInfo[];
  metaInfos: IMetaInfo[];
  detail: IDetail[];
}

export interface IBasicInfo {
  text: string;
  icon: IconType;
}

export interface IMetaInfo {
  heading: string;
  infos: string[];
}

export interface IDetailItem {
  heading: string;
  data: IDetailSubItem[];
}

export interface IDetailSubItem {
  subheading: string;
  time: string;
  content: string[];
}

export interface IDetail {
  heading: string;
  icon?: IconType;
  description?: string;
  detail?: IDetailItem[];
}
