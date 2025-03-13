import React, { useCallback, useState } from "react";
import { Modal } from "../../../../../../components";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { billStatusOptions } from "../../BillsTable.utils";
import { IBillStatus } from "../../../../../../types/Bill";

type IBillsFilterModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (status: IBillStatus | null) => void;
  status: IBillStatus | null;
};

export const BillsFilterModal: React.FC<IBillsFilterModalProps> = (props) => {
  const { open, onClose, onSubmit, status } = props;

  const [selectedStatus, setSelectedStatus] = useState<IBillStatus | null>(
    status || null
  );

  const handleSubmit = useCallback(() => {
    if (selectedStatus) {
      onSubmit(selectedStatus);
      onClose();
    }
  }, [onClose, onSubmit, selectedStatus]);

  const handleStatusChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log("Alo", event.target.value);
      setSelectedStatus(event.target.value as IBillStatus);
    },
    []
  );

  /**
   * Reset selected filter
   */
  const onReset = useCallback(() => {
    onSubmit(null);
    setSelectedStatus(null);
    onClose();
  }, [onSubmit, onClose]);

  return (
    <Modal
      title="Filters"
      open={open}
      onClose={onClose}
      content={
        <Stack flexDirection={"column"} gap={"32px"} sx={{}}>
          <FormControl component="fieldset">
            <FormGroup>
              <FormLabel sx={{ fontWeight: "bold" }}>Gender</FormLabel>
              <RadioGroup value={selectedStatus} onChange={handleStatusChange}>
                {billStatusOptions.map((opt) => (
                  <FormControlLabel
                    key={opt.name}
                    control={<Radio />}
                    label={opt.label}
                    value={opt.value}
                  />
                ))}
              </RadioGroup>
            </FormGroup>
          </FormControl>
          <Stack flexDirection={"row"} gap={"16px"} justifyContent={"center"}>
            <Button variant="outlined" onClick={onReset}>
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={!selectedStatus}
            >
              Apply
            </Button>
          </Stack>
        </Stack>
      }
    />
  );
};
