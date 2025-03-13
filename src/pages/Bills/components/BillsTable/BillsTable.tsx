import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { IBillApiResponse } from "../../../../types/Bill";
import api from "../../../../api";
import { useQuery } from "@tanstack/react-query";
import {
  Backdrop,
  CircularProgress,
  Stack,
  TableHead,
  TablePagination,
  Typography,
} from "@mui/material";
import { billsTableHeadCells } from "./BillsTable.utils";
import { usePagination } from "../../../../hooks";
import { BillsTableRow } from "./components/BillsTableRow";
import { containerStyles } from "./BillsTable.styles";
import { TableHeaderRow } from "../../../../components/TableHeaderRow";
import { BillsTableActions } from "./components/BillsTableActions";
import { useBillTableParams } from "./hooks/useBillsTableParams";
import { ROWS_PER_PAGE } from "../../../../configs/Pagination";

export default function BillsTable() {
  const pagination = usePagination();
  const { page, rowsPerPage } = pagination;

  const { updateStatus, params } = useBillTableParams(page, rowsPerPage);

  const { data, isLoading, isFetching } = useQuery<IBillApiResponse>({
    queryKey: ["bills", params],
    queryFn: () => api.legislations.getLegislations(params),
  });

  const { head, results } = data || {};
  const rows = results?.map(({ bill }) => bill) || [];
  const totalCount = head?.counts?.billCount || 0;

  return (
    <Box sx={containerStyles}>
      {/** Render overlay on additional api calls */}
      <Backdrop
        sx={(theme) => ({
          color: "#fff",
          zaIndex: theme.zIndex.drawer + 1,
          position: "absolute",
        })}
        open={isFetching}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/** Render spinner on initial load */}
      {isLoading ? (
        <Stack
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"16px"}
        >
          <CircularProgress />
          <Typography>Loading...</Typography>
        </Stack>
      ) : undefined}
      <BillsTableActions onApply={updateStatus} status={params.bill_status} />
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeaderRow items={billsTableHeadCells} />
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <BillsTableRow key={`${row.billNo}-${row.uri}`} bill={row} />
              );
            })}
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={6}>No Bill Records...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={ROWS_PER_PAGE}
        component="div"
        count={totalCount}
        {...pagination}
      />
    </Box>
  );
}
