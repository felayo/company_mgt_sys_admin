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

const NextOfKinRecord = ({ data }) => {
  return (
    <>
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
