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

const CertificationRecord = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Professional Qualification
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add Qualification
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
              <TableCell>Certification Body</TableCell>
              <TableCell>Name of Certifcation</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date Obtained</TableCell>
              <TableCell>Certificate</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((certification) => (
              <TableRow key={certification._id}>
                <TableCell>{certification.cert_body}</TableCell>
                <TableCell>{certification.cert_name}</TableCell>
                <TableCell>{certification.status}</TableCell>
                <TableCell>{new Date(certification.date_obtained).toLocaleDateString()}</TableCell>
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

export default CertificationRecord;
