export interface Primary {
  bg: string;
  bgIcon: string;
  bgWhite: string;
}

export interface Detail {
  bg: string;
}

export interface Icon {
  bg: string;
  color?: string;
  border: string;
}

export interface BasicInfo {
  bg: string;
  icon: Icon;
}

export interface Line {
  bg: string;
}

export interface MetaInfo {
  heading: string;
  line: Line;
}

export interface Summary {
  bg: string;
  textColor?: string;
  basicInfo: BasicInfo;
  MetaInfo: MetaInfo;
}

export interface ThemeType {
  color: string;
  color2: string;
  primary: Primary;
  detail: Detail;
  summary: Summary;
}
