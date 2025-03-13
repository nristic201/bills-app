import { IBill } from "./Bill";

export interface IUser {
  firstName: string;
  lastName: string;
  favoriteBills: IBill[];
}
