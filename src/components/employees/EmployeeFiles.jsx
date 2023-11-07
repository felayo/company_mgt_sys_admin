/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
  Dialog,
  Typography,
} from "@mui/material";
import {
  FlexBetween,
  GlobalButton,
} from "../styledComponents/styledComponents";
import { Download, Edit, Add } from "@mui/icons-material";
import AddFile from './form/adminAddFile';

const EmployeeFiles = ({ data }) => {
  const { user } = data
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Files
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add File
            </GlobalButton>
            <Dialog keepMounted open={open} maxWidth="sm">
              <AddFile setOpen={setOpen} userId={user?._id} />
            </Dialog>
          </Box>
        </FlexBetween>
      </Box>
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
