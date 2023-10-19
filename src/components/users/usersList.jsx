import { TableBody, TableRow, TableCell } from "@mui/material";

const usersList = ({ email, username, role, createdAt, _id }) => {
  return (
    <>
      <TableBody>
        <TableRow key={_id}>
          <TableCell>{username}</TableCell>
          <TableCell>{email}</TableCell>
          <TableCell>{role}</TableCell>
          <TableCell>{new Date(createdAt).toLocaleDateString()}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};

export default usersList;
