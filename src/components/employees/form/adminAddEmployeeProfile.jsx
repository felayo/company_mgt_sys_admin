/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField, Grid, Button, DialogContent, Box } from "@mui/material";
import styled from "@emotion/styled";
import { Close, PhotoCamera } from "@mui/icons-material";

const Closebutton = styled(Close)({
  margin: "10px 0 0 10px",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const AddEmployeeProfile = ({ setOpen }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("2000-06-06");
  const [dateJoined, setDateJoined] = useState("2000-06-06");
  const [position, setPosition] = useState("");
  const [rank, setRank] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [localGovt, setLocalGovt] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [permanentAddress, setPermanentAddress] = useState("");

  const [pfa, setPfa] = useState("");
  const [pfaNum, setPfaNum] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [taxId, setTaxId] = useState("");
  const [nhfNumber, setNhfNumber] = useState("");

  const [passportNumber, setPassportNumber] = useState("");
  const [nin, setNin] = useState("");
  const [genotype, setGenotype] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [documents, setDocuments] = useState([]);

  const getIsFormValid = () => {
    return (
      firstName &&
      lastName &&
      maritalStatus &&
      dateJoined &&
      position &&
      phone &&
      birthday &&
      address &&
      city &&
      localGovt &&
      state &&
      country &&
      gender
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setMiddleName("");
    setGender("");
    setPassportNumber("");
    setGenotype("");
    setBloodGroup("");
    setCity("");
    setAccountName("");
    setState("");
    setAddress("");
    setCountry("");
    setMaritalStatus("");
    setEmployeeId("");
    setBirthday("");
    setDateJoined("");
    setPosition("");
    setRank("");
    setLocalGovt("");
    setPermanentAddress("");
    setPfa("");
    setPfaNum("");
    setAccountNumber("");
    setBankName("");
    setTaxId("");
    setDocuments([]);
    setAvatar("");
    setNhfNumber("");
    setNin("");
    setOpen(false);
  };

  const handleAvatarUpload = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, middleName, birthday);
    clearForm();
  };

  return (
    <Box>
      <Closebutton onClick={() => setOpen(false)} />
      <DialogContent>
        <form onSubmit={handleSubmit} encType="multipart/form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                size="small"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                size="small"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Middle Name"
                size="small"
                onChange={(e) => setMiddleName(e.target.value)}
                value={middleName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Employee Id"
                size="small"
                onChange={(e) => setEmployeeId(e.target.value)}
                value={employeeId}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Marital Status"
                size="small"
                onChange={(e) => setMaritalStatus(e.target.value)}
                value={maritalStatus}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Gender"
                size="small"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                size="small"
                label="Date of birth"
                fullWidth
                onChange={(e) => setBirthday(e.target.value)}
                value={birthday}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="date"
                size="small"
                label="Date Joined"
                fullWidth
                onChange={(e) => setDateJoined(e.target.value)}
                value={dateJoined}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Position"
                size="small"
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Rank"
                size="small"
                onChange={(e) => setRank(e.target.value)}
                value={rank}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                size="small"
                fullWidth
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Address"
                size="small"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                size="small"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Local Govt"
                size="small"
                onChange={(e) => setLocalGovt(e.target.value)}
                value={localGovt}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="State"
                size="small"
                onChange={(e) => setState(e.target.value)}
                value={state}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Country"
                size="small"
                onChange={(e) => setCountry(e.target.value)}
                value={country}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Permanent Address"
                size="small"
                onChange={(e) => setPermanentAddress(e.target.value)}
                value={permanentAddress}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="PFA"
                size="small"
                onChange={(e) => setPfa(e.target.value)}
                value={pfa}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="PFA Number"
                size="small"
                onChange={(e) => setPfaNum(e.target.value)}
                value={pfaNum}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Bank Name"
                size="small"
                onChange={(e) => setBankName(e.target.value)}
                value={bankName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Account Number"
                size="small"
                onChange={(e) => setAccountNumber(e.target.value)}
                value={accountNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Account Name"
                size="small"
                onChange={(e) => setAccountName(e.target.value)}
                value={accountName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tax ID"
                size="small"
                onChange={(e) => setTaxId(e.target.value)}
                value={taxId}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Passport Number"
                size="small"
                onChange={(e) => setPassportNumber(e.target.value)}
                value={passportNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="NHF Number"
                size="small"
                onChange={(e) => setNhfNumber(e.target.value)}
                value={nhfNumber}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Genotype"
                size="small"
                onChange={(e) => setGenotype(e.target.value)}
                value={genotype}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="NIN"
                size="small"
                onChange={(e) => setNin(e.target.value)}
                value={nin}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Blood Group"
                size="small"
                onChange={(e) => setBloodGroup(e.target.value)}
                value={bloodGroup}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                component="label"
                sx={{ margin: "0px auto" }}
                endIcon={<PhotoCamera />}>
                Upload Picture
                <input
                  hidden
                  //accept="image/*"
                  name="avatar"
                  multiple
                  type="file"
                  onChange={handleAvatarUpload}
                />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                disabled={!getIsFormValid()}
                type="submit"
                color="success"
                size="medium"
                sx={{ margin: "0px auto" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </DialogContent>
    </Box>
  );
};

export default AddEmployeeProfile;
