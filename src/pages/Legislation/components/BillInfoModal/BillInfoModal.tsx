import React, { useState } from "react";
import { Modal } from "../../../../components";
import { Tab, Tabs } from "@mui/material";
import { IBill } from "../../../../types/Bill";
import { billModalStyles } from "./BillInfoModal.styles";

type IBillSponsorsModalProps = {
  open: boolean;
  onClose: () => void;
} & Pick<
  IBill,
  "longTitleEn" | "longTitleGa" | "shortTitleEn" | "shortTitleGa"
>;

export const BillInfoModal: React.FC<IBillSponsorsModalProps> = (props) => {
  const { open, onClose, shortTitleEn, shortTitleGa } = props;

  const [selectedTab, setSelectedTab] = useState(shortTitleEn);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (
    <Modal
      sx={billModalStyles}
      content={
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <Tab wrapped label={shortTitleEn} value={shortTitleEn} />
          <Tab wrapped label={shortTitleGa} value={shortTitleGa} />
        </Tabs>
      }
      open={open}
      onClose={onClose}
    />
  );
};
