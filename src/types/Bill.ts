import { IApiResponse } from "./api";
import { ISponsor } from "./Sponsor";

export interface IBill {
  billType: IBillType;
  billYear: string;
  billNo: string;
  status: IBillStatus;
  shortTitleEn: string;
  shortTitleGa: string;
  longTitleEn: string;
  longTitleGa: string;
  sponsors: { sponsor: ISponsor }[];
  uri: string;
}

export type IBillType = "Public" | "Private" | "Hybrid";
export type IBillStatus =
  | "Defeated"
  | "Enacted"
  | "Lapsed"
  | "Current"
  | "Withdrawn"
  | "Rejected";

interface IBillApiResponseSort {
  actNoSort: null | string;
  actShortTitleEnSort: null | string;
  actShortTitleGaSort: null | string;
  actYearSort: null | number;
  billNoSort: null | number;
  billShortTitleEnSort: null | string;
  billShortTitleGaSort: null | string;
  billYearSort: null | number;
}

interface IBillApiResponseCount {
  billCount: number;
  resultCount: number;
}

interface IBillApiResponseData {
  contextDate: string;
  bill: IBill;
  billSort: IBillApiResponseSort;
}

export type IBillApiResponse = IApiResponse<
  IBillApiResponseCount,
  IBillApiResponseData
>;
