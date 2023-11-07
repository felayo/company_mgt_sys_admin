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
import { Edit, Add } from "@mui/icons-material";

const NextOfKinRecord = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Next of Kin
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add NextOfKin
            </GlobalButton>
            <Dialog keepMounted open={open} maxWidth="md" scroll="paper">
              <Typography>I want to see you open file</Typography>
            </Dialog>
          </Box>
        </FlexBetween>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="educational">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Relationship</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((nextOfKin) => (
              <TableRow key={nextOfKin._id}>
                <TableCell>{nextOfKin.name}</TableCell>
                <TableCell>{nextOfKin.address}</TableCell>
                <TableCell>{nextOfKin.phone}</TableCell>
                <TableCell>{nextOfKin.relationship}</TableCell>
                <TableCell>{nextOfKin.email}</TableCell>
                <TableCell>
                  <Edit />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NextOfKinRecord;
