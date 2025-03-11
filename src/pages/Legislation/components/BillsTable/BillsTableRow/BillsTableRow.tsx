import { Chip, IconButton, TableCell, TableRow } from "@mui/material";
import React from "react";
import { IBill } from "../../../../../models/Bill";
import {
  billStatusStylesMapper,
  BillTypeStylesMapper,
} from "./BillsTableRow.styles";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

interface IBillsTableRow extends IBill {
  onClick: (id: string) => void;
  isFavorite?: boolean;
}

export const BillsTableRow: React.FC<IBillsTableRow> = (props) => {
  const { onClick, billNo, status, billType, labelId, isFavorite } = props;

  const handleOnClick = React.useCallback(() => {
    onClick(billNo);
  }, [billNo, onClick]);

  return (
    <TableRow
      hover
      onClick={handleOnClick}
      key={billNo}
      sx={{ cursor: "pointer" }}
    >
      <TableCell id={labelId}>
        {billNo}
        Bill Number
      </TableCell>
      <TableCell align="right">
        <Chip label={billType} sx={BillTypeStylesMapper[billType]} />
      </TableCell>
      <TableCell align="right">
        <Chip label={status} sx={billStatusStylesMapper[status]} />
      </TableCell>
      <TableCell align="right">Sponsor</TableCell>
      <TableCell align="right">
        <IconButton>
          {isFavorite ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
