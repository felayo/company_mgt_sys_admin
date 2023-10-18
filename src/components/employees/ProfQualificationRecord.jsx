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

const CertificationRecord = ({ data }) => {
  return (
    <>
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
