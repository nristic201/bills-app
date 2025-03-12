import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { ISponsor } from "../../../../../../types/Sponsor";
import { Modal } from "../../../../../../components";

interface IBillSponsorsModalProps {
  sponsors: ISponsor[];
  open: boolean;
  onClose: () => void;
}

export const BillSponsorsModal: React.FC<IBillSponsorsModalProps> = (props) => {
  const { sponsors, open, onClose } = props;

  return (
    <Modal
      title="Sponsors"
      content={
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">As</TableCell>
              <TableCell align="left">By</TableCell>
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
    ></Modal>
  );
};
