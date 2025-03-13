import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ISponsor } from "../../../../types/Sponsor";
import { Modal } from "../../../../components";
import { tableHeadCellStyles } from "./BillSponsorsModal.styles";

interface IBillSponsorsModalProps {
  sponsors: ISponsor[];
  open: boolean;
  onClose: () => void;
}

/**
 * Modal displays table with bill sponsors data
 * @param props
 * @returns
 */
export const BillSponsorsModal: React.FC<IBillSponsorsModalProps> = (props) => {
  const { sponsors, open, onClose } = props;

  return (
    <Modal
      title="Sponsors"
      content={
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeadCellStyles} align="left">
                As
              </TableCell>
              <TableCell sx={tableHeadCellStyles} align="left">
                By
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sponsors.map((s) => (
              <TableRow>
                <TableCell>{s.as.showAs || "N/A"}</TableCell>
                <TableCell>{s.by.showAs || "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
      open={open}
      onClose={onClose}
    />
  );
};
