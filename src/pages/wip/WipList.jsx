import React from "react";
import { useGetWipsQuery } from "../../redux/features/wip/wipApiSlice";
import Wip from "../../components/wip/Wip";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Box,
} from "@mui/material";

const WipList = () => {
  const {
    data: wips,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetWipsQuery();

  let content;

  if (isLoading) content = <p>Loading...</p>;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = wips;

    const tableContent = ids?.length
      ? ids.map((wipId) => <Wip key={wipId} wipId={wipId} />)
      : null;
    
    content = (
      <Box m="1.5rem 2.5rem">
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="wip">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Created Date</TableCell>
              <TableCell>Updated Date</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action Taken/ Activities</TableCell>
              <TableCell>Remarks</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableContent}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    );
  }

  return content;
};

export default WipList;
