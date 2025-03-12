import { Chip, IconButton, TableCell, TableRow } from "@mui/material";
import React, { useMemo } from "react";
import {
  billStatusStylesMapper,
  BillTypeStylesMapper,
} from "./BillsTableRow.styles";
import {
  Favorite,
  FavoriteBorder,
  FormatListBulleted,
} from "@mui/icons-material";
import { BillSponsorsModal } from "../BillSponsorsModal";
import { IBill } from "../../../../../../types/Bill";
import { useModal } from "../../../../../../hooks";
import { BillInfoModal } from "../../../BillInfoModal";

interface IBillsTableRow extends IBill {
  onClick: (id: string) => void;
  isFavorite?: boolean;
}

export const BillsTableRow: React.FC<IBillsTableRow> = (props) => {
  const {
    onClick,
    billNo,
    status,
    billType,
    isFavorite,
    shortTitleEn,
    shortTitleGa,
    longTitleEn,
    longTitleGa,
  } = props;
  const {
    open: sponsorsModalOpen,
    openModal: openSponsorsModal,
    closeModal: closeSponsorsModal,
  } = useModal();

  const {
    open: billInfoModalOpen,
    openModal: openBillModalInfo,
    closeModal: closeBillModaInfo,
  } = useModal();

  const sponsors = useMemo(() => {
    return props.sponsors.map((s) => s.sponsor);
  }, [props.sponsors]);

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
        <Chip label={status} sx={billStatusStylesMapper[status]} />
      </TableCell>
      <TableCell align="center">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            openSponsorsModal();
          }}
        >
          <FormatListBulleted />
        </IconButton>
        <BillSponsorsModal
          sponsors={sponsors}
          open={sponsorsModalOpen}
          onClose={closeSponsorsModal}
        />
      </TableCell>
      <TableCell align="right">
        <IconButton>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
