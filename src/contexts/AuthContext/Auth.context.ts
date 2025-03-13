import { createContext } from "react";
import { IBill } from "../../types/Bill";
import { IUser } from "../../types/User";

interface IAuthContext {
  user: IUser;
  favoriteBill: (bill: IBill) => void;
  unFavoriteBill: (bill: IBill) => void;
}

export const defaultAuthContext: IAuthContext = {
  user: {
    firstName: "Nikola",
    lastName: "Ristic",
    favoriteBills: [],
  },
  favoriteBill: () => {},
  unFavoriteBill: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);
