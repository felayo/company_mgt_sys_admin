/* eslint-disable react/prop-types */
import {
  Box,
  Grid,
  Stack,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { Edit, LinkedIn, Facebook, Twitter } from "@mui/icons-material";
import RecordHeader from "./RecordHeader";
import EducationRecord from "./EducationRecord";
import CertificationRecord from "./ProfQualificationRecord";
import EmploymentRecord from "./EmploymentRecord";
import GuarantorRecord from "./GuarantorRecord";
import NextOfKinRecord from "./NextOfKinRecord";
import EmployeeFiles from "./EmployeeFiles";

const Profile = ({ data }) => {
  const {
    profile,
    schools,
    certifications,
    guarantor,
    nextofKin,
    employment,
  } = data;
  const theme = useTheme();

  const addEducation = () => console.log("clicked education");
  const addProfQualification = () => console.log("clicked qualification");
  const addExperience = () => console.log("clicked employment");
  const addGuarantor = () => console.log("clicked guarantor");
  const addNextOfKin = () => console.log("clicked nextOfkin");
  const addFile = () => console.log("clicked files");

  return (
    <Box m="1.5rem 2.5rem">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Stack spacing={2}>
              <Card>
                <Box display="flex" justifyContent="center" pt={4} pb={2}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={profile?.avatar.file || ""}
                    alt="profile picture"
                    sx={{ width: "35%", borderRadius: "15px" }}
                  />
                </Box>
                <Stack direction="column" alignItems="center" pb={2}>
                  <Typography fontWeight="Bold">{profile?.staffId}</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {profile.firstName} {profile.lastName}
                  </Typography>
                  <Typography>{profile.phone}</Typography>
                  <Typography>{profile.user.email}</Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  ml={8}
                  mr={8}
                  pb={2}>
                  <LinkedIn fontSize="large" color="info" />
                  <Twitter fontSize="large" color="info" />
                  <Facebook fontSize="large" color="info" />
                </Stack>
              </Card>

              <Card>
                <CardHeader
                  title={
                    <Typography fontWeight="bold">REPORTING TO</Typography>
                  }
                />
                <Divider />
                <Stack direction="column" alignItems="center" pb={10}>
                  <Typography fontWeight="Bold"></Typography>
                </Stack>
              </Card>

              <Card>
                <CardHeader
                  title={<Typography fontWeight="bold">SKILL SET</Typography>}
                  action={
                    <IconButton>
                      <Edit />
                    </IconButton>
                  }
                />
                <Divider />
                <Stack direction="column" alignItems="center" pb={10}>
                  <Typography fontWeight="Bold"></Typography>
                </Stack>
              </Card>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8} mb={4}>
            <Card>
              <CardHeader
                title={
                  <Typography fontWeight="bold">BASIC INFORMATION</Typography>
                }
                action={
                  <IconButton>
                    <Edit />
                  </IconButton>
                }
              />
              <Divider />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box p={4}>
                    <Stack spacing={5}>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold">
                          First Name:
                        </Box>{" "}
                        {profile.firstName}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold">
                          Middle Name:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Birthday:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Marital Status:
                        </Box>{" "}
                        Married
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Phone:
                        </Box>{" "}
                        {profile.phone}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Home Address:
                        </Box>{" "}
                        {profile.address}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Country of Origin:
                        </Box>{" "}
                        {profile.country}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Local Govt of Origin:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Position:
                        </Box>{" "}
                        {profile.position}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          PFA:
                        </Box>{" "}
                        {profile.pfa}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Bank Name:
                        </Box>{" "}
                        {profile.bank_name}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Account Name:
                        </Box>{" "}
                        {profile.account_name}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Passport Number:
                        </Box>{" "}
                        {profile.passport}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Genotype:
                        </Box>{" "}
                        {profile.genotype}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Blood Group
                        </Box>{" "}
                        {profile.blood_group}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box p={4}>
                    <Stack spacing={5}>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Last Name:
                        </Box>{" "}
                        {profile.lastName}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          EmployeeID:
                        </Box>{" "}
                        {profile.staffId}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Employee Status:
                        </Box>{" "}
                        {profile.user.active ? "Active" : "Inactive"}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={1}>
                          Date Joined:
                        </Box>{" "}
                        {new Date(profile.hiredDate).toDateString()}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={1}>
                          Email:
                        </Box>{" "}
                        {profile.user.email}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          City:
                        </Box>{" "}
                        {profile.city}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          State of Origin:
                        </Box>{" "}
                        {profile.state}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Permanent Home Address:
                        </Box>{" "}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Rank:
                        </Box>{" "}
                        {profile.rank}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          PEN (PFA) Number:
                        </Box>{" "}
                        {profile.pfa_number}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Bank Number:
                        </Box>{" "}
                        {profile.account_number}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          Tax ID:
                        </Box>{" "}
                        {profile.tax_id}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          NHF Number:
                        </Box>{" "}
                        {profile.nhf}
                      </Typography>
                      <Typography>
                        {" "}
                        <Box component="span" fontWeight="bold" pr={2}>
                          NIN:
                        </Box>{" "}
                        {profile.nin}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Educational Records"
          buttonTitle="Add Education"
          buttonClick={addEducation}
        />
        <EducationRecord data={schools} />
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Professional Qualifications"
          buttonTitle="Add Qualification"
          buttonClick={addProfQualification}
        />
        <CertificationRecord data={certifications} />
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Previous Employments"
          buttonTitle="Add Experience"
          buttonClick={addExperience}
        />
        <EmploymentRecord data={employment} />
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Guarantor"
          buttonTitle="Add Guarantor"
          buttonClick={addGuarantor}
        />
        <GuarantorRecord data={guarantor} />
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Next of Kin"
          buttonTitle="Add Next of Kin"
          buttonClick={addNextOfKin}
        />
        <NextOfKinRecord data={nextofKin} />
      </Box>

      <Box
        mt={5}
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "1.5rem",
        }}>
        <RecordHeader
          title="Files"
          buttonTitle="Add File"
          buttonClick={addFile}
        />
        <EmployeeFiles data={profile} />
      </Box>
    </Box>
  );
};

export default Profile;
