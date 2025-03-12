import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IBillApiResponse } from "../../../../types/Bill";
import api from "../../../../api";
import { useQuery } from "@tanstack/react-query";
import { BillsTableHead } from "./components/BillTableHead";
import { BillsTableRow } from "./components/BillsTableRow";
import { useCallback } from "react";

export default function BillsTable() {
  // Queries
  const query = useQuery<IBillApiResponse>({
    queryKey: ["todos"],
    queryFn: api.legislations.getLegislations,
  });

  const rows = query?.data?.results?.map(({ bill }) => bill) || [];

  const onRowClick = useCallback((id: string) => {}, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table>
            <BillsTableHead />
            <TableBody>
              {rows.map((row) => {
                return (
                  <BillsTableRow
                    onClick={onRowClick}
                    key={`${row.billNo}-${row.uri}`}
                    {...row}
                  />
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
      </Paper>
    </Box>
  );
}
