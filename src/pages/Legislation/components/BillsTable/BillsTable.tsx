import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { billsTableHeadCells } from "./BillsTable.utils";
import { BillsTableRow } from "./BillsTableRow";
import { IBill } from "../../../../models/Bill";

function BillsTableHead() {
  return (
    <TableHead>
      <TableRow>
        {billsTableHeadCells.map((headCell) => (
          <TableCell key={headCell.id} align={headCell.align}>
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

interface IBillsTableProps {
  rows: IBill[];
}
export default function BillsTable(props: IBillsTableProps) {
  const { rows = [] } = props;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <BillsTableHead />
            <TableBody>
              {rows.map((row) => {
                return (
                  <BillsTableRow
                    onClick={function (id: string): void {
                      throw new Error("Function not implemented.");
                    }}
                    key={row.billNo}
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
