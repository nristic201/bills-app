import { Tune } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import React from "react";
import { BillsFilterModal } from "../BillsFilterModal";
import { useModalState } from "../../../../../../hooks/useModalState";
import { IBillStatus } from "../../../../../../types/Bill";

interface IBillsTableActions {
  onApply: (statues: IBillStatus | null) => void;
  status: IBillStatus | null;
}
export const BillsTableActions: React.FC<IBillsTableActions> = ({
  onApply,
  status,
}) => {
  const {
    open: filtersOpen,
    openModal: openFilters,
    closeModal: closeFilters,
  } = useModalState();

  return (
    <Stack flexDirection={"row"} justifyContent={"flex-end"} gap={"16px"}>
      <Button variant="outlined" startIcon={<Tune />} onClick={openFilters}>
        Filters
      </Button>
      <BillsFilterModal
        open={filtersOpen}
        onClose={closeFilters}
        onSubmit={onApply}
        status={status}
      />
    </Stack>
  );
};
