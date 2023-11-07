/* eslint-disable react/prop-types */
import { useState } from "react";
import { Grid, Button, DialogContent, Box, ListItem } from "@mui/material";
import styled from "@emotion/styled";
import { Close, UploadFile } from "@mui/icons-material";
import { useAdminUploadDocumentMutation } from "../../../redux/features/employee/employeeApiSlice";

const Closebutton = styled(Close)({
  margin: "10px 0 0 10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const AddFile = ({ setOpen, userId }) => {
  const [documents, setDocuments] = useState([]);
  const [id, setId] = useState(userId);
  const [errMsg, setErrMsg] = useState("");
  const [adminUploadDocument, { isLoading }] = useAdminUploadDocumentMutation();

  const handleDocumentUpload = (e) => {
    // console.log(e.target.files);
    if (e.target.files) {
      setDocuments([...e.target.files]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    try {
      documents.forEach((document, index) => {
        console.log(document)
        formData.append(`document${index}`, document);
      });
      const data = await adminUploadDocument({
        id,
        formData,
      }).unwrap();
    } catch (err) {
      setErrMsg(err.data?.message);
    }
  };

  return (
    <Box>
      <Closebutton onClick={() => setOpen(false)} />
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <input hidden value={id} onChange={(e) => setId(e.target.value)} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                component="label"
                sx={{ margin: "0px auto" }}
                endIcon={<UploadFile />}>
                Upload Documents
                <input
                  hidden
                  multiple
                  type="file"
                  onChange={handleDocumentUpload}
                />
              </Button>
            </Grid>
            {documents.map((document, i) => (
              <ListItem key={i}>{document?.name}</ListItem>
            ))}
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                color="success"
                size="medium"
                sx={{ margin: "0px auto" }}>
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Box>
  );
};

export default AddFile;
