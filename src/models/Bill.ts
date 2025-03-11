import { ISponsor } from "./Sponsor";

export interface IBill {
  billType: IBillType;
  billYear: string;
  billNo: string;
  status: IBillStatus;
  shortTitleEn: string;
  shortTitleGa: string;
  sponsor: ISponsor;
}

export type IBillType = "Public" | "Private" | "Hybrid";
export type IBillStatus =
  | "Defeated"
  | "Enacted"
  | "Lapsed"
  | "Current"
  | "Withdrawn"
  | "Rejected";
