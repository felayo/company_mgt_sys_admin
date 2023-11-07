import {
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Tooltip,
} from "@mui/material";
import { PermIdentity } from "@mui/icons-material";
import { Link } from "react-router-dom";

const usersList = ({ email, username, role, createdAt, _id }) => {
  return (
    <>
      <TableBody>
        <TableRow key={_id}>
          <TableCell>{username}</TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{role}</TableCell>
          <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
          <TableCell align="left">
            <Link to={`/dashboard/users/${_id}`}>
              <Tooltip
                title="Add employee Profile"
                placement="top-start">
                <IconButton>
                  <PermIdentity />
                </IconButton>
              </Tooltip>
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default usersList;
