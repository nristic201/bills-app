import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { TableHeaderRow } from "../../../../components/TableHeaderRow";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext/Auth.context";
import { TableHead } from "@mui/material";
import { headerCells } from "./FacoriteBillsTable.utils";
import { FavoriteBillsTableRow } from "./FavoriteBillsTableRow/FavoriteBillsTableRow";
import { containerStyles } from "./FacoriteBillsTable.styles";

/**
 * Component displays table with user's favorite bills
 * @returns JSX
 */
export default function FavoriteBillsTable() {
  const {
    user: { favoriteBills },
  } = useContext(AuthContext);

  return (
    <Box sx={containerStyles}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableHeaderRow items={headerCells} />
          </TableHead>
          <TableBody>
            {favoriteBills.map((row) => {
              return (
                <FavoriteBillsTableRow
                  key={`${row.billNo}-${row.uri}`}
                  bill={row}
                />
              );
            })}
            {favoriteBills.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>No favorite bills...</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
