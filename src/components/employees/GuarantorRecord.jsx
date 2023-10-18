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
import { Edit } from "@mui/icons-material";

const GuarantorRecord = ({ data }) => {
  return (
    <>
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
