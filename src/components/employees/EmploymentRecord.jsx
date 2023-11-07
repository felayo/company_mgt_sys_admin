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
  Typography,
  Dialog
} from "@mui/material";
import {
  FlexBetween,
  GlobalButton,
} from "../styledComponents/styledComponents";
import { Edit, Add } from "@mui/icons-material";

const EmploymentRecord = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Employment History
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add History
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
              <TableCell>Company Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell>Job Description</TableCell>
              <TableCell>Reason for leaving</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((employment) => (
              <TableRow key={employment._id}>
                <TableCell>{employment.company_name}</TableCell>
                <TableCell>{employment.job_title}</TableCell>
                <TableCell>{new Date(employment.from_date).toLocaleDateString()}</TableCell>
                <TableCell>{new Date(employment.to_date).toLocaleDateString()}</TableCell>
                <TableCell>{employment.job_description}</TableCell>
                <TableCell>{employment.reason_for_leaving}</TableCell>
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

export default EmploymentRecord;
