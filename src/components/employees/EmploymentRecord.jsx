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

const EmploymentRecord = ({ data }) => {
  return (
    <>
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
