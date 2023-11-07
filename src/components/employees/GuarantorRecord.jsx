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

const GuarantorRecord = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log(data)
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Guarantor
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add Guarantor
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
              <TableCell>Occupation</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Place of Work</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((guarantor) => (
              <TableRow key={guarantor._id}>
                <TableCell>{guarantor.name}</TableCell>
                <TableCell>{guarantor.occupation}</TableCell>
                <TableCell>{guarantor.job_title}</TableCell>
                <TableCell>{guarantor.place_of_work}</TableCell>
                <TableCell>{guarantor.Address}</TableCell>
                <TableCell>{guarantor.phone}</TableCell>
                <TableCell>{guarantor.email}</TableCell>
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

export default GuarantorRecord;
