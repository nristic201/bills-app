import React, { useCallback, useMemo, useState } from "react";
import { AuthContext, defaultAuthContext } from "./Auth.context";
import { IUser } from "../../types/User";
import { IBill } from "../../types/Bill";
import api from "../../api";

export const AuthContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser>(defaultAuthContext.user);

  /**
   * Mark bill as favorite and reflect change in User data
   */
  const favoriteBill = useCallback(async (bill: IBill) => {
    try {
      const response = await api.legislations.favoriteBill(bill);
      setUser((prev) => ({
        ...prev,
        favoriteBills: [...prev.favoriteBills, response],
      }));
    } catch (err) {
      console.error(err);
    }
  }, []);

  /**
   * Unmark bill as favorite and reflect change in User data
   */
  const unFavoriteBill = useCallback(async (bill: IBill) => {
    try {
      const response = await api.legislations.unFavoriteBill(bill);
      setUser((prev) => ({
        ...prev,
        favoriteBills: prev.favoriteBills.filter(
          (item) => item.billNo !== response.billNo
        ),
      }));
    } catch (err) {
      console.error(err);
    }
  }, []);

  const value = useMemo(
    () => ({ user, favoriteBill, unFavoriteBill }),
    [favoriteBill, unFavoriteBill, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
