import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectWipById } from "../../redux/features/wip/wipApiSlice";
import { TableRow, TableCell, Button } from "@mui/material";

const Wip = ({ wipId }) => {
  const wip = useSelector((state) => selectWipById(state, wipId));
  console.log(wip);

  const navigate = useNavigate();

  if (wip) {
    const created = new Date(wip.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const updated = new Date(wip.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // const handleEdit = () => navigate(`/dashboard/wips/${wipId}`);

    return (
      <TableRow>
        <TableCell>{`${wip.firstname} ${wip.lastname}`}</TableCell>
        <TableCell>{created}</TableCell>
        <TableCell>{updated}</TableCell>
        <TableCell>{wip.title}</TableCell>
        <TableCell>{wip.text}</TableCell>
        <TableCell>
          {wip.completed ? <span>Completed</span> : <span>WIP</span>}
        </TableCell>
        <TableCell>edit</TableCell>
      </TableRow>
    );
  } else return null;
};

export default Wip;
