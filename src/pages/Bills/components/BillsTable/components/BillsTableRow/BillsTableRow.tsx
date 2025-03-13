import { Chip, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import React, { MouseEvent, useCallback, useContext, useMemo } from "react";
import {
  billStatusStylesMapper,
  BillTypeStylesMapper,
} from "./BillsTableRow.styles";
import {
  Favorite,
  FavoriteBorder,
  FormatListBulleted,
} from "@mui/icons-material";
import { IBill } from "../../../../../../types/Bill";
import { useModalState } from "../../../../../../hooks";
import { BillInfoModal } from "../../../BillInfoModal";
import { BillSponsorsModal } from "../../../BillSponsorsModal";
import { AuthContext } from "../../../../../../contexts/AuthContext/Auth.context";

type IBillsTableRow = {
  bill: IBill;
};

export const BillsTableRow: React.FC<IBillsTableRow> = (props) => {
  const { bill } = props;

  const {
    billNo,
    status,
    billType,
    shortTitleEn,
    shortTitleGa,
    longTitleEn,
    longTitleGa,
    uri,
  } = bill;

  const {
    favoriteBill,
    unFavoriteBill,
    user: { favoriteBills },
  } = useContext(AuthContext);

  const {
    open: sponsorsModalOpen,
    openModal: openSponsorsModal,
    closeModal: closeSponsorsModal,
  } = useModalState();

  const {
    open: billInfoModalOpen,
    openModal: openBillModalInfo,
    closeModal: closeBillModaInfo,
  } = useModalState();

  const sponsors = useMemo(() => {
    return bill.sponsors.map((s) => s.sponsor);
  }, [bill.sponsors]);

  /**
   * Checks whether bill already marked as favorite or not
   */
  const isBillFavorite = useMemo(() => {
    return favoriteBills.some((bill) => bill.billNo && bill.uri == uri);
  }, [favoriteBills, uri]);

  const markBill = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      return isBillFavorite ? unFavoriteBill(bill) : favoriteBill(bill);
    },
    [favoriteBill, isBillFavorite, unFavoriteBill, bill]
  );

  return (
    <TableRow
      hover
      onClick={(e) => {
        e.stopPropagation();
        openBillModalInfo();
      }}
      key={billNo}
      sx={{ cursor: "pointer" }}
    >
      <TableCell>
        {billNo}
        <BillInfoModal
          open={billInfoModalOpen}
          onClose={closeBillModaInfo}
          longTitleEn={longTitleEn}
          longTitleGa={longTitleGa}
          shortTitleEn={shortTitleEn}
          shortTitleGa={shortTitleGa}
        />
      </TableCell>
      <TableCell align="center">
        <Chip label={billType} sx={BillTypeStylesMapper[billType]} />
      </TableCell>
      <TableCell align="center">
        <Chip
          label={status}
          sx={(theme) => billStatusStylesMapper(theme)[status]}
        />
      </TableCell>
      <TableCell align="center">
        <Tooltip title="View Sponsors">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              openSponsorsModal();
            }}
          >
            <FormatListBulleted />
          </IconButton>
        </Tooltip>
        <BillSponsorsModal
          sponsors={sponsors}
          open={sponsorsModalOpen}
          onClose={closeSponsorsModal}
        />
      </TableCell>
      <TableCell align="right">
        <Tooltip title={`${isBillFavorite ? "Favorite" : "Unfavorite"}`}>
          <IconButton onClick={markBill}>
            {isBillFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
};
