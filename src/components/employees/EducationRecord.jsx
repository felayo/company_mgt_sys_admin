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

const EducationRecord = ({ data }) => {
  return (
    <>
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
