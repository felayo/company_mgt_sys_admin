/* eslint-disable react/prop-types */
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Download, Edit } from "@mui/icons-material";

const EmployeeFiles = ({ data }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="educational">
          <TableHead>
            <TableRow>
              <TableCell>Document Type</TableCell>
              <TableCell>Document</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>Added Time</TableCell>
              <TableCell>Modified By</TableCell>
              <TableCell>Modified Time</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>B.sc</TableCell>
              <TableCell>document</TableCell>
              <TableCell>Ayorinde</TableCell>
              <TableCell>12.00</TableCell>
              <TableCell>Ayorinde</TableCell>
              <TableCell>23.00</TableCell>
              <TableCell>
                <Download />
              </TableCell>
              <TableCell>
                <Edit />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeFiles;
