import { IconType } from "../constants";

export interface BasicInfo {
  icon: IconType;
  text: string;
}

export interface MetaInfo {
  heading: string;
  infos: string[];
}

export interface Detail {
  heading: string;
  description: string;
  icon: string;
}

export interface Meta {
  title: string;
  value: any;
  display: string;
}

export interface Project {
  name: string;
  metas: Meta[];
}

export interface Datum {
  isReverse: boolean;
  subheading: string;
  time: string;
  projects: Project[];
}

export interface Experience {
  icon: string;
  heading: string;
  data: Datum[];
}

export interface User {
  name: string;
  version: string;
  position: string;
  avt: string;
  basicInfos: BasicInfo[];
  metaInfos: MetaInfo[];
  detail: Detail[];
  experience: Experience;
}
