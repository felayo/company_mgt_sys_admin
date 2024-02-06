/* eslint-disable react/prop-types */
import { useState } from "react";
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
  Link,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  FlexBetween,
  GlobalButton,
} from "../styledComponents/styledComponents";
import { Download, DeleteForever, Add } from "@mui/icons-material";
import AddFile from "./form/adminAddFile";

const EmployeeFiles = ({ data }) => {
  const { user, documents } = data;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box pb={2}>
        <FlexBetween>
          <Typography component="p" variant="h5" fontWeight="bold">
            Files
          </Typography>
          <Box>
            <GlobalButton variant="contained" onClick={() => setOpen(true)}>
              <Add sx={{ mr: "5px" }} />
              Add File
            </GlobalButton>
            <Dialog keepMounted open={open} maxWidth="sm">
              <AddFile setOpen={setOpen} userId={user?._id} />
            </Dialog>
          </Box>
        </FlexBetween>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="educational">
          <TableHead>
            <TableRow>
              <TableCell>Document</TableCell>
              <TableCell>Preview</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc._id}>
                <TableCell>{doc?.name}</TableCell>
                <TableCell>
                  <Tooltip title="click to download" placement="top-start">
                    <Link target="_blank" rel="noreferrer" href={doc?.file}>
                      <Download />
                    </Link>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Tooltip title="delete file" placement="top-start">
                    <IconButton color="error">
                      <DeleteForever sx={{ fontSize: "25px" }} />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeFiles;
