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
import { Download, Edit, Add } from "@mui/icons-material";

const EducationRecord = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Education Record
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add Education
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
              <TableCell>School</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Degree/Diploma</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Graduation Date</TableCell>
              <TableCell>Certificate</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((school) => (
              <TableRow key={school._id}>
                <TableCell>{school.name}</TableCell>
                <TableCell>{school.course}</TableCell>
                <TableCell>{school.degree}</TableCell>
                <TableCell>{school.grade}</TableCell>
                <TableCell>
                  {new Date(school.graduation_date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Download />
                </TableCell>
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

export default EducationRecord;
