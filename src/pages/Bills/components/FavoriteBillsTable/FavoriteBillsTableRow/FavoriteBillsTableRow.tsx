import { Chip, IconButton, TableCell, TableRow, Tooltip } from "@mui/material";
import React, { useMemo } from "react";
import { FormatListBulleted } from "@mui/icons-material";
import { useModalState } from "../../../../../hooks";
import { BillSponsorsModal } from "../../BillSponsorsModal";
import { IBill } from "../../../../../types/Bill";
import { billStatusStylesMapper, BillTypeStylesMapper } from "../../../styles";

type IFavoriteBillsTableRow = {
  bill: IBill;
};

export const FavoriteBillsTableRow: React.FC<IFavoriteBillsTableRow> = (
  props
) => {
  const { bill } = props;

  const { billNo, status, billType } = bill;

  const {
    open: sponsorsModalOpen,
    openModal: openSponsorsModal,
    closeModal: closeSponsorsModal,
  } = useModalState();

  const sponsors = useMemo(() => {
    return bill.sponsors.map((s) => s.sponsor);
  }, [bill.sponsors]);

  return (
    <TableRow
      hover
      onClick={(e) => {
        e.stopPropagation();
      }}
      key={billNo}
      sx={{ cursor: "pointer" }}
    >
      <TableCell>{billNo}</TableCell>
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
    </TableRow>
  );
};
